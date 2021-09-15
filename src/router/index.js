import Vue from "vue";
import VueRouter from "vue-router";
import { dealRoute } from "@/utils/dealRoutePath.js";
import store from "@/store/index.js";
import {
  yiyi,
  yier,
  Yi,
  eryi,
  erer,
  ersan,
  ersi,
  BusinessDistrict
  ,BusinessLicense,DecorationDrawing,
  ErIndex,
  sanyi,
  saner,
  san,
  sanyiyi,
  sanyier,
  saneryi,
  sanerer,
} from "./listRouteComponent.js";
console.log(BusinessDistrict)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/yi",
  },
];
const data = [
  {
    m_id: 0,
    m_name: "",
    m_url: "/path?ab=1",
  },
  {
    m_id: 1,
    m_name: "",
    m_url: "",
    children: [
      {
        m_id: 11,
        m_name: "",
        m_url: "",
      },
    ],
  },
  {
    m_id: 2,
    m_name: "",
    m_url: "",
    children: [
      {
        m_id: 21,
        m_name: "",
        m_url: "",
        children: [
          {
            m_id: 22,
            m_name: "",
            m_url: "",
          },
        ],
      },
    ],
  },
];

// 从接口返回的动态路由数据
const dynamicRoutes = [
  {
    path: "/yi",
    name: "营销政策条款",
    component: Yi,
    redirect: "/yi/yi",
    meta: {
      name: "营销政策条款",
    },
    children: [
      {
        path: "/yi/yi",
        name: "16年营销政策条款",
        component: yiyi,
        meta: {
          name: "经销商一",
          age: 23,
          class: 81,
        },
      },
      {
        path: "/yi/er",
        name: "政策14修订版",
        component: yier,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
      {
        path: "/yi/er",
        name: "政策14修订版",
        component: yier,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
      {
        path: "/yi/er",
        name: "12年营销政策条款",
        component: yier,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
      {
        path: "/yi/er",
        name: "09年营销政策条款",
        component: yier,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
    ],
  },
  {
    path: "/er",
    name: "店铺基本资料",
    redirect: "/er/yi",
    component: ErIndex,
    children: [
      {
        path: "/er/yi",
        name: "经销商个人档案",
        component: eryi,
      },
      {
        path: "/er/er",
        name: "专卖店资料",
        component: erer,
      },
      {
        path: "/er/san",
        name: "身份证复印件",
        component: ersan,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
      {
        path: "/er/si",
        name: "店租合同",
        component: ersi,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },

      {
        path: "/er/five",
        name: "商圈路段图",
        component: BusinessDistrict,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },

      {
        path: "/er/six",
        name: "测量装修准确图",
        component: BusinessLicense,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
      {
        path: "/er/seven",
        name: "营业执照",
        component: DecorationDrawing,
        meta: {
          name: "专卖店资料",
          sas: 2313,
        },
      },
    ],
  },


  {
    path: "/si",
    name: "店铺政策批示",
    component: Yi,
  },
  {
    path: "/wu",
    name: "开户批示",
    component: Yi,
  },
  {
    path: "/wu",
    name: "店铺设计",
    component: Yi,
  },
  {
    path: "/wu",
    name: "店铺报价审批",
    component: Yi,
  }, {
    path: "/wu",
    name: "店铺预算补贴",
    component: Yi,
  }, {
    path: "/wu",
    name: "经验商验收",
    component: Yi,
  }, {
    path: "/wu",
    name: "公司企划验收",
    component: Yi,
  }, {
    path: "/wu",
    name: "店铺实际补贴",
    component: Yi,
  }, {
    path: "/wu",
    name: "店铺业务单据",
    component: Yi,
  }, {
    path: "/wu",
    name: "资料存档",
    component: Yi,
  }, {
    path: "/wu",
    name: "注册审批表",
    component: Yi,
  },
// ----------------------三级
  {
    path: "/san",
    name: "店铺批示2",
    redirect: "/san/yi/yi",
    component: san,
    children: [
      {
        path: "/san/yi",
        name: "sanyi",
        component: sanyi,
        redirect: "/san/yi/yi",
        children: [
          {
            path: "/san/yi/yi",
            name: "sanyiyi",
            component: sanyiyi,
          },
          {
            path: "/san/yi/er",
            name: "sanyier",
            component: sanyier,
          },
        ],
      },
      {
        path: "/san/er",
        name: "saner",
        component: saner,
        redirect: "/san/er/yi",
        children: [
          {
            path: "/san/er/yi",
            name: "saneryi",
            component: saneryi,
            meta: {
              name: "wuwei",
              age: 25,
            },
          },
          {
            path: "/san/er/er",
            name: "sanerer",
            component: sanerer,
          },
        ],
      },
    ],
  },
];

// 处理路由保存vuex
let ass = dealRoute(dynamicRoutes);
store.state["dealPath"] = ass;
store.state["dynamicRoutes"] = dynamicRoutes;

const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: routes.concat(dynamicRoutes),
});

router.beforeEach((to, from, next) => {
  console.log(to);
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
