export class VendorShipmentsApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'VendorShipmentsApiError'
	}
}
