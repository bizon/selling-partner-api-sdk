import setup from '@sp-api-sdk/jest/config'

export default async function config() {
  return {
    ...(await setup()),
    // The codegen has no `src` directory, its sources sit at the root
    collectCoverageFrom: ['utils/*.ts'],
  }
}
