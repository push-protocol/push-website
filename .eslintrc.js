/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    // node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@docusaurus/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@docusaurus'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
