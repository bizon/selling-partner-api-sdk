/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import {Credentials} from '@aws-sdk/client-sts'
import {RequireExactlyOne, SetOptional} from 'type-fest'

import pkg from '../package.json'

import {AccessToken, AuthorizationScope} from './access-token'
import {SecurityTokenService} from './security-token-service'
import {SellingPartnerApiAuthError} from './error'

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
}

/**
 * Class for simplify auth with Selling Partner API
 */
export class SellingPartnerApiAuth {
  public readonly accessToken: AccessToken
  public readonly sts?: SecurityTokenService

  private readonly _accessKeyId: string
  private readonly _secretAccessKey: string

  constructor(parameters: RequireExactlyOne<SellingPartnerAuthParameters, 'refreshToken' | 'scopes'>) {
    const clientId = parameters.clientId || process.env.LWA_CLIENT_ID
    const clientSecret = parameters.clientSecret || process.env.LWA_CLIENT_SECRET
    const accessKeyId = parameters.accessKeyId || process.env.AWS_ACCESS_KEY_ID
    const secretAccessKey = parameters.secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY
    const region = parameters.region || process.env.AWS_DEFAULT_REGION
    const arn = parameters.role?.arn || process.env.AWS_ROLE_ARN
    const sessionName = parameters.role?.sessionName || process.env.AWS_ROLE_SESSION_NAME || `${pkg.name}@${pkg.version}`
    let role = null

    if (arn) {
      role = {
        arn,
        sessionName
      }
    }

    if (!clientId) {
      throw new SellingPartnerApiAuthError('clientId is required')
    }

    if (!clientSecret) {
      throw new SellingPartnerApiAuthError('clientSecret is required')
    }

    if (!accessKeyId) {
      throw new SellingPartnerApiAuthError('accessKeyId is required')
    }

    if (!secretAccessKey) {
      throw new SellingPartnerApiAuthError('secretAccessKey is required')
    }

    this._accessKeyId = accessKeyId
    this._secretAccessKey = secretAccessKey

    if (parameters.refreshToken) {
      this.accessToken = new AccessToken({
        clientId,
        clientSecret,
        refreshToken: parameters.refreshToken
      })
    } else if (parameters.scopes) {
      this.accessToken = new AccessToken({
        clientId,
        clientSecret,
        scopes: parameters.scopes
      })
    } else {
      throw new TypeError('Either "refreshToken" or "scopes" must be specified')
    }

    if (role) {
      this.sts = new SecurityTokenService({
        accessKeyId,
        secretAccessKey,
        region,
        role
      })
    }
  }

  /**
	 * Get AWS credentials from STS or user
	 */
  async getCredentials(): Promise<SetOptional<Credentials, 'Expiration' | 'SessionToken'>> {
    if (this.sts) {
      return this.sts.getCredentials()
    }

    return {
      AccessKeyId: this._accessKeyId,
      SecretAccessKey: this._secretAccessKey
    }
  }
}
