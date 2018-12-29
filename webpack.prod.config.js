/**
 * Created by jinhua on 2018/12/29.
 */
const webpack = require("webpack");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require("webpack-merge");
const webbackBaseConfig = require("./webpack.config");

webbackBaseConfig.plugins = [];

module.exports = merge(webbackBaseConfig, {
  output: {
    publicPath: "/build/",
    filename: "main.js"
  },
  plugins:[
    new ExtractTextPlugin({
      filename: "main.css",
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {safe: true, discardComments: {removeAll: true}},
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ //压缩js插件
      compress: {
        warnings: false
      }
    })
  ]
});