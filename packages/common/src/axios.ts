import axios, {type Method} from 'axios'
import {aws4Interceptor} from 'aws4-axios'
import axiosRetry from 'axios-retry'
import {requestLogger, responseLogger} from 'axios-logger'
import {sync as readPackageJson} from 'read-pkg-up'

import type {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import {SellingPartnerApiError} from './errors'
import {sellingPartnerRegions, type SellingPartnerRegion} from './regions'

const {packageJson} = readPackageJson()!

type RequestLogConfig = Exclude<Parameters<typeof requestLogger>[1], undefined>
type ResponseLogConfig = Exclude<Parameters<typeof responseLogger>[1], undefined>

export interface RateLimit {
  urlRegex: RegExp
  rate: number
  burst: number
  method: Method
}

export interface OnRetryParameters {
  delay: number
  rateLimit?: number
}

export interface ClientConfiguration {
  auth: SellingPartnerApiAuth
  region: SellingPartnerRegion
  userAgent?: string
  sandbox?: boolean
  rateLimiting?: {
    retry: boolean
    onRetry?: (retryInfo: OnRetryParameters) => void
  }
  logging?: {
    request?: RequestLogConfig | true
    response?: ResponseLogConfig | true
  }
}

export function createAxiosInstance(
  {
    auth,
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
      retryCondition: (error) => (error.response ? error.response.status === 429 : false),
      retryDelay(retryCount, error) {
        const amznRateLimit = error.response?.headers['x-amzn-ratelimit-limit']
        const url = new URL(error.config.url!)
        const rateLimit = amznRateLimit
          ? Number.parseFloat(amznRateLimit)
          : rateLimits.find(
              (rateLimit) =>
                rateLimit.method.toLowerCase() === error.config.method?.toLowerCase() &&
                rateLimit.urlRegex.exec(url.pathname),
            )?.rate
        const delay =
          rateLimit && !Number.isNaN(rateLimit) ? (1 / rateLimit) * 1000 + 1500 : 60 * 1000

        if (rateLimiting?.onRetry) {
          rateLimiting.onRetry({delay, rateLimit})
        }

        return delay
      },
    })
  }

  instance.interceptors.request.use(async (config) => {
    if (!config.headers) {
      config.headers = {}
    }

    config.headers['x-amz-access-token'] = await auth.accessToken.get()

    return config
  })

  instance.interceptors.request.use(async (config) => {
    const credentials = await auth.getCredentials()

    if (!credentials) {
      return config
    }

    return aws4Interceptor(
      {
        region: regionConfiguration.awsRegion,
        service: 'execute-api',
      },
      {
        accessKeyId: credentials.AccessKeyId ?? '',
        secretAccessKey: credentials.SecretAccessKey ?? '',
        sessionToken: credentials.SessionToken,
      },
    )(config)
  })

  instance.interceptors.response.use(
    async (response) => response,
    async (error: unknown) => {
      throw axios.isAxiosError(error) ? new SellingPartnerApiError(error) : error
    },
  )

  if (logging?.request) {
    const requestLoggerOptions = logging.request === true ? undefined : logging.request

    if (requestLoggerOptions?.headers) {
      console.warn(
        'WARNING: You have enabled logging of request headers, this can leak authentication information, you should disable in production.',
      )
    }

    instance.interceptors.request.use((config) =>
      requestLogger(config, {
        prefixText: `sp-api-sdk/${region}`,
        dateFormat: 'isoDateTime',
        method: true,
        url: true,
        params: false,
        data: true,
        headers: false,
        ...requestLoggerOptions,
      }),
    )
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
        ...responseLoggerOptions,
      }),
    )
  }

  return {axios: instance, endpoint}
}
