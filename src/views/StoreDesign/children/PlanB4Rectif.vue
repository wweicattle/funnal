<template>
<!-- 整改前平面 -->
  <div class="id-contain">
    <box-contain>
    <div class="id-content">
      <div class="id-img-con">
        <div class="upload">
          <div class="con">
            <el-icon class="el-icon-plus"></el-icon>
            <div>上传整改前平面图</div>
          </div>
        </div>
        <!-- <img src="/static/img/floorplan.jpg" alt="" v-viewer/> -->
        <div class="id-des">
          <div class="d-header">平面图：描述</div>
          <div>图片名称:<span>商圈路段图</span></div>
          <div>图片大小:<span>0.8 M</span></div>
          <div>上传人员:<span>加盟申请人</span></div>
          <div>上传日期:<span>2010-07-27  21:37:26</span></div>
        </div>
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
.id-contain {
  font-size: 12px;
  .id-content {
    margin-top: 20px;
    .remind {
      color: #f13e3e;
      margin: 10px 0;
    }
    .id-img-con {
      //   border: 1px solid red;
      display: flex;
      height: 254px;
      img {
        width: 381px;
      }
      .id-des {
        padding: 20px 0 0 20px;
        background: url("/static/img/comlogo.png") no-repeat 20% 2%;
        .d-header {
          color: #0670ff;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 600;
        }
        & > div {
          padding-bottom: 15px;
          & > span {
            font-weight: 600;
            padding-left: 15px;
          }
        }
      }
    }
  }
  .upload {
    margin-top: 0px;
    width: 381px;
    background: #f6f7f9;
    text-align: center;
    height: 254px;
    display: flex;
    align-items: center;
    justify-content: center;
    .con {
      color: #a4aab6;
      .el-icon-plus {
        padding-bottom: 15px;
        font-size: 30px !important;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
}
</style>
