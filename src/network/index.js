import Vue from "vue";
import store from "../store";
import _axios from "./axios"

// 获取所有菜单数据
export function getAllMenu() {
  let api = '/dev/become?1';
  let params = {
    router: 'jmsp',
    method: 'getMenu',
    data: {
      lx: 'jm'
    }
  };
  return _axios.post(api, params);
}

// 获取加盟信息数据
export function getJmspData(id) {
  let api = "/dev/become?2";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": id
    }
  };
  return _axios.post(api, params);
}
// 获取基本资料配置项数据
export function getZmdzlPz() {
  let api = '/dev/become?2';
  let params = {
    router: 'jmsp',
    method: 'getZmdzlPz'
  };
  return _axios.post(api, params);
}

// 获取加盟装修图片
export function getJmspImgList(tplxmc) {
  let api = '/dev/become?4';
  let params = {
    method: 'getPicture',
    router: 'jmsp',
    data: {
      id: 7449,
      tplxmc
    }
  };
  return _axios.post(api, params);
}

// 获取报价清单数据
export function getQuotationList(id, djlx) {
  // djlx=971[道具清单] 970[标志清单] 972[灯具清单] 973[模特清单] 1010[辅助道具] 1130[沙发清单]
  const map = new Map([
    ['道具清单', 971],
    ['标志清单', 970],
    ['灯具清单', 972],
    ['模型清单', 973],
    ['辅助道具', 1010],
    ['沙发清单', 1130]
  ]);
  let api = '/dev/become?601';
  let params = {
    router: 'jmsp',
    method: 'getBjqd',
    data: {
      id: id,
      djlx: map.get(djlx)
    }
  };
  return _axios.post(api, params);
}

// 开户信息
export function getKaihuData() {
  let api = "/dev/become?401";
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getKaihu",
    "data": {
      // "id": userID
      "id": 5780
    }
  };
  return _axios.post(api, params);
}

//开户批示配置项
export function getKhpsPz() {
  let api = "/dev/become?402";
  let params = {
    "router": "jmsp",
    "method": "getKhpsPz",
  }
  return _axios.post(api, params)
}

// 平面图审批
export function getPlanApproval() {
  let api = "/dev/become?501";
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": userID,
      "nodeType": "-1",
      "fields": "tzsjrq,tzqrrq,zbkjsjy,zbkjzz,zbqhbz,zbfzjlyj,zbfzjl"
    }
  };
  return _axios.post(api, params);
}
// LILANZ主品牌总经理意见审批
export function getGMApproval() {
  let api = "/dev/become?502";
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": userID,
      "nodeType": "-1",
      "fields": "zbfzcyj,zbfzc"
    }
  };
  return _axios.post(api, params);
}
// 店铺设计图片查询
export function getStoreDesignImgs(tplxmc, node = 503) {
  let method = node == 504 ? 'getPictureOld' : 'getPicture';
  let api = "/dev/become?" + node;
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": method,
    "data": {
      "id": userID,
      // "id": 7449,
      "tplxmc": tplxmc
    }
  }
  return _axios.post(api, params)
}

//注销审批表配置项
export function getZxspPz() {
  let api = "/dev/become?1301";
  let params = {
    "router": "jmsp",
    "method": "getZxspPz",
  }
  return _axios.post(api, params)
}
// 注销审批
export function getZxspbData() {
  let api = "/dev/become?1302";
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getZxspb",
    "data": {
      // "id": userID
      "id": 16752
    }
  }
  return _axios.post(api, params)
}

// 验收评分
export function getBjqdData() {
  let api = "/dev/become?901";
  let {
    userID
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getBjqd",
    "data": {
      // "id": userID
      "id": 4442,
      "djlx": 976
    }
  }
  return _axios.post(api, params)
}

//3.店铺政策批示
export function getStorePolicyOpinion(node, data) {
  let api = '/dev/become?' + node;
  let params = {
    router: 'jmsp',
    method: 'getNode',
    data: data
  };
  return _axios.post(api, params);
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
export function getJmbtfsPzList(userId = 16455) {
  let api = "/dev/become?702";
  let params = {
    "data": {
      "id": userId,
      "elit_d": "do id"
    },
    "method": "getJmbtfsPz",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 获取详细数据
export function getStoreBudgetInfo(userId = 16455) {
  let api = "/dev/become?704";
  let params = {
    "method": "getJmsp",
    "router": "jmsp",
    "data": {
      "fields": "id,jyfs,zxdcbs,zxdc,nzje,zgfs,lsje1,iszg",
      "id": userId,
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
/** 店铺预算补贴结束 */




// 陈列照片查询
export function getDpclzp(id) {
  let api = "/dev/become?801";
  let params = {
    "router": "jmsp",
    "method": "getDpclzp",
    "data": {
      "id": id || '0',
    }
  }
  return _axios.post(api, params)
}

// 陈列照片查询
export function getPicture(id, req) {
  let api = "/dev/become?802";
  let params = {
    "router": "jmsp",
    "method": "getPicture",
    "data": {
      "id": id || '0',
      "tplxmc": req.tplxmc
    }
  }
  return _axios.post(api, params)
}


// 店铺业务单据-专卖店资料
export function getDpdjZmdzl(id) {
  let api = "/dev/become?1101";
  let params = {
    "router": "jmsp",
    "method": "getDpdjZmdzl",
    "data": {
      "id": id || '0',
    }
  }
  return _axios.post(api, params)
}

// 整体信息整改
export function editJmspData(jmsp) {
  // 
  let user = store.state.userInfo;
  let api = "/dev/become?205";
  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      "jmspmx": {
        "iszdjlsp": 1,
        "isdkhsp": 1,
        "jxsTk": '',
        "isdqsp": 1
      },
      jmsp
    }
  }
  return _axios.post(api, params)
}


export function getNodeYw() {
  let api = "/dev/become?3001";
  let params = {
    "router": "jmsp",
    "method": " ",
    "data": {
      "id": "7449",
      // 实际补贴金额
    }
  }
  return _axios.post(api, params)
}


export function getActucalMoney(jmspb) {
  let api = "/dev/become?1001";
  let params = {
    "router": "jmsp",
    "method": "getDpsjbt",
    "data": {
      "id": 7449,
      "sint_3": false,
      "adipisicing_8": -8496952
    }
  }
  return _axios.post(api, params)
}



// 市场商品/运营审图审核查询
export function getNodeZbsc(id) {
  let api = "/dev/become?4002";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": id,
      "jmspmx": "zbsczyzjyj",
      "fields": "id"
    }
  }
  return _axios.post(api, params)
}
// 市场商品/运营审图审核保存
export function saveNodeZbsc(id, username, zbsczyzjyj) {
  let api = "/dev/become?4002";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": id,
      "jmspmx": "zbsczyzjyj",
      "zbsczyzj": username,
      "zbsczyzjrq": "id",
      "zbsczyzjyj": zbsczyzjyj
    }
  }
  return _axios.post(api, params)
}

