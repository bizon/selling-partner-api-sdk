import got from 'got'
import {RequireExactlyOne} from 'type-fest'

import {AccessTokenError} from './error'

export * from './error'

export enum AuthorizationScope {
  NOTIFICATIONS = 'sellingpartnerapi::notifications',
  MIGRATION = 'sellingpartnerapi::migration'
}

export interface AccessTokenParameters {
  refreshToken?: string;
  scopes?: AuthorizationScope[];
  clientId: string;
  clientSecret: string;
}

interface AccessTokenData {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export class AccessToken {
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
      const body: Record<string, string> = {
        client_id: this.clientId,
        client_secret: this.clientSecret
      }

      if (this.refreshToken) {
        body.grant_type = 'refresh_token'
        body.refresh_token = this.refreshToken
      }

      if (this.scopes) {
        body.grant_type = 'client_credentials'
        body.scope = this.scopes.join(' ')
      }

      try {
        this.value = await got.post(
          'https://api.amazon.com/auth/o2/token',
          {
            json: body
          }
        ).json()

        if (!this.value) {
          throw new AccessTokenError('Unknown Error')
        }

        this.expirationDate = new Date()
        this.expirationDate.setSeconds(this.expirationDate.getSeconds() + this.value.expires_in)
      } catch (error) {
        const accessTokenError = error.response ?
          new AccessTokenError(`HTTP Response code ${error.response.statusCode}`, JSON.parse(error.response.body)) :
          new AccessTokenError('Unknown Error')

        throw accessTokenError
      }
    }

    return this.value.access_token
  }
}
