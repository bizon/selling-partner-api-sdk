import axios, {type AxiosError, isAxiosError, type Method} from 'axios'
import {errorLogger, requestLogger, responseLogger} from 'axios-logger'
import axiosRetry from 'axios-retry'

import {type SellingPartnerApiAuth, SellingPartnerApiAuthError} from '@sp-api-sdk/auth'

import {SellingPartnerApiError} from './errors'
import {type SellingPartnerRegion, sellingPartnerRegions} from './regions'
import {packageJson} from './utils/package'

type RequestLogConfig = Exclude<Parameters<typeof requestLogger>[1], undefined>
type ResponseLogConfig = Exclude<Parameters<typeof responseLogger>[1], undefined>
type ErrorLogConfig = Exclude<Parameters<typeof errorLogger>[1], undefined>

/** Per-endpoint rate limit definition used for retry delay calculation. */
export interface RateLimit {
  /** Regular expression matched against the request URL pathname. */
  urlRegex: RegExp
  /** Sustained request rate in requests per second. */
  rate: number
  /** Maximum burst size (number of requests allowed before throttling). */
  burst: number
  /** HTTP method this rate limit applies to. */
  method: Method
}

/** Parameters passed to the {@link ClientConfiguration.rateLimiting} `onRetry` callback. */
export interface OnRetryParameters {
  /** Delay in milliseconds before the next retry attempt. */
  delay: number
  /** Rate limit (requests per second) used to calculate the delay, if available. */
  rateLimit?: number
  /** Number of retry attempts so far. */
  retryCount: number
  /** The Axios error that triggered the retry. */
  error: AxiosError
}

/** Configuration options for creating a Selling Partner API Axios instance. */
export interface ClientConfiguration {
  /** Authentication handler that provides LWA access tokens. */
  auth: SellingPartnerApiAuth
  /** Restricted Data Token to use instead of the standard access token. */
  restrictedDataToken?: string
  /** Selling Partner API region to send requests to. */
  region: SellingPartnerRegion
  /** Custom `User-Agent` header value. */
  userAgent?: string
  /** When `true`, requests are sent to the sandbox endpoint. Defaults to `false`. */
  sandbox?: boolean
  /** Rate-limiting and retry configuration for 429 responses. */
  rateLimiting?: {
    /** When `true`, automatically retries throttled (HTTP 429) requests. */
    retry: boolean
    /** Optional callback invoked before each retry attempt. */
    onRetry?: (retryInfo: OnRetryParameters) => void
  }
  /** Axios request/response/error logging configuration. Pass `true` to use defaults. */
  logging?: {
    /** Log outgoing requests. */
    request?: RequestLogConfig | true
    /** Log incoming responses. */
    response?: ResponseLogConfig | true
    /** Log request errors. */
    error?: ErrorLogConfig | true
  }
}

/**
 * Creates a pre-configured Axios instance for a Selling Partner API client.
 *
 * The instance handles authentication, rate-limit retries, error wrapping,
 * and optional request/response logging.
 *
 * @param configuration - Client configuration options.
 * @param rateLimits - Per-endpoint rate limits used for retry delay calculation.
 * @returns An object containing the configured Axios instance and the resolved API endpoint.
 */
export function createAxiosInstance(
  {
    auth,
    restrictedDataToken,
    region,
    userAgent = `${packageJson.name}/${packageJson.version}`,
    sandbox = false,
    rateLimiting,
    logging,
  }: ClientConfiguration,
  rateLimits: RateLimit[],
) {
  const regionConfiguration = sellingPartnerRegions[region]
  if (!regionConfiguration) {
    throw new TypeError(`Unknown or unsupported region: ${region}`)
  }

  const instance = axios.create({
    headers: {
      'user-agent': userAgent,
    },
  })

  const endpoint = regionConfiguration.endpoints[sandbox ? 'sandbox' : 'production']

  if (rateLimiting?.retry) {
    axiosRetry(instance, {
      retryCondition: (error) => error.response?.status === 429,
      retryDelay(retryCount, error) {
        const url = new URL(error.config!.url!)
        const method = error.config!.method?.toLowerCase()
        const amznRateLimit = Number.parseFloat(
          error.response?.headers['x-amzn-ratelimit-limit'] ?? '',
        )

        const rateLimit = Number.isNaN(amznRateLimit)
          ? rateLimits.find(
              (rateLimit) =>
                rateLimit.method.toLowerCase() === method && rateLimit.urlRegex.exec(url.pathname),
            )?.rate
          : amznRateLimit

        const delay = rateLimit ? (1 / rateLimit) * 1000 + 1500 : 60 * 1000

        if (rateLimiting.onRetry) {
          rateLimiting.onRetry({delay, rateLimit, retryCount, error})
        }

        return delay
      },
    })
  }

  // Set x-amz-access-token to each request
  instance.interceptors.request.use(async (config) => {
    config.headers['x-amz-access-token'] = restrictedDataToken ?? (await auth.getAccessToken())

    return config
  })

  instance.interceptors.response.use(
    async (response) => response,
    async (error: unknown) => {
      if (isAxiosError(error) && !(error instanceof SellingPartnerApiAuthError)) {
        throw new SellingPartnerApiError(error)
      }

      throw error
    },
  )

  if (logging?.request) {
    const requestLoggerOptions = logging.request === true ? undefined : logging.request

    if (requestLoggerOptions?.headers) {
      console.warn(
        'WARNING: You have enabled logging of request headers, this can leak authentication information, you should disable in production.',
      )
    }

    instance.interceptors.request.use((config) => {
      const logger = requestLogger(config, {
        prefixText: `sp-api-sdk/${region}`,
        dateFormat: 'isoDateTime',
        method: true,
        url: true,
        params: false,
        data: true,
        headers: false,
        logger: console.info,
        ...requestLoggerOptions,
      })

      return {
        ...logger,
        headers: config.headers,
      }
    })
  }

  if (logging?.response) {
    const responseLoggerOptions = logging.response === true ? undefined : logging.response

    instance.interceptors.response.use((response) =>
      responseLogger(response, {
        prefixText: `sp-api-sdk/${region}`,
        dateFormat: 'isoDateTime',
        status: true,
        statusText: false,
        params: false,
        data: false,
        headers: true,
        logger: console.info,
        ...responseLoggerOptions,
      }),
    )
  }

  if (logging?.error) {
    const errorLoggerOptions = logging.error === true ? undefined : logging.error

    instance.interceptors.response.use(
      (response) => response,
      async (error) =>
        errorLogger(error, {
          prefixText: `sp-api-sdk/${region}`,
          dateFormat: 'isoDateTime',
          status: true,
          statusText: false,
          params: false,
          data: false,
          headers: true,
          logger: console.error,
          ...errorLoggerOptions,
        }),
    )
  }

  return {axios: instance, endpoint}
}
