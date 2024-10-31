module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'public/assets'],
  rules: {
    'operator-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/html-closing-bracket-newline': 2,
    'linebreak-style': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-multi-assign': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'max-len': 'off',
    'vue/valid-v-on': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-duplicates': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
