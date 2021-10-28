export default {
  state: {
    userInfo: {},
    userID: 7749,
    name: "加盟名字",
    phone: "123456798",
    urlData: {},
    nodeData: {}
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
