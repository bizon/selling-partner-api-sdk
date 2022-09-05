import {AxiosError} from 'axios'
import type {RequireExactlyOne} from 'type-fest'

import {SellingPartnerApiAuthError} from './error'
import type {AccessTokenData, AccessTokenQuery} from './types/access-token'
import type {AuthorizationScope} from './types/scope'
import {axios} from './utils/axios'

export interface AccessTokenParameters {
  refreshToken?: string
  scopes?: AuthorizationScope[]
  clientId: string
  clientSecret: string
}

export class AccessTokenFactory {
  public readonly clientId: string
  public readonly clientSecret: string
  public readonly refreshToken?: string
  public readonly scopes?: AuthorizationScope[]

  private value?: AccessTokenData
  private expirationDate?: Date

  constructor(parameters: RequireExactlyOne<AccessTokenParameters, 'refreshToken' | 'scopes'>) {
    this.clientId = parameters.clientId
    this.clientSecret = parameters.clientSecret
    this.refreshToken = parameters.refreshToken
    this.scopes = parameters.scopes
  }

  async get() {
    if (!this.value || (this.expirationDate && Date.now() >= this.expirationDate.getTime())) {
      const body: AccessTokenQuery = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        ...(this.refreshToken
          ? {
              grant_type: 'refresh_token',
              refresh_token: this.refreshToken,
            }
          : {
              grant_type: 'client_credentials',
              scope: this.scopes!.join(' '),
            }),
      }

      try {
        const {data} = await axios.post<AccessTokenData>(
          'https://api.amazon.com/auth/o2/token',
          body,
        )

        const expiration = new Date()
        expiration.setSeconds(expiration.getSeconds() + data.expires_in)

        this.value = data
        this.expirationDate = expiration
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new SellingPartnerApiAuthError(error)
        }

        throw error
      }
    }

    return this.value.access_token
  }
}
