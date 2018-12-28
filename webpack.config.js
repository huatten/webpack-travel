'use strict';
// 自带的库
const path = require('path');
module.exports = {
  entry:  './app/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, './build'), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js", // 打包后输出文件的文件名
    publicPath: './build/' // 打包后的文件夹
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
        use: [
          {
            loader: "style-loader/useable",
          },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          }
        ]
      }
    ]
  },
  plugins: [

  ]
};