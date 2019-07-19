const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
var path = require('path');

// var phaserModule = path.join(__dirname, '/node_modules/phaser/')
// var phaser = path.join(phaserModule, 'src/phaser.js')

var clientConfig = {
  mode: "development",
  target: 'node',
  entry: {
    app: "./client/src/index.ts",
    vendor: ['phaser']
  },
  watch: true,
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js',
    publicPath: "./dist/"
  },
  resolve: {
    extensions: [".ts", ".js"],
    // alias: {
    //     'phaser': phaser,
    // }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}] },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
}

module.exports = [ clientConfig ];