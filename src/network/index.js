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
  let id = store.state.userData.urlData.id;
  let api = '/dev/become?4';
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
  let api = '/dev/become?601';
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
  let api = "/dev/become?401";
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
  let api = "/dev/become?502";
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
  let api = "/dev/become?" + node;
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
  let api = "/dev/become?901";
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
export function getJmbtfsPzList(userId = 17911) {
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
export function getStoreBudgetInfo(userId = 17911) {
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
      "id": 7449,
    }
  }
  return _axios.post(api, params)
}

// 陈列照片查询
export function getPicture(req) {
  let api = "/dev/become?802";
  let params = {
    "router": "jmsp",
    "method": "getPicture",
    "data": {
      "id": 7449,
      "tplxmc": req.tplxmc
    }
  }
  return _axios.post(api, params)
}


// 店铺业务单据-专卖店资料
export function getDpdjZmdzl(req) {
  let api = "/dev/become?1101";
  let params = {
    "router": "jmsp",
    "method": "getDpdjZmdzl",
    "data": {
      "id": 16455,
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
    "method": "getNodeYw",
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

// 人员列表查询
export function getRys() {
  let api = "/dev/become?3001";
  let params = {
    "router": "jmsp",
    "method": "getRys",
    "data": {
      "sskhid": "1900",
    }
  }
  return _axios.post(api, params)
}




// 市场商品/运营审图审核查询
export function getNodeZbsc() {
  let api = "/dev/become?4002";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": "7449",
      "jmspmx": "zbsczyzjyj",
      "fields": "id"
    }
  }
  return _axios.post(api, params)
}
// 市场商品/运营审图审核保存
export function saveNodeZbsc(zbsczyzjyj) {
  let api = "/dev/become?4002";
  let params = {
    "router": "jmsp",
    "method": "getJmsp",
    "data": {
      "id": "17991",
      "jmspmx": "zbsczyzjyj",
      "zbsczyzj": "当前用户",
      "zbsczyzjrq": "id",
      "zbsczyzjyj": zbsczyzjyj
    }
  }
  return _axios.post(api, params)
}

// 领航副总/lilanz副总裁查询
export function getNodeZbyx() {
  let api = "/dev/become?304";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": "7449",
      "nodeType": 4,
      "fields": "zbyxld"
    }
  }
  return _axios.post(api, params)
}

// 市场管理中心总监/副总监审批
export function getNodeZbzd() {
  let api = "/dev/become?305";
  let params = {
    "router": "jmsp",
    "method": "getNode",
    "data": {
      "id": "7449",
      "nodeType": 5,
      "fields": "zbzdjl,zbzdjlyj"
    }
  }
  return _axios.post(api, params)
}



// 政策管理处审批查询
export function getNodeZbkf() {
  let api = "/dev/become?303";
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

// 审核节点查询、保存YR
/* 营销领导审批（利郎公司副总裁	---	企划设计组接收）*/
export function setNode(node, data) {
  let api = "/dev/become?" + node;
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
  let api = "/dev/become?" + node;
  let params = {
    "router": "jmsp",
    "method": fun
  };
  return _axios.post(api, params)
}
/*单据数据查询*/
export function getNodeYxqh(djid) {
  let api = "/dev/become?3504";
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
