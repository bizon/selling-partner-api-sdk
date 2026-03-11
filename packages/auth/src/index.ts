import process from 'node:process'

import {AxiosError} from 'axios'
import {type RequireExactlyOne} from 'type-fest'

import {SellingPartnerApiAuthError} from './error'
import {type AccessTokenData, type AccessTokenQuery} from './types/access-token'
import {type AuthorizationScope} from './types/scope'
import {axios} from './utils/axios'

/**
 * Configuration parameters for Selling Partner API authentication.
 *
 * Both `clientId` and `clientSecret` fall back to the `LWA_CLIENT_ID` and
 * `LWA_CLIENT_SECRET` environment variables when omitted.
 * `refreshToken` falls back to `LWA_REFRESH_TOKEN`.
 */
export interface SellingPartnerAuthParameters {
  /** LWA client identifier. Defaults to the `LWA_CLIENT_ID` environment variable. */
  clientId?: string
  /** LWA client secret. Defaults to the `LWA_CLIENT_SECRET` environment variable. */
  clientSecret?: string
  /** LWA refresh token. Defaults to the `LWA_REFRESH_TOKEN` environment variable. Mutually exclusive with `scopes`. */
  refreshToken?: string
  /** Authorization scopes for grantless operations. Mutually exclusive with `refreshToken`. */
  scopes?: AuthorizationScope[]
}

/**
 * Handles Login with Amazon (LWA) OAuth token management for the Selling Partner API.
 *
 * Supports both refresh-token and grantless (scope-based) authentication flows.
 * Tokens are cached and automatically refreshed when expired. Concurrent calls
 * to {@link getAccessToken} are deduplicated into a single request.
 */
export class SellingPartnerApiAuth {
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly refreshToken?: string
  private readonly scopes?: AuthorizationScope[]

  #accessToken?: string
  #accessTokenExpiration?: Date
  #pendingTokenRequest?: Promise<string>

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
   * Returns a valid LWA access token, refreshing it if expired.
   *
   * Concurrent calls while a refresh is in progress share the same request.
   *
   * @returns The access token string.
   */
  async getAccessToken() {
    if (
      this.#accessToken &&
      (!this.#accessTokenExpiration || Date.now() < this.#accessTokenExpiration.getTime())
    ) {
      return this.#accessToken
    }

    // Deduplicate concurrent calls: share the same in-flight request
    if (this.#pendingTokenRequest) {
      return this.#pendingTokenRequest
    }

    this.#pendingTokenRequest = this.#refreshAccessToken()

    try {
      return await this.#pendingTokenRequest
    } finally {
      this.#pendingTokenRequest = undefined
    }
  }

  async #refreshAccessToken() {
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

      this.#accessToken = data.access_token
      this.#accessTokenExpiration = expiration

      return data.access_token
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new SellingPartnerApiAuthError(error)
      }

      throw error
    }
  }

  /**
   * Expiration date of the currently cached access token, or `undefined` if no token has been fetched yet.
   */
  protected get accessTokenExpiration() {
    return this.#accessTokenExpiration
  }
}

export {SellingPartnerApiAuthError} from './error'
export {AuthorizationScope} from './types/scope'
