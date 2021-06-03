interface Endpoints {
	production: Record<string, string>;
	sandbox: Record<string, string>;
}

export const endpoints: Endpoints = {
	production: {
		na:
			'https://sellingpartnerapi-na.amazon.com',
		eu:
			'https://sellingpartnerapi-eu.amazon.com',
		fe:
			'https://sellingpartnerapi-fe.amazon.com'
	},
	sandbox: {
		na:
			'https://sandbox.sellingpartnerapi-na.amazon.com',
		eu:
			'https://sandbox.sellingpartnerapi-eu.amazon.com',
		fe:
			'https://sandbox.sellingpartnerapi-fe.amazon.com'
	}
}
