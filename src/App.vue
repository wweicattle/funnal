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
              <!-- <button @click="nodes = true">click</button> -->

              <img src="static/img/uploadIcon.png" alt />
              <span class="all-f" @click="appendDixDialog = true"
                >所有附件</span
              >
              <img src="static/img/batch.png" @click="watchFlow" alt />
              <span class="all-f" @click="watchFlow">流程图</span>
              <!-- <el-button type="primary" @click="shows" class="batch-css"
                >tuiban</el-button
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
                type="primary"
                class="save"
                v-if="ShopBasicData.shbs == 0 && cansave"
                @click="deleteItem"
              >
                <i class="el-icon-delete"></i>
                删除</el-button
              >

              <el-button
                class="save"
                @click="submitData"
                key="submit"
                v-if="isCommit"
              >
                <i class="el-icon-position"></i> 办理</el-button
              >
              <el-button type="primary" class="save" @click="closepage">
                <i class="el-icon-back"></i>
                关闭</el-button
              >
              <!-- <div v-if="ShopBasicData.shbs != 1" class="ope-content"> -->
              <div class="ope-content">
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

      <div class="bottom-content">
        <div class="contain-b">
          <div class="left-content">
            <left-menu></left-menu>
          </div>
          <div class="rihgt-content">
            <!--一级路由 -->
            <router-view></router-view>
          </div>
        </div>
        <div class="right-contain">
          <div class="batch-datas">
            <div class="batch-records">
              <div class="left-i"></div>
              <div class="tit flexcenter">
                审批记录<span class="shop-name">{{
                  ShopBasicData.zmdmc ? `(${ShopBasicData.zmdmc})` : ''
                }}</span>
              </div>
              <div
                class="svg"
                @click="showOpactity = true"
                v-show="!showOpactity"
              >
                <svg
                  t="1647067954416"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1879"
                  width="20"
                  height="20"
                >
                  <path
                    d="M224 448q-14.016 0-23.008 8.992T192 480v384q0 14.016 8.992 23.008T224 896h576q14.016 0 23.008-8.992T832 864V480q0-14.016-8.992-23.008T800 448H224z m0-64h576q40.992 0.992 68 28T896 480v384q-0.992 40.992-28 68T800 960H224q-40.992-0.992-68-28T128 864V480q0.992-40.992 28-68T224 384z m288 160q14.016 0 23.008 8.992T544 576v192q0 14.016-8.992 23.008T512 800t-23.008-8.992T480 768v-192q0-14.016 8.992-23.008T512 544z m192-160v-64q-2.016-82.016-56-136T512 128q-82.016 2.016-136 56T320 320v64h384zM512 64q108.992 3.008 180.992 75.008T768 320v128H256v-128q3.008-108.992 75.008-180.992T512 64z"
                    fill="#0670FF"
                    p-id="1880"
                  ></path>
                </svg>
                <!-- <span> 打开滤镜</span> -->
              </div>
            </div>
            <div
              class="batch-bottom scrollbar-css"
              v-if="userData.nodeData && userData.nodeData.docId"
              :class="{ 'opacr-color': showOpactity }"
            >
              <!-- 已办理得数据 -->
              <template v-for="(val, index) in allbatch">
                <div class="time-line-item" id="" :key="index">
                  <div
                    class="time-line-item-avatar time-line-item-avatar_before"
                  >
                    <span class="ove-hidden">{{ val.creator }}</span>
                  </div>
                  <div class="time-line-item-content">
                    <div class="time-line-item-title">
                      <span>{{ val.nodename }}</span
                      ><span class="time-line-title-time">{{
                        val.created
                      }}</span>
                    </div>
                    <div class="time-line-item-detail">
                      <div v-if="val && val.returnBs == 0">
                        {{ val && val.creator }}
                      </div>
                      <div v-else>{{ (val && val.data) || '无退办备注' }}</div>
                      <!--v-if-->
                    </div>
                    <!--v-if-->
                    <!-- <div
                      class="time-line-item-msg"
                      style="background: transparent"
                    >
                      {{ val.returnBs == 1 ? val.data || '' : val.body || '' }}
                    </div> -->
                  </div>
                </div>
              </template>
              <!-- 待办数据 -->
              <div
                class="time-line-item time-line-item_nowbg time-line-item_none"
                id="nowNode"
              >
                <div class="time-line-item-avatar time-line-item-avatar_now">
                  <span class="ove-hidden">{{
                    nobatch[0] && nobatch[0].creator
                  }}</span>
                </div>
                <div class="time-line-item-content">
                  <div class="time-line-item-title">
                    <span>{{ nobatch[0] && nobatch[0].nodename }}</span
                    ><span class="time-line-title-time">{{
                      nobatch[0] && nobatch[0].created
                    }}</span>
                  </div>
                  <div class="time-line-item-detail">
                    <div v-if="nobatch[0] && nobatch[0].returnBs == 0">
                      <span class="time-line-detail-none">待</span
                      ><span class="time-line-detail-name">{{
                        nobatch[0] && nobatch[0].creator
                      }}</span
                      ><span class="time-line-detail-none">审批</span>
                    </div>
                    <div v-else>
                      {{ (nobatch[0] && nobatch[0].data) || '无退办备注' }}
                    </div>
                  </div>
                  <!--v-if-->
                  <!-- <div
                    class="time-line-item-msg"
                    style="background: transparent"
                  >
                    {{
                      nobatch[0] && nobatch[0].returnBs == 1
                        ? (nobatch[0] && nobatch[0].data) || ''
                        : (nobatch[0] && nobatch[0].body) || ''
                    }}
                  </div> -->
                </div>
              </div>

              <div
                class="more-tool"
                @click="moreDatasBtn"
                v-if="!moreVisvibily"
              >
                <div class="no-cir"><i class="el-icon-more"></i></div>
                <div class="no-text">查看更多未办理节点</div>
              </div>
              <template v-for="(val, index) in nobatch.slice(1)">
                <div
                  class="
                    time-line-item time-line-item_nowbg time-line-item_none
                  "
                  id="nowNode"
                  :key="index + 100"
                  v-if="moreVisvibily"
                >
                  <div class="time-line-item-avatar no-batch">
                    <span class="ove-hidden">{{ val.creator }}</span>
                  </div>
                  <div class="time-line-item-content">
                    <div class="time-line-item-title">
                      <span>{{ val.nodename }}</span
                      ><span class="time-line-title-time">{{
                        val.created
                      }}</span>
                    </div>
                    <div class="time-line-item-detail">
                      <div v-if="val && val.returnBs == 0">
                        <span class="time-line-detail-none">待</span
                        ><span class="time-line-detail-name">{{
                          val && val.creator
                        }}</span
                        ><span class="time-line-detail-none">审批</span>
                      </div>
                      <div v-else>{{ (val && val.data) || '无退办备注' }}</div>
                    </div>
                    <!--v-if-->
                    <!-- <div
                      class="time-line-item-msg"
                      style="background: transparent"
                    >
                      {{ val.returnBs == 1 ? val.data || '' : val.body || '' }}
                    </div> -->
                  </div>
                </div>
              </template>
              <div
                class="more-tool"
                @click="moreVisvibily = false"
                v-if="moreVisvibily"
              >
                <div class="no-cir"><i class="el-icon-more"></i></div>
                <div class="no-text">收起更多</div>
              </div>
            </div>
            <div class="no-icon" v-else>
              <img src="static/img/no-batch.png" alt="" />
              <div class="icon-text">该单据暂未办理,暂无审批记录</div>
            </div>
            <div class="opa-content" v-if="showOpactity">
              <svg
                t="1647068263537"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2024"
                width="32"
                height="32"
              >
                <path
                  d="M522.666667 106.666667a181.333333 181.333333 0 0 1 181.333333 181.333333v10.666667h-64v-10.666667a117.333333 117.333333 0 0 0-234.666667 0V341.333333h384a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V405.333333a64 64 0 0 1 64-64h106.666666v-53.333333A181.333333 181.333333 0 0 1 522.666667 106.666667zM789.333333 405.333333H234.666667v384h554.666666V405.333333z m-234.666666 106.666667v170.666667h-64v-170.666667h64z"
                  fill="#0670FF"
                  p-id="2025"
                ></path>
              </svg>
              <span class="text" @click="showOpactity = !showOpactity"
                >点击查看审批记录</span
              >
              <!-- <el-button type="primary" @click="showOpactity=!showOpactity"> 打开滤镜 </el-button> -->
            </div>
          </div>
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

      <!-- <dialog-title v-if="nodes" @closedialog="nodes = false">
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
      <div id="container" v-loading="loadingBatch"></div>
      <!-- <simple-flowchart :scene.sync="flowdata"></simple-flowchart> -->
    </el-dialog>

    <el-dialog
      title="退办节点"
      :visible.sync="returnVisDialog"
      width="34%"
      :before-close="turnhandleClose"
      :close-on-click-modal="false"
      class="turn-dialog"
    >
      <div>
        <el-radio-group v-model="turnIndex">
          <ul>
            <template v-for="(val, index) in turnDatas">
              <li :key="index">
                <el-radio :label="index">
                  <div class="name-des">
                    {{ val.returnUsername.substr(0, 1) }}
                  </div>
                  <div class="name-tit">
                    <div class="top">
                      <span class="b-name">{{ val.nodename }}</span>
                      <span class="time">{{ val.creatTime }}</span>
                    </div>
                    <div class="bottom">
                      <span class="name">{{ val.returnUsername }}</span>
                      <span class="batch-situ">审批通过</span>
                    </div>
                  </div></el-radio
                >
              </li>
            </template>
          </ul>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="remind">
          <span class="star">*</span> 请勾选退回的那个节点
        </div>
        <div>
          <el-button @click="returnVisDialog = false" size="small"
            >取 消</el-button
          >
          <el-button
            type="primary"
            class="confirm-btn"
            @click="confirmTurnBtn"
            size="small"
            >确 定</el-button
          >
        </div>
      </span>
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

