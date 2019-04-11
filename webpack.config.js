const webpack = require('webpack');
const path = require('path');
require('dotenv').config();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: [
    './src/app.ts'
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'drrt',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  cache: false,
  optimization: {
    minimize: true,
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    watchContentBase: true,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0',
    inline: true
  },
  plugins: [
    new BundleAnalyzerPlugin(), 
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
};
