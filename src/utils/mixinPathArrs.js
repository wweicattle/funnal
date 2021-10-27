import store from "../store";


var mixin = {
  data() {
    return {
      routeDatas: [],
      watchData: false
    }
  },
  created() {
    // 现在处理当前路由中的子路由名称
    let data = JSON.parse(JSON.stringify(store.state.dealPath));
    for (const key in data) {
      if (this.$route.path.indexOf(key) >= 0) {
        this.routeDatas = data[key]
      }
    };
  },


};
export default mixin;
