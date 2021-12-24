
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const servers = require('./server')
const portfinder = require('portfinder');

// const aa = '8081'
// (async ()=>{
//      const port = await portfinder.getPortPromise();
//      console.log(port, 'jjjkjjj656565655555555')
// })();

console.log(portfinder.getPortPromise(), '777777')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`http://${servers.ServerHost}:${portfinder.getPortPromise()}`],
        notes: [`22222222`]
      },
      clearConsole: true,
    })
  ],
};