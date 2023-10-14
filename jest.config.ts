import process from 'node:process'

import {type Config} from '@jest/types'

export default async function setup(): Promise<Config.InitialOptions> {
  // Delete sensitive environment variables
  delete process.env.LWA_CLIENT_SECRET
  delete process.env.LWA_CLIENT_ID

  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['clients/*/src/*.ts', 'packages/*/src/**/*.ts'],
    coverageReporters: ['lcov', 'text-summary'],
  }
}
