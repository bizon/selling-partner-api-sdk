import process from 'process'

import type {Config} from '@jest/types'

const protectedEnv = [
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY',
  'AWS_ROLE_ARN',
  'AWS_ROLE_SESSION_NAME',
  'LWA_CLIENT_SECRET',
  'LWA_CLIENT_ID',
]

export default async function setup(): Promise<Config.InitialOptions> {
  for (const key of protectedEnv) {
    /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete */
    delete process.env[key]
  }

  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
  }
}
