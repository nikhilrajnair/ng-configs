module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    // Angular specific rules
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^app-/'],
      },
    ],
    'no-empty-source': null,
    
    // SCSS specific rules
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'scss/operator-no-newline-before': null,
    'scss/operator-no-unspaced': null,
    
    // CSS properties
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    
    // General rules
    'at-rule-no-unknown': null,
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    
    // CSS/SCSS formatting
    'indentation': 2,
    'string-quotes': 'single',
    'max-nesting-depth': 3,
    'declaration-no-important': [true, { severity: 'warning' }],
  },
};
