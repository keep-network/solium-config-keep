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
    "error-reason": ["error", { "errorMessageMaxLength": 250 }],

    "no-empty-blocks": "warning",
    "deprecated-suicide": "warning",
    "pragma-on-top": "error",
    "emit": "error",
    "no-constant": "warning",
    "max-len": "error",
    "constructor": "error",
    "visibility-first": "error",

    "lbrace": "off",
    "mixedcase": "off",
    "camelcase": "off",
    "uppercase": "off",
    "blank-lines": "off",
    "arg-overflow": "off",
    "function-order": "error",
    "no-experimental": "error",

    // Handled by prettier
    "indentation": ["off"],
    "conditionals-whitespace": "off",
    "whitespace": "off",
    "function-whitespace": "off",
    "semicolon-whitespace": "off",
    "comma-whitespace": "off",
    "operator-whitespace": "off",
    "no-trailing-whitespace": "off"
  },
};
