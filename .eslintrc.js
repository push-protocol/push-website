module.exports = {
  extends: ['plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',

  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    ecmaVersion: 8,
  },
};
