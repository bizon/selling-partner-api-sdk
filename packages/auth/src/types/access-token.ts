interface BaseAccessTokenQuery {
  client_id: string
  client_secret: string
}

type RefreshTokenAccessTokenQuery = {
  grant_type: 'refresh_token'
  refresh_token: string
} & BaseAccessTokenQuery

type ClientCredentialsAccessTokenQuery = {
  grant_type: 'client_credentials'
  scope: string
} & BaseAccessTokenQuery

/** Request body for the LWA token endpoint. */
export type AccessTokenQuery = RefreshTokenAccessTokenQuery | ClientCredentialsAccessTokenQuery

/** Response body from the LWA token endpoint. */
export interface AccessTokenData {
  access_token: string
  refresh_token?: string
  token_type: string
  expires_in: number
}
