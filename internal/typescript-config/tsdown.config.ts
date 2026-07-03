import {defineConfig} from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  dts: true,
  // Match the extensions the package `exports` maps expect: ESM `.js`/`.d.ts`,
  // CJS `.cjs`/`.d.cts` (tsdown otherwise defaults to `.mjs` for Node platforms).
  fixedExtension: false,
})
