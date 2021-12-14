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
            <div class="h-name">
              利郎{{ userData.urlData.lx == 'jm' ? '加盟' : '整改' }}审批表
            </div>
            <div class="h-ope">
              <img src="static/img/uploadIcon.png" alt />
              <span class="all-f" @click="appendDixDialog = true"
                >所有附件</span
              >
              <el-button type="primary" @click="watchNode" class="process-css"
                >查看流程</el-button
              >
              <el-button
                type="primary"
                class="save"
                v-checkSubmit
                v-if="ShopBasicData.shbs == 0"
                key="save"
              >
                <i class="el-icon-document"></i>
                保存</el-button
              >
              <el-button
                class="save"
                @click="submitData"
                v-if="isCommit"
                key="submit"
              >
                <i class="el-icon-position"></i> 办理</el-button
              >
              <div v-if="ShopBasicData.shbs != 1" class="ope-content">
                <template v-for="(i, index) in powerArr">
                  <el-button
                    :key="index"
                    class="save"
                    @click="returnData(i)"
                    v-if="
                      i == 'return' ||
                      i == 'drawn' ||
                      i == 'clear' ||
                      i == 'send'
                    "
                  >
                    <i
                      :class="[
                        i == 'return'
                          ? 'el-icon-back'
                          : i == 'send'
                          ? 'el-icon-position'
                          : 'el-icon-document-delete'
                      ]"
                    ></i>
                    {{
                      i == 'return'
                        ? '退办'
                        : i == 'drawn'
                        ? '撤办'
                        : i == 'send'
                        ? '办理'
                        : '取消申报'
                    }}</el-button
                  >
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contain-b">
        <div class="left-content">
          <left-menu></left-menu>
        </div>
        <div class="rihgt-content">
          <!--一级路由 -->
          <router-view></router-view>
        </div>
      </div>
      <dialog-title
        v-if="showDialog"
        :dialogName="
          userData.urlData.lx == 'jm' ? '利郎加盟审批表' : '利郎整改审批表'
        "
        @closedialog="showDialog = false"
        @myFlowsend="myFlowSend"
      >
        <!-- <yr-five></yr-five> -->
        <component :is="nowComponent" :nodeCs="cs"></component>
      </dialog-title>
      <dialog-title
        class="appendix-file"
        v-if="appendDixDialog"
        dialogName="利郎整改审批表"
        @closedialog="appendDixDialog = false"
      >
        <!-- <yr-five></yr-five> -->
        <appendix-file></appendix-file>
      </dialog-title>
    </div>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu';
