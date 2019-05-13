// https://eslint.org/docs/user-guide/configuring
/* eslint-disable */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  // extends: ['plugin:vue/essential', 'airbnb-base'],
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    //'vue',
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],

      // tab缩进
      'indent': [
        'warn',
        2
      ],
      // 单引号引用字符串
      'quotes': [
        'warn',
        'single'
      ],
      // 必须使用分号结束
      'semi': [
        'warn',
        'always'
      ],
      'space-before-function-paren':'off',
      'spaced-comment':'off',
      // 允许tab缩进
      'no-tabs': 'off',
      // 关闭===检测
      'eqeqeq': 'off',
      // 允许多行空行
      'no-multiple-empty-lines': 'off',
      // 允许多余空格
      'no-trailing-spaces': 'off',
      // end of file last line
      'eol-last': 'off',
      // promise reject不需要error对象
      'prefer-promise-reject-errors': 'off',

      'no-console' : 'off',

      'comma-dangle': ['warn', {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore'
      }],

    'object-shorthand': 'off',

    'no-var': 'warn',

    'arrow-parens' : 'warn',

    'prefer-const' : 'warn',

    'prefer-default-export' : 'off',

    "arrow-body-style": ["warn", "always"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
