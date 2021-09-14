import store from "../store";
var mixin = {
    data() {
        return {
            routeDatas: [],
        }
    },
    created() {
        // 现在处理当前路由中的子路由名称
        let data = JSON.parse(JSON.stringify(store.state.dealPath));
        for (const key in data) {
            if (this.$route.path.indexOf(key) >= 0) {
                this.routeDatas = data[key]
                // 三级路由
                // if(this.$route.matched.length>=2){
                //     this.routeDatas = data[key].children
                // }
            }
        }
    }
};
export default mixin;