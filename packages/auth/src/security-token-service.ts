import {STSClient, AssumeRoleCommand, Credentials} from '@aws-sdk/client-sts'

interface Role {
	arn: string;
	sessionName?: string;
}

export interface SecurityTokenServiceParameters {
	accessKeyId?: string;
	secretAccessKey?: string;
	role: Role;
	region?: string;
}

export class SecurityTokenService {
	public readonly accessKeyId: string
	public readonly secretAccessKey: string
	public readonly role: Role
	public readonly region?: string

	private _credentials?: Credentials

	constructor(parameters: SecurityTokenServiceParameters) {
		const accessKeyId = parameters.accessKeyId ?? process.env.AWS_ACCESS_KEY
		const secretAccessKey = parameters.secretAccessKey ?? process.env.AWS_SECRET_ACCESS_KEY

		if (!accessKeyId) {
			throw new TypeError('accessKeyId is required')
		}

		if (!secretAccessKey) {
			throw new TypeError('secretAccessKey is required')
		}

		this.accessKeyId = accessKeyId
		this.secretAccessKey = secretAccessKey
		this.role = parameters.role
		this.region = parameters.region
	}

	/**
   * Get the STS credentials
   */
	async getCredentials() {
		if (
			!this._credentials ||
      (this._credentials?.Expiration && Date.now() >= this._credentials.Expiration.getTime())
		) {
			this._credentials = await this.fetchCredentials()
		}

		return this._credentials
	}

	/**
   * Fetch new STS credentials
   */
	protected async fetchCredentials() {
		const sts = new STSClient({
			region: this.region,
			credentials: {
				accessKeyId: this.accessKeyId,
				secretAccessKey: this.secretAccessKey
			}
		})

		const {Credentials: credentials} = await sts.send(
			new AssumeRoleCommand({
				RoleArn: this.role.arn,
				RoleSessionName: this.role.sessionName
			})
		)

		if (!credentials) {
			throw new Error('AWS credentials are invalid') // TODO: make customized Error class
		}

		return credentials
	}
}
