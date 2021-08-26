import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'clients/**/*.ts',
    'packages/**/*.ts',
  ],
  coverageReporters: [
    'lcov',
    'text-summary',
  ],
}

export default config
