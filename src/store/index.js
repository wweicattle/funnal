import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dealPath:[],
    dynamicRoutes:[],
    ShopBasicData:{}
  },
  mutations: {
    SET_SHOP_DATA(state,payload){
      state.ShopBasicData=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
