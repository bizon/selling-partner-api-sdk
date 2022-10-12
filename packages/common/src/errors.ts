import {URL} from 'url'

import {AxiosError} from 'axios'

export class SellingPartnerApiError<T = unknown, D = any> extends AxiosError<T, D> {
  public readonly innerMessage: string
  public readonly apiName?: string
  public readonly apiVersion?: string

  constructor(error: AxiosError<T, D>) {
    super('Unknown error', error.code, error.config, error.request, error.response)

    this.innerMessage = error.message

    if (error.config?.url) {
      const [apiName, apiVersion] = new URL(error.config.url).pathname.split('/').slice(1)
      const apiPrefix = `${apiName} (${apiVersion})`

      this.apiName = apiName
      this.apiVersion = apiVersion
      this.message = error.response
        ? `${apiPrefix} error: Response code ${error.response.status}`
        : `${apiPrefix} error: No response`
    }

    this.name = this.constructor.name
  }
}
