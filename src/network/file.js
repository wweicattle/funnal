import Vue from "vue";
import _axios from "./axios"



let file;
if (process.env.NODE_ENV == "development") {
  file = '/file'
} else {
  file = "http://webt.lilang.com:8901/svr-businesstool/uploadFile";
}



// 获取上传外链
export function getFiles(params) {
  let api = file + "/initChunkUpload";


  return _axios.post(api, params)
}
// getAppendixs().then(da => {
//   console.log(da);
// })


// 合并文件
export function compositeFiles(params) {
  let api = file + "/composeFile";
  return _axios.post(api, params)
}

// 更新文件
export function updateFile(params) {
  let api = file + "/updateFile";
  return _axios.post(api, params)
}



// 更新文件
export function deleteFile(params) {
  let api = file + "/deleteFile";
  return _axios.post(api, params)
}
