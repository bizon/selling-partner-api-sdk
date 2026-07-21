/** Selling Partner API region identifier. */
export type SellingPartnerRegion = 'na' | 'eu' | 'fe'

interface RegionConfiguration {
  endpoints: {
    production: string
    sandbox: string
  }
}

/** Endpoint mapping for each Selling Partner API region. */
export const sellingPartnerRegions: Record<SellingPartnerRegion, RegionConfiguration> = {
  na: {
    endpoints: {
      production: 'https://sellingpartnerapi-na.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-na.amazon.com',
    },
  },
  eu: {
    endpoints: {
      production: 'https://sellingpartnerapi-eu.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-eu.amazon.com',
    },
  },
  fe: {
    endpoints: {
      production: 'https://sellingpartnerapi-fe.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-fe.amazon.com',
    },
  },
}
