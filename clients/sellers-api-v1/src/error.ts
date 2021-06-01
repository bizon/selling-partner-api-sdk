export class SellersApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'SellersApiError'
	}
}
