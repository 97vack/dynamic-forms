const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = webpackMerge.merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: './dist',
  },
})