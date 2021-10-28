import Vue from "vue";
import _axios from "./axios"


let baseUrl = "/process"

//新建流程
export function createProcess() {
  let api = baseUrl + "/flowCreat"
  let params = {
    "tzid": 1,
    "docId": 0,
    "userid": 18442,
    "username": "",
    "dxid": 18028,
    "dxlx": "jm",
    "flowid": 790
  }
  return _axios.post(api, params)
}


// 流程办理
export function makeProcess() {
  let api = baseUrl + "/flowSend"

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
export function backProcess() {
  let api = baseUrl + "/flowReturn"

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

// 流程权限
export function getProcessPer() {
  let api = baseUrl + "/flowCurrentData"
  let params = {
    "tzid": 1,
    "userid": 18442,
    "username": "王晓生",
    "dxid": 18028,
    "flowid": 790
  }
  return _axios.post(api, params)
}
