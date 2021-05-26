module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	// The glob patterns Jest uses to detect test files
	testMatch: [
		'<rootDir>/__tests__/**/*.spec.ts'
	],
	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: [
		'<rootDir>/build/',
		'<rootDir>/node_modules/'
	]
}
