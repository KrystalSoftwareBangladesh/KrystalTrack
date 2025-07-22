module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: true, // this tells ESLint to use your babel.config.js
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  rules: {
    // add custom rules here
  },
};
