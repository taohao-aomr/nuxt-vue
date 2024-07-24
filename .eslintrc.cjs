module.exports = {
    root: true,
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    plugins: ['vue'],

    rules: {
        camelcase: 2, // 驼峰
        indent: [2, 2], // 缩进2个空格
        semi: [2, 'never'], // 要求或禁止使用分号代替 ASI,即禁用行尾使用分号
        quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
        'no-debugger': 2, // 不能debugg
        'no-empty': 2, // 块语句中的内容不能为空
        'no-extra-parens': 2, // 禁止非必要的括号
        'no-extra-semi': 2, // 禁止多余的冒号
        'comma-dangle': [2, 'never'], // 键值对最后一个不能有,
        'spaced-comment': ['error', 'always'] // 注释必须空格
    }
};

