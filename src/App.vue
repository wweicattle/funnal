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
              <!-- <button @click="nodes=true">click</button> -->
              <img src="static/img/uploadIcon.png" alt />
              <span class="all-f" @click="appendDixDialog = true"
                >所有附件</span
              >
              <img src="static/img/batch.png" @click="watchFlow" alt />
              <span class="all-f" @click="watchFlow">流程图</span>
              <!-- <el-button type="primary" @click="watchFlow" class="batch-css"
                >流程图</el-button
              > -->
              <el-button type="primary" @click="watchNode" class="process-css"
                >流程记录</el-button
              >
              <!-- <button @click="btns">chakan</button> -->
              <el-button
                type="primary"
                class="save"
                v-checkSubmit
                v-if="ShopBasicData.shbs == 0 && cansave"
                key="save"
              >
                <i class="el-icon-document"></i>
                保存</el-button
              >
              <el-button
                class="save"
                @click="submitData"
                key="submit"
                v-if="isCommit"
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

      <!-- <dialog-title v-if="nodes" @close="nodes=false">
         <node />
       </dialog-title> -->
    </div>
    <el-dialog
      class="dialogs"
      title="流程图"
      v-if="flowdialogVisible"
      :visible.sync="flowdialogVis"
      width="80%"
      :close-on-click-modal="false"
      :before-close="beforeClose"
    >
      <div class="des">
        <span style="background: #48e54e" class="circle"></span
        ><span class="text">已办理;</span>
        <span style="background: #f60900" class="circle"></span
        ><span class="text">代表当前节点;</span>
        <span style="background: #0d74f3" class="circle"></span>未办理
      </div>
      <div id="container"></div>
      <!-- <simple-flowchart :scene.sync="flowdata"></simple-flowchart> -->
    </el-dialog>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu';
import eventBus from '@/utils/eventbus';
import nodeOptions from '@/utils/nodeOptions';
import DialogTitle from '@/components/common/DialogTitle.vue';
import mapComponents from '@/components/BatchDialogs/options';
import AppendixFile from '@/components/common/AppendixFile';
import { mapState, mapMutations } from 'vuex';

// import node from "@/components/BatchDialogs/nodeEight.vue"

import {
  getProcessPer,
  getProcessRecords,
  backProcess,
  makeProcess,
  getBatchDatas
} from '@/network/process';
import Graph from '@/utils/flowOption';

