# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.0](https://github.com/bizon/selling-partner-api-sdk/compare/%40sp-api-sdk%2Forders-api-2026-01-01%402.1.0...%40sp-api-sdk%2Forders-api-2026-01-01%402.2.0) (2026-07-21)

### Features

* bump lint dependencies, fix issues, require node 20 ([76a34f6](https://github.com/bizon/selling-partner-api-sdk/commit/76a34f6a2fd11ec6e433ac69c92562c1415bae63))

# [2.1.0](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@2.0.0...@sp-api-sdk/orders-api-2026-01-01@2.1.0) (2026-05-28)

### Features

* **clients:** update models as of 2026-05-28 ([#1799](https://github.com/bizon/selling-partner-api-sdk/issues/1799)) ([0a054c9](https://github.com/bizon/selling-partner-api-sdk/commit/0a054c9f0358a7903a89cee0c8d40fa48540200c))

# [2.0.0](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@1.2.0...@sp-api-sdk/orders-api-2026-01-01@2.0.0) (2026-05-27)

* chore!: migrate to tsup with modern exports (#1788) ([20f7731](https://github.com/bizon/selling-partner-api-sdk/commit/20f77312a1dda1d6a48efc5d48e6ba56e034bd6e)), closes [#1788](https://github.com/bizon/selling-partner-api-sdk/issues/1788)

### BREAKING CHANGES

* dist layout changed from dist/{cjs,es,types}/ to a
flat dist/. Consumers using only the documented barrel import
(import {X} from '@sp-api-sdk/<package>') are unaffected. Any
undocumented deep imports into dist/cjs/... etc. now fail with
ERR_PACKAGE_PATH_NOT_EXPORTED.

# [1.2.0](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@1.1.3...@sp-api-sdk/orders-api-2026-01-01@1.2.0) (2026-04-30)

### Features

* **clients:** update models as of 2026-04-30 ([#1760](https://github.com/bizon/selling-partner-api-sdk/issues/1760)) ([67ccc67](https://github.com/bizon/selling-partner-api-sdk/commit/67ccc67279668dc9938ffa29028c11187b59d925))

## [1.1.3](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@1.1.2...@sp-api-sdk/orders-api-2026-01-01@1.1.3) (2026-03-11)

**Note:** Version bump only for package @sp-api-sdk/orders-api-2026-01-01

## [1.1.2](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@1.1.1...@sp-api-sdk/orders-api-2026-01-01@1.1.2) (2026-03-02)

**Note:** Version bump only for package @sp-api-sdk/orders-api-2026-01-01

## [1.1.1](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/orders-api-2026-01-01@1.1.0...@sp-api-sdk/orders-api-2026-01-01@1.1.1) (2026-02-13)

**Note:** Version bump only for package @sp-api-sdk/orders-api-2026-01-01

# 1.1.0 (2026-02-02)

### Features

* **clients:** update models as of 2026-01-31 ([#1684](https://github.com/bizon/selling-partner-api-sdk/issues/1684)) ([9d1031f](https://github.com/bizon/selling-partner-api-sdk/commit/9d1031f403d5c2216b4eab5f4cebc48e371f1f9f))
