/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import process from 'process'

import type {Credentials} from '@aws-sdk/client-sts'
import {sync as readPackageJson} from 'read-pkg-up'
import type {RequireExactlyOne, SetOptional} from 'type-fest'

import {AccessToken, type AuthorizationScope} from './access-token'
import {SellingPartnerApiAuthError} from './error'
import {SecurityTokenService} from './security-token-service'

const {packageJson} = readPackageJson()!

export interface SellingPartnerAuthParameters {
  clientId?: string
  clientSecret?: string
  refreshToken?: string
  scopes?: AuthorizationScope[]
  accessKeyId?: string
  secretAccessKey?: string
  sessionToken?: string
  region?: string
  role?: {
    arn: string
    sessionName?: string
  }
}

/**
 * Class for simplify auth with Selling Partner API
 */
export class SellingPartnerApiAuth {
  public readonly accessToken: AccessToken

  private readonly _sts?: SecurityTokenService
  private readonly _accessKeyId: string
  private readonly _secretAccessKey: string
  private readonly _sessionToken?: string

  constructor(
    parameters: RequireExactlyOne<SellingPartnerAuthParameters, 'refreshToken' | 'scopes'>,
  ) {
    const clientId = parameters.clientId || process.env.LWA_CLIENT_ID
    const clientSecret = parameters.clientSecret || process.env.LWA_CLIENT_SECRET
    const accessKeyId = parameters.accessKeyId || process.env.AWS_ACCESS_KEY_ID
    const secretAccessKey = parameters.secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY
    const sessionToken = parameters.sessionToken || process.env.AWS_SESSION_TOKEN
    const region = parameters.region || process.env.AWS_DEFAULT_REGION

    const roleArn = parameters.role?.arn || process.env.AWS_ROLE_ARN
    const roleSessionName =
      parameters.role?.sessionName ||
      process.env.AWS_ROLE_SESSION_NAME ||
      `${packageJson.name.replace('/', '-')}@${packageJson.version}`

    let role = null

    if (roleArn) {
      role = {
        arn: roleArn,
        sessionName: roleSessionName,
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
    this._sessionToken = sessionToken

    if (parameters.refreshToken) {
      this.accessToken = new AccessToken({
        clientId,
        clientSecret,
        refreshToken: parameters.refreshToken,
      })
    } else if (parameters.scopes) {
      this.accessToken = new AccessToken({
        clientId,
        clientSecret,
        scopes: parameters.scopes,
      })
    } else {
      throw new TypeError('Either "refreshToken" or "scopes" must be specified')
    }

    if (role) {
      this._sts = new SecurityTokenService({
        accessKeyId,
        secretAccessKey,
        sessionToken,
        region,
        role,
      })
    }
  }

  /**
   * Get AWS credentials from STS or user
   */
  async getCredentials(): Promise<SetOptional<Credentials, 'Expiration' | 'SessionToken'>> {
    if (this._sts) {
      return this._sts.getCredentials()
    }

    return {
      AccessKeyId: this._accessKeyId,
      SecretAccessKey: this._secretAccessKey,
      SessionToken: this._sessionToken,
    }
  }
}
