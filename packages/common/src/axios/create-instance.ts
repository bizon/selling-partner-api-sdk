import axios, {Method} from 'axios'
import {aws4Interceptor} from 'aws4-axios'
import axiosRetry from 'axios-retry'

import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import pkg from '../../package.json'

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

export type onRetry = (retryInfo: OnRetryParameters) => void

export interface ClientConfiguration {
  auth: SellingPartnerApiAuth;
  region: string;
  userAgent?: string;
  sandbox?: boolean;
  rateLimits?: RateLimit[];
  onRetry?: onRetry;
}

export function createAxiosInstance({
  auth,
  userAgent = `${pkg.name}/${pkg.version}`,
  region,
  rateLimits,
  onRetry
}: ClientConfiguration) {
  const instance = axios.create({
    headers: {
      'user-agent': userAgent
    }
  })

  if (rateLimits) {
    axiosRetry(instance, {
      retryCondition: error => error.response ? error.response.status === 429 : false,
      retryDelay: (retryCount, error) => {
        const amznRateLimit: string = error.response?.headers['x-amzn-ratelimit-limit']
        const url = new URL(error.config.url!)
        const rateLimit = amznRateLimit ? Number.parseFloat(amznRateLimit) : rateLimits.find(rateLimit => rateLimit.method.toLowerCase() === error.config.method?.toLowerCase() && rateLimit.urlRegex.exec(url.pathname))?.rate
        const delay = rateLimit && !Number.isNaN(rateLimit) ? (1 / rateLimit * 1000) + 1500 : (60 * 1000)

        if (onRetry) {
          onRetry({delay, rateLimit})
        }

        return delay
      }
    })
  }

  instance.interceptors.request.use(
    async config => {
      config.headers['x-amz-access-token'] = await auth.accessToken.get()

      return config
    }
  )

  instance.interceptors.request.use(async config => {
    const credentials = await auth.getCredentials()

    if (!credentials) {
      return config
    }

    return aws4Interceptor(
      {
        region,
        service: 'execute-api'
      },
      {
        accessKeyId: credentials.AccessKeyId ?? '',
        secretAccessKey: credentials.SecretAccessKey ?? '',
        sessionToken: credentials.SessionToken
      }
    )(config)
  })

  return instance
}
