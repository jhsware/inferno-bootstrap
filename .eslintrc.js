exports.root = true;

exports.plugins = ['prettier'];

exports.extends = ['standard', 'standard-react', 'prettier', 'prettier/react'];

exports.parser = 'babel-eslint';

exports.env = {
  browser: true,
};

exports.settings = {
  inferno: {
    version: '5',
  },
};

exports.globals = {
};

exports.rules = {
  // prettier
  'prettier/prettier': ['error', { trailingComma: 'all', singleQuote: true, semi: false, }],
  curly: ['error', 'multi-line'],
  'no-unexpected-multiline': 'off',
};