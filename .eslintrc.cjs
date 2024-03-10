module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['@nuxt', "plugin:tailwindcss/recommended"],
    plugins: ['nuxt'],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 2],
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
                multiline: 'always',
                selfClosingTag: {
                    singleline: 'never',
                    multiline: 'always',
                },
            },
        ],
        'vue/html-indent': [
            'error',
            2,
            {
                baseIndent: 1,
            },
        ],
        'vue/no-v-html': 'off',
        'vue/script-indent': [
            'error',
            2,
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
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                'ignoreWhenNoAttributes': true,
                'ignoreWhenEmpty': true,
                'externalIgnores': [],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            { blankLine: 'always', prev: 'export', next: '*' },
            { blankLine: 'any', prev: 'export', next: 'export' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
        ],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'tailwindcss/no-custom-classname': 'off',
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
