import Vue from "vue";
import _axios from "./axios"
import store from "../store"

let baseUrl;
// if (process.env.NODE_ENV == "development") {
//   baseUrl = '/process'
// } else {
  baseUrl = "http://webt.lilang.com:8901/svr-flow";
// }
//新建流程
export function createProcess() {
  let api = baseUrl + "/flowCreat"
  let {
    userInfo,
    urlData,
    nodeData
  } = store.state.userData;
  let params = {
    "tzid": 1,
    "docId": nodeData.docId,
    "userid": userInfo.userid,
    "username": userInfo.username,
    // "dxid": 18028,
    dxid:urlData.id,
    "dxlx": urlData.lx=="jm"?"jm":"zg",
    "flowid": urlData.flowid
  }
  return _axios.post(api, params)
}

// 流程办理YR
export function makeProcess(data) {
  let api = baseUrl + "/flowSend";
  let params = data;
  return _axios.post(api, params)

}

// 流程审批记录
export function getProcessRecords() {
  let api = baseUrl + "/flowSpjl"
  let {
    userInfo,
    nodeData
  } = store.state.userData;
  let params = {
    tzid: 1,
    docId: nodeData.docId
  }
  return _axios.post(api, params)
}



// 流程退办
export function backProcess(isReturn) {
  let {
    userInfo,
    urlData,
    nodeData
  } = store.state.userData;
  let api = baseUrl + "/flowReturn"
  let params = {
    "flowid": urlData.flowid,
    "returnNodeid": isReturn == 'return' ? nodeData.nodelist.pop() : 0,
    "username": userInfo.username,
    "userid": userInfo.userid,
    "tzid": 1,
    "docId": nodeData.docId
  }
  return _axios.post(api, params)
}

// 流程权限
export function getProcessPer() {
  let {
    userInfo,
    urlData,
    nodeData
  } = store.state.userData;
  let api = baseUrl + "/flowCurrentData"
  let params = {
    "tzid": 1,
    "userid": userInfo.userid,
    "username": userInfo.username,
    // "dxid": 18028,
    dxid:urlData.id,
    "flowid": urlData.flowid
  }
  return _axios.post(api, params)
}


// 流程权限
export function getBatchDatas() {
  let {
    userInfo,
    urlData,
    nodeData
  } = store.state.userData;
  let api = baseUrl + "/flowSheetOld"
  let params = {
    "tzid": 1,
    docId:nodeData.docId,
    "flowid": urlData.flowid
  }
  return _axios.post(api, params)
}
