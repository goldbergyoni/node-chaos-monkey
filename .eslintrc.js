module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'plugin:promise/recommended', 'plugin:security/recommended'],
  env: {
    node: true,
    es6: true
  },
  plugins: ['react', 'promise', 'security'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
