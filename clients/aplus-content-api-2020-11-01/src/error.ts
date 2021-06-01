export class AplusContentApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'AplusContentApiError'
	}
}
