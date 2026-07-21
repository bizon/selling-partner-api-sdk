# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.0](https://github.com/bizon/selling-partner-api-sdk/compare/%40sp-api-sdk%2Fdelivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01%402.0.0...%40sp-api-sdk%2Fdelivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01%402.1.0) (2026-07-21)

### Features

* bump lint dependencies, fix issues, require node 20 ([76a34f6](https://github.com/bizon/selling-partner-api-sdk/commit/76a34f6a2fd11ec6e433ac69c92562c1415bae63))

# [2.0.0](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.10...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@2.0.0) (2026-05-27)

* chore!: migrate to tsup with modern exports (#1788) ([20f7731](https://github.com/bizon/selling-partner-api-sdk/commit/20f77312a1dda1d6a48efc5d48e6ba56e034bd6e)), closes [#1788](https://github.com/bizon/selling-partner-api-sdk/issues/1788)

### BREAKING CHANGES

* dist layout changed from dist/{cjs,es,types}/ to a
flat dist/. Consumers using only the documented barrel import
(import {X} from '@sp-api-sdk/<package>') are unaffected. Any
undocumented deep imports into dist/cjs/... etc. now fail with
ERR_PACKAGE_PATH_NOT_EXPORTED.

## [1.1.10](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.9...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.10) (2026-04-30)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.9](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.8...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.9) (2026-03-11)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.8](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.7...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.8) (2026-03-02)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.7](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.6...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.7) (2026-02-13)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.6](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.5...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.6) (2026-02-02)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.5](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.4...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.5) (2026-01-23)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.4](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.3...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.4) (2026-01-14)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.3](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.2...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.3) (2026-01-09)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

## [1.1.2](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.1...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.2) (2026-01-08)

### Bug Fixes

* upgrade eslint and xo to use flat config ([f307c0c](https://github.com/bizon/selling-partner-api-sdk/commit/f307c0c2e572352df654f2a1910b34f88b68c0f8))

## [1.1.1](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.0...@sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01@1.1.1) (2026-01-05)

**Note:** Version bump only for package @sp-api-sdk/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01

# 1.1.0 (2025-12-05)

### Features

* **clients:** update models as of 2025-12-05 ([#1639](https://github.com/bizon/selling-partner-api-sdk/issues/1639)) ([cabf126](https://github.com/bizon/selling-partner-api-sdk/commit/cabf1269136f6e17b1173e4441ac2eabb4c814df))
