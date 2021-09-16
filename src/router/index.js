import Vue from "vue";
import VueRouter from "vue-router";
import {
  dealRoute
} from "@/utils/dealRoutePath.js";
import store from "@/store/index.js";
import {
  getAllMenu
} from "@/network/index"
// 引入的自己维护的菜单组件
import
dynamicRoutes
from "./listRouteComponent.js";
Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  redirect: "/marketPolicy",
}];

// 接口请求菜单数据
getAllMenu().then(da => {
  if (da.data.errcode == 0) {
    let data = da.data.data;
    // 处理接口返回的谁有路由，转化为需要的路由
    let newArr = [];
    data.forEach(val => {
      let menuSonArr = [...(val.data || [])]
      delete val.data;
      newArr.push(val)
      if (menuSonArr.length > 0) {
        menuSonArr.forEach(vals => {
          newArr.push(vals)
          // vals.name = vals.m_name;
        })
        // val.name = val.m_name;
        // delete val.data
        // if (menuSonArr.length >0) {
        //   val.children = menuSonArr;
        //   val.children.map(vals => {
        //     vals.name = vals.m_name;
        //   })
      }
      // return val;
    })

    function findMenuObj(name) {
      return newArr.find(val => {
        return val.m_name == name
      })
    }
    dynamicRoutes.forEach(val => {
      if (findMenuObj(val.name)) {
        Object.assign((val.meta || (val.meta = {})), findMenuObj(val.name))
      }
      if (val.children && val.children.length > 0) {
        val.children.forEach(vals => {
          if (findMenuObj(vals.name)) {
            Object.assign((vals.meta || (vals.meta = {})), findMenuObj(vals.name))
          }
        })
      }
    })
    router.addRoutes(dynamicRoutes);
  } else {
    this.$Message.error(
      "审核数据修改失败！" + JSON.stringify(da.data.errmsg)
    );
  }
  // this.$Message.success("审核数据已修改成功！");

})


// 处理路由数据保存vuex
let ass = dealRoute(dynamicRoutes);
store.state["dealPath"] = ass;
store.state["dynamicRoutes"] = dynamicRoutes;

const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  next();
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
// setTimeout(()=>{
// router.addRoutes(dynamicRoutes);
// },3000)
export default router;