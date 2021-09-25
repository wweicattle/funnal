// 组件间文件夹引入的组件
import {
  MarketPolicy,
  terms09,
  terms12,
  terms14,
  terms16
} from '@/views/MarketPolicy';
import {
  DealerProfile,
  StoreInformation,
  ErIndex,
  CopyId,
  ShopLease,
  BusinessDistrict,
  BusinessLicense,
  DecorationDrawing
} from '@/views/ShopBasic';
import {
  StorePolicy,
  company,
  salesDirector,
  policyManagement,
  marketingDirector,
  cMarketingDirector
} from '@/views/StorePolicy';
import {
  BudgetIndex,
  BudgetSubsidy,
  SubsidyAmount
} from "@/views/StoreBudget";
import {
  sanyi,
  san,
  sanyiyi,
  sanyier,
  saneryi,
  sanerer,
  saner
} from '@/views/san';


import {
  ItemList,
  ListSigns,
  LampList,
  ModelList,
  AuxiliaryList,
  SofaList,
  BasicRenovation,
  BasicDecoration,
  StoreQuotation
} from "@/views/StoreQuotation";



import {
  ApvlIns,
  AccountOpening
} from "@/views/AccountOpenning"
import {
  PlanApproval,
  GMApproval,
  PlanB4Rectif,
  StorePlan,
  StoreProdDrawing,
  StoreRendering,
  StoreDesign
} from '@/views/StoreDesign';
// 前台自己定义的菜单与组件的映射，
const dynamicRoutes = [{
    path: '/marketPolicy',
    name: '营销政策条款',
    component: MarketPolicy,
    redirect: "/marketPolicy/terms16",
    children: [{
        path: "/marketPolicy/terms16",
        name: "16年营销政策条款",
        component: terms16,
        sa: 232
      },
      {
        path: '/marketPolicy/terms14',
        name: '政策14修订版',
        component: terms14
      },
      {
        path: '/marketPolicy/terms12',
        name: '12年营销政策条款',
        component: terms12
      },
      {
        path: '/marketPolicy/terms09',
        name: '09年营销政策条款',
        component: terms09
      }
    ]
  },
  {
    path: '/shopBasic',
    name: '店铺基本资料',
    redirect: '/shopBasic/dealer-profile',
    component: ErIndex,
    children: [{
        path: '/shopBasic/dealer-profile',
        name: '经销商个人档案',
        component: DealerProfile
      },
      {
        path: '/shopBasic/store-information',
        name: '专卖店资料',
        component: StoreInformation
      },
      {
        path: '/shopBasic/copy-id',
        name: '身份证复印件',
        component: CopyId
      },
      {
        path: '/shopBasic/shop-lease',
        name: '店租合同',
        component: ShopLease
      },

      {
        path: '/shopBasic/business-district',
        name: '商圈路段图',
        component: BusinessDistrict
      },
      {
        path: '/shopBasic/decoration-drawing',
        name: '测量装修准确图',
        component: DecorationDrawing
      },
      {
        path: '/shopBasic/business-license',
        name: '营业执照',
        component: BusinessLicense
      }
    ]
  },
  // 店铺政策批示--yr
  {
    path: '/storePolicy',
    name: '店铺政策批示',
    component: StorePolicy,
    redirect: '/storePolicy/company',
    children: [{
        path: '/storePolicy/company',
        name: '贸易公司审批',
        component: company
      },
      {
        path: '/storePolicy/salesDirector',
        name: '分管销售总监审批',
        component: salesDirector
      },
      {
        path: '/storePolicy/policyManagement',
        name: '政策管理处审批',
        component: policyManagement
      },
      {
        path: '/storePolicy/marketingDirector',
        name: '市场管理中心总监/副总监审批',
        component: marketingDirector
      },
      {
        path: '/storePolicy/cMarketingDirector',
        name: '公司营销各总监审批',
        component: cMarketingDirector
      }
    ]
  },
  {
    name: '店铺设计',
    component: MarketPolicy,
    path: "/accountopenning",
    name: "开户批示",
    component: AccountOpening,
    redirect: "/accountopenning/apvlins",
    children: [{
      path: "/accountopenning/apvlins",
      name: '开户审批批示',
      component: ApvlIns,
    }]
  },
  {
    path: "/storedesign",
    name: "店铺设计",
    component: StoreDesign,
    redirect: "/storedesign/planapproval",
    children: [{
        path: "/storedesign/planapproval",
        name: "平面图审批",
        component: PlanApproval
      },
      {
        path: "/storedesign/gmapproval",
        name: "LILANZ主品牌总经理审批",
        component: GMApproval
      },
      {
        path: "/storedesign/planb4rectification",
        name: "整改前平面",
        component: PlanB4Rectif
      },
      {
        path: "/storedesign/storeplan",
        name: "店铺平面图",
        component: StorePlan
      },
      {
        path: "/storedesign/storeworkingdrawing",
        name: "店铺施工图",
        component: StoreProdDrawing
      },
      {
        path: "/storedesign/storerendering",
        name: "店铺效果图",
        component: StoreRendering
      },
    ]
  },
  {
    path: "/storeQuotation",
    name: "店铺报价审批",
    component: StoreQuotation,
    redirect: "/storeQuotation/item-list",
    children: [{
        path: "/storeQuotation/item-list",
        name: "道具清单",
        component: ItemList,
      },
      {
        path: "/storeQuotation/list-signs",
        name: "标志清单",
        component: ListSigns,
      },
      {
        path: "/storeQuotation/lamp-list",
        name: "灯具清单",
        component: LampList,
      },
      {
        path: "/storeQuotation/model-list",
        name: "模型清单",
        component: ModelList,
      },
      {
        path: "/storeQuotation/auxiliary-list",
        name: "辅助道具",
        component: AuxiliaryList,
      },
      {
        path: "/storeQuotation/sofa-list",
        name: "沙发清单",
        component: SofaList,
      },
      {
        path: "/storeQuotation/basic-decoration",
        name: "基础装修报价",
        component: BasicDecoration,
      },

      {
        path: "/storeQuotation/basic-renovation",
        name: "基础装修合同",
        component: BasicRenovation,
      },
    ]
  },
  {
    path: "/storeBudget",
    name: "店铺预算补贴",
    redirect: "/storeBudget/budget-subsidy",
    component: BudgetIndex,
    children: [{
        path: "/storeBudget/budget-subsidy",
        name: "贸易公司核算补贴",
        component: BudgetSubsidy,
      },
      {
        path: "/storeBudget/subsidy-amount",
        name: "营销中心预核定补贴金额",
        component: SubsidyAmount,
      },
    ]
  },
  {
    path: '/wu',
    name: '经验商验收',
    component: MarketPolicy
  },
  {
    path: '/wu',
    name: '公司企划验收',
    component: MarketPolicy
  },
  {
    path: '/wu',
    name: '店铺实际补贴',
    component: MarketPolicy
  },
  {
    path: '/wu',
    name: '店铺业务单据',
    component: MarketPolicy
  },
  {
    path: '/wu',
    name: '资料存档',
    component: MarketPolicy
  },
  {
    path: '/wu',
    name: '注册审批表',
    component: MarketPolicy
  },
  // ----------------------三级
  {
    path: '/san',
    name: '店铺批示2',
    redirect: '/san/yi/yi',
    component: san,
    children: [{
        path: '/san/yi',
        name: 'sanyi',
        component: sanyi,
        redirect: '/san/yi/yi',
        children: [{
            path: '/san/yi/yi',
            name: 'sanyiyi',
            component: sanyiyi
          },
          {
            path: '/san/yi/er',
            name: 'sanyier',
            component: sanyier
          }
        ]
      },
      {
        path: '/san/er',
        name: 'saner',
        component: saner,
        redirect: '/san/er/yi',
        children: [{
            path: '/san/er/yi',
            name: 'saneryi',
            component: saneryi
          },
          {
            path: '/san/er/er',
            name: 'sanerer',
            component: sanerer
          }
        ]
      }
    ]
  }
];
export default dynamicRoutes;
