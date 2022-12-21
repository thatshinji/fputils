const pkg = require('../package.json')
const babel = require('@rollup/plugin-babel')

const version = pkg.version
const name = pkg.name
const banner = `/*!
  * ${name} ${version}
  * Licensed under MIT
  */
`;
const extensions = ['.js', '.ts']

const babelCompiler = (opt) => {
  return babel({
    babelrc:false,
    presets: [
      [
        '@babel/preset-typescript',
        {
          allowDeclareFields: true,
          allowNamespaces: true,
          dts: true,
          optimizeConstEnums: true,
        }
      ],
      [
        '@babel/preset-env',
          {
            targets: {
              browsers: 'last 2 versions, > 1%, ie >=8, Chrome >= 45, safari >= 10',
              node: true
            },
            modules: false,
            loose: false,
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ]
      ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: false,
        }
      ],
    ],
    babelHelpers: 'inline',
    exclude: 'node_modules/**',
    extensions,
  })
}

exports.banner = banner
exports.babelCompiler = babelCompiler