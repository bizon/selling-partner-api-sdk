export class FbaInventoryApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'FbaInventoryApiError'
	}
}
