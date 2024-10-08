import {type FromSchema} from 'json-schema-to-ts'

export const listingsFeedProcessingReportSchemaV2 = {
  $comment:
    'JSON Schema describing the document format for JSON Selling Partner Listings Feeds Processing Report (v2).',
  title: 'Selling Partner JSON Listings Feed Processing Report (v2)',
  properties: {
    header: {
      title: 'Processing Report Header',
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
        feedId: {
          title: 'Feed Identifier',
          description:
            'The identifier for the feed. This identifier is unique only in combination with a seller ID.',
          type: 'string',
        },
      },
      required: ['sellerId', 'version', 'feedId'],
      type: 'object',
    },
    issues: {
      title: 'Issues Encountered Processing Messages',
      description: 'Issues containing message processing information for the Selling Partner.',
      minItems: 0,
      items: {
        title: 'Issue',
        description:
          'Issue containing message processing information corresponding to an individual listings data submission.',
        properties: {
          messageId: {
            title: 'Message Identifier',
            description:
              'Identifier for the message that is unique within this feed submission. Correlated to Identifiers provided in the submitted feed. Not provided if the error is not related to a message (e.g. feed formatting issue).',
            examples: [1],
            minimum: 1,
            type: 'integer',
          },
          code: {
            title: 'Error Code',
            description: 'An Optional error code that maps to documentation.',
            examples: ['ABC123'],
            minLength: 1,
            type: 'string',
          },
          severity: {
            title: 'Error Severity',
            description: 'The severity of the issue.',
            enum: ['ERROR', 'WARNING', 'INFO'],
            type: 'string',
          },
          message: {
            title: 'Localized Error Message',
            description: 'Localized Error Message Associated with the issue encountered.',
            examples: ["'[batteries_required]' is required but not supplied."],
            minLength: 1,
            type: 'string',
          },
          attributeName: {
            description: 'Name of the attribute associated with the issue, if applicable.',
            examples: ['item_type_name'],
            type: 'string',
          },
        },
        required: ['severity', 'message'],
        type: 'object',
      },
      type: 'array',
    },
    summary: {
      title: 'Processing Report Summary',
      description: 'Aggregate Count of Errors, Warnings, and the status of message submissions.',
      properties: {
        errors: {
          title: 'Errors',
          description: 'Number of errors encountered processing the feed.',
          examples: [1],
          minimum: 0,
          type: 'integer',
        },
        warnings: {
          title: 'Warnings',
          description: 'Number of warnings encountered processing the feed.',
          examples: [1],
          minimum: 0,
          type: 'integer',
        },
        messagesProcessed: {
          title: 'Messages Processed',
          description: 'Number of messages processed.',
          examples: [1],
          minimum: 0,
          type: 'integer',
        },
        messagesAccepted: {
          title: 'Messages Accepted',
          description:
            'Number of messages that were accepted, the associated updates are being applied.',
          examples: [1],
          minimum: 0,
          type: 'integer',
        },
        messagesInvalid: {
          title: 'Messages Invalid',
          description:
            'Number of messages that were invalid, the associated updates will not be applied.',
          examples: [1],
          minimum: 0,
          type: 'integer',
        },
      },
      required: ['errors', 'warnings', 'messagesProcessed', 'messagesAccepted', 'messagesInvalid'],
      type: 'object',
    },
  },
  required: ['header', 'issues', 'summary'],
  type: 'object',
} as const

export type ListingsFeedProcessingReportSchemaV2 = FromSchema<
  typeof listingsFeedProcessingReportSchemaV2
>
