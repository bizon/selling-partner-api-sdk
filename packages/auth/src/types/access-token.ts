interface BaseAccessTokenQuery {
  client_id: string
  client_secret: string
}

interface RefreshTokenAccessTokenQuery extends BaseAccessTokenQuery {
  grant_type: 'refresh_token'
  refresh_token: string
}

interface ClientCredentialsAccessTokenQuery extends BaseAccessTokenQuery {
  grant_type: 'client_credentials'
  scope: string
}

export type AccessTokenQuery = RefreshTokenAccessTokenQuery | ClientCredentialsAccessTokenQuery

export interface AccessTokenData {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: number
}
