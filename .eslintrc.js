module.exports = {
    root: true, 
    env: {
      node: true, 
      browser: true, 
      es2021: true, 
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended', 
    ],
    parserOptions: {
      ecmaVersion: 12, 
      sourceType: 'module', 
    },
    rules: {
      
    },
  };