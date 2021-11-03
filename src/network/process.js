import Vue from "vue";
import _axios from "./axios"
import store from "../store"

let baseUrl = "/process"

//新建流程
export function createProcess() {
  let api = baseUrl + "/flowCreat"
  let {
    userInfo,
    urlData,
    nodeData
  } = store.state.userData;
  let params = {
    "tzid": userInfo.userssid,
    "docId": nodeData.docId,
    "userid": userInfo.userid,
    "username": userInfo.username,
    "dxid": 18028,
    "dxlx": "jm",
    "flowid": urlData.flowid
  }
  return _axios.post(api, params)
}

// 流程办理YR
export function makeProcess(data) {
  let api = "/process/flowSend";
  let params = data;
  return _axios.post(api, params)

}

// 流程审批记录
export function getProcessRecords() {
  let api = baseUrl + "/flowSpjl"

  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": "7449",
      "nodeType": 3,
      "fields": "zbkfcs",
      "zbfields": "tbrq"
    }
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
  console.log(nodeData)
  let api = baseUrl + "/flowReturn"
  let params = {
    "flowid": urlData.flowid,
    "returnNodeid": isReturn=='return'?nodeData.nodeid-1:0,
    "username": userInfo.username,
    "userid": userInfo.userid,
    "tzid": userInfo.userssid,
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
  console.log(userInfo)
  let api = baseUrl + "/flowCurrentData"
  let params = {
    "tzid": userInfo.userssid,
    "userid": userInfo.userid,
    "username": userInfo.username,
    "dxid": 18028,
    "flowid": urlData.flowid
  }
  console.log(params)
  return _axios.post(api, params)
}
