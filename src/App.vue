<template>
  <div id="app">
    <div class="contain">
      <div class="left-content">
        <left-menu></left-menu>
      </div>
      <div class="rihgt-content">
        <div class="header">
          <div class="h-name">利郎整改审批表</div>
          <div class="h-ope">
            <img src="static/img/allfu.png" alt="" /><span class="all-f"
              >所有附件</span
            >
            <el-button type="primary" class="save"> 保存</el-button>
            <el-button class="submit">提交</el-button>
          </div>
        </div>
        <!--一级路由 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "@/components/common/LeftMenu";
export default {
  data() {
    return {};
  },
  created() {
    console.log(2121212);
    console.log(323);
  },
  components: {
    LeftMenu,
  },
};
</script>
<style lang="scss">
@import url("~assets/css/base.css");
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
  .contain {
    height: 100%;
    display: flex;
    .left-content {
      width: 167px;
    }
    .rihgt-content {
      background: var(--main-back);
      flex: 1;
      .header {
        height: 50px;
        background: #ffffff;
        // border: 1px solid red;
        // border-bottom: 1px solid rgb(228, 225, 225);
        // box-shadow: 0px 1px 3px 0px rgba(192, 192, 192, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18px;
        // font-size: var();
        font-weight: 600;
        border-bottom: 1px solid #f7eeee;
        .h-name {
          color: var(--text-color);
          font-size: 17px;
          letter-spacing: 1px;
        }
        .h-ope {
          color: var(--nosle-text-color);
          display: flex;
          align-items: center;
          .all-f {
            padding-right: 20px;
          }
          .el-button {
            height: 27px;
            border-radius: 2px !important;
            // width: 64px;
            text-align: center;
            line-height: 27px;
            padding: 0 27px !important;
            font-weight: 600;
            &.save {
              color: var(--sle-text-color);
              background: #fff;
            }
            &.submit {
              background: var(--sle-text-color);
              color: #fff;
            }
          }
          img {
            height: 17px;
            padding-right: 3px;
          }
        }
      }
      .content {
        border: 1px solid #e79393;
        height: calc(100% - 200px);
      }
    }
  }
}
</style>
