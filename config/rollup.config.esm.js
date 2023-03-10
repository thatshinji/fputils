const nodeResolve = require("@rollup/plugin-node-resolve");
const common = require("./rollup.js");

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.esm.js",
    format: "es",
    banner: common.banner,
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js", ".ts"],
    }),
    common.babelCompiler(),
  ],
};
