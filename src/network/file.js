import Vue from "vue";
import _axios from "./axios"




// 附件模块
export function getAppendixs(id) {
  let api = "/dev/become?1401";
  let params = {
    "router": "jmsp",
    "data": {
      "id": id
    },
    "method": "getPicture"
  }
  return _axios.post(api, params)
}


// 获取上传外链
export function getFiles(params) {
  let api = "/file/initChunkUpload";


  return _axios.post(api, params)
}
// getAppendixs().then(da => {
//   console.log(da);
// })


// 合并文件
export function compositeFiles(params) {
  let api = "/file/composeFile";
  return _axios.post(api, params)
}

// 合并文件
export function updateFile(params) {
  let api = "/file/updateFile";
  return _axios.post(api, params)
}





// // 获取用户信息
// export function sendFile(obj) {
//     let {api,file}=obj;
//   return _axios.put(api, file);
// }
