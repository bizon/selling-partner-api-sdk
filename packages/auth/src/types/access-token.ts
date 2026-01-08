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

export type AccessTokenQuery = RefreshTokenAccessTokenQuery | ClientCredentialsAccessTokenQuery

export interface AccessTokenData {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
}
