# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.6...@sp-api-sdk/typescript-config@2.0.0) (2026-05-27)

* chore!: migrate to tsup with modern exports (#1788) ([20f7731](https://github.com/bizon/selling-partner-api-sdk/commit/20f77312a1dda1d6a48efc5d48e6ba56e034bd6e)), closes [#1788](https://github.com/bizon/selling-partner-api-sdk/issues/1788)

### BREAKING CHANGES

* dist layout changed from dist/{cjs,es,types}/ to a
flat dist/. Consumers using only the documented barrel import
(import {X} from '@sp-api-sdk/<package>') are unaffected. Any
undocumented deep imports into dist/cjs/... etc. now fail with
ERR_PACKAGE_PATH_NOT_EXPORTED.

## [1.0.6](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.5...@sp-api-sdk/typescript-config@1.0.6) (2026-01-23)

**Note:** Version bump only for package @sp-api-sdk/typescript-config

## [1.0.5](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.4...@sp-api-sdk/typescript-config@1.0.5) (2026-01-09)

**Note:** Version bump only for package @sp-api-sdk/typescript-config

## [1.0.4](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.3...@sp-api-sdk/typescript-config@1.0.4) (2026-01-08)

### Bug Fixes

* upgrade eslint and xo to use flat config ([f307c0c](https://github.com/bizon/selling-partner-api-sdk/commit/f307c0c2e572352df654f2a1910b34f88b68c0f8))

## [1.0.3](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.2...@sp-api-sdk/typescript-config@1.0.3) (2025-12-05)

**Note:** Version bump only for package @sp-api-sdk/typescript-config

## [1.0.2](https://github.com/bizon/selling-partner-api-sdk/compare/@sp-api-sdk/typescript-config@1.0.1...@sp-api-sdk/typescript-config@1.0.2) (2025-08-28)

**Note:** Version bump only for package @sp-api-sdk/typescript-config

## 1.0.1 (2025-08-26)

**Note:** Version bump only for package @sp-api-sdk/typescript-config
