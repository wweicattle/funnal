<template>
<!-- 营销企划方案设计流程  -->
  <div class="planapvl_wrap">
    <box-contain :isshowheader="headerObj">
      <h3>营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定</h3>
      <div class="zone_one">
        <div class="inp_item">
          <label class="inp_item_name" for="aoName">营销政策管理处报送设计时间（设计员）：</label>
          <el-input id="aoName"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="aoName">最后确认时间（部长）：</label>
          <el-input id="aoName"></el-input>
        </div>
        <div class="sign_item">
          <div class="flex-end">
            <span>空间设计专员签署：</span><div class="sign"></div>
          </div>
          <div class="flex-end">
            <span>空间组组长签署：</span><div class="sign"></div>
          </div>
          <div class="flex-end">
            <span>部长签署：</span><div class="sign"></div>
          </div>
        </div>
      </div>
      <title-contain value="市场管理中心平面图审批"></title-contain>
      <section>
        <div class="sign_item flex-end">
          <span>市场管理中心副总监签署：</span><div class="sign"></div>
        </div>
      </section>
      <title-contain value="领航副总/利郎公司副总裁审批意见"></title-contain>
      <section>
        <div class="sign_item flex-end">
          <span>领航副总/利郎公司副总裁签署：</span><div class="sign"></div>
        </div>
      </section>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
export default {
  components: { BoxContain,TitleContain },
  data() {
    return {
      headerObj:{text:'营销企划方案设计流程'},
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {},
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
