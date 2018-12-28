/**
 * Created by jinhua on 2018/12/27.
 */

export default  (src) => {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function() {
      reject();
    };
    img.src = src;
  });
}