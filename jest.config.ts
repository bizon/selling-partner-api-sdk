import process from 'process'

import type {Config} from '@jest/types'

export default async function setup(): Promise<Config.InitialOptions> {
  // Delete sensitive environment variables
  delete process.env.AWS_ACCESS_KEY_ID
  delete process.env.AWS_SECRET_ACCESS_KEY
  delete process.env.AWS_ROLE_ARN
  delete process.env.AWS_ROLE_SESSION_NAME
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
