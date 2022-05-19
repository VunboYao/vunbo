import typescript from '@rollup/plugin-typescript'
import Package from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: Package.main,
    },
    {
      format: 'es',
      file: Package.module,
    },
  ],
  plugins: [typescript()],
}
