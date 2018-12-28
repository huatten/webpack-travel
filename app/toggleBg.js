/**
 * Created by jinhua on 2018/12/28.
 */

import orange from '../css/orange.css';
import gray from '../css/gray.css';

export default () =>{
  let bgFlag = true;
  document.onclick = function () {
    if(bgFlag){
      orange.use();
      gray.unuse()
    }else{
      orange.unuse();
      gray.use()
    }
    bgFlag = !bgFlag
  }
}