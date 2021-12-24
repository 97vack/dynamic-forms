const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')


module.exports = webpackMerge.merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../public'),
    library: {
      name: 'dynamicForms',
      type: 'umd',
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          filename: '[name].bundle.js',
        },
      },
    },
    
  },
})