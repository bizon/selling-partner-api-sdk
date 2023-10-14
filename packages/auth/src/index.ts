import process from 'node:process'

import {AxiosError} from 'axios'
import {type RequireExactlyOne} from 'type-fest'

import {SellingPartnerApiAuthError} from './error'
import {type AccessTokenData, type AccessTokenQuery} from './types/access-token'
import {type AuthorizationScope} from './types/scope'
import {axios} from './utils/axios'

export interface SellingPartnerAuthParameters {
  clientId?: string
  clientSecret?: string
  refreshToken?: string
  scopes?: AuthorizationScope[]
}

/**
 * Class for simplify auth with Selling Partner API
 */
export class SellingPartnerApiAuth {
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly refreshToken?: string
  private readonly scopes?: AuthorizationScope[]

  private accessToken?: string
  private accessTokenExpiration?: Date

  constructor(
    parameters: RequireExactlyOne<SellingPartnerAuthParameters, 'refreshToken' | 'scopes'>,
  ) {
    const clientId = parameters.clientId ?? process.env.LWA_CLIENT_ID
    const clientSecret = parameters.clientSecret ?? process.env.LWA_CLIENT_SECRET
    const refreshToken = parameters.refreshToken ?? process.env.LWA_REFRESH_TOKEN

    if (!clientId) {
      throw new Error('Missing required `clientId` configuration value')
    }

    if (!clientSecret) {
      throw new Error('Missing required `clientSecret` configuration value')
    }

    if (!refreshToken && !parameters.scopes) {
      throw new TypeError('Either `refreshToken` or `scopes` must be specified')
    }

    this.clientId = clientId
    this.clientSecret = clientSecret

    this.refreshToken = refreshToken
    this.scopes = parameters.scopes
  }

  /**
   * Get access token
   */
  async getAccessToken() {
    if (
      !this.accessToken ||
      (this.accessTokenExpiration && Date.now() >= this.accessTokenExpiration.getTime())
    ) {
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
        const expiration = new Date()

        const {data} = await axios.post<AccessTokenData>('/o2/token', body)

        expiration.setSeconds(expiration.getSeconds() + data.expires_in)

        this.accessToken = data.access_token
        this.accessTokenExpiration = expiration
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new SellingPartnerApiAuthError(error)
        }

        throw error
      }
    }

    return this.accessToken
  }
}

export {SellingPartnerApiAuthError} from './error'
export {AuthorizationScope} from './types/scope'
