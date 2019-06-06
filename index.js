'use strict';

module.exports = {
  // Due to issues with Solium, shareable configs don't currently support extension.
  // Sigh!
  // https://sourcegraph.com/github.com/duaraghav8/Ethlint/-/blob/config/schemas/sharable-config.js
  // 'extends': 'solium:recommended',
  
  'rules': {
    'quotes': [
      'error',
      'double',
    ],
    'indentation': [
      'error',
      4,
    ],
    'security/no-block-members': ['off', ['timestamp']],
  },
};
