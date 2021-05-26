import type {Config} from '@jest/types'

const protectedEnv = [
	'AWS_ACCESS_KEY',
	'AWS_CLIENT_SECRET',
	'AWS_CLIENT_ID',
	'AWS_CLIENT_SECRET'
]

export default async function setup(): Promise<Config.InitialOptions> {
	for (const key of protectedEnv) {
		/* eslint-disable-next-line @typescript-eslint/no-dynamic-delete */
		delete process.env[key]
	}

	return {
		preset: 'ts-jest',
		testEnvironment: 'node'
	}
}
