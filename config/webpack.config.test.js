const common = require('./webpack.config.prod.js');
const webpackMerge = require('webpack-merge');


module.exports = webpackMerge.merge(common, {
  devtool: 'inline-source-map'
})