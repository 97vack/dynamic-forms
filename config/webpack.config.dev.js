const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = webpackMerge.merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'verbose',
    },
    devMiddleware: {
      stats: 'errors-only',
    }
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
      inject: true,
      filename: 'index.html'
    }),
  ]
})