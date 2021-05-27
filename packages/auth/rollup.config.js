import typescript from 'rollup-plugin-typescript2'

/* eslint-disable-next-line import/no-anonymous-default-export */
export default [
	// ES Modules
	{
		input: 'index.ts',
		output: {
			file: 'dist/index.es.js', format: 'es'
		},
		plugins: [
			typescript()
		]
	},

	// COMMONJS
	{
		input: 'index.ts',
		output: {
			dir: 'dist',
			format: 'cjs'
		},
		plugins: [
			typescript()
		]
	}
]
