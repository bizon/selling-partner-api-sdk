import {SellingPartnerApiAuth, SellingPartnerApiAuthError} from '../src'

describe('src/selling-partner-api-auth', () => {
  it('should create a SellingPartnrApiAuth instance', () => {
    const auth = new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      clientSecret: 'FAKE_CLIENT_SECRET',
      accessKeyId: 'FAKE_ACCESS_KEY_ID',
      secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
      refreshToken: 'FAKE_REFRESH_TOKEN'
    })

    expect(auth).toBeInstanceOf(SellingPartnerApiAuth)
  })

  it('should fail for missing clientId', () => {
    expect(() => new SellingPartnerApiAuth({
      clientSecret: 'FAKE_CLIENT_SECRET',
      accessKeyId: 'FAKE_ACCESS_KEY_ID',
      secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
      refreshToken: 'FAKE_REFRESH_TOKEN'
    })).toThrow(SellingPartnerApiAuthError)
  })

  it('should fail for missing clientSecret', () => {
    expect(() => new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      accessKeyId: 'FAKE_ACCESS_KEY_ID',
      secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
      refreshToken: 'FAKE_REFRESH_TOKEN'
    })).toThrow(SellingPartnerApiAuthError)
  })

  it('should fail for missing accessKeyId', () => {
    expect(() => new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      clientSecret: 'FAKE_CLIENT_SECRET',
      secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
      refreshToken: 'FAKE_REFRESH_TOKEN',
      role: {
        arn: 'FAKE_ARN'
      }
    })).toThrow(SellingPartnerApiAuthError)
  })

  it('should fail for missing secretAccessKey', () => {
    expect(() => new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      clientSecret: 'FAKE_CLIENT_SECRET',
      accessKeyId: 'FAKE_ACCESS_KEY_ID',
      refreshToken: 'FAKE_REFRESH_TOKEN',
      role: {
        arn: 'FAKE_ARN'
      }
    })).toThrow(SellingPartnerApiAuthError)
  })

  it('should fail for missing accessKeyId', () => {
    expect(() => new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      clientSecret: 'FAKE_CLIENT_SECRET',
      secretAccessKey: 'FAKE_SECRET_ACCESS_KEY',
      refreshToken: 'FAKE_REFRESH_TOKEN'
    })).toThrow(SellingPartnerApiAuthError)
  })

  it('should fail for missing secretAccessKey', () => {
    expect(() => new SellingPartnerApiAuth({
      clientId: 'FAKE_CLIENT_ID',
      clientSecret: 'FAKE_CLIENT_SECRET',
      accessKeyId: 'FAKE_ACCESS_KEY_ID',
      refreshToken: 'FAKE_REFRESH_TOKEN'
    })).toThrow(SellingPartnerApiAuthError)
  })
})
