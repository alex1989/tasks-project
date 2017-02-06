var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');
var webpack = require('webpack');

console.log('dirname', __dirname);

module.exports = {
  entry: './src/index.js',
  output: { 
    path: path.join(__dirname, '../app/static/'),
    filename: 'bundle.js',
    publicPath : 'http://localhost:3333/'
  },
  debug   : true,
  watch   : true,
  devServer: {
    proxy: {
      '/ajax/*': 'http://localhost:3333/'
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    publicPath: "http://localhost:3333/",
    outputPath: path.join(__dirname, '../app/static/'),
  },
  plugins: [
    new WriteFilePlugin()
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude : [/node_modules/]
      }, { 
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensiions: ['', 'js']
  }
};