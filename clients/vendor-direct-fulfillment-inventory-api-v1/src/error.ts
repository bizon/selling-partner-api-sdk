export class VendorDirectFulfillmentInventoryApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'VendorDirectFulfillmentInventoryApiError'
	}
}
