export class FbaInboundEligibilityApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'FbaInboundEligibilityApiError'
	}
}
