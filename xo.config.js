import xoBizon from 'eslint-config-xo-bizon'

/** @type {import('xo').FlatXoConfig} */
export default [
  ...xoBizon,
  {
    ignores: ['clients/*/src/api-model/**'],
  },
  {
    settings: {
      'import/internal-regex': '^@sp-api-sdk/',
    },
  },
  {
    rules: {
      'import-x/extensions': 'off',
      'n/prefer-global/url': 'off',
    },
  },
]
