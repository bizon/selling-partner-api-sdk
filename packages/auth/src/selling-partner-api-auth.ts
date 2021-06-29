import {AccessToken, AuthorizationScope} from './access-token'
import {SecurityTokenService} from './security-token-service'
import {RequireExactlyOne} from 'type-fest'

interface User {
  AccessKeyId: string;
  SecretAccessKey: string;
}
export interface SellingPartnerAuthParameters {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  scopes?: AuthorizationScope[];
  accessKeyId?: string;
  secretAccessKey?: string;
  region?: string;
  role?: {
    arn: string;
    sessionName?: string;
  };
  user?: User;
}

/**
 * Class for simplify auth with Selling Partner API
 */
export class SellingPartnerApiAuth {
  public readonly accessToken: AccessToken
  public readonly sts?: SecurityTokenService
  public readonly user?: User

  constructor(parameters: RequireExactlyOne<SellingPartnerAuthParameters, 'refreshToken' | 'scopes'>) {
    if (parameters.refreshToken) {
      this.accessToken = new AccessToken({
        clientId: parameters.clientId,
        clientSecret: parameters.clientSecret,
        refreshToken: parameters.refreshToken
      })
    } else if (parameters.scopes) {
      this.accessToken = new AccessToken({
        clientId: parameters.clientId,
        clientSecret: parameters.clientSecret,
        scopes: parameters.scopes
      })
    } else {
      throw new TypeError('Either "refreshToken" or "scopes" must be specified')
    }

    if (parameters.role) {
      this.sts = new SecurityTokenService({
        accessKeyId: parameters.accessKeyId,
        region: parameters.region,
        role: parameters.role,
        secretAccessKey: parameters.secretAccessKey
      })
    }

    if (parameters.user) {
      this.user = parameters.user
    }
  }

  /**
	 * Get AWS credentials from STS or user
	 */
  async getCredentials(): Promise<{
    AccessKeyId?: string;
    SecretAccessKey?: string;
    SessionToken?: string;
  } | undefined> {
    if (this.sts) {
      return this.sts?.getCredentials()
    }

    return this.user
  }
}
