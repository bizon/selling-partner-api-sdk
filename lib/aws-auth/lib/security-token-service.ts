import {STSClient, AssumeRoleCommand, Credentials} from '@aws-sdk/client-sts'

export interface AwsAuthParameters {
	accessKeyId: string;
	secretAccessKey: string;
	role: {
		arn: string;
		sessionName: string;
	};
	region: string;
}

export class SecurityTokenService {
	public readonly parameters: AwsAuthParameters
	private _credentials?: Credentials

	constructor(parameters: AwsAuthParameters) {
		this.parameters = parameters
	}

	/**
   * Get the STS credentials
   *
   * @param lazy If lazy is `true`, when the credentials are expired, fetch another ones
   */
	async getCredentials(lazy = true) {
		if (
			!this._credentials ||
      (lazy && this._credentials && this._credentials.Expiration && Date.now() >= this._credentials.Expiration.getTime())
		) {
			console.log('--> fetch credentials', this._credentials)
			this._credentials = await this.fetchCredentials()
		}

		return this._credentials
	}

	/**
   * Fetch new STS credentials
   */
	protected async fetchCredentials() {
		const sts = new STSClient({
			region: this.parameters.region,
			credentials: {
				accessKeyId: this.parameters.accessKeyId,
				secretAccessKey: this.parameters.secretAccessKey
			}
		})

		const {Credentials: credentials} = await sts.send(
			new AssumeRoleCommand({
				RoleArn: this.parameters.role.arn,
				RoleSessionName: this.parameters.role.sessionName
			})
		)

		if (!credentials) {
			throw new Error('AWS credentials are invalid') // TODO: make customized Error class
		}

		return credentials
	}
}
