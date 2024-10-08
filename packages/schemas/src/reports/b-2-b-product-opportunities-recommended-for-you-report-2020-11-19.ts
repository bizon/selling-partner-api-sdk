import {type FromSchema} from 'json-schema-to-ts'

export const b2bProductOpportunitiesRecommendedForYouReport20201119 = {
  $id: 'http://example.com/example.json',
  type: 'object',
  description:
    'Provides B2B product recommendations based on predicted incremental units sold, unmet buyer demand, low offer count, and other factors for products already offered on Amazon. The recommendations are personalized to the Seller based on past sales activity.',
  examples: [
    {
      recommendations: [
        {
          asin: 'B001F0R1FG',
          itemName: 'HP 05A | CE505A | Toner Cartridge | Black',
          link: 'https://www.amazon.com/dp/B001F0R1FG/ref_=mbop',
          brand: 'HP',
          category: 'Office Products',
          subCategory: '0375 Toner',
          lowestPriceInTheLastWeek: {
            amount: 43.95,
            currencyCode: 'USD',
          },
          hasFBAOffer: true,
          offerCount: 50,
          hasAmazonOffer: true,
          hasOfferWithVatInvoiceGeneration: false,
          reviewCount: 439,
          b2bSalesRank: 2158,
          b2bSalesRankGrowth: 'LOW',
          pageViews: 'MEDIUM',
          partNumber: 'CE505A',
          ean: '3663361254702',
          upc: '701748596694',
          modelNumber: 'CE505A',
          isBrandYouOffer: true,
          isCategoryYouOffer: true,
          productPerformance: 'TIER_1',
          isProductOnAmazon: false,
        },
      ],
    },
    {
      recommendations: [
        {
          asin: 'B07F77R77F',
          itemName:
            'Nitras Motion TEX VIZ Veste Softshell Haute visibilité | Veste de Travail avec Bordure réfléchissante 3M | Coupe-Vent | XXL',
          link: 'https://www.amazon.fr/dp/B07F77R77F/ref_=mbop',
          brand: 'NITRAS',
          category: 'Apparel',
          subCategory: "1950 Men's Other",
          lowestPriceInTheLastWeek: {
            amount: 59.98,
            currencyCode: 'EUR',
          },
          hasFBAOffer: true,
          offerCount: 1,
          hasAmazonOffer: false,
          hasOfferWithVatInvoiceGeneration: false,
          reviewCount: 5,
          b2bSalesRank: 1156,
          b2bSalesRankGrowth: 'LOW',
          pageViews: 'HIGH',
          partNumber: '7171-2XL',
          ean: '4061553011352',
          modelNumber: '7171_XXL',
          isBrandYouOffer: false,
          isCategoryYouOffer: true,
          productPerformance: 'TIER_3',
          isProductOnAmazon: false,
        },
      ],
    },
    {
      recommendations: [
        {
          asin: 'B08DYCHX68',
          itemName: '無印良品 公園の時計 大 ヌメ革 腕時計 MJ-PCWB2 ソーラー充電 公園の時計大',
          link: 'https://www.amazon.co.jp/dp/B08DYCHX68/ref_=mbop',
          brand: 'ノーブランド品',
          category: 'Toys',
          subCategory: '0600 Hobbies',
          lowestPriceInTheLastWeek: {
            amount: 13_803,
            currencyCode: 'JPY',
          },
          hasFBAOffer: false,
          offerCount: 139,
          hasAmazonOffer: false,
          hasOfferWithVatInvoiceGeneration: false,
          reviewCount: 0,
          b2bSalesRank: 499,
          b2bSalesRankGrowth: 'LOW',
          pageViews: 'HIGH',
          partNumber: '7171-2XL',
          ean: '4061553011352',
          modelNumber: '7171_XXL',
          isBrandYouOffer: true,
          isCategoryYouOffer: true,
          productPerformance: 'TIER_3',
          isProductOnAmazon: false,
        },
      ],
    },
    {
      recommendations: [
        {
          asin: 'B07NYFV364',
          itemName: 'HandPro Black Nitrile Powder free hand gloves 1 Box (Medium)',
          link: 'https://www.amazon.in/dp/B07NYFV364/ref_=mbop',
          brand: 'HandPRO',
          category: 'Biss',
          subCategory: '3100 Professional Medical',
          lowestPriceInTheLastWeek: {
            amount: 699,
            currencyCode: 'INR',
          },
          hasFBAOffer: false,
          offerCount: 1,
          hasAmazonOffer: false,
          hasOfferWithVatInvoiceGeneration: false,
          reviewCount: 13,
          b2bSalesRank: 53,
          b2bSalesRankGrowth: 'HIGH',
          pageViews: 'MEDIUM',
          isBrandYouOffer: true,
          isCategoryYouOffer: true,
          productPerformance: 'TIER_1',
          isProductOnAmazon: false,
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
        required: ['asin'],
        properties: {
          asin: {
            type: 'string',
            description: 'The Amazon Standard Identification Number (ASIN).',
          },
          itemName: {
            type: 'string',
            description: 'The title of the product.',
          },
          link: {
            type: 'string',
            description: 'A hyperlink to the Amazon product detail page.',
          },
          brand: {
            type: 'string',
            description: 'The brand name of the product.',
          },
          category: {
            type: 'string',
            description: 'The primary product category (For example, Office Products).',
          },
          subCategory: {
            type: 'string',
            description: 'The secondary product category (For example, Computer Monitors).',
          },
          lowestPriceInTheLastWeek: {
            type: 'object',
            description: 'The lowest priced offer on the product in the last week.',
            required: ['amount', 'currencyCode'],
            properties: {
              amount: {
                type: 'number',
                description: 'The currency amount.',
              },
              currencyCode: {
                description: 'Three-digit currency code. In ISO 4217 format.',
                type: 'string',
              },
            },
          },
          hasFBAOffer: {
            type: 'boolean',
            description:
              "A 'true' means at least one Fulfillment by Amazon (FBA) offer exists on the product. A 'false' means there are no FBA offers for the product.",
          },
          offerCount: {
            type: 'integer',
            description:
              'The total number of active offers on the product (including Amazon Retail).',
          },
          hasAmazonOffer: {
            type: 'boolean',
            description:
              "A 'true' means that an active Amazon (retail) offer exists on the product. A 'false' means there are no active Amazon offers for the product.",
          },
          hasOfferWithVatInvoiceGeneration: {
            type: 'boolean',
            description:
              "This field will be equal to 'true' only if it has at least one offer from a seller who has adopted an automated solution for VAT invoice generation. This type of offer will guarantee that the buyer will have access to a downloadable VAT invoice.",
          },
          reviewCount: {
            type: 'integer',
            description: 'The total number of customer reviews for the product.',
          },
          b2bSalesRank: {
            type: 'integer',
            description:
              'The sales rank of the product, at the Category level, based only on Amazon Business customer purchases.',
          },
          b2bSalesRankGrowth: {
            type: 'string',
            description:
              "A general measure of how much the business sales rank has grown (relative to other products in the category) over the past 30 days displayed as 'HIGH', 'MEDIUM', or 'LOW'.",
            enum: ['HIGH', 'MEDIUM', 'LOW'],
            'x-docgen-enum-table-extension': [
              {
                value: 'HIGH',
                description:
                  "'HIGH' means that the product’s business sales rank has grown over 33% from the previous month.",
              },
              {
                value: 'MEDIUM',
                description: "'MEDIUM' means that it has grown from 0% to 33%.",
              },
              {
                value: 'LOW',
                description:
                  "'LOW' means that the Business Sales Rank has decreased (growth less than 0%).",
              },
            ],
          },
          pageViews: {
            type: 'string',
            description:
              "A general measure of how many times the product has been viewed in the past 30 days displayed as 'HIGH', 'MEDIUM', or 'LOW'.",
            enum: ['HIGH', 'MEDIUM', 'LOW'],
            'x-docgen-enum-table-extension': [
              {
                value: 'HIGH',
                description:
                  "'HIGH' means that the product is in the top 40% of the product’s category.",
              },
              {
                value: 'MEDIUM',
                description: "'MEDIUM' means the product is in the next 40%.",
              },
              {
                value: 'LOW',
                description: "'LOW' means that the product is in the bottom 20% of its category.",
              },
            ],
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
          isBrandYouOffer: {
            type: 'boolean',
            description:
              "A 'true' means that the product shares a brand with at least one of your active offers. A 'false' means the product does not share a brand with any of your active offers.",
          },
          isCategoryYouOffer: {
            type: 'boolean',
            description:
              "A 'true' means the product shares a category with at least one of your active offers. A 'false' means the product does not share a category with any of your active offers.",
          },
          productPerformance: {
            type: 'string',
            description:
              "A general measure of product sales to Amazon Business customers over the past 30 days displayed as 'TIER_1', 'TIER_2', and 'TIER_3' where 'TIER_1' is best performing and 'TIER_3' is least performing. Product performance is based on the business sales rank.",
            enum: ['TIER_1', 'TIER_2', 'TIER_3'],
            'x-docgen-enum-table-extension': [
              {
                value: 'TIER_1',
                description:
                  "If the product has a business sales rank under 10,000, it is considered 'TIER_1'.",
              },
              {
                value: 'TIER_2',
                description:
                  "If a product has a business sales rank between 10,000 and 20,000, then the product is considered 'TIER_2'.",
              },
              {
                value: 'TIER_3',
                description:
                  "If the product has a business sales rank over 20,000, it is considered 'TIER_3'.",
              },
            ],
          },
          isProductOnAmazon: {
            type: 'boolean',
            description:
              "A 'true' means the product is listed on Amazon. A 'false' means the product is not listed on Amazon.",
          },
        },
      },
    },
  },
} as const

export type B2bProductOpportunitiesRecommendedForYouReport20201119 = FromSchema<
  typeof b2bProductOpportunitiesRecommendedForYouReport20201119
>
