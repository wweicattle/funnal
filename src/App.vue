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
              <span class="all-f" @click="appendixOpen">所有附件</span>
              <!-- <el-button type="primary" @click="watchNode">查看节点</el-button> -->
              <el-button type="primary" class="save" @click="submitSave">保存</el-button>
              <el-button class="submit" @click="submitData" v-if="isCommit">办理</el-button>
              <template v-for="(i, index) in powerArr">
                <el-button :key="index" class="submit" @click="submitData(i)" v-if="i == 'return' || i == 'drawn'">{{ i == 'return' ? '退办' : '撤办' }}</el-button>
              </template>
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
      <dialog-title v-if="showDialog" dialogName="利郎整改审批表" @closedialog="showDialog = false">
        <!-- <yr-five></yr-five> -->
        <component :is="nowComponent"></component>
      </dialog-title>
      <dialog-title class="appendix-file" v-if="appendDixDialog" dialogName="利郎整改审批表" @closedialog="appendDixDialog = false">
        <!-- <yr-five></yr-five> -->
        <appendix-file></appendix-file>
      </dialog-title>
    </div>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu';
import evenbus from '@/utils/eventbus';
import DialogTitle from '@/components/common/DialogTitle.vue';
import mapComponents from '@/components/BatchDialogs/options';
import AppendixFile from '@/components/common/AppendixFile';
import { mapState, mapMutations } from 'vuex';
import { createProcess, getProcessPer, makeProcess } from '@/network/process';
export default {
  data() {
    return {
      isCommit: true,
      showDialog: false,
      mapComponents: [],
      nowComponent: null,
      appendDixDialog: false,
      powerArr: [],
    };
  },
  created() {
    // 动态加载是不能保证一定加载完成，所以加个异步保证一定能够返回的是有值的
    setTimeout((val) => {
      this.mapComponents = mapComponents;
      this.nowComponent = this.mapComponents[0].com;
    });

    // 有id值先请求流程的权限
    if (this.userData.urlData.id != 0) {
      this.getProcessPer();
    }
  },
  mounted() { },
  components: {
    LeftMenu,
    DialogTitle,
    AppendixFile
  },
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    ...mapMutations(['EDITNODEDATA']),
    createProcess() {
      let obj = {};
      createProcess().then((da) => {
        // 新建成功，docid就会有值 之后再去请求节点信息
        this.getProcessPer();
        // this.$store.state.userData.urlData.copyId = 1;
      });
    },
    getProcessPer() {
      // 请求权限会发返回两种结果 1.errcode==0 但是docid 2.errcode==1 "errcode":"1","data":"查不到当前单据的审批记录，请先发起办理!","errmsg":"false"
      getProcessPer().then((da) => {
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.powerArr = data.limit;
          this.cs = data.cs;
          console.log(da.data);
          this.EDITNODEDATA(data);
          // 判断docId是否存在
          if (data.docId == 0) {
            // 新建
            this.createProcess();
          } else {
            // 显示节点组件
            let { copyId } = this.$store.state.userData.urlData;
            if (copyId == 0) {
              let nodenum = this.cs;
              this.nowComponent = this.mapComponents[nodenum].com;
              this.showDialog = true;
            }
          }
        } else if (da.data.errcode == 1) {
          // 新建
          this.createProcess();
        }
      });
    },
    appendixOpen() {
      this.appendDixDialog = true;
    },
    submitData(state) {
      // this.$confirm('办理后不能保存, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(() => {
      let { copyId } = this.$store.state.userData.urlData;
      if (copyId == 0) {
        // 新建流程
        this.createProcess();
      } else {
        // 直接显示节点组件
        let f = this.cs;
        this.nowComponent = this.mapComponents[f].com;
        this.showDialog = true;
      }
      // })
      // .catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });
      // });
      // let data = this.$store.userData.nodeData;
      // if (data.docId == 0) {
      //   // 判断docid==0  !=0
      //   createProcess().then((da) => {
      //     console.log('createProcess');
      //     // this.$store.state.userData.urlData.copyId = 1;
      //   });
      // } else {
      //   makeProcess().then((da) => {
      //     console.log(da);
      //   });
      // }
      // this.showDialog = true;
      // 是否是已经有id并且有docid点击的
      // 或者有id没有docid点击的办理
    },
    submitSave() {
      evenbus.$emit('sendData');
    }
  },
  watch: {
    'userData.urlData': {
      handler(newVal) {
        newVal.id == 0 ? (this.isCommit = false) : (this.isCommit = true);
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" >
@import url("~assets/css/base.css");
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
            height: 31px;
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
            font-size: 16px;
            letter-spacing: 1px;
            color: #fff !important;
            position: relative;
            font-weight: 600;
            &::before {
              content: "";
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
      max-width: 1040px;
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
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
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
.appendix-file {
  .dialog-box {
    min-height: auto !important;
  }
}
</style>
