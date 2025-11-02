import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
      ecmaVersion: 2021,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-var': 'error',
      'indent': [
        'error',
        2,
        {
          FunctionDeclaration: { parameters: 'first' },
          MemberExpression: 2,
        },
      ],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
]);
