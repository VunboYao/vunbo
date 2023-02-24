import typescript from '@rollup/plugin-typescript'
// Babel打包库
import { babel } from '@rollup/plugin-babel'
// 压缩文件
import { terser } from 'rollup-plugin-terser'
// .d.ts文件独立导出
import dts from 'rollup-plugin-dts'
import Package from './package.json'

export default function() {
  // 打包esm
  const generateESM = {
    input: './src/index.ts',
    output: [
      {
        format: 'es',
        file: Package.module,
      },
    ],
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      terser(),
    ],
  }

  // 构建.d.ts文件
  const generateDTS = {
    input: [
      './src/index.ts',
    ],
    output: [
      {
        format: 'es',
        file: Package.types,
      },
    ],
    plugins: [dts()],
  }
  return [generateESM, generateDTS]
}
