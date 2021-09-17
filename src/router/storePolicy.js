import {StorePolicy} from "@/views/StorePolicy"

const Store_policyR = [{
  path:"/storePolicy",
  name:"店铺政策批示",
  // redirect:"/"

  children:[{
    path:"/storePolicy/company",
    name:"贸易公司审批",
    component:company,
  },
  {
    path:"/storePolicy/salesDirector",
    name:"分管销售总监审批",
    component:salesDirector,
  },
  {
    path:"/storePolicy/policyManagement",
    name:"政策管理处审批",
    component:policyManagement,
  },
  {
    path:"/storePolicy/marketingDirector",
    name:"市场管理中心总监/副总监审批",
    component:marketingDirector,
  },
  {
    path:"/storePolicy/cMarketingDirector",
    name:"公司营销各总监审批",
    component:cMarketingDirector,
  }]
}]