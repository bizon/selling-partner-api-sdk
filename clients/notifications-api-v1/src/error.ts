export class NotificationsApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'NotificationsApiError'
	}
}