export default {
  name: 'App',
  data() {
    return {
      isCommit: false,
      showDialog: false,
      mapComponents: [],
      nowComponent: null,
      appendDixDialog: false,
      powerArr: [],
      cansaveBtn: true,
      cansave: false,
      flowdialogVisible: false,
      flowdialogVis: true,
      flowdata: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 2,
            x: -700,
            y: -69,
            type: 'Action',
            label: 'test1'
          },
          {
            id: 4,
            x: -357,
            y: 80,
            type: 'Script',
            label: 'test2'
          },
          {
            id: 6,
            x: -557,
            y: 80,
            type: 'Rule',
            label: 'test3'
          }
        ],
        links: [
          {
            id: 3,
            from: 2, // node id the link start
            to: 4 // node id the link end
          }
        ]
      }
      // nodes:false
    };
  },
  created() {
    // 动态加载是不能保证一定加载完成，所以加个异步保证一定能够返回的是有值的
    setTimeout((val) => {
      this.mapComponents = mapComponents;
      // console.log(this.mapComponents);
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

  mounted() {
    eventBus.$on('saveSuccess', this.changeSaveBtn);
  },
  components: {
    LeftMenu,
    DialogTitle,
    AppendixFile,
    // node
  },
  computed: {
    ...mapState(['userData', 'policyExist', 'ShopBasicData']),
    ...mapState({
      urlData: (state) => state.userData.urlData,
      userInfo: (state) => state.userData.userInfo,
      nodeData: (state) => state.userData.nodeData,
      nodeid: (state) => state.userData.nodeid
    })
  },
  methods: {
    beforeClose() {
      this.flowdialogVisible = false;
    },
    watchFlow() {
      // 如果没有docid 提示该单无办理流程！~
      if (!this.userData.nodeData?.docId) {
        return this.$Message.info('无流程记录,流程暂未发起');
      }

      this.loading = this.$Loading.service({
        fullscreen: true
      });
      // 显示对话框
      this.flowdialogVisible = true;
      getBatchDatas().then((da) => {
        //  da = {
        //   data: {
        //     errcode: '0',
        //     data: [
        //       {
        //         nodename: '填写审批表',
        //         nodetype: '0',
        //         nodedisp: 'left:11;top:46;width:100;height:30;',
        //         nodeState: '0',
        //         nextNodeList: ['3898'],
        //         nodeid: '3897',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '业务员签字',
        //         nodetype: '1',
        //         nodedisp: 'left:10;top:103;width:100;height:30;',
        //         nodeState: '0',
        //         nextNodeList: ['3899'],
        //         nodeid: '3898',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '业务经理审核',
        //         nodetype: '1',
        //         nodedisp: 'left:10;top:156;width:100;height:30;',
        //         nodeState: '0',
        //         nextNodeList: ['3900'],
        //         nodeid: '3899',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '贸易公司审批',
        //         nodetype: '1',
        //         nodedisp: 'left:10;top:214;width:100;height:30;',
        //         nodeState: '0',
        //         nextNodeList: ['3901'],
        //         nodeid: '3900',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '政策管理处初审',
        //         nodetype: '1',
        //         nodedisp: 'left:12;top:275;width:100;height:30;',
        //         nodeState: '1',
        //         nextNodeList: ['3902', '3906', '3920'],
        //         nodeid: '3901',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '利郎公司副总裁确认',
        //         nodetype: '1',
        //         nodedisp: 'left:159;top:275;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3903'],
        //         nodeid: '3902',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '企划设计组接收',
        //         nodetype: '1',
        //         nodedisp: 'left:158;top:213;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3904'],
        //         nodeid: '3903',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '平面图设计',
        //         nodetype: '1',
        //         nodedisp: 'left:158;top:154;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3905'],
        //         nodeid: '3904',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '平面图审核',
        //         nodetype: '1',
        //         nodedisp: 'left:156;top:101;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3907'],
        //         nodeid: '3905',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '销售/营销/市场总监/轻商务总经理复审',
        //         nodetype: '1',
        //         nodedisp: 'left:156;top:335;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3902'],
        //         nodeid: '3906',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '贸易公司总经理确认',
        //         nodetype: '1',
        //         nodedisp: 'left:282;top:100;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3908'],
        //         nodeid: '3907',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '政策管理处核定',
        //         nodetype: '1',
        //         nodedisp: 'left:416;top:99;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3909', '3910', '3911', '3921'],
        //         nodeid: '3908',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '渠道规划总监',
        //         nodetype: '1',
        //         nodedisp: 'left:280;top:150;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3910'],
        //         nodeid: '3909',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '销售/营销/市场直营总监/轻商务总经理审核',
        //         nodetype: '1',
        //         nodedisp: 'left:278;top:209;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3921'],
        //         nodeid: '3910',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '市场商品/运营审图',
        //         nodetype: '1',
        //         nodedisp: 'left:416;top:152;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3910'],
        //         nodeid: '3911',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '设计方案终审',
        //         nodetype: '1',
        //         nodedisp: 'left:277;top:330;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3913'],
        //         nodeid: '3912',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '利郎公司总裁终审',
        //         nodetype: '1',
        //         nodedisp: 'left:416;top:330;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3914'],
        //         nodeid: '3913',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '企划部接收',
        //         nodetype: '1',
        //         nodedisp: 'left:415;top:273;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3915'],
        //         nodeid: '3914',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '施工图设计',
        //         nodetype: '1',
        //         nodedisp: 'left:417;top:211;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3916'],
        //         nodeid: '3915',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '专卖店照片上传',
        //         nodetype: '1',
        //         nodedisp: 'left:540;top:209;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3917'],
        //         nodeid: '3916',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '专卖店照片审核',
        //         nodetype: '1',
        //         nodedisp: 'left:541;top:270;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3919'],
        //         nodeid: '3917',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '各部业务经理/渠道副总监初审',
        //         nodetype: '1',
        //         nodedisp: 'left:12;top:335;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3906'],
        //         nodeid: '3920',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '利郎公司副总裁审核',
        //         nodetype: '1',
        //         nodedisp: 'left:275;top:269;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['3912'],
        //         nodeid: '3921',
        //         flowid: '790'
        //       },
        //       {
        //         nodename: '政策管理处归档',
        //         nodetype: '2',
        //         nodedisp: 'left:543;top:332;width:100;height:30;',
        //         nodeState: '-1',
        //         nextNodeList: ['0'],
        //         nodeid: '3919',
        //         flowid: '790'
        //       }
        //     ],
        //     errmsg: 'success'
        //   }
        // };
        this.loading.close();
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.$nextTick((val) => {
            const graph = new Graph({
              container: document.getElementById('container'),
              connecting: {
                anchor: 'midSide'
              },

              autoResize: true,
              background: {
                color: '#fffbe6' // 设置画布背景颜色
              },
              grid: {
                size: 10, // 网格大小 10px
                visible: true // 渲染网格背景
              }
            });
            let datas = data;
            let powerData = [];
            let mapdata = datas.map((val, index) => {
              let { nodename, nodedisp, nodeState } = val;
              let x, y;
              nodedisp.split(';').map((val, index) => {
                //   console.log(val);
                //   console.log( val.split(":")[0]);
                //  console.log(val.split(":")[1]);
                if (index == 0) {
                  x = val.split(':')[1];
                }

                if (index == 1) {
                  y = val.split(':')[1];
                }
              });

              let arrs = [];
              val.nextNodeList.map((vals) => {
                if (vals == 0) return;
                let obj = {
                  id: index,
                  shape: 'bpmn-edge',
                  source: val.nodeid,
                  target: vals
                };
                arrs.push(obj);
              });

              powerData = powerData.concat(arrs);
              let shape;
              if (nodeState == 0) {
                // yi办理
                shape = 'activity';
              } else if (nodeState == -1) {
                // dangeiqnjiedian
                shape = 'activityer';
              } else {
                // weibanli
                shape = 'activityyi';
              }
              return {
                shape,
                id: val.nodeid,
                width: 210,
                height: 40,
                position: {
                  x: x * 2,
                  y: y * 1.3
                },
                label: nodename.substr(0, 10)
              };
            });
            mapdata = mapdata.concat(powerData);
            // let data = mapdata;
            const cells = [];
            mapdata.forEach((item) => {
              if (item.shape === 'bpmn-edge') {
                cells.push(graph.createEdge(item));
              } else {
                cells.push(graph.createNode(item));
              }
            });
            graph.resetCells(cells);
            graph.zoomToFit({ padding: 0, maxScale: 0.8 });
          });
        } else {
          this.$Message.error(da.data.errmsg);
        }
      });

      setTimeout((val) => {
        this.loading.close();
      }, 10000);
    },
    btns() {
      this.showDialog = true;
      this.nowComponent = 'nodeOne';
      this.cs = 6;
      // console.log(this.  this.showDialog = true;);
    },
    ...mapMutations(['EDITNODEDATA', 'EDITNODEID']),
    watchNode() {
      if (!this.userData.nodeData?.docId) {
        return this.$Message.info('无审批记录,流程暂未发起');
      }

      // 请求流程记录
      getProcessRecords().then((da) => {
        if (da.data.errcode == 0) {
          let data = JSON.stringify(da.data.data);
          data = encodeURI(data);
          // let url = 'http://192.168.37.30:8088/#/approvalFfow?list=' + data;
          let url =
            'http://tm.lilanz.com/oa/project/flowIframe/index.html#/approvalFfow?list=' +
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
          this.EDITNODEID(data.nodeid);
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
          this.EDITNODEID(data.nodeid);
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
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        callback: (action) => {
          return;
        }
      });
    },
    debounce() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        // if (this.cansaveBtn) {
        //   this.cansaveBtn = false;
        eventBus.$emit('sendData');
        // }
      }, 300);
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
      // 防抖
      this.debounce();
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
          list: data,
          // body: '同意办理' /**dev */,
          nodeid: this.nodeid
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
          `http://tm.lilanz.com/oa/project/flowIframe/index.html#/approvalFfow?${options}`
        );
        // LLFlow.showFlowOpin(
        //   `http://192.168.37.30:8088/#/approvalFfow?${options}`
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
    },
    changeSaveBtn() {
      this.canscansaveaveBtn = true;
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
    },
    $route(newVal) {
      if (newVal.name == '经销商个人档案' || newVal.name == '专卖店资料') {
        this.cansave = true;
      } else {
        this.cansave = false;
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
              &.batch-css {
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
  .dialogs {
    .el-dialog {
      height: 80%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto !important;
      .el-dialog__header {
        border-bottom: 1px solid #f3efef;
      }
      .el-dialog__body {
        height: calc(100% - 54px);
        padding: 0px;
        position: relative;
        .des {
          height: 50px;
          display: flex;
          align-items: center;
          position: absolute;
          right: 20px;
          z-index: 100;
          justify-content: flex-end;
          .circle {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 2px;
            margin-top: 2px;
          }
          .text {
            margin-right: 6px;
          }
        }
        #container {
          // margin: 0 10px;
          height: 100%;
        }
      }
    }
  }
}
.appendix-file {
  .dialog-box {
    min-height: auto !important;
  }
}
</style>

