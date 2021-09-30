<template>
<!-- 营销企划方案设计流程  -->
  <div class="planapvl_wrap">
    <box-contain :isshowheader="headerObj">
      <h3>营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定</h3>
      <div class="zone_one">
        <div class="inp_item">
          <label class="inp_item_name" for="reportTimer">营销政策管理处报送设计时间（设计员）：</label>
          <el-input id="reportTimer" v-model="planApvlData.tzsjrq"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="certainTime">最后确认时间（部长）：</label>
          <el-input id="certainTime" v-model="planApvlData.tzqrrq"></el-input>
        </div>
        <div class="sign_item">
          <div class="flex-end">
            <span>空间设计专员签署：</span><div class="sign">{{planApvlData.zbkjsjy}}</div>
          </div>
          <div class="flex-end">
            <span>空间组组长签署：</span><div class="sign">{{planApvlData.zbkjzz}}</div>
          </div>
          <div class="flex-end">
            <span>部长签署：</span><div class="sign">{{planApvlData.zbqhbz}}</div>
          </div>
        </div>
      </div>

      <!-- 市场管理中心平面图审批 -->
      <title-contain value="市场管理中心平面图审批"></title-contain>
      <section>
        <div class="sign_item flex-end">
          <span>市场管理中心副总监签署：</span><div class="sign"></div>
        </div>
      </section>

      <!-- 利郎公司副总裁审批意见 -->
      <title-contain value="领航副总/利郎公司副总裁审批意见"></title-contain>
      <section>
        <div class="item strong">{{planApvlData.zbfzjlyj}}</div>
        <div class="sign_item flex-end">
          <span>领航副总/利郎公司副总裁签署：</span><div class="sign">{{planApvlData.zbfzjl}}</div>
        </div>
      </section>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
import { getPlanApproval } from "@/network/index";

export default {
  components: { BoxContain,TitleContain },
  data() {
    return {
      headerObj:{text:'营销企划方案设计流程'},
      loading: null,
      planApvlData:{},
    };
  },
  created() {
    console.log(this.$route);
    this.loading = this.$Loading.service({
      fullscreen: true,
    });
    this.getPlanApproval()
  },
  mounted() {},
  methods: {
    getPlanApproval(){
      getPlanApproval().then(res=>{
        console.log("res",res);
        this.loading.close()
        if(res.data.errcode == 0){
          this.planApvlData = res.data.data;
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
.planapvl_wrap{
  .inp_item {
    margin-top: 20px;
    margin-right: 35px;

    .inp_item_name {
      position: relative;
      margin-right: 10px;
      display: inline-block;
      text-align: right;
    }
  }
  section {
    position: relative;
    min-height: 80px;
    padding-left: 20px;
    padding-bottom: 15px;

    .sign_item {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 15px;
      color: var(--text-color);
    }
  }
  .box-contain{padding-bottom: 110px;}
  h3{
    padding-top:0px
  }
  .strong {
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
  }
  .inp_item_name{min-width: 285px;}
  .zone_one .sign_item{
    margin-bottom: 30px; color: var(--text-color);
    >div{margin-top: 20px;}
  }
}
/deep/.el-input{
  font-size: var(--font-size);
  width: 160px;
  height: 24px;
  line-height: 24px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
  }
}
</style>
