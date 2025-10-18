# Angular Linting Configs

Shareable linting configurations for Angular projects, including ESLint, Prettier, and Stylelint configurations.

## Installation

Install this package along with its peer dependencies:

```bash
npm install --save-dev @nikhil/ng-configs \
  @angular-eslint/eslint-plugin@^18.0.0 \
  @angular-eslint/eslint-plugin-template@^18.0.0 \
  @angular-eslint/template-parser@^18.0.0 \
  @typescript-eslint/eslint-plugin@^7.0.0 \
  @typescript-eslint/parser@^7.0.0 \
  eslint@^8.57.0 \
  prettier@^3.0.0 \
  stylelint@^16.0.0 \
  stylelint-config-standard@^36.0.0 \
  stylelint-config-standard-scss@^13.0.0
```

## Usage

### ESLint Configuration

Create or update your `.eslintrc.js` file in your Angular project:

```javascript
module.exports = {
  extends: ['./node_modules/@nikhil/ng-configs/eslint.config.js'],
  // Override or add your custom rules here
  rules: {
    // Your custom rules
  },
};
```

Alternatively, you can use `.eslintrc.json`:

```json
{
  "extends": ["./node_modules/@nikhil/ng-configs/eslint.config.js"],
  "rules": {
    // Your custom rules
  }
}
```

### Prettier Configuration

Create a `.prettierrc.js` file in your Angular project:

```javascript
module.exports = {
  ...require('@nikhil/ng-configs/prettier.config.js'),
  // Override or add your custom options here
  // printWidth: 120,
};
```

Or use `.prettierrc.json`:

```json
{
  "extends": ["@nikhil/ng-configs/prettier.config.js"]
}
```

Or reference it directly in `package.json`:

```json
{
  "prettier": "@nikhil/ng-configs/prettier.config.js"
}
```

### Stylelint Configuration

Create a `stylelint.config.js` file in your Angular project:

```javascript
module.exports = {
  extends: ['@nikhil/ng-configs/stylelint.config.js'],
  // Override or add your custom rules here
  rules: {
    // Your custom rules
  },
};
```

Or use `.stylelintrc.json`:

```json
{
  "extends": ["@nikhil/ng-configs/stylelint.config.js"],
  "rules": {
    // Your custom rules
  }
}
```

## Configuration Details

### ESLint

The ESLint configuration includes:

- Recommended ESLint rules
- TypeScript ESLint rules
- Angular-specific linting rules
- Template linting for Angular components
- Accessibility checks for templates

### Prettier

The Prettier configuration includes:

- 100 character line width
- 2 space indentation
- Single quotes
- Trailing commas (ES5)
- Line feed (LF) line endings
- Special handling for Angular HTML templates

### Stylelint

The Stylelint configuration includes:

- Standard CSS/SCSS rules
- Angular-specific selector support (ng-deep, component selectors)
- Tailwind CSS support (optional)

## Customization

All configurations are designed to be extendable. You can override any rule by specifying it in your project's configuration file.

Example of overriding ESLint rules:

```javascript
module.exports = {
  extends: ['./node_modules/@nikhil/ng-configs/eslint.config.js'],
  rules: {
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'myapp', // Custom prefix instead of 'app'
        style: 'kebab-case',
      },
    ],
  },
};
```

## NPM Scripts

Add these scripts to your `package.json` for easy linting:

```json
{
  "scripts": {
    "lint": "ng lint",
    "lint:fix": "ng lint --fix",
    "format": "prettier --write \"src/**/*.{ts,html,css,scss,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,html,css,scss,json}\"",
    "stylelint": "stylelint \"src/**/*.{css,scss}\"",
    "stylelint:fix": "stylelint \"src/**/*.{css,scss}\" --fix"
  }
}
```

## Publishing

To publish this package:

1. Update the version in `package.json`:
   ```bash
   npm version patch  # or minor, or major
   ```

2. Publish to NPM:
   ```bash
   npm publish
   ```

## License

MIT
