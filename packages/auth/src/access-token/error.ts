export class AccessTokenError extends Error {
	constructor(message: string) {
		super(message)

		this.name = 'AccessTokenError'
	}
}
