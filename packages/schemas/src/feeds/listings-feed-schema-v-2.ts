import {type FromSchema} from 'json-schema-to-ts'

export const listingsFeedSchemaV2 = {
  $comment:
    'JSON Schema describing the document format for JSON Selling Partner Listings Feeds (v2).',
  title: 'Selling Partner Listings Feed (v2)',
  properties: {
    header: {
      title: 'Feed Header',
      description: 'Header information about the feed submission.',
      properties: {
        sellerId: {
          title: 'Selling Partner Identifier',
          description:
            'Identifier for the Selling Partner, such as the Merchant Account or Vendor Code.',
          type: 'string',
        },
        version: {
          title: 'Feed Version',
          description:
            'Version of the JSON Selling Partner Listings Feeds specification used for the feed submission.',
          const: '2.0',
          type: 'string',
        },
        issueLocale: {
          title: 'Issue Locale',
          description:
            'Locale for issue localization. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale.',
          type: 'string',
        },
        report: {
          title: 'Report',
          description: 'The report information for the feed submission.',
          properties: {
            includedData: {
              title: 'Included Data',
              description:
                'When "includedData" elements are in the feed submission, the processing report that generates for the feed submission includes the listings items output from the Selling Partner Listings Items API with the "includedData" elements from the request. The report includes issues that prevent the acceptance of messages regardless of the "includedData" elements in the feed request.',
              type: 'array',
              minItems: 1,
              items: {
                type: 'string',
                enum: [
                  'summaries',
                  'attributes',
                  'issues',
                  'offers',
                  'fulfillmentAvailability',
                  'procurement',
                  'relationships',
                  'productTypes',
                ],
              },
            },
            apiVersion: {
              title: 'Selling Partner Listings Items API Version',
              description:
                'The version of the Selling Partner Listings Items API to use to retrieve the listing items.',
              type: 'string',
              enum: ['2021-08-01'],
            },
          },
          required: ['includedData', 'apiVersion'],
          type: 'object',
        },
      },
      required: ['sellerId', 'version'],
      type: 'object',
    },
    messages: {
      title: 'Feed Messages',
      description: 'Messages containing listings data submissions for the Selling Partner.',
      minItems: 1,
      maxItems: 10_000,
      items: {
        title: 'Feed Message',
        description: 'Message containing an individual listings data submission.',
        properties: {
          messageId: {
            title: 'Message Identifier',
            description:
              'Identifier for the message that is unique within this feed submission. Response messages are correlated to this identifier.',
            examples: [1],
            minimum: 1,
            type: 'integer',
            maximum: 2_147_483_647,
          },
          sku: {
            title: 'SKU (Stock Keeping Unit)',
            description:
              'Selling Partner SKU (stock keeping unit) identifier for the listing. SKU uniquely identifies a listing for a Selling Partner.',
            examples: ['ABC123'],
            minLength: 1,
            type: 'string',
          },
          operationType: {
            title: 'Operation Type',
            description:
              'Type of operation to perform for the listings data submission in this message. "UPDATE" indicates the full set of item attributes are provided and any existing attributes data will be replaced with the provided attributes. "PARTIAL_UPDATE" indicates only the provided item attributes will be updated with the provided attribute data. "PATCH" indicates the provided JSON Patch operations will be used to update the applicable attributes. "DELETE" indicates the listings item will be deleted. "PARTIAL_UPDATE" is equivalent to using "PATCH" with the "replace" op.',
            enum: ['UPDATE', 'PARTIAL_UPDATE', 'PATCH', 'DELETE'],
            type: 'string',
          },
          productType: {
            title: 'Amazon Product Type',
            description: 'Amazon product type of the listings data submission in this message.',
            examples: ['LUGGAGE', 'SHOES'],
            minLength: 1,
            type: 'string',
          },
          requirements: {
            title: 'Requirements',
            description:
              'Name of the requirements type for the listings data submission in this message. "LISTING" indicates requirements inclusive of product facts and sales terms. "LISTING_PRODUCT_ONLY" indicates requirements inclusive of product facts only. "LISTING_OFFER_ONLY" indicates requirements inclusive of sales terms only.',
            default: 'LISTING',
            enum: ['LISTING', 'LISTING_PRODUCT_ONLY', 'LISTING_OFFER_ONLY'],
            type: 'string',
          },
          attributes: {
            title: 'Listings Item Attributes',
            description: 'Attributes data for the listings data submission.',
            additionalProperties: true,
            minProperties: 1,
            type: 'object',
          },
          patches: {
            title: 'Listings Item JSON Patch Operations',
            description:
              'Attributes data in the form of JSON Patch operations to update or delete.',
            minItems: 1,
            items: {
              description: 'Individual JSON Patch operation.',
              properties: {
                op: {
                  description:
                    'Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. See https://tools.ietf.org/html/rfc6902.',
                  example: 'replace',
                  enum: ['add', 'replace', 'delete'],
                  type: 'string',
                },
                path: {
                  description:
                    'JSON Pointer path of the attribute to patch. See https://tools.ietf.org/html/rfc6902.',
                  example: '/attributes/fulfillment_availability',
                  type: 'string',
                },
                value: {
                  description: 'JSON value to add, replace, or delete.',
                  example: [
                    {
                      fulfillment_channel_code: 'DEFAULT',
                      quantity: 10,
                    },
                  ],
                  type: 'array',
                  items: {
                    type: 'object',
                    additionalProperties: true,
                  },
                },
              },
              required: ['op', 'path'],
              type: 'object',
            },
            type: 'array',
          },
        },
        required: ['messageId', 'sku', 'operationType'],
        oneOf: [
          {
            $comment:
              '"UPDATE" operations require a "productType" and "attributes"; "patches" are not applicable to "UPDATE" operations.',
            properties: {
              operationType: {
                const: 'UPDATE',
                type: 'string',
              },
              patches: false,
            },
            required: ['productType', 'attributes'],
          },
          {
            $comment:
              '"requirements", "attributes", "productType", and "patches" are not applicable to "DELETE" operations.',
            properties: {
              operationType: {
                const: 'DELETE',
                type: 'string',
              },
              requirements: false,
              attributes: false,
              productType: false,
              patches: false,
            },
          },
          {
            $comment:
              '"PARTIAL_UPDATE" operations require a "productType" and "attributes"; "requirements" and "patches" are not applicable to "PARTIAL_UPDATE" operations.',
            properties: {
              operationType: {
                const: 'PARTIAL_UPDATE',
                type: 'string',
              },
              requirements: false,
              patches: false,
            },
            required: ['productType', 'attributes'],
          },
          {
            $comment:
              '"PATCH" operations require a "productType" and "patches"; "requirements" and "attributes" are not applicable to "PATCH" operations.',
            properties: {
              operationType: {
                const: 'PATCH',
                type: 'string',
              },
              requirements: false,
              attributes: false,
            },
            required: ['productType', 'patches'],
          },
        ],
        type: 'object',
      },
      type: 'array',
    },
  },
  required: ['header', 'messages'],
  type: 'object',
} as const

export type ListingsFeedSchemaV2 = FromSchema<typeof listingsFeedSchemaV2>
