module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  env: {
    node: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