// 领航副总/lilanz副总裁查询
export function getNodeZbyx(id) {
  let api = "/dev/become?304";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": id,
      "nodeType": 4,
      "fields": "zbyxld"
    }
  }
  return _axios.post(api, params)
}

// 领航副总/lilanz副总裁保存
export function saveNodeZbyx(id, username, req) {
  let api = "/dev/become?3402";
  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      "nodetype": "4",
      "jmsp": {
        "khbs": "1",
        "id": id
      },
      "jmspnodemx": JSON.stringify(req),
      "jmspmx": {
        "id": id,
        "tzsjrq": " ",
        "zbyxldrq": " ",
        "zbyxldyj": req.zbfzjlyj,
        "zbyxld": username
      }
    }
  }
  return _axios.post(api, params)
}

// 人员列表查询
export function getRys(khdm) {
  let api = "/dev/become?3001";
  let params = {
    "router": "jmsp",
    "method": "getRys",
    "data": {
      "sskhid": khdm,
    }
  }
  return _axios.post(api, params)
}

// 业务员签字数据保存
export function saveFgsywy(id, username, req) {
  let api = "/dev/become?3001";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        "id": id,
        "fgsywy": username,
        "fgsywyrq": ""
      },
      "jmsp": {
        "ywjlid": req.ywjlid,
        "id": id,
        "ywyid": req.ywyid
      }
    }
  }
  return _axios.post(api, params)
}

// 业务经理数据保存
export function saveFgsywjl(id, username, req) {
  let api = "/dev/become?3001";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        "fgsywjlrq": " ",
        "id": id,
        "fgsywjlzx": "当前用户名",
        "fgsywjlzxrq": " ",
        "fgsywjl": "当前用户名"
      },
      "jmsp": {
        "ywjlid": req.ywjlid,
        "id": id,
        "ywyid": req.ywyid
      }
    }
  }
  return _axios.post(api, params)
}

// 市场管理中心总监/副总监审批查询
export function getNodeZbzd(id) {
  let api = "/dev/become?305";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": id,
      "nodeType": 5,
      "fields": "zbzdjl,zbzdjlyj"
    }
  }
  return _axios.post(api, params)
}

// 市场管理中心总监/副总监审批保存
export function saveNodeZbzd(id, username, req) {
  let api = "/dev/become?3802";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "nodetype": "5",
      "jmspmx": {
        "zbzdjlrq": " ",
        "id": id,
        "zbzdjl": username,
        "zbzdjlyj": req.zbzdjlyj
      },
      "jmspnodemx": JSON.stringify(req),
      "jmsp": {
        "id": id,
        "khbs": "1"
      }
    },
  }
  return _axios.post(api, params)
}

// 政策管理初审批查询
export function getNodeZbkf(id) {
  let api = "/dev/become?303";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "fields": "zbkfcs",
      "id": id,
      "nodeType": "3",
      "zbfields": "tbrq"
    }
  }
  return _axios.post(api, params)
}

// 政策管理初审
export function saveNodeZbkf(id, username, req) {
  let api = "/dev/become?3301";
  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      "nodetype": "3",
      "jmsp": {
        "id": id,
        "tbrq": req.tbrq
      },
      "jmspnodemx": {
        "node_5_1": req.node_5_1,
        "node_3_1": req.node_3_1,
        "node_3_2": req.node_3_2,
        "node_xgr": req.node_xgr,
        "node_xgrq": req.node_xgrq,
        "node_2_2": req.node_2_2,
        "node_4_1": req.node_4_1,
        "node_2_1": req.node_2_1
      },
      "jmspmx": {
        "id": id,
        "zbkfcsrq": "",
        "tzsjrq": " ",
        "zbkfcsyj": req.node_4_1,
        "zbkfcs": username
      },
    }
  }
  return _axios.post(api, params)
}


