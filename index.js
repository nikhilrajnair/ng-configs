const path = require('path');

module.exports = {
  eslint: require('./configs/eslint.config.js'),
  prettier: require('./configs/prettier.config.js'),
  stylelint: require('./configs/stylelint.config.js'),
  
  // Path helpers for additional configs
  paths: {
    tsconfig: path.join(__dirname, 'configs/tsconfig.json'),
    editorconfig: path.join(__dirname, 'configs/.editorconfig'),
    vscodeSettings: path.join(__dirname, 'configs/.vscode/settings.json'),
    huskyConfig: path.join(__dirname, 'configs/husky.json'),
    lintStaged: path.join(__dirname, 'configs/lint-staged.json'),
  }
};
