
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const servers = require('./server')
const portfinder = require('portfinder');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,//不转换的文件
          use: [{
              loader: 'babel-loader'
          }]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve('../src'),
      'types': resolve('../types'),
      'instance': resolve('../src/instance'),
      // 'util': resolve('../src/core/util')
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      // compilationSuccessInfo: {
      //   messages: [`http://${servers.ServerHost}:${portfinder.getPortPromise()}`],
      // },
      clearConsole: true,
    })
  ],
};