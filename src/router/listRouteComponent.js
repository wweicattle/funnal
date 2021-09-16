
// 格子间文件夹引入的组件
import { MarketPolicy, terms09, terms12, terms14, terms16 } from "@/views/MarketPolicy"
import { eryi, erer, ErIndex, ersan, ersi, BusinessDistrict ,BusinessLicense,DecorationDrawing} from "@/views/ShopBasic"
import { sanyi, san, sanyiyi, sanyier, saneryi, sanerer, saner } from "@/views/san"

// 前端自己定义的菜单与组件的映射，
const dynamicRoutes = [{
    path: "/marketPolicy",
    name: "营销政策条款",
    component: MarketPolicy,
    redirect: "/marketPolicy/terms16",

    children: [{
        path: "/marketPolicy/terms16",
        name: "16年营销政策条款",
        component: terms16,
        sa: 232,

      },
      {
        path: "/marketPolicy/terms14",
        name: "政策14修订版",
        component: terms14,

      },
      {
        path: "/marketPolicy/terms12",
        name: "12年营销政策条款",
        component: terms12,

      },
      {
        path: "/marketPolicy/terms09",
        name: "09年营销政策条款",
        component: terms09,

      },
    ],
  },
  {
    path: "/er",
    name: "店铺基本资料",
    redirect: "/er/yi",
    component: ErIndex,
    children: [{
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

      },
      {
        path: "/er/si",
        name: "店租合同",
        component: ersi,

      },

      {
        path: "/er/five",
        name: "商圈路段图",
        component: BusinessDistrict,

      },

      {
        path: "/er/six",
        name: "测量装修准确图",
        component: BusinessLicense,

      },
      {
        path: "/er/seven",
        name: "营业执照",
        component: DecorationDrawing,

      },
    ],
  },


  {
    path: "/si",
    name: "店铺政策批示",
    component: MarketPolicy,
  },
  {
    path: "/wu",
    name: "开户批示",
    component: MarketPolicy,
  },
  {
    path: "/wu",
    name: "店铺设计",
    component: MarketPolicy,
  },
  {
    path: "/wu",
    name: "店铺报价审批",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "店铺预算补贴",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "经验商验收",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "公司企划验收",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "店铺实际补贴",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "店铺业务单据",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "资料存档",
    component: MarketPolicy,
  }, {
    path: "/wu",
    name: "注册审批表",
    component: MarketPolicy,
  },
  // ----------------------三级
  {
    path: "/san",
    name: "店铺批示2",
    redirect: "/san/yi/yi",
    component: san,
    children: [{
        path: "/san/yi",
        name: "sanyi",
        component: sanyi,
        redirect: "/san/yi/yi",
        children: [{
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
        children: [{
            path: "/san/er/yi",
            name: "saneryi",
            component: saneryi,

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
export default dynamicRoutes;