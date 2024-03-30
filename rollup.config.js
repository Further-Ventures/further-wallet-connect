import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/main.ts',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    inlineDynamicImports: true,
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    nodePolyfills(),
    json(),
    typescript(),
  ],
};
