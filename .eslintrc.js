module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // This is to fix the ``'jest-fetch-mock' should be listed in the project's
    // dependencies, not devDependencies error.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  plugins: ['jest'],
  globals: {
    fetchMock: true,
  },
};
