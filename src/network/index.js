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
      djlx: map.get(djlx)
    }
  }
  return _axios.post(api, params)
}

// 开户信息
export function getKaihuData() {
  let api = "/dev/become?401";
  let params = {
    "router": "jmsp",
    "method": "getKaihu",
    "data": {
      "id": 5780
    }
  }
  return _axios.post(api, params)
}

// 平面图审批
export function getPlanApproval() {
  let api = "/dev/become?501";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": 7449,
      "nodeType": "-1",
      "fields": "tzsjrq,tzqrrq,zbkjsjy,zbkjzz,zbqhbz,zbfzjlyj,zbfzjl"
    }
  }
  return _axios.post(api, params)
}
// LILANZ主品牌总经理意见审批
export function getGMApproval() {
  let api = "/dev/become?502";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": 7449,
      "nodeType": "-1",
      "fields": "zbfzcyj,zbfzc"
    }
  }
  return _axios.post(api, params)
}
// 店铺设计图片查询
export function getStoreDesignImgs(tplxmc) {
  let api = "/dev/become?503";
  let params = {
    "router": "jmsp",
    "method": "getPicture",
    "data": {
      "id": 7449,
      "tplxmc": tplxmc
    }
  }
  return _axios.post(api, params)
}
/**店铺预算补贴 */
// 获取经营方式选择
export function getJyfsList() {
  let api = "/dev/become?701";
  let params = {
    "method": "getJyfs",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 获取装修档次
export function getZxdcList() {
  let api = "/dev/become?702";
  let params = {
    "method": "getZxdc",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 货柜灯具补贴方式
export function getJmbtfsPzList() {
  let api = "/dev/become?702";
  let params = {
    "data": {
      "id": 16455,
      "elit_d": "do id"
    },
    "method": "getJmbtfsPz",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 获取详细数据
export function getStoreBudgetInfo() {
  let api = "/dev/become?704";
  let params = {
    "method": "getJmsp",
    "router": "jmsp",
    "data": {
      "fields": "id,jyfs,zxdcbs,zxdc,nzje,zgfs,lsje1,iszg",
      "id": 16455,
      "mxfields": "zbkjsjy,zbzcgl,fgszjlbt,fgsdqjl,fgsclbtfs"
    }
  }
  return _axios.post(api, params)
}
// 当店铺为整改店铺时
export function getZgfs() {
  let api = "/dev/become?705";
  let params = {
    "router": "jmsp",
    "method": "getZgfs"
  }
  return _axios.post(api, params)
}
