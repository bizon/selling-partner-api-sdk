export class VendorOrdersApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'VendorOrdersApiError'
	}
}
