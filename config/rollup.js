const pkg = require("../package.json");
const babel = require("@rollup/plugin-babel");

const version = pkg.version;
const name = pkg.name;

const banner = `/*!
  * ${name} ${version}
  * Licensed under MIT
  */
`;

const extensions = [".js", ".ts"];

const babelCompiler = (opt) => {
  return babel({
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, ie >=8, Chrome >= 45, safari >= 10",
            node: "current",
          },
          modules: false,
          loose: false,
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          helpers: true,
          regenerator: true,
        },
      ],
    ],
    babelHelpers: "runtime",
    exclude: "node_modules/**",
    extensions,
    env: {
      test: {
        plugins: ["istanbul"],
      },
    },
  });
};

exports.banner = banner;
exports.babelCompiler = babelCompiler;
