import store from "../store";
import eventBus from "@/utils/eventbus"


var mixin = {
  data() {
    return {
      routeDatas: [],
      watchData: false
    }
  },
  created() {
    console.log("created111111111");
    // 现在处理当前路由中的子路由名称
    let data = JSON.parse(JSON.stringify(store.state.dealPath));
    for (const key in data) {
      if (this.$route.path.indexOf(key) >= 0) {
        this.routeDatas = data[key]
      }
    };
  //  eventBus.$on("sendData", () => {
  //     this.$nextTick(val => {
  //       console.log("洒洒水");
  //       console.log(this.$children);
  //       // console.log(this.$children[1].clickSave);
  //       // if (this.$children[1]&&typeof this.$children[1].clickSave == "function") {
  //       //   // 保证活跃组件的是在第二个，第一个是路由组件
  //       //   this.$children[1].clickSave();
  //       // }
  //     })
  //   })

  },


};
export default mixin;
