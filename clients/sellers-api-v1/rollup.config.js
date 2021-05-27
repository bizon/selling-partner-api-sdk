import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

/* eslint-disable-next-line import/no-anonymous-default-export */
export default [
	// ES Modules
	{
		input: 'index.ts',
		output: {
			file: 'dist/index.es.js', format: 'es'
		},
		plugins: [
			typescript(),
			json()
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
			typescript(),
			json()
		]
	}
]
