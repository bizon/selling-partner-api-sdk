export class ProductPricingApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'ProductPricingApiError'
	}
}
