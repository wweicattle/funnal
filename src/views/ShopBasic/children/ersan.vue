<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
      <div class="id-content">
        <div class="id-img-con">
          <img src="static/img/actor.png" alt="" />
          <div class="id-des">
            <div class="d-header">身份证正面：描述</div>
            <div>图片名称:<span>租赁合同</span></div>
            <div>图片大小:<span>0.8M</span></div>
            <div>上传人员:<span>加盟申请人</span></div>
            <div>上传日期:<span>2010-07-27 21:37:26</span></div>
          </div>
        </div>
      </div>

      <div class="upload">
        <div class="con">
          <el-icon class="el-icon-plus"></el-icon>
          <div>上传身份证背景图</div>
        </div>
      </div>
    </box-contain>
  </div>
</template>
<script>
import BoxContain from "@/components/common/BoxContain";

export default {
  name: "App",
  data() {
    return {
      headerObj: { text: "身份证复印件" },
    };
  },
  components: {
    BoxContain,
  },
};
</script>
<style  scoped lang="scss">
.id-contain {
  font-size: 12px;
  .remind {
    color: #f13e3e;
    margin: 10px 0;
  }
  .id-content {
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
    margin-top: 20px;
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