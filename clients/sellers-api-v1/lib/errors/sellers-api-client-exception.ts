export class SellersApiClientException extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'SellersApiClientException'
	}
}
