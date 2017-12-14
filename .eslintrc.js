// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: ['html'],
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
      /* "off" 或 0 - 关闭规则
      *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
      *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
      */
        // don't require .vue extension when importing
        'import/extensions': [
            'error',
            'always', {
                js: 'never',
                vue: 'never'
            }
        ],
        //comma
        'comma-dangle': [0, 'never'],
        //semicolon
        'semi': 0,
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error', {
                optionalDependencies: ['test/unit/index.js']
            }
        ],
        'no-console': process.env.NODE_ENV === 'production'
        ? 'error'
        : 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production'
            ? 'error'
            : 'off'
    }
}
