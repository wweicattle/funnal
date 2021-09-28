import Vue from "vue";
import _axios from "./axios"

// 获取所有菜单数据
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
// 获取基本资料配置项数据
export function getZmdzlPz() {
  let api = "/dev/become?2";
  let params = {
    "router": "jmsp",
    "method": "getZmdzlPz"
  }
  return _axios.post(api, params)
}

// 获取加盟装修图片
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

// 获取报价清单数据
export function getQuotationList(djlx) {
  // djlx=971[道具清单] 970[标志清单] 972[灯具清单] 973[模特清单] 1010[辅助道具] 1130[沙发清单] 
  const map = new Map([
    ['道具清单', 971],
    ['标志清单', 970],
    ['灯具清单', 972],
    ['模型清单', 973],
    ['辅助道具', 1010],
    ['沙发清单', 1130],
  ]);
  let api = "/dev/become?601";
  let params = {
    "router": "jmsp",
    "method": "getBjqd",
    "data": {
      "id": 4442,
      djlx:map.get(djlx)
    }
  }
  return _axios.post(api, params)
}


