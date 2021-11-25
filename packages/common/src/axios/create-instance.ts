import axios from 'axios'
import {aws4Interceptor} from 'aws4-axios'
import axiosRetry from 'axios-retry'
import {sync as readPackageJson} from 'read-pkg-up'
import type {Method} from 'axios'

import type {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import {SellingPartnerApiError} from '../selling-partner-api-error'

const {packageJson} = readPackageJson()!

export interface RateLimit {
  urlRegex: RegExp;
  rate: number;
  burst: number;
  method: Method;
}

export interface OnRetryParameters {
  delay: number;
  rateLimit?: number;
}

export type OnRetryHandler = (retryInfo: OnRetryParameters) => void

export interface ClientConfiguration {
  auth: SellingPartnerApiAuth;
  region: string;
  userAgent?: string;
  sandbox?: boolean;
  rateLimits?: RateLimit[];
  onRetry?: OnRetryHandler;
}

type AxiosHeaders = Record<string, string | undefined>

export function createAxiosInstance({
  auth,
  userAgent = `${packageJson.name}/${packageJson.version}`,
  region,
  rateLimits,
  onRetry,
}: ClientConfiguration) {
  const instance = axios.create({
    headers: {
      'user-agent': userAgent,
    },
  })

  if (rateLimits) {
    axiosRetry(instance, {
      retryCondition: error => error.response ? error.response.status === 429 : false,
      retryDelay: (retryCount, error) => {
        const amznRateLimit = (error.response?.headers as AxiosHeaders)['x-amzn-ratelimit-limit']
        const url = new URL(error.config.url!)
        const rateLimit = amznRateLimit ? Number.parseFloat(amznRateLimit) : rateLimits.find(rateLimit => rateLimit.method.toLowerCase() === error.config.method?.toLowerCase() && rateLimit.urlRegex.exec(url.pathname))?.rate
        const delay = rateLimit && !Number.isNaN(rateLimit) ? (1 / rateLimit * 1000) + 1500 : (60 * 1000)

        if (onRetry) {
          onRetry({delay, rateLimit})
        }

        return delay
      },
    })
  }

  instance.interceptors.request.use(
    async config => {
      (config.headers as AxiosHeaders)['x-amz-access-token'] = await auth.accessToken.get()

      return config
    },
  )

  instance.interceptors.request.use(async config => {
    const credentials = await auth.getCredentials()

    if (!credentials) {
      return config
    }

    return aws4Interceptor(
      {
        region,
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
    async response => response,
    async error => {
      throw axios.isAxiosError(error) ? new SellingPartnerApiError(error) : error
    },
  )

  return instance
}
