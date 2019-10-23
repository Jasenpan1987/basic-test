// import pkg from "./package.json";
// import commonjs from "rollup-plugin-commonjs";
// import resolve from "rollup-plugin-node-resolve";
// import typescript from "rollup-plugin-typescript2";
// import uglify from "rollup-plugin-uglify-es";

// const external = Object.keys(pkg.peerDependencies || {});
// const outputName = "basicTest";

// const extensions = [".js", ".jsx", ".ts", ".tsx"];

// export default {
//   input: "src/index.tsx",
//   output: [
//     { sourcemap: true, name: outputName, file: pkg.main, format: "cjs" },
//     { sourcemap: true, name: outputName, file: pkg.module, format: "es" }
//   ],
//   plugins: [typescript(), resolve(), commonjs(), uglify()],
//   external: [...Object.keys(pkg.peerDependencies || {})]
// };

import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const name = "RollupTypeScriptBabel";

export default {
  input: "./src/index.tsx",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external

  plugins: [
    external(),
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ["./src/**/*"], exclude: "node_modules/**" })
  ],

  output: [
    {
      file: "./dist/index.js",
      format: "cjs"
    },
    {
      file: "./dist/index.esm.js",
      format: "es"
    }
  ]
};
