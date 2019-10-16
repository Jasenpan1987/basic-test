import pkg from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const external = Object.keys(pkg.peerDependencies || {});
const outputName = "basicTest";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.tsx",
  output: [
    { sourcemap: true, name: outputName, file: pkg.main, format: "cjs" },
    { sourcemap: true, name: outputName, file: pkg.module, format: "es" }
  ],
  plugins: [typescript(), resolve(), commonjs()],
  external: [...Object.keys(pkg.peerDependencies || {})]
};
