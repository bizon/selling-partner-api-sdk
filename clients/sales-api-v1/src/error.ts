export class SalesApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'SalesApiError'
	}
}
