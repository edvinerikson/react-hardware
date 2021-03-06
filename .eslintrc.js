module.exports = {
  parser: 'babel-eslint',
  'extends': './node_modules/fbjs-scripts/eslint/.eslintrc.js',
  plugins: [
    'react',
  ],
  globals: {
    ReactComponent: true,
    React$Component: true,
    ReactClass: true,
    React$Element: true,
  },
  rules: {
    'react/jsx-uses-react': 2,
  },
};
