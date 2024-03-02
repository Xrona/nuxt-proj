/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@nuxt/eslint-config',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    root: true,
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        quotes: ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        semi: ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-indent': 'off',
        'vue/no-v-html': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 1,
            },
        ],
        'no-irregular-whitespace': 'off',
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
}
