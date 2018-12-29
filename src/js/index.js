import Vue from 'vue';
import App from '../App';
import sum from './sum';
import loadImg from './loadImg'
import '../css/app.css'
console.log(sum(1, 2));
const src = require("../images/logo.png");
loadImg(src).then(img => {
  console.log(`图片的宽度：${img.width}`);
  return img;
}).then(img =>{
  console.log(`图片的高度：${img.height}`);
});


new Vue({
  el: '#app',
  render: h => h(App) //es6箭头函数
});