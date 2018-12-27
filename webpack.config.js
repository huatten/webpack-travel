// 自带的库
const path = require('path');
module.exports = {
  entry:  './app/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js", // 打包后输出文件的文件名
    publicPath: 'build/' // 打包后的文件夹
  },
  module: {
    rules: [
      {
        test: /\.js$/, //js文件使用babel
        use: 'babel-loader', //使用哪个loader
        exclude: /node_modules/ //不包括路劲
      }
    ]
  }
};