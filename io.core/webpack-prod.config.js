var commonConfig = require('./webpack-common.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

module.exports = {
  entry: [
    // our entry file
    './app/main.jsx',
  ],
  output: {
    path: './build',
    filename: './bundle.js',
  },
  devtool:'source-map',
  devServer: {
    // proxy calls to api to our own node server backend
    proxy: {
      '/api/*': 'http://localhost:5000/'
    }
  },
  module: {
    loaders: commonConfig.loaders,
  },
  plugins: [
    commonConfig.indexPagePlugin,
  ],
};