import xoBizon from 'eslint-config-xo-bizon'
import {type FlatXoConfig} from 'xo'

export default [
  ...xoBizon,

  {
    ignores: ['clients/*/src/api-model/**', 'packages/schemas/src/**', '**/CHANGELOG.md'],
  },

  {
    settings: {
      'import-x/internal-regex': '^@sp-api-sdk/',
    },
  },

  {
    files: ['**/*.ts'],
    rules: {
      'import-x/extensions': 'off',
      'n/prefer-global/url': 'off',
      'jsdoc/require-param': ['error', {checkDestructured: false}],
      'jsdoc/check-param-names': ['error', {checkDestructured: false}],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true,
          allowNullableObject: true,
          allowNullableString: true,
          allowNumber: false,
          allowString: false,
        },
      ],
      'unicorn/name-replacements': [
        'error',
        {
          replacements: {
            fn: false,
            i: false,
            props: false,
            application: false,
            configuration: false,
          },
        },
      ],
    },
  },
] satisfies FlatXoConfig
