const webpack = require('webpack')
const path = require('path')

const babelPlugins = [
  'babel-plugin-transform-object-rest-spread',
  'babel-plugin-syntax-jsx',
  'add-module-exports',
  [
    'babel-plugin-inferno',
    {
      'imports': true
    }
  ]
]

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    context: path.resolve(__dirname, './src/testContext.js'),
    testImports: path.resolve(__dirname, './src/testImports.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        // babel-loader doesn't pick up the transform-decorators-legacy plugin setting from babelrc entry in packageon
        plugins: babelPlugins
      }
    }]
  }
}
