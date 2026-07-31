import {beforeEach, describe, expect, it, jest} from '@jest/globals'
import {type OpenAPIV3} from 'openapi-types'

import {logger} from '../../utils/logger.js'
import {extractRateLimits} from '../../utils/rate-limits.js'

function buildDocument(paths: OpenAPIV3.PathsObject): OpenAPIV3.Document {
  return {
    openapi: '3.0.1',
    info: {title: 'Selling Partner API', version: 'v0'},
    paths,
  }
}

// The two-column usage plan table Amazon appends to most descriptions
function usagePlan(rate: string, burst: string) {
  return [
    'Does something useful.',
    '',
    '**Usage Plan:**',
    '',
    '| Rate (requests per second) | Burst |',
    '| ---- | ---- |',
    `| ${rate} | ${burst} |`,
    '',
    'The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits.',
  ].join('\n')
}

// The three-column form a few older models still use
function legacyUsagePlan(rate: string, burst: string) {
  return [
    'Does something useful.',
    '',
    '**Usage Plans:**',
    '',
    '| Plan type | Rate (requests per second) | Burst |',
    '| ---- | ---- | ---- |',
    `|Default| ${rate} | ${burst} |`,
    '|Selling partner specific| Variable | Variable |',
  ].join('\n')
}

// `urlRegex` is inlined in the generated client as a regular expression
// literal, so it is a source string here rather than a `RegExp`
function toRegExp(source: string) {
  const result = /^\/(?<pattern>.*)\/(?<flags>[a-z]*)$/v.exec(source)

  if (!result?.groups) {
    throw new Error(`Not a regular expression literal: ${source}`)
  }

  return new RegExp(result.groups.pattern, result.groups.flags)
}

