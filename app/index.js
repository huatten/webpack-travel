import sum from './sum';
import loadImg from './loadImg'

alert(sum(1, 2));
const src = require("../images/ye.jpg");
loadImg(src).then(img => {
  alert(`图片的宽度：${img.width}`);
  return img;
}).then(img =>{
  alert(`图片的高度：${img.height}`);
  document.getElementById("app").appendChild(img);
});