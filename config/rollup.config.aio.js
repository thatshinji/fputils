const nodeResolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const common = require('./rollup.js')

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'fputils',
    banner: common.banner
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js', '.ts']
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    common.babelCompiler()
  ]
}
