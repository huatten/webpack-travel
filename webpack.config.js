'use strict';
// 自带的库
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:  './app/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, './build'), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js", // 打包后输出文件的文件名
    publicPath: '/build/' // 打包后的文件夹  必须写不然没法自动编译 ！！！！
  },
  module: {
    rules: [
      {
        test: /\.js$/, //js文件使用babel
        use: {
          loader: "babel-loader"  //使用哪个loader
        },
        exclude: /node_modules/ //不包括路劲
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  //图片正则
        use: {
          loader: "url-loader",   //使用url-loader处理css中的图片资源
          options: {
            limit: 10000, //限制图片大小小于 10000B，当图片大小不超限时，则会将图片以base64的形式打包进css文件，以减少请求次数
            name: 'images/[name].[hash].[ext]'  //[图片名].[哈希值].[图片格式]
          }
        }
      },
      {
        test: /\.css$/, //css文件使用loader
        // 写法和之前基本一致
        loader: ExtractTextPlugin.extract({
          // 必须这样写，否则会报错
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true
            }
          }]
        })
      }
    ]
  },
  plugins: [
    // 输出的文件路径
    new ExtractTextPlugin("css/app.css")
  ]
};