interface Endpoints {
  production: Record<string, string>;
  sandbox: Record<string, string>;
}

export const endpoints: Endpoints = {
  production: {
    'us-east-1': 'https://sellingpartnerapi-na.amazon.com',
    na: 'https://sellingpartnerapi-na.amazon.com',

    'eu-west-1': 'https://sellingpartnerapi-eu.amazon.com',
    eu: 'https://sellingpartnerapi-eu.amazon.com',

    'us-west-2': 'https://sellingpartnerapi-fe.amazon.com',
    fe: 'https://sellingpartnerapi-fe.amazon.com',
  },
  sandbox: {
    'us-east-1': 'https://sandbox.sellingpartnerapi-na.amazon.com',
    na: 'https://sandbox.sellingpartnerapi-na.amazon.com',

    'eu-west-1': 'https://sandbox.sellingpartnerapi-eu.amazon.com',
    eu: 'https://sandbox.sellingpartnerapi-eu.amazon.com',

    'us-west-2': 'https://sandbox.sellingpartnerapi-fe.amazon.com',
    fe: 'https://sandbox.sellingpartnerapi-fe.amazon.com',
  },
}

export const awsRegionByCode: Record<string, string> = {
  eu: 'eu-west-1',
  fe: 'us-west-2',
  na: 'us-east-1',
}
