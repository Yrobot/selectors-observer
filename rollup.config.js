import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'es',
      sourcemap: false,
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'SelectorsObserver',
      sourcemap: false,
    },
  ],
  plugins: [
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['**/*'],
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
