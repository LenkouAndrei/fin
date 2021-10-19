module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      "plugin:prettier/recommended"
    ],
    plugins: ['import', 'react', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/dot-notation": "warn",
      "@typescript-eslint/comma-dangle": ["error", "only-multiline"]
    }
  };