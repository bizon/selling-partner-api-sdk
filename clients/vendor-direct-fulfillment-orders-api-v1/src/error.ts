export class VendorDirectFulfillmentOrdersApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'VendorDirectFulfillmentOrdersApiError'
	}
}
