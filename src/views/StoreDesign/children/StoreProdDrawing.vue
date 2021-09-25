<template>
<!-- 店铺施工图 -->
  <div class="planb4rectif_wrap">
    <box-contain :isshowheader="headerObj">
      <div class="file_item flex-start">
        <div class="upload_box">
          <img src="/static/img/floorplan.jpg" alt="">
        </div>
        <div class="file_info">
          <div class="file_archive">店铺施工图：描述</div>
          <div>图片名称：<span>商圈路段图</span></div>
          <div>图片大小：<span>0.8 M</span></div>
          <div>上传人员：<span>加盟申请人</span></div>
          <div>上传日期：<span>2010-07-27  21:37:26</span></div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
export default {
  components: { BoxContain },
  data() {
    return {
      headerObj: {text: '店铺施工图'}
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
.planb4rectif_wrap{
  .file_item{
    align-items: start;
    margin-bottom: 30px;
  }
  .upload_box{
    position: relative;
    width: 505px;min-height: 320px;
    background-color: var(--main-back);
    .upload_text{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
  .upload_box i{font-size: 30px;color: #CED6E0;}
  .upload_box p{color: #A4AAB6;margin-top: 20px;}
  .file_info{
    margin-left: 20px;
    >div{margin-bottom: 15px;}
    span{
      padding-left: 5px;
      color: var(--text-color);
      font-weight: bold;
    }
    .file_archive{
      padding-top: 11px;
      margin-bottom: 30px;
      font-size: 16px;
      color: var(--sle-text-color);
      background: url("/static/img/comlogo.png") top left no-repeat;
    }
  }
}
</style>
