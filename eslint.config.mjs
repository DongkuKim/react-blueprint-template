import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    rules: {},
  },
]);