import node from '@/components/BatchDialogs/nodeEleven.vue';
import { getZmdzlPz, deleteJmspData } from '@/network';
import {
  getProcessPer,
  getProcessRecords,
  backProcess,
  makeProcess,
  getBatchDatas,
  getTurnNode
} from '@/network/process';
import Graph from '@/utils/flowOption';
import debounceMethods from '@/utils/debounce';
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
        // nodes: [
        //   {
        //     id: 2,
        //     x: -700,
        //     y: -69,
        //     type: 'Action',
        //     label: 'test1'
        //   },
        //   {
        //     id: 4,
        //     x: -357,
        //     y: 80,
        //     type: 'Script',
        //     label: 'test2'
        //   },
        //   {
        //     id: 6,
        //     x: -557,
        //     y: 80,
        //     type: 'Rule',
        //     label: 'test3'
        //   }
        // ],
        links: [
          {
            id: 3,
            from: 2, // node id the link start
            to: 4 // node id the link end
          }
        ]
      },
      loadingBatch: false,
      returnVisDialog: false,
      turnIndex: 0,
      nodes: false,
      turnDatas: [],
      moreVisvibily: false,
      allbatch: [],
      nobatch: [],
      showOpactity: true,
      canRequest: false
    };
  },
  created() {
    console.log("this is develop");
    console.log("this is testone 3");
    console.log("master!");
    console.log("this is testgitsss");
    console.log(" this is testone");
    // 动态加载是不能保证一定加载完成，所以加个异步保证一定能够返回的是有值的
    setTimeout((val) => {
      this.mapComponents = mapComponents;
      // console.log(this.mapComponents);
    });

    // // 有id值先请求流程的权限
    // if (
    //   this.userData.urlData.id != 0
    // ) {
    //   this.getOneProcessPer();
    // }

    // id=0 直接显示办理的按钮，不用watch监听，因为立即执行会有一种显示后消失的不好体验
    if (this.userData.urlData.id == 0) this.isCommit = true;

    // 请求加盟整改需要得一些基础配置数据
    this.getZmdzlPzList();
  },

  mounted() {
    eventBus.$on('saveSuccess', this.changeSaveBtn);
  },
  components: {
    LeftMenu,
    DialogTitle,
    AppendixFile,
    node
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
    closepage() {
      open(location, '_self').close();
    },
    deleteItem() {
      if (this.userData.urlData.id == 0)
        return this.$Message.info('这是新建单 不能删除,请保存后再删除!');
      deleteJmspData().then((da) => {
        if (da.data.errcode == 0) {
          this.$Message.success('删除数据成功！');
          open(location, '_self').close();
        } else {
          this.$Message.error(
            '删除数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
    moreDatasBtn() {
      this.moreVisvibily = true;
    },
    getZmdzlPzList() {
      getZmdzlPz().then((da) => {
        if (da.data.errcode == 0) {
          let data = da.data.data;
          console.log(data);
          window.localStorage.setItem('basicDatas', JSON.stringify(data));
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
    confirmTurnBtn() {
      // 请求、关闭
      this.returnVisDialog = false; // 请求接口数据
      // this.getTurnNodes();
      let obj = this.turnDatas[this.turnIndex];
      backProcess(obj.nodeid)
        .then((da) => {
          if (da.data.errcode == 0) {
            //重新调用流程权限
            this.getOneProcessPer();
            this.$Message.success('节点' + obj.nodename + '退办成功！');
          } else {
            this.$Message.error('操作失败！' + da.data.errmsg);
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    },
    // shows() {
    //   this.returnVisDialog = true;
    //     this.turnIndex=0;
    //   this.getTurnNodes();
    // },
    getTurnNodes() {
      getTurnNode().then((da) => {
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.turnDatas = data.returnMessage;
          this.watchNodes();
        } else {
          this.$Message.error(da.data.errmsg);
        }
      });
    },
    turnhandleClose() {
      this.returnVisDialog = false;
    },
    beforeClose() {
      this.flowdialogVisible = false;
    },
    watchFlow() {
      // 如果没有docid 提示该单无办理流程！~
      // if (!this.userData.nodeData?.docId) {
      //   return this.$Message.info('无流程记录,流程暂未发起');
      // }
      this.loadingBatch = true;
      // this.loading = this.$Loading.service({
      //   fullscreen: true
      // });
      // 显示对话框
      this.flowdialogVisible = true;
      getBatchDatas().then((da) => {
        this.loadingBatch = false;
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.$nextTick((val) => {
            const graph = new Graph({
              container: document.getElementById('container'),
              connecting: {
                // anchor: 'midSide',
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
            let beginIndex = 0;
            let mapdata = datas.map((val, index) => {
              let { nodename, nodedisp, nodeState } = val;
              let x, y;
              nodedisp.split(';').map((val, index) => {
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
                  id: ++beginIndex,
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
            // console.log(mapdata);
            const cells = [];
            mapdata.forEach((item) => {
              if (item.shape === 'bpmn-edge') {
                cells.push(graph.createEdge(item));
              } else {
                cells.push(graph.createNode(item));
              }
            });
            graph.resetCells(cells);
            //  graph.zoomToFit({ padding: 10, maxScale: 1 })
            graph.zoomToFit({ padding: 0, maxScale: 0.8 });
          });
        } else {
          this.$Message.error(da.data.errmsg);
        }
      });
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
    watchNodes() {
      if (this.userData.nodeData?.docId) {
        // 请求流程记录
        getProcessRecords()
          .then((da) => {
            if (da.data.errcode == 0) {
              let batchDatas = da.data.data;
              console.log(batchDatas);
              // 进行对办理与未办理数据进行分割
              this.allbatch = batchDatas.filter((val) => {
                return val.passed == 1;
              });
              this.nobatch = batchDatas.filter((val) => {
                return val.passed == 0;
              });
            } else {
              this.$Message.error(da.data.errmsg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
        // 此变量打开，才可以办理
        this.canRequest = false;
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

          // 右侧请求审批数据
          this.watchNodes();
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
          // 右侧请求审批数据
          this.watchNodes();
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
      // 判断是不是790.后才开始办理
      // let flowid = this.urlData.flowid;
      // if (flowid != 790) {
      //   return this.$Message.info('目前暂不支持旧版开单流程办理!');
      // }
      // 设置防抖，同时设置前一个请求没有返回不能再发起新的请求
      debounceMethods(() => {
        if (!this.canRequest) {
          if (this.userData.urlData.flowid == 0) {
            return this.$Message.info('该单据flowid=0，无法办理！');
          }
          // 发起办理进行验证 是否用户信息身份
          if (this.userData.userInfo.username != this.ShopBasicData.zdr) {
            return this.$Message.info('用户身份不一致,不能发起办理!');
          }

          // 先判断是不是新单，如果是新单的话没有id 先提示保存后youid 才能办理
          if (this.userData.urlData.id == 0) {
            return this.$Message.info('新建审批单，请先发起保存后，方可办理!');
          }

          // copyId是判断当前是不是刚新建审批的单子，后面再点击办理的时候
          // 新建的单子需要进行直接发起新建流程
          // let { copyId } = this.$store.state.userData.urlData;
          // 直接调用
          this.canRequest = true;
          // console.log(32332323);
          this.createProcess();
        }
      });
      // return
    },
    returnData(state) {
      // 判断是不是790.后才开始办理
      // let flowid = this.urlData.flowid;
      // state=send办理
      if (state == 'send') {
        //設置防抖 避免重新请求

        debounceMethods(() => {
          if (!this.canRequest) {
            this.canRequest = true;
            if (this.ShopBasicData.flowid == 0) {
              return this.$Message.info('该单据flowid=0，无法办理！');
            } else {
              return this.getProcessPer();
            }
          }
        });
        return;
        // if (flowid != 790) {
        //   return this.$Message.info('目前暂不支持旧版开单流程办理!');
        // }
      }
      if (state == 'return') {
        this.returnVisDialog = true;
        this.turnIndex = 0;
        this.getTurnNodes();
        return;
      }
      // state drawn撤办
      // return 退办
      backProcess(0)
        .then((da) => {
          if (da.data.errcode == 0) {
            //重新调用流程权限
            this.getOneProcessPer();
            let obj = {
              drawn: '撤办',
              return: '退办',
              clear: '取消申报'
            };
            this.watchNodes();
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
          // console.log(res);
          let data = res;
          if (data.errcode == 0) {
            this.$Message.success(data.errmsg);
            // this.getOneProcessPer();
            // s
            window.opener.postMessage(
              { cmd: 'refreshList', id: this.userData.urlData.id },
              '*'
            );

            // 右侧请求审批数据
            // this.watchNodes();
            // LLFlow.hideFlowOpin();
            // 關閉頁面
            open(location, '_self').close();
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
        // console.log(newVal);
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
          if (this.userData.urlData.id != 0) {
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
    .bottom-content {
      height: calc(100% - 80px);
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 1400px;
    }
    .contain-b {
      width: 1040px;
      display: flex;
      position: relative;
      left: 0;
      right: 0;
      // margin: 0 auto;
      margin-top: 15px;
      // height: calc(100% - 80px);
      height: 100%;
      overflow: hidden;
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
    .right-contain {
      margin-left: 16px;
      margin-top: 15px;
      // height: calc(100% - 80px);
      height: 100%;
      // border: 1px solid red;
      // width: 300px;
      // flex: 1;
      // max-height: 700px;
      width: 360px;
      .batch-datas {
        // border: 1px solid red;
        height: 100%;
        background: #fff;
        // height: 600px;
        overflow: hidden;
        position: relative;
        .batch-records {
          font-size: 17px;
          font-weight: 600;
          padding: 13px 0 13px 8px;
          border-bottom: 1px solid var(--line-color);
          display: flex;
          align-items: center;
          position: relative;

          .left-i {
            width: 4px;
            height: 14px;
            background: var(--sle-text-color);
            margin-right: 4px;
            // height: 80%;
          }
          .svg {
            position: absolute;
            right: 10px;
            font-size: 12px;
            &:hover {
              opacity: 0.8;
              cursor: pointer;
            }
            // float:right;
          }
          .shop-name {
            font-size: 15px;
            color: #999;
            display: inline-block;
            overflow: hidden;
            width: 210px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        .batch-bottom {
          height: calc(100% - 49px);
          // border: 1px solid red;
          overflow: auto;
          padding-top: 10px;
          &.opacr-color {
            // filter: blur(5px) brightness(1.5) grayscale(0.2) contrast(0.8);
          }
        }

        .no-icon {
          position: relative;
          // border: 1px solid red;
          img {
            margin-top: 70px;
            width: 80%;
            margin-left: 10%;
          }
          .icon-text {
            font-size: 13px;
            text-align: center;
            color: #9e9e9e;
          }
        }
        .opa-content {
          margin-top: 49px;
          height: calc(100% - 49px);
          // border: 1px solid red;
          position: absolute;
          z-index: 6;
          top: 0;
          width: 100%;
          // background: rgb(204, 141, 141);
          color: var(--sle-text-color);
          // z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(
            to top,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.8)
          );
          // top: 0;
          // left: 0;
          // right: 0;
          // bottom: 0;
          // margin: auto;
          .text {
            font-size: 15px;
            color: var(--sle-text-color);
            &:hover {
              cursor: pointer;
              opacity: 0.7;
            }
          }
          // filter: blur(1px) brightness(0.5) grayscale(0.1) contrast(0.8);
        }
      }

      .time-line-item {
        border-radius: 5px;
        padding: 6px 15px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        position: relative;
        font-size: 14px;
        &:hover {
          cursor: pointer;
        }
      }

      .time-line-item:hover {
        background: #ecf5ff;
      }

      .time-line-item .time-line-item-avatar {
        height: 50px;
        width: 50px;
        align-self: flex-start;
        background: #efefef;
        /* background: #f7f7f7; */
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #985900;
        z-index: 3;
        /* overflow: hidden; */
        text-align: center;
        position: relative;
        &.no-batch {
          background: #fff;
          border: 1px solid #eee;
          opacity: 0.8;
          color: rgb(163, 159, 159);
        }
      }
      .time-line-item .time-line-item-avatar_before {
        color: #049170;
        font-weight: bold;
      }
      .time-line-item-avatar_now {
        color: #d57d00 !important;
      }
      .time-line-item .time-line-item-avatar_before::after {
        content: '';
        position: absolute;
        bottom: -4px;
        right: -4px;
        font-family: 'iconfont';
        font-size: 12px;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        color: #fff;
        background: #00b600;
        border: 3px solid #fff;
        font-family: element-icons !important;
      }

      .time-line-item .time-line-item-content {
        margin-left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        font-size: 13px;
        flex: 1;
      }

      .time-line-item .time-line-item-content .time-line-item-title {
        color: #000;
        align-items: center;
        display: flex;
        align-items: flex-start;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-title
        > span:first-child {
        flex: 1;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-title
        .time-line-title-time {
        margin-left: auto;
        color: #aaa4b8;
        font-size: 12px;
        line-height: 20px;
      }

      .time-line-item .time-line-item-content .time-line-item-detail {
        margin-top: 5px;
        overflow: hidden;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-detail
        .time-line-detail-none {
        margin-right: 8px;
        color: #a39c9f;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-detail
        .time-line-detail-name {
        margin-right: 8px;
        color: #000;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-detail
        .time-line-detail-result {
        margin-left: 8px;
        color: #a39c9f;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-detail
        .time-line-detail-result_pass {
        color: #52cd52;
      }

      .time-line-item
        .time-line-item-content
        .time-line-item-detail
        .time-line-detail-result_refuse {
        color: #f25050;
      }

      .time-line-item .time-line-item-content .time-line-item-msg {
        width: 100%;
        background: #f9f9f9;
        padding: 5px 10px;
        margin-top: 5px;
        min-height: 31px;
        color: #5f5f5f;
      }

      .time-line-item::after {
        content: '';
        position: absolute;
        top: 35%;
        left: 40px;
        height: calc(100%);
        width: 1px;
        border-left: 1px dashed #c5c5c5;
      }

      .time-line-item:last-child {
        /* background: red; */
        margin-bottom: 0;
      }

      .time-line-item:last-child::after {
        height: calc(57.5%);
      }

      .time-line-item_nowbg {
        cursor: pointer;
        /* background: #f0ecff; */
      }

      .time-line-item_now {
        cursor: pointer;
        background: #f0ecff;
      }

      .time-line-item_now::before {
        content: '点击办理';
        position: absolute;
        right: 3%;
        top: 50%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        /* padding: 7px 15px; */
        /* background: #1199ff; */
        padding: 8px 15px;
        border-radius: 5px;
        background: #1199ff;
        border: 0;
        font-weight: 600;
        color: #fff;
      }
      .ove-hidden {
        width: 120px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time-line-item-avatar_now::after {
        content: '';
        position: absolute;
        bottom: -4px;
        right: -4px;
        font-family: 'iconfont';
        font-size: 12px;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        color: #fff;
        background: #fd771e;
        border: 2px solid #fff;
        font-family: element-icons !important;
        z-index: 3;
      }

      .time-line-item_none .time-line-item-avatar {
        background: #efefef;
      }
      .more-tool {
        // text-align: center;
        color: var(--sle-text-color);
        display: flex;
        align-items: center;

        .no-cir {
          margin-left: 15px;
          height: 50px;
          width: 50px;
          background: #f7f7f7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--sle-text-color);
          z-index: 5;
          /* overflow: hidden; */
          text-align: center;
        }
        .no-text {
          padding-left: 10px;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
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
  .turn-dialog {
    .el-dialog {
      height: 60%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto !important;

      // overflow: scroll;
      .el-dialog__header {
        border-bottom: 1px solid #f3efef;
      }
      .el-dialog__body {
        height: calc(100% - 125px);
        // border: 1px solid red;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          // 滚动条的背景
          width: 16px;
          background: inherit;
          height: 14px;
        }

        &::-webkit-scrollbar-track,
        &::-webkit-scrollbar-thumb {
          border-radius: 999px;
          width: 20px;
          border: 5px solid transparent;
        }

        &::-webkit-scrollbar-track {
        }

        &::-webkit-scrollbar-thumb {
          //滚动条的滑块样式修改
          width: 20px;
          min-height: 20px;
          background-clip: content-box;
          box-shadow: 0 0 0 5px #999 inset;
        }
        .el-radio-group {
          width: 100%;
          .el-radio {
            display: flex;
            align-items: center;
            .el-radio__label {
              display: flex;
              align-items: center;
            }
            // width: 100%;
            .name-des {
              width: 54px;
              height: 54px;
              border-radius: 50%;
              background: #efefef;
              line-height: 54px;
              text-align: center;
              color: #985900;
              overflow: hidden;
              font-size: 20px;
            }
            .name-tit {
              margin-left: 10px;
              .top {
                padding-bottom: 6px;
                .b-name {
                  font-size: 16px;
                  color: #333;
                  padding-right: 4px;
                  // font-weight: 600;
                }
                .time {
                  font-size: 12px;

                  color: var(--nosle-text-color);
                }
              }
              .bottom {
                .name {
                  font-size: 14px;
                  padding-right: 4px;
                }
                .batch-situ {
                  font-size: 12px;

                  color: var(--sle-text-color);
                }
              }
            }
          }
        }

        padding: 0;
        ul {
          li {
            padding: 0 24px;
            display: flex;
            height: 100px;
            // border: 1px solid red;
            border-bottom: 1px solid rgb(246, 244, 244);
            &:hover {
              opacity: 0.9;
              background: #f5f5f5;
            }
          }
        }
      }
      .el-dialog__footer {
        position: absolute;
        padding-bottom: 10px;
        .dialog-footer {
          display: flex;
          justify-content: space-between;
          .remind {
            padding: 10px 0;
            // border: 1px solid red;
            font-size: 12px;
            text-align: right;
            .star {
              color: red;
            }
          }
          .confirm-btn {
            background: var(--sle-text-color);
          }
        }
        bottom: 0;
        left: 0;
        // border: 1px solid red;
        z-idnex: 100;
        width: 100%;
        background: #fff;
      }
    }
  }
}
.appendix-file {
  .dialog-box {
    min-height: auto !important;
  }
}
// .el-loading-mask{
//   z-index: 3000 !important;

// }
</style>

