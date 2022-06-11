const common = require('./webpack.config.dev.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = webpackMerge.merge(common, {
  entry: './src/test/index.ts',
  plugins: [
   
  ]
})