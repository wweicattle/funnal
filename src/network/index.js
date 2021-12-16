import Vue from "vue";
import store from "../store";
import _axios from "./axios"
let time = new Date();
let nowTime = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`

let baseUrl

if (process.env.NODE_ENV == "development") {
  baseUrl = '/dev'
} else {
  baseUrl = "http://webt.lilang.com:8901/svr-become";
}




// 获取所有菜单数据
export function getAllMenu() {
  let api = baseUrl + '/become?1';
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
  let api = baseUrl + "/become?2";
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
  let api = baseUrl + '/become?2';
  let params = {
    router: 'jmsp',
    method: 'getZmdzlPz'
  };
  return _axios.post(api, params);
}


// 获取客户列表查询
export function getKhList(obj) {
  let api = baseUrl + '/become?206';
  let params = {
    "data": obj,
    "method": "getCusList",
    "router": "jmsp"
  }
  return _axios.post(api, params);
}


// 获取客户列表查询
export function getProKhList(obj) {
  let api = baseUrl + '/become?207';
  let params = {
    "data": obj,
    "method": "getSsCusList",
    "router": "jmsp"
  }
  return _axios.post(api, params);
}
// 获取加盟装修图片
export function getJmspImgList(tplxmc) {
  let id = store.state.userData.urlData.id;
  let api = baseUrl + '/become?4';
  let params = {
    method: 'getPicture',
    router: 'jmsp',
    data: {
      id,
      tplxmc
    }
  };
  return _axios.post(api, params);
}

// 获取报价清单数据
export function getQuotationList(djlx) {
  let id = store.state.userData.urlData.id;
  // djlx=971[道具清单] 970[标志清单] 972[灯具清单] 973[模特清单] 1010[辅助道具] 1130[沙发清单]
  const map = new Map([
    ['道具清单', 971],
    ['标志清单', 970],
    ['灯具清单', 972],
    ['模型清单', 973],
    ['辅助道具', 1010],
    ['沙发清单', 1130]
  ]);
  let api = baseUrl + '/become?601';
  let params = {
    router: 'jmsp',
    method: 'getBjqd',
    data: {
      // id: 4442,
      id,
      djlx: map.get(djlx)
    }
  };
  return _axios.post(api, params);
}

// 开户信息
export function getKaihuData() {
  let api = baseUrl + "/become?401";
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getKaihu",
    "data": {
      "id": urlData.id
      // "id": 5780
    }
  };
  return _axios.post(api, params);
}

//开户批示配置项
export function getKhpsPz() {
  let api = baseUrl + "/become?402";
  let params = {
    "router": "jmsp",
    "method": "getKhpsPz",
  }
  return _axios.post(api, params)
}

// 平面图审批
export function getPlanApproval() {
  let api = baseUrl + "/become?501";
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": urlData.id,
      "nodeType": "-1",
      "fields": "tzsjrq,tzqrrq,zbkjsjy,zbkjzz,zbqhbz,zbfzjlyj,zbfzjl"
    }
  };
  return _axios.post(api, params);
}

// LILANZ主品牌总经理意见审批
export function getGMApproval() {
  let api = baseUrl + "/become?502";
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": urlData.id,
      "nodeType": "-1",
      "fields": "zbfzcyj,zbfzc"
    }
  };
  return _axios.post(api, params);
}

// 店铺设计图片查询
export function getStoreDesignImgs(tplxmc, node = 503) {
  let method = node == 504 ? 'getPictureOld' : 'getPicture';
  let api = baseUrl + "/become?" + node;
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": method,
    "data": {
      "id": urlData.id,
      // "id": 7449,
      "tplxmc": tplxmc
    }
  }
  return _axios.post(api, params)
}

//注销审批表配置项
export function getZxspPz() {
  let api = baseUrl + "/become?1301";
  let params = {
    "router": "jmsp",
    "method": "getZxspPz",
  }
  return _axios.post(api, params)
}

// 注销审批
export function getZxspbData() {
  let api = baseUrl + "/become?1302";
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getZxspb",
    "data": {
      "id": urlData.id
      // "id": 16752
    }
  }
  return _axios.post(api, params)
}

// 验收评分
export function getBjqdData() {
  let api = baseUrl + "/become?901";
  let {
    urlData
  } = store.state.userData;
  let params = {
    "router": "jmsp",
    "method": "getBjqd",
    "data": {
      "id": urlData.id,
      // "id": 4442,
      "djlx": 976
    }
  }
  return _axios.post(api, params)
}

//3.店铺政策批示
export function getStorePolicyOpinion(node, data) {
  let api = baseUrl + '/become?' + node;
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
  let api = baseUrl + "/become?701";
  let params = {
    "method": "getJyfs",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 获取装修档次
export function getZxdcList() {
  let api = baseUrl + "/become?702";
  let params = {
    "method": "getZxdc",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 货柜灯具补贴方式
export function getJmbtfsPzList() {
  let api = baseUrl + "/become?703";
  let params = {
    "data": {
      "id": store.state.userData.urlData.id,
    },
    "method": "getJmbtfsPz",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}
// 获取详细数据
export function getStoreBudgetInfo() {
  let api = baseUrl + "/become?704";
  let params = {
    "method": "getJmsp",
    "router": "jmsp",
    "data": {
      "fields": "id,jyfs,zxdcbs,zxdc,nzje,zgfs,lsje1,iszg",
      "id": store.state.userData.urlData.id,
      "mxfields": "zbkjsjy,zbzcgl,fgszjlbt,fgsdqjl,fgsclbtfs"
    }
  }
  return _axios.post(api, params)
}
// 当店铺为整改店铺时
export function getZgfs() {
  let api = baseUrl + "/become?705";
  let params = {
    "router": "jmsp",
    "method": "getZgfs"
  }
  return _axios.post(api, params)
}
/** 店铺预算补贴结束 */




// 陈列照片查询
export function getDpclzp(id) {
  let api = baseUrl + "/become?801";
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
  let api = baseUrl + "/become?802";
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
  let api = baseUrl + "/become?1101";
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
  let user = store.state.userData.userInfo;
  console.log(user);
  let api = baseUrl + "/become?205";
  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      "jmspmx": {
        "iszdjlsp": user.khfl == "xd" ? 1 : 0,
        "isdkhsp": 0,
        "jxsTk": user.username,
        "isdqsp": 0
      },
      jmsp
    }
  }
  return _axios.post(api, params)
}


// // 加盟信息整改
// export function editJmData(jmsp) {
//   // 
//   let user = store.state.userData.userInfo;
//   console.log(user);
//   let api = baseUrl + "/become?202";
//   let params = {
//     "router": "jmsp",
//     "method": "saveJmsp",
//     "data": {
//       "jmspmx": {
//         "iszdjlsp": user.khfl == "xd" ? 1 : 0,
//         "isdkhsp": 0,
//         "jxsTk": user.username,
//         "isdqsp": 0
//       },
//       jmsp
//     }
//   }
//   return _axios.post(api, params)
// }

export function getNodeYw() {
  let api = baseUrl + "/become?3001";
  let params = {
    "router": "jmsp",
    "method": "getNodeYw",
    "data": {
      "id": store.state.userData.urlData.id,
      // 实际补贴金额
    }
  }
  return _axios.post(api, params)
}


// // 政策管理处 审批意见
// export function getPolicy() {
//   let api = baseUrl + "/become?3001";
//   let params = {
//     "router": "jmsp",
//     "method": "getJmsp",
//     "data": {
//       "id": store.state.userData.urlData.id,
//       "fields": "id,zxcl,zxysbz,isps,iszg"
//     }
//   }
//   return _axios.post(api, params)
// }

















export function getActucalMoney(jmspb) {
  let api = baseUrl + "/become?1001";
  let params = {
    "router": "jmsp",
    "method": "getDpsjbt",
    "data": {
      "id": store.state.userData.urlData.id,
      "sint_3": false,
      "adipisicing_8": -8496952
    }
  }
  return _axios.post(api, params)
}



// 市场商品/运营审图审核查询
export function getNodeZbsc(id) {
  let api = baseUrl + "/become?4002";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "fields": "id",
      "id": id,
      "mxfields": "zbsczyzjyj"
    }
  }
  return _axios.post(api, params)
}
// 市场商品/运营审图审核保存
export function saveNodeZbsc(id, username, obj) {
  let api = baseUrl + "/become?4001";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        "zbsczyzj": username,
        "id": id,
        "zbsczyzjrq": obj.time,
        "zbsczyzjyj": obj.zbsczyzjyj
      }
    }
  }
  return _axios.post(api, params)
}

// 领航副总/lilanz副总裁查询
export function getNodeZbyx(id) {
  let api = baseUrl + "/become?3901";
  let params = {
    "method": "getJmsp",
    "router": "jmsp",
    "data": {
      "id": id,
      "mxfields": "zbfzjlyj",
      "fields": "id"
    }
  }
  return _axios.post(api, params)
}

// 领航副总/lilanz副总裁保存
export function saveNodeZbyx(id, username, req) {
  let api = baseUrl + "/become?3902";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        "id": id,
        "zbfzjlyj": req.zbfzjlyj,
        "zbfzjl": username,
        "zbfzjlrq": req.time
      },
    }
  }
  return _axios.post(api, params)
}

// 人员列表查询
export function getRys(khid) {
  let api = baseUrl + "/become?3001";
  let params = {
    "router": "jmsp",
    "method": "getRys",
    "data": {
      "sskhid": khid,
    }
  }
  return _axios.post(api, params)
}

// 业务员签字数据保存
export function saveFgsywy(id, username, req) {
  let api = baseUrl + "/become?3001";
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
  let api = baseUrl + "/become?3001";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        "fgsywjlrq": "",
        "id": id,
        "fgsywjlzx": username,
        "fgsywjlzxrq": " ",
        "fgsywjl": username
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
  let api = baseUrl + "/become?305";
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
  let api = baseUrl + "/become?3802";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "nodetype": "5",
      "jmspmx": {
        "zbzdjlrq": req.time,
        "id": id,
        "zbzdjl": username,
        "zbzdjlyj": req.zbzdjlyj
      },
      "jmspnodemx": req,
      "jmsp": {
        "id": id,
        "khbs": req.khbs
      }
    },
  }
  return _axios.post(api, params)
}
// ------------------一下2个接口待用
// 政策管理初审批查询
export function getNodeZbkf(id) {
  let api = baseUrl + "/become?303";
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

// 政策管理初审提交
export function saveNodeZbkf(id, username, req) {
  let api = baseUrl + "/become?3301";
  console.log(req)
  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      "nodetype": "3",
      "jmspnodemx": {
        "node_2_2": req.node_2_2,
        "node_xgr": username,
        "node_5_1": req.node_5_1,
        "node_4_1": req.node_4_1,
        "node_3_1": req.node_3_1,
        "node_2_1": req.node_2_1,
        "node_3_2": req.node_3_2,
        "node_xgrq": req.node_xgrq
      },
      "jmsp": {
        "tbrq": req.time,
        "id": id
      },
      "nodetype": "3",
      "jmspmx": {
        "zbkfcsyj": req.node_xgrq,
        "zbkfcs": username,
        "zbkfcsrq": " ",
        "tzsjrq": " ",
        "id": id
      }
    },

  }
  return _axios.post(api, params)
}

// 装修用材配送
export function getDecPost(id) {
  let api = baseUrl + "/become?3202";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      id,
      "fields": "id,zxcl,zxysbz,isps,iszg"
    }
  }
  return _axios.post(api, params)
}

export function SaveDecPost(jmsp) {
  let api = baseUrl + "/become?3201";
  let userInfo = store.state.userData.userInfo;


  let params = {
    "router": "jmsp",
    "method": "saveJmsp",
    "data": {
      jmsp,
      "jmspmx": {
        id: jmsp.id,
        "fgsqhdjr": userInfo.username,
        "fgsqhdjrrq": nowTime
      }
    }
  }
  console.log(params);
  return _axios.post(api, params)
}


// 审核节点查询、保存YR
/* 营销领导审批（利郎公司副总裁	---	企划设计组接收）*/
export function setNode(node, data) {
  let api = baseUrl + "/become?" + node;
  let params = data;
  return _axios.post(api, params)
}
/* 营销企划方案设计流程
 * (平面图设计	---	平面图审核)
 *（平面图审核	---	贸易公司总经理确认）
 *（设计方案终审	---	利郎总裁终审）
 */
/*改图次数、原因查询*/
export function getPicxg(node, fun) {
  let api = baseUrl + "/become?" + node;
  let params = {
    "router": "jmsp",
    "method": fun
  };
  return _axios.post(api, params)
}
/*单据数据查询*/
export function getNodeYxqh(djid) {
  let api = baseUrl + "/become?3504";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "mxfields": "fgsclbtfs,fgszxbtfs,tzsjrq,tzqrrq,zbkjsjy,zbkjzz,zbqhbz,picbs,picxgcs,picxgyy,fgszxbtfs",
      "id": djid,
      "fields": "zbmj,nzje,jyfs,zgfs,zxdc,lsje1"
    }
  };
  return _axios.post(api, params)
}

// 审核节点查询、保存End



// 节点信息
export function getNodeDatas() {
  let api = baseUrl + "/become?1402";
  let params = {
    "method": "getAccessoryRelation",
    "router": "jmsp"
  };
  return _axios.post(api, params)
}



// 附件模块
export function getAppendixs(id) {
  let api = baseUrl + "/become?1401";
  let params = {
    "router": "jmsp",
    "data": {
      "id": id
    },
    "method": "getPicture"
  }
  return _axios.post(api, params)
}


// 
export function getMangerApprove() {
  let id = store.state.userData.urlData.id;
  let api = baseUrl + "/become?3701";
  let params = {
    "data": {
      "mxfields": "zbfzcyj",
      id,
      "fields": "id"
    },
    "method": "getJmsp",
    "router": "jmsp"
  }
  return _axios.post(api, params)
}


export function sendMangerApprove(zbfzcyj) {
  let id = store.state.userData.urlData.id;
  let username = store.state.userData.userInfo.username;
  let api = baseUrl + "/become?3702";
  let params = {
    "method": "saveJmsp",
    "router": "jmsp",
    "data": {
      "jmspmx": {
        zbfzcyj,
        "zbfzc": username,
        id,
        "zbfzcrq": nowTime
      },
      "jmsp": {
        id,
        "shbs": "1"
      }
    }
  }
  return _axios.post(api, params)
}
