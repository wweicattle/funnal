import Vue from 'vue'
import Vuex from 'vuex'
import userData from "./userData"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dealPath: [],
    dynamicRoutes: [],
    ShopBasicData: {},
    policyExist: {}
  },
  mutations: {
    SET_SHOP_DATA(state, payload) {
      state.ShopBasicData = payload;
    },
    SET_POLICY(state, payload) {
      let {val,index}=payload;
      let copyData={...state.policyExist};
      copyData[index]=val;
      state.policyExist=copyData;
    }
  },
  actions: {},
  modules: {
    userData,
  }
})
