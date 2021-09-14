module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
}
