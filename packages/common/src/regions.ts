export type SellingPartnerRegion = 'na' | 'eu' | 'fe'

interface RegionConfiguration {
  awsRegion: string
  endpoints: {
    production: string
    sandbox: string
  }
}

export const sellingPartnerRegions: Record<SellingPartnerRegion, RegionConfiguration> = {
  na: {
    awsRegion: 'us-east-1',
    endpoints: {
      production: 'https://sellingpartnerapi-na.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-na.amazon.com',
    },
  },
  eu: {
    awsRegion: 'eu-west-1',
    endpoints: {
      production: 'https://sellingpartnerapi-eu.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-eu.amazon.com',
    },
  },
  fe: {
    awsRegion: 'us-west-2',
    endpoints: {
      production: 'https://sellingpartnerapi-fe.amazon.com',
      sandbox: 'https://sandbox.sellingpartnerapi-fe.amazon.com',
    },
  },
}
