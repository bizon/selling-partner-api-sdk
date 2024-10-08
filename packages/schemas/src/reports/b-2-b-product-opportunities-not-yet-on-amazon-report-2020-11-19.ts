import {type FromSchema} from 'json-schema-to-ts'

export const b2bProductOpportunitiesNotYetOnAmazonReport20201119 = {
  type: 'object',
  description:
    'Provides B2B product recommendations based on predicted incremental units sold, unmet buyer demand, and other factors for products not yet listed on Amazon. The recommendations are personalized to the seller based on past sales activity.',
  examples: [
    {
      recommendations: [
        {
          itemName: 'Exclusive Home Cabana Indoor/Outdoor Grommet Top Curtain Panel Pair',
          brand: 'EXCLUSIVE HOME',
          category: 'Furniture',
          ean: '6424721049560',
          initialB2bBuyerRequestedDate: '2020-11-14 00:00:00',
        },
      ],
    },
  ],
  required: ['recommendations'],
  properties: {
    recommendations: {
      type: 'array',
      description: 'A list of B2B product opportunity recommendation objects.',
      additionalItems: true,
      items: {
        type: 'object',
        description: 'The recommendation result object.',
        required: [],
        properties: {
          itemName: {
            type: 'string',
            description: 'The title of the product.',
          },
          brand: {
            type: 'string',
            description: 'The brand name of the product.',
          },
          category: {
            type: 'string',
            description: 'The primary product category.',
          },
          initialB2bBuyerIndustry: {
            type: 'string',
            description: 'The industry of the first customer who requested the product.',
          },
          partNumber: {
            type: 'string',
            description: 'The Manufacturer Part Number (MPN) of the product.',
          },
          ean: {
            type: 'string',
            description: 'The European Article Number (EAN) of the product.',
          },
          upc: {
            type: 'string',
            description: 'The Universal Product Code (UPC) of the product.',
          },
          modelNumber: {
            type: 'string',
            description: 'The Model Number of the product.',
          },
          isbn: {
            type: 'string',
            description: 'The International Standard Book Number (ISBN) of the product.',
          },
          initialB2bBuyerRequestedDate: {
            type: 'string',
            description:
              'The date the product may not be on Amazon as the result of the customer request.',
          },
        },
      },
    },
  },
} as const

export type B2bProductOpportunitiesNotYetOnAmazonReport20201119 = FromSchema<
  typeof b2bProductOpportunitiesNotYetOnAmazonReport20201119
>
