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
    filename: 'bundle.js',
  },
  module: {
    loaders: commonConfig.loaders,
  },
  plugins: [
    commonConfig.indexPagePlugin,
  ],
};