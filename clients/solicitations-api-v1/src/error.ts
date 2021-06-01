export class SolicitationsApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'SolicitationsApiError'
	}
}
