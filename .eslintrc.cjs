/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@nuxt/eslint-config',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/no-v-html': 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'no-irregular-whitespace': 'off',
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off',
    },
  }],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
}