describe('extractRateLimits', () => {
  beforeEach(() => {
    jest.spyOn(logger, 'info').mockReturnValue(logger)
    jest.spyOn(logger, 'warn').mockReturnValue(logger)
  })

  it('should extract the rate and burst of an operation', () => {
    const document = buildDocument({
      '/orders/v0/orders': {get: {responses: {}, description: usagePlan('0.0167', '20')}},
    })

    expect(extractRateLimits(document, 'orders-api-v0')).toStrictEqual([
      {
        method: 'get',
        rate: 0.0167,
        burst: 20,
        urlRegex: String.raw`/^\/orders\/v0\/orders$/v`,
      },
    ])
  })

  it('should extract the default plan of a legacy usage plan table', () => {
    const document = buildDocument({
      '/definitions/2020-09-01/productTypes': {
        get: {responses: {}, description: legacyUsagePlan('5', '10')},
      },
    })

    expect(extractRateLimits(document, 'product-type-definitions-api-2020-09-01')).toMatchObject([
      {rate: 5, burst: 10},
    ])
  })

  describe('urlRegex', () => {
    it('should match the pathname of a request to the operation', () => {
      const document = buildDocument({
        '/orders/v0/orders/{orderId}/orderItems': {
          get: {responses: {}, description: usagePlan('0.5', '30')},
        },
      })

      const [{urlRegex}] = extractRateLimits(document, 'orders-api-v0')
      const pattern = toRegExp(urlRegex)

      expect(pattern.test('/orders/v0/orders/902-3159896-1390916/orderItems')).toBe(true)
      expect(pattern.test('/orders/v0/orders/orderItems')).toBe(false)

      // Anchored, so an endpoint is never matched by a longer pathname
      expect(pattern.test('/foo/orders/v0/orders/902-3159896-1390916/orderItems')).toBe(false)
    })

    it('should not let a path parameter swallow the following segments', () => {
      // `@sp-api-sdk/common` retries with the first matching rate limit, so a
      // parameter matching across separators would shadow every endpoint
      // nested under it
      const document = buildDocument({
        '/orders/v0/orders/{orderId}': {get: {responses: {}, description: usagePlan('0.5', '30')}},
        '/orders/v0/orders/{orderId}/orderItems': {
          get: {responses: {}, description: usagePlan('0.5', '30')},
        },
      })

      const [order, orderItems] = extractRateLimits(document, 'orders-api-v0')

      expect(toRegExp(order.urlRegex).test('/orders/v0/orders/902-3159896-1390916')).toBe(true)
      expect(
        toRegExp(order.urlRegex).test('/orders/v0/orders/902-3159896-1390916/orderItems'),
      ).toBe(false)
      expect(
        toRegExp(orderItems.urlRegex).test('/orders/v0/orders/902-3159896-1390916/orderItems'),
      ).toBe(true)
    })

    it('should escape the literal parts of the path', () => {
      const document = buildDocument({
        '/tokens/2021-03-01/restrictedDataToken': {
          post: {responses: {}, description: usagePlan('1', '10')},
        },
      })

      const [{urlRegex}] = extractRateLimits(document, 'tokens-api-2021-03-01')
      const pattern = toRegExp(urlRegex)

      expect(pattern.test('/tokens/2021-03-01/restrictedDataToken')).toBe(true)
      expect(pattern.test('/tokens/2021x03x01/restrictedDataToken')).toBe(false)
    })

    it('should handle several path parameters', () => {
      const document = buildDocument({
        '/inbound/fba/2024-03-20/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes': {
          get: {responses: {}, description: usagePlan('2', '30')},
        },
      })

      const [{urlRegex}] = extractRateLimits(document, 'fulfillment-inbound-api-2024-03-20')

      expect(
        toRegExp(urlRegex).test('/inbound/fba/2024-03-20/inboundPlans/wf1/shipments/sh1/boxes'),
      ).toBe(true)
    })
  })

  it('should keep the operations in the order the model declares them', () => {
    const document = buildDocument({
      '/easyShip/2022-03-23/package': {
        get: {responses: {}, description: usagePlan('1', '5')},
        post: {responses: {}, description: usagePlan('2', '5')},
        patch: {responses: {}, description: usagePlan('3', '5')},
      },
      '/easyShip/2022-03-23/timeSlot': {post: {responses: {}, description: usagePlan('4', '5')}},
    })

    const rateLimits = extractRateLimits(document, 'easy-ship-api-2022-03-23')

    expect(rateLimits.map(({method, rate}) => [method, rate])).toStrictEqual([
      ['get', 1],
      ['post', 2],
      ['patch', 3],
      ['post', 4],
    ])
  })

  it('should ignore the keys of a path item that are not operations', () => {
    const pathItem: OpenAPIV3.PathItemObject & Record<string, unknown> = {
      parameters: [{name: 'marketplaceIds', in: 'query'}],
      get: {responses: {}, description: usagePlan('0.0167', '20')},
      // Amazon extension – an object that could hold a `description` of its own
      'x-amzn-api-sandbox': {description: usagePlan('99', '99')},
    }

    const document = buildDocument({'/orders/v0/orders': pathItem})

    expect(extractRateLimits(document, 'orders-api-v0')).toMatchObject([
      {method: 'get', rate: 0.0167},
    ])
  })

  it('should report the operations Amazon documents no usage plan for', () => {
    const document = buildDocument({
      '/tax/invoices/2024-06-19/invoices': {get: {responses: {}, description: 'Returns invoices.'}},
      '/tax/invoices/2024-06-19/exports': {post: {responses: {}}},
    })

    expect(extractRateLimits(document, 'invoices-api-2024-06-19')).toStrictEqual([])
    expect(logger.info).toHaveBeenCalledWith('no usage plan documented for 2 operation(s)', {
      packageName: 'invoices-api-2024-06-19',
    })
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it('should warn about a usage plan it cannot read, naming the operation', () => {
    const document = buildDocument({
      '/inbound/fba/2024-03-20/items/prepDetails': {
        // Amazon publishes placeholders instead of values for some operations
        get: {responses: {}, description: usagePlan('n', 'n')},
        post: {responses: {}, description: usagePlan('2', '30')},
      },
    })

    expect(extractRateLimits(document, 'fulfillment-inbound-api-2024-03-20')).toMatchObject([
      {method: 'post', rate: 2, burst: 30},
    ])
    expect(logger.warn).toHaveBeenCalledWith(
      'could not read the usage plan of GET /inbound/fba/2024-03-20/items/prepDetails',
      {packageName: 'fulfillment-inbound-api-2024-03-20'},
    )
  })

  it('should warn rather than stay quiet when the table is reformatted', () => {
    const description = [
      'Does something useful.',
      '',
      '**Usage Plan:**',
      '',
      '| Requests per second | Burst |',
      '| ---- | ---- |',
      '| 2 | 6 |',
    ].join('\n')

    const document = buildDocument({
      '/orders/v0/orders': {get: {responses: {}, description}},
    })

    expect(extractRateLimits(document, 'orders-api-v0')).toStrictEqual([])
    expect(logger.warn).toHaveBeenCalledWith(
      'could not read the usage plan of GET /orders/v0/orders',
      {packageName: 'orders-api-v0'},
    )
    expect(logger.info).not.toHaveBeenCalled()
  })
})
