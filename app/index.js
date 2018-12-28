import sum from './sum';
import loadImg from './loadImg'
import toggleBg from './toggleBg'


console.log(sum(1, 2));
const src = require("../images/logo.png");
loadImg(src).then(img => {
  console.log(`图片的宽度：${img.width}`);
  return img;
}).then(img =>{
  console.log(`图片的高度：${img.height}`);
  document.getElementById("app").appendChild(img);
});