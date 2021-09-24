import Vue from "vue";
import _axios from "./axios"

export function getAllMenu() {
  let api = "/dev/become?1";
  let params = {
    "router": "jmsp",
    "method": "getMenu",
    "data": {
      "lx": "jm"
    }
  }
  return _axios.post(api, params)
}

// 获取加盟信息数据
export function getJmspData() {
  let api = "/dev/become?2";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": 7288
    }
  }
  return _axios.post(api, params)
}


export function getJmspImgList(tplxmc) {
  let api = "/dev/become?4";
  let params = {
    "method": "getPicture",
    "router": "jmsp",
    "data": {
      "id": 7449,
      tplxmc
    }
  }
  return _axios.post(api, params)

}

// 开户信息
export function getKaihuData() {  
  let api = "/dev/become?401";
  let params = {
    "method": "getKaihu",
    "router": "jmsp",
    "data": {
      "id": 5780
    }
  }
  return _axios.post(api, params)
}