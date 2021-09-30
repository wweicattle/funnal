<template>
<!-- LILANZ主品牌总经理审批 -->
  <div class="gmapvl_wrap">
    <box-contain :isshowheader="headerObj">
      <div>
        <div class="box_item">
          {{gmApvlData.zbfzcyj}}
        </div>
        <div class="sign_item flex-end">
          <span>LILANZ主品牌总经理签署：</span><div class="sign">{{gmApvlData.zbfzc}}</div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import { getGMApproval } from "@/network/index";

export default {
  components: { BoxContain },
  data() {
    return {
      headerObj: {text: 'LILANZ主品牌总经理意见审批'},
      loading: null,
      gmApvlData:{},
    };
  },
  created() {
    console.log(this.$route);
    this.loading = this.$Loading.service({
      fullscreen: true,
    });
    this.getGMApproval()
  },
  mounted() {},
  methods: {
    getGMApproval(){
      getGMApproval().then(res=>{
        console.log("res",res);
        this.loading.close();
        if(res.data.errcode == 0){
          this.gmApvlData = res.data.data;
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      })

    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/fourth.scss";
.gmapvl_wrap{
  .box_item{
    margin: 20px 0;
    padding: 10px;
    height: 160px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-left: 8px solid var(--auxiliary-color);
  }
}
</style>
