<template>
  <div id="app">
    <div class="contain">
      <div class="header-content">
        <div class="contain-t">
          <ul>
            <li class="logo">
              <img src="static/img/logo.png" alt />
            </li>
          </ul>
          <div class="header">
            <div class="h-name">利郎整改审批表</div>
            <div class="h-ope">
              <img src="static/img/uploadIcon.png" alt />
              <span class="all-f">所有附件</span>
              <el-button type="primary" class="save">保存</el-button>
              <el-button class="submit">提交</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="contain-b">
        <div class="left-content">
          <left-menu></left-menu>
        </div>
        <div class="rihgt-content">
          <!-- <div class="header">
            <div class="h-name">利郎整改审批表</div>
            <div class="h-ope">
              <img src="static/img/allfu.png" alt="" /><span class="all-f"
                >所有附件</span
              >
              <el-button type="primary" class="save"> 保存</el-button>
              <el-button class="submit">提交</el-button>
            </div>
          </div>-->
          <!--一级路由 -->
          <router-view></router-view>
        </div>
      </div>
      <!-- <yr-one></yr-one> -->
    </div>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu';
import YrOne from './views/StorePolicy/TestDialog/YrOne.vue';

export default {
  data() {
    return {};
  },
  created() {
    //  this.wsCache.set("username", "详细数据");
    //   // console.log(this.$Loading);
    //   this.load = this.$Loading.service({
    //     fullscreen: true,
    //   });
    //   this.load.close();
    window.onresize = function () {
      // window.location.reload();
    };
  },
  components: {
    LeftMenu,
    YrOne,
  }
};
</script>
<style lang="scss" >
@import url('~assets/css/base.css');
body,
html {
  height: 100%;
  width: 100%;
  overflow: auto;
}

#app {
  height: 100%;
  overflow: hidden;
  .contain {
    height: 100%;
    background: var(--main-back);
    // background: red;
    .header-content {
      background: #283049;
      .contain-t {
        display: flex;
        background: #283049;
        max-width: 1420px;
        margin: 0 auto;
        position: relative;
        left: 0;
        right: 0;
        ul {
          width: 167px;
          height: 50px;
          position: relative;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 28px;
            margin: auto;
          }
        }

        .header {
          flex: 1;
          height: 50px;
          // background: #ffffff;
          background: #283049 !important;
          // border: 1px solid red;
          // border-bottom: 1px solid rgb(228, 225, 225);
          // box-shadow: 0px 1px 3px 0px rgba(192, 192, 192, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 18px;
          // font-size: var();
          font-weight: 500;
          // border-bottom: 1px solid #f7eeee;
          .h-name {
            font-size: 17px;
            letter-spacing: 1px;
            color: #fff !important;
            position: relative;
            font-weight: 600;
            &::before {
              content: '';
              position: absolute;
              width: 1px;
              height: 62%;
              left: -10px;
              background: #fff;
              top: 0;
              bottom: 0;
              margin: auto 0;
            }
          }
          .h-ope {
            color: #fff;
            display: flex;
            align-items: center;
            .all-f {
              padding-right: 26px;
            }
            .el-button {
              height: 27px;
              border-radius: 2px !important;
              // width: 64px;
              text-align: center;
              line-height: 27px;
              padding: 0 27px !important;
              &.save {
                color: #fff;
                border: 1px solid #fff;
                background: #283049 !important;
              }
              &.submit {
                background: var(--sle-text-color);
                color: #fff;
                border: none !important;
              }
            }
            img {
              height: 17px;
              padding-right: 3px;
            }
          }
        }
      }
    }

    .contain-b {
      max-width: 1024px;
      display: flex;
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 15px;
      height: calc(100% - 80px);
      .left-content {
        width: 164px;
        height: 100%;
        overflow: hidden;
        overflow-y: scrroll;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
      }
      .rihgt-content {
        background: var(--main-back);
        flex: 1;
        margin-left: 14px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        overflow: hidden;
        .content {
          // border: 1px solid #e79393;
          height: calc(100% - 200px);
        }
      }
    }
  }
}
</style>
<style lang="scss">
// @media screen and (max-width: 1024px) {
//   body {
//     // background-color:lightblue;
//     max-width: 1024px;
//   }
// }

// @media screen and (min-width: 1024px) {
//   .rihgt-content {
//     .route-contains {
//       padding: 0 0 0 25px;
//     }
//     .two-menu {
//       padding-right: 0;
//       // height: calc(100% - 73px);
//     }
//   }
//   .contain-b {
// background-color:lightblue;
//     max-width: 1024px;
//     position: relative;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     margin-top: 15px;
//     height: calc(100% - 65px) !important;
//     .left-c {
//       height: calc(100% - 15px);
//     }
//   }
//   .contain-t {
//     .header {
//       border-bottom: none !important;
//       background: #283049 !important;
//       .h-name {
//         color: #fff !important;
//         position: relative;
//         &::before {
//           content: '';
//           position: absolute;
//           width: 1px;
//           height: 62%;
//           left: -10px;
//           background: #fff;
//           top: 0;
//           bottom: 0;
//           margin: auto 0;
//         }
//       }
//       .h-ope {
//         .save {
//           background: #283049 !important;
//         }
//         .submit {
//           border: none !important;
//         }
//       }
//     }
//   }
//   body {
//     background: var(--main-back);
//   }
// }
</style>