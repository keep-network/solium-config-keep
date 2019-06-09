'use strict';

module.exports = {
  // Due to issues with Solium, shareable configs don't currently support extension.
  // Sigh!
  // https://sourcegraph.com/github.com/duaraghav8/Ethlint/-/blob/config/schemas/sharable-config.js
  // 'extends': 'solium:recommended',
  
  'rules': {
    "imports-on-top": "error",
    "variable-declarations": "error",
    "array-declarations": "error",
    "no-unused-vars": "error",
    'quotes': ['error', 'double'],
    "value-in-payable": "error",
    "linebreak-style": "error",

    "no-empty-blocks": "warning",
    "indentation": ["error", 4],
    "whitespace": "warning",
    "deprecated-suicide": "warning",
    "pragma-on-top": "error",
    "function-whitespace": "error",
    "semicolon-whitespace": "error",
    "comma-whitespace": "error",
    "operator-whitespace": "off",
    "emit": "error",
    "no-constant": "warning",
    "max-len": "error",
    "error-reason": "error",
    "constructor": "error",
    "visibility-first": "error",

    "lbrace": "off",
    "mixedcase": "off",
    "camelcase": "off",
    "uppercase": "off",
    "blank-lines": "off",
    "arg-overflow": "off",
    "function-order": "error",
    "conditionals-whitespace": "off",
    "no-experimental": "error",
    "no-trailing-whitespace": "warning"
  },
};
