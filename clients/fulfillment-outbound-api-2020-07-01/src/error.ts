export class FulfillmentOutboundApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'FulfillmentOutboundApiError'
	}
}
