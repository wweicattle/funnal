import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dealPath:[],
    dynamicRoutes:[],
    ShopBasicData:{},
    sa:212
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
