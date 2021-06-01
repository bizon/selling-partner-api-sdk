export class ServicesApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'ServicesApiError'
	}
}