import evenbus from '@/utils/eventbus';
import nodeOptions from '@/utils/nodeOptions';
import DialogTitle from '@/components/common/DialogTitle.vue';
import mapComponents from '@/components/BatchDialogs/options';
import AppendixFile from '@/components/common/AppendixFile';
import { mapState, mapMutations } from 'vuex';
import {
  createProcess,
  getProcessPer,
  getProcessRecords,
  backProcess,
  makeProcess
} from '@/network/process';
export default {
  name: 'App',
  data() {
    return {
      isCommit: false,
      showDialog: false,
      mapComponents: [],
      nowComponent: null,
      appendDixDialog: false,
      powerArr: []
      // saveBtnVis: true
    };
  },
  created() {
    // 动态加载是不能保证一定加载完成，所以加个异步保证一定能够返回的是有值的
    setTimeout((val) => {
      this.mapComponents = mapComponents;
    });

    // 有id值先请求流程的权限
    if (
      Object.keys(this.userData.urlData).length > 0 &&
      this.userData.urlData.id != 0
    ) {
      this.getOneProcessPer();
    }

    // id=0 直接显示办理的按钮，不用watch监听，因为立即执行会有一种显示后消失的不好体验
    if (this.userData.urlData.id == 0) this.isCommit = true;
  },

  mounted() {},
  components: {
    LeftMenu,
    DialogTitle,
    AppendixFile
  },
  computed: {
    ...mapState(['userData', 'policyExist', 'ShopBasicData']),
    ...mapState({
      urlData: (state) => state.userData.urlData,
      userInfo: (state) => state.userData.userInfo,
      nodeData: (state) => state.userData.nodeData
    })
  },
  methods: {
    ...mapMutations(['EDITNODEDATA']),
    watchNode() {
      if (!this.userData.nodeData?.docId) {
        return this.$Message.info('无审批记录,流程暂未发起');
      }

      // 请求流程记录
      getProcessRecords().then((da) => {
        if (da.data.errcode == 0) {
          let data = JSON.stringify(da.data.data);
          // let url = 'http://192.168.37.38:8088/#/approvalFfow?list=' + data;
          data = encodeURI(data);
          let url =
            'http://tm.lilanz.com/QYWX/project/ffowIframe/#/approvalFfow?list=' +
            data;
          LLFlow.showFlowRecord(url);
        } else {
          this.$Message.error(da.data.errmsg);
        }
      });
    },
    //
    mysendNode() {
      this.submitSave();
    },
    // 创建流程
    createProcess() {
      this.loading = this.$Loading.service({
        fullscreen: true
      });
      let flowSendData = {
        flowid: this.urlData.flowid,
        dxid: this.urlData.id,
        username: this.userInfo.username,
        userid: this.userInfo.userid,
        tzid: 1,
        docId: 0,
        dxlx: this.urlData.lx == 'jm' ? 'jm' : 'zg',
        body: '' /**dev */
      };
      // return;

      // 调用办理接口，后台会给你办理第一道
      // makeProcess(flowSendData).then((da) => {
      //   console.log(da);
      //   // this.getProcessPer();
      // this.$store.state.userData.urlData.copyId = 1;
      // });
      makeProcess(flowSendData).then((da) => {
        // return;
        // 新建成功，docid就会有值 之后再去请求节点信息
        if (da.data.errcode == 0) {
          this.getProcessPer();
          this.$store.state.userData.urlData.copyId = 1;
        } else {
          this.$Message.error('新建办理失败!' + da.data.errmsg);
          return;
        }
      });
    },
    // 获取流程权限
    getProcessPer() {
      this.loading = this.$Loading.service({
        fullscreen: true
      });
      // 请求权限会发返回两种结果 1.errcode==0 但是docid 2.errcode==1 "errcode":"1","data":"查不到当前单据的审批记录，请先发起办理!","errmsg":"false"
      getProcessPer().then((da) => {
        this.loading.close();
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.powerArr = data.limit;
          this.cs = data.cs;
          this.EDITNODEDATA(data);
          // 判断docId是否存在
          // if (data.docId == 0) {
          //   // 新建
          //   this.createProcess();
          // } else {
          // 显示节点组件
          let nodenum = this.cs;
          // if nodenum==0
          if (nodenum == '') {
            this.myFlowSend();
            return;
          }

          let comNames = nodeOptions.find((val) => {
            if (val.nodeNum.indexOf(Number(nodenum)) >= 0) return true;
          });
          let comName = comNames.val;
          this.nowComponent = this.mapComponents.find((val) => {
            if (val.name == comName) return true;
          }).com;
          this.showDialog = true;
          // 保存按钮隐藏
          // this.saveBtnVis = false;
          // }
          // }
        } else if (da.data.errcode == 1) {
          // 新建
          // this.createProcess();
          // nodeData需要初始化{}，这样才会有一个办理的按钮，因为一开始docid没值需要给他一个办理的按钮
          this.EDITNODEDATA({});
          this.$Message.error(JSON.stringify(da.data.errmsg));
        }
      });
    },
    // 组件初始化进来
    getOneProcessPer() {
      // 请求权限会发返回两种结果 1.errcode==0 但是docid 2.errcode==1 "errcode":"1","data":"查不到当前单据的审批记录，请先发起办理!","errmsg":"false"
      getProcessPer().then((da) => {
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.powerArr = data.limit;
          this.cs = data.cs;
          this.EDITNODEDATA(data);
        } else if (da.data.errcode == 1) {
          // 此時是取消申報的過程，这时应该自动把取消申报隐藏
          // 保存按钮显示
          this.powerArr = [];
          // 赋值为0 这时可以进行监听的到docid的变化
          this.EDITNODEDATA({});
          // this.$Message.info(da.data.errmsg);
        }
      });
    },
    directiveMsg() {
      //'这个方法返回错误提示;提示关闭后，定位到第一个错误地方'
      this.$alert('数据不合法，请检查修改！', '提示', {
        confirmButtonText: '确定',
        callback: (action) => {
          return;
        }
      });
    },

    submitData() {
      // 先判断是不是新单，如果是新单的话没有id 先提示保存后youid 才能办理
      if (this.userData.urlData.id == 0) {
        return this.$Message.info('新建审批单，请先发起保存后，方可办理!');
      }
      // copyId是判断当前是不是刚新建审批的单子，后面再点击办理的时候
      // 新建的单子需要进行直接发起新建流程
      // let { copyId } = this.$store.state.userData.urlData;
      // 直接调用
      this.createProcess();
    },
    returnData(state) {
      // state=send办理
      if (state == 'send') return this.getProcessPer();
      // state drawn撤办
      // return 退办
      backProcess(state)
        .then((da) => {
          if (da.data.errcode == 0) {
            //重新调用流程权限
            this.getOneProcessPer();
            let obj = {
              drawn: '撤办',
              return: '退办',
              clear: '取消申报'
            };
            this.$Message.success((obj[state] || '') + '成功！');
          } else {
            this.$Message.error('操作失败！' + da.data.errmsg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitSave() {
      evenbus.$emit('sendData');
    },
    async myFlowSend() {
      let recordList = await getProcessRecords();
      if (recordList.data.errcode == 0) {
        let data = JSON.stringify(recordList.data.data);
        let flowSendData = {
          flowid: this.urlData.flowid,
          dxid: this.urlData.id,
          username: this.userInfo.username,
          userid: this.userInfo.userid,
          tzid: 1,
          docId: this.nodeData.docId,
          dxlx: this.urlData.lx == 'jm' ? 'jm' : 'zg',
          list:data
          // body: '同意办理' /**dev */
        };
        //
        let arr = [];
        for (const key in flowSendData) {
          if (flowSendData.hasOwnProperty.call(flowSendData, key)) {
            arr.push(`${key}=${flowSendData[key]}`);
          }
        }
        let options = encodeURI(arr.join('&'));
        LLFlow.showFlowOpin(
          `http://tm.lilanz.com/QYWX/project/ffowIframe/#/approvalFfow?${options}`
        );
        // LLFlow.showFlowOpin(
        // `http://192.168.37.38:8088/#/opinion?options=${options}`
        // );
        LLFlow.resultFunc = (res) => {
          console.log(res);
          let data = res;
          if (data.errcode == 0) {
            this.$Message.success(data.errmsg);
            this.getOneProcessPer();
            LLFlow.hideFlowOpin();
          } else {
            this.$Message.error(JSON.stringify(data.errmsg));
          }
        };
      } else {
        this.$Message.error(da.data.errmsg);
      }
    }
  },
  watch: {
    policyExist: {
      handler(newVal) {
        console.log(newVal);
        // console.log(this.EDITNODEDATA);
      },
      deep: true,
      immediate: true
    },
    'userData.nodeData.docId': {
      handler(newVal) {
        !newVal ? (this.isCommit = true) : (this.isCommit = false);
      }
      // immediate: true
    },
    'userData.userInfo': {
      handler(newVal) {
        if (Object.keys(newVal).length > 0) {
          if (
            Object.keys(this.userData.urlData).length > 0 &&
            this.userData.urlData.id != 0
          ) {
            this.getOneProcessPer();
          }
        }
      }
    }
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
            &:hover {
              cursor: pointer;
            }
            .all-f {
              padding-right: 26px;
            }
            .el-button {
              &:hover {
                opacity: 0.8;
                cursor: pointer;
              }
              height: 27px;
              border-radius: 2px !important;
              // width: 64px;
              text-align: center;
              line-height: 27px;
              padding: 0 17px !important;
              &.save {
                color: #fff;
                border: 1px solid #fff;
                background: #283049 !important;
              }
              &.process-css {
                background: var(--sle-text-color);
                border: none;
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
            .ope-content {
              margin-left: 10px;
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
