# `@sp-api-sdk/schemas`

[![npm version](https://img.shields.io/npm/v/@sp-api-sdk/schemas)](https://www.npmjs.com/package/@sp-api-sdk/schemas)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

Amazon Selling Partner API schemas

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

## Documentation

Learn more about the Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_schemas.html).

## Installing

```sh
npm install @sp-api-sdk/schemas
```

## Overview

This package exposes JSON schemas and their corresponding TypeScript types for Selling Partner API `Feeds`, `Notifications`, and `Reports`. These schemas are auto-generated from the [official Amazon models](https://github.com/amzn/selling-partner-api-models/tree/main/schemas).

Each schema is exported as a `const` object (usable at runtime for validation) along with a TypeScript type (inferred via [`json-schema-to-ts`](https://github.com/ThomasAribart/json-schema-to-ts)).

## Usage

### JSON schema (runtime)

```javascript
import { Reports } from "@sp-api-sdk/schemas";

// Use the JSON schema for validation
console.log(Reports.vendorInventoryReport);
```

### TypeScript type

```typescript
import { Reports } from "@sp-api-sdk/schemas";

const report = (await getVendorInventoryReportData()) as Reports.VendorInventoryReport;
```

## Available Schemas

### Feeds (3 schemas)

- `listingsFeedSchemaV2` / `ListingsFeedSchemaV2`
- `listingsFeedMessageSchemaV2` / `ListingsFeedMessageSchemaV2`
- `listingsFeedProcessingReportSchemaV2` / `ListingsFeedProcessingReportSchemaV2`

### Notifications (22 schemas)

- `anyOfferChangedNotification` / `AnyOfferChangedNotification`
- `b2bAnyOfferChangedNotification` / `B2bAnyOfferChangedNotification`
- `brandedItemContentChangeNotification` / `BrandedItemContentChangeNotification`
- `dataKioskQueryProcessingFinishedNotification` / `DataKioskQueryProcessingFinishedNotification`
- `detailPageTrafficEventNotification` / `DetailPageTrafficEventNotification`
- `fbaInventoryAvailabilityChangeNotification` / `FBAInventoryAvailabilityChangeNotification`
- `fbaOutboundShipmentStatusNotification` / `FBAOutboundShipmentStatusNotification`
- `feePromotionNotification` / `FeePromotionNotification`
- `feedProcessingFinishedNotification` / `FeedProcessingFinishedNotification`
- `fulfillmentOrderStatusNotification` / `FulfillmentOrderStatusNotification`
- `itemInventoryEventChangeNotification` / `ItemInventoryEventChangeNotification`
- `itemProductTypeChangeNotification` / `ItemProductTypeChangeNotification`
- `itemSalesEventChangeNotification` / `ItemSalesEventChangeNotification`
- `listingsItemIssuesChangeNotification` / `ListingsItemIssuesChangeNotification`
- `listingsItemIssuesChangeNotification20231213` / `ListingsItemIssuesChangeNotification20231213`
- `listingsItemMfnQuantityChange` / `ListingsItemMfnQuantityChange`
- `listingsItemStatusChangeNotification` / `ListingsItemStatusChangeNotification`
- `orderChangeNotification` / `OrderChangeNotification`
- `pricingHealthNotification` / `PricingHealthNotification`
- `productTypeDefinitionsChangeNotification` / `ProductTypeDefinitionsChangeNotification`
- `reportProcessingFinishedNotification` / `ReportProcessingFinishedNotification`
- `transactionUpdateNotification` / `TransactionUpdateNotification`

### Reports (22 schemas)

- `accountHealthReport20201118` / `AccountHealthReport20201118`
- `b2bProductOpportunitiesNotYetOnAmazonReport20201119` / `B2bProductOpportunitiesNotYetOnAmazonReport20201119`
- `b2bProductOpportunitiesRecommendedForYouReport20201119` / `B2bProductOpportunitiesRecommendedForYouReport20201119`
- `endUserDataReport` / `EndUserDataReport`
- `marketplaceAsinPageViewMetrics` / `MarketplaceAsinPageViewMetrics`
- `promotionReport` / `PromotionReport`
- `sellerCouponReport` / `SellerCouponReport`
- `sellerSalesAndTrafficReport` / `SellerSalesAndTrafficReport`
- `sellingPartnerMarketBasketAnalysisReport` / `SellingPartnerMarketBasketAnalysisReport`
- `sellingPartnerRepeatPurchaseReport` / `SellingPartnerRepeatPurchaseReport`
- `sellingPartnerSearchCatalogPerformanceReport` / `SellingPartnerSearchCatalogPerformanceReport`
- `sellingPartnerSearchQueryPerformanceReport` / `SellingPartnerSearchQueryPerformanceReport`
- `sellingPartnerSearchTermsReport` / `SellingPartnerSearchTermsReport`
- `vendorCouponReport` / `VendorCouponReport`
- `vendorForecastingReport` / `VendorForecastingReport`
- `vendorInventoryReport` / `VendorInventoryReport`
- `vendorNetPureProductMarginReport` / `VendorNetPureProductMarginReport`
- `vendorRealTimeInventoryReport` / `VendorRealTimeInventoryReport`
- `vendorRealTimeSalesReport` / `VendorRealTimeSalesReport`
- `vendorRealTimeTrafficReport` / `VendorRealTimeTrafficReport`
- `vendorSalesReport` / `VendorSalesReport`
- `vendorTrafficReport` / `VendorTrafficReport`

## License

MIT

## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
