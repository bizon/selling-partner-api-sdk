import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import {URL} from 'url'

export class SellingPartnerApiError<T = any> extends Error implements AxiosError {
  public config: AxiosRequestConfig
  public code?: string
  public request?: any
  public response?: AxiosResponse<T>
  public isAxiosError: boolean

  public apiName?: string
  public apiVersion?: string

  private readonly axiosError: AxiosError

  constructor(error: AxiosError) {
    super()

    this.axiosError = error

    this.config = error.config
    this.code = error.code
    this.request = error.request
    this.response = error.response
    this.isAxiosError = error.isAxiosError

    const url = error.config.url ? new URL(error.config.url) : null

    if (url) {
      const [apiName, apiVersion] = url.pathname.split('/').slice(1)
      this.apiName = apiName
      this.apiVersion = apiVersion
    }
  }

  get name() {
    return this.constructor.name
  }

  get message() {
    if (this.apiName && this.apiVersion) {
      const apiPrefix = `${this.apiName} (${this.apiVersion})`

      if (!this.response) {
        return `${apiPrefix} error: No response`
      }

      return `${apiPrefix} error: Response code ${this.response.status}`
    }

    return 'Unknown error'
  }

  toJSON() {
    return this.axiosError.toJSON()
  }
}
