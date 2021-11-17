export default {
  state: {
    userInfo: {},
    userID: 7749,
    name: "加盟名字",
    phone: "123456798",
    urlData: {},
    nodeData: {
      docId:0
    },
    data: {
      "khmc": "利郎总部",
      "khfl": "0",
      "mdid": 9686,
      "khdm": "000000",
      "userssid": 1,
      "xtlb": "Z",
      "userid": 19771,
      "username": "范邦训"
    },
    mydjid: 17991,
    nodeCs: 8
  },
  mutations: {
    EDDITUSERINFO(state, payload) {
      state.userInfo = payload
    },
    EDITURLDATA(state, payload) {
      state.urlData = payload
    },
    EDITNODEDATA(state, payload) {
      state.nodeData = payload
    },
  }
}
