import Vue from "vue";
import VueRouter from "vue-router";
import {
  dealRoute
} from "@/utils/dealRoutePath.js";
import store from "@/store/index.js";
import {
  getAllMenu
} from "@/network/index";
import {
  getUserInfo
} from "@/network/userInfo"


// 引入的自己维护的菜单组件
import dynamicRoutes from "./listRouteComponent.js";
Vue.use(VueRouter);


// 默认路由
const routes = [{
  path: "/",
  name: "Home",
}, ];



const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: routes,
});



// 接口请求菜单数据,动态添加理由
getAllMenu().then((da) => {
  if (da.data.errcode == 0) {
    let data = da.data.data;
    // 处理接口返回的谁有路由，转化为需要的路由
    let newArr = [];
    data.forEach((val) => {
      let menuSonArr = [...(val.data || [])];
      delete val.data;
      newArr.push(val);
      if (menuSonArr.length > 0) {
        menuSonArr.forEach((vals) => {
          newArr.push(vals);
        });
      }
    });

    function findMenuObj(name) {
      return newArr.find((val) => {
        return val.m_name == name;
      });
    }
    dynamicRoutes.forEach((val) => {
      if (findMenuObj(val.name)) {
        Object.assign(val.meta || (val.meta = {}), findMenuObj(val.name));
      }
      if (val.children && val.children.length > 0) {
        val.children.forEach((vals) => {
          if (findMenuObj(vals.name)) {
            Object.assign(
              vals.meta || (vals.meta = {}),
              findMenuObj(vals.name)
            );
          }
        });
      }
    });
    router.addRoutes(dynamicRoutes);
  } else {
    Vue.$Message.error("审核数据修改失败！" + JSON.stringify(da.data.errmsg));
  }
  // this.$Message.success("审核数据已修改成功！");
});


// 处理路由数据保存vuex
store.state["dealPath"] = dealRoute(dynamicRoutes);
store.state["dynamicRoutes"] = dynamicRoutes;


// 暂时防止组件请求跳转两次请求了两次用户数据，我们简单用变量进行判断
let requestTime = 0;
router.beforeEach((to, from, next) => {
  // 1需要进行用户身份的获取
  if (to.path == "/error") return next();
  requestTime = ++requestTime;
  if ((requestTime == 1) && Object.keys(to.query).length > 0 && Object.keys(store.state.userData.userInfo).length == 0) {
    let {
      token
    } = to.query;
    // 把url中的数据进行保存放在store中
    let params = {
      ...to.query
    };
    if (params.id == 0) {
      params.copyId = 0;
    }
    store.commit("EDITURLDATA",
      params
    )

    getUserInfo(token).then(da => {
      // da = {
      //   data: {
      //     "errcode": 0,
      //     "data": {
      //       "khmc": "利郎总部",
      //       "khfl": "0",
      //       "mdid": 9686,
      //       "khdm": "000000",
      //       "userssid": 1,
      //       "xtlb": "Z",
      //       "userid": 18442,
      //       "username": "王晓生"
      //     },
      //     "errmsg": "查询成功！"
      //   }
      // }
      if (da.data.errcode == 0) {
        store.commit("EDDITUSERINFO",
          da.data.data
        )
      } else {
        Vue.$Message({
          type: "error",
          message: da.data.errmsg + "用户身份获取失败!请重试"
        })
        // store.state.userData.userInfo = da.data.data;
        // console.log("accept route sssss");
      }
    }).catch(err => {
      Vue.$Message({
        type: "error",
        message: err + "用户身份获取失败!请重试"
      })
    });
  } else if ((requestTime == 1) && Object.keys(to.query).length == 0 && Object.keys(store.state.userData.userInfo).length == 0) {
    Vue.$Message({
      type: "error",
      message: "用户身份过期，请退出重新登录！"
    })
  }
  //  else if ((requestTime == 3) && Object.keys(to.query).length == 0 && Object.keys(store.state.userData.userInfo).length == 0){
  //   return next("/error")
  // }
  next();
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
