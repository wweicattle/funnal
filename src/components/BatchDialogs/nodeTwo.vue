// 贸易公司总经理审批
<template>
  <div class="partialPublic dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>贸易公司预算该店补贴金额</span>
        <span>/SUBSIDY AMOUNT</span>
      </p>
    </div>
    <div class="d-content">
      <div class="box-table">
        <!-- 表头 -->
        <div class="b-bable-head">
          <div>经营方式</div>
          <div>装修档次</div>
          <div>店租</div>
          <div>货柜灯具补贴方式</div>
        </div>
        <!-- 表格内容 -->
        <div class="b-bable-content">
          <!-- 行 -->
          <div class="b-bable-content-hr" style="height:620px">
            <div>{{nodeResult.jyfsmc}}</div>
            <div>{{nodeResult.zxdcmc}}</div>
            <div><span>{{nodeResult.nzje||0}}</span>万元</div>
            <div>
              <div class="val">
                <el-radio-group v-model="nodeResult.fgsclbtfs">
                  <el-radio v-for="(fs,index) in btfsList" :label="fs.dm" :key="index">{{fs.mc}}</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-node">
        <p>核定并填写以下事项</p>
      </div>
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c large">
          <span class="tit">是否同意该店开业</span>
          <div class="val">
            <el-radio-group style="justify-content:center" v-model="node2Result.node_1_1" v-checkParam="{required:true}">
              <el-radio label="同意">同意</el-radio>
              <el-radio label="不同意">不同意</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">主要实际经营者</span>
          <div class="val">
            <el-input v-model="node2Result.node_2_2" v-checkParam="{required:true}"></el-input>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">该店营业执照法人</span>
          <div class="val">
            <el-input v-model="node2Result.node_3_1" v-checkParam="{required:true}"></el-input>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">原因</span>
          <div class="val">
            <el-input v-model="node2Result.node_3_2"></el-input>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit">专卖店装修档次</span>
          <div class="val">
            <el-radio-group v-model="node2Result.node_5_1">
              <el-radio v-for="(dc,index) in zxdcList" :label="dc.dm" :key="index" style="width:40%;display:flex">{{dc.mc}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit">道具装修打款核定</span>
          <div class="val">
            <el-radio-group v-model="node2Result.node_10_1">
              <el-radio label="1">预估年销售吊牌零售价在200万以上</el-radio>
              <el-radio label="2">预估年销售吊牌零售价在200万以下</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c radioL">
          <span class="tit">其他意见</span>
          <div class="val">
            <el-input v-model="node2Result.node_4_1"></el-input>
          </div>
        </div>
      </div>
      <div class="box-sign">
        <el-checkbox v-model="checked">同意【2021年营销政策条款】</el-checkbox>
      </div>
      <div class="box-btns flexcenter">
        <el-button @click="goback">返回</el-button>
        <el-button v-checkSubmit type="primary">同意条款并确认补贴金额</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign-contain">
        <span class="sign-tit">贸易公司 总经理 同意以上条款签署：</span>
        <div class="sign-name">{{node2Result.fgszjltk}}</div>
      </div>
    </div>

    <div class="d-remarks">
      <p class="box-title">
        <span>备注</span>
      </p>
      <div class="box-content">
        <div>
          <p>面积：</p>
          <ol>
            <li>面积指店铺的营业面积。</li>
            <li>专卖店的营业面积低于100平方米的原则上不予开设。</li>
            <li>营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积。</li>
          </ol>
        </div>
        <div>
          <p>每平方米出货额(4.9)：</p>
          <ol>
            <li>营业面积的每平方米必须达到的出货额(折扣:4.9折 单位:万元/㎡)</li>
          </ol>
        </div>

        <div style="display:flex">
          <p>每平方米补贴金额：</p><span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getJyfsList,
  getZxdcList,
  getStoreBudgetInfo,
  getJmbtfsPzList,
  getStorePolicyOpinion,
  setNode
} from '@/network/index.js';
export default {
  data() {
    return {
      checked: false,
      myDjid: '',
      userInfo: {},
      nodeResult: {},
      btfsList: [],
      zxdcList: [],
      node2Result: {}
    };
  },
  mounted() {
    this.myDjid = this.$store.state.userData.urlData.id;
    this.userInfo = this.$store.state.userData.userInfo;
    this.getNode7022();
    this.getNode703();
    this.getNode301();
  },
  methods: {
    // 经营方式
    getNode701() {
      return getJyfsList()
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              return res.data.data;
            } else {
              this.$Message.error(
                '获取数据失败！' + JSON.stringify(res.data.errmsg)
              );
            }
          } else {
            this.$Message.error(
              '接口查询失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
    },
    // 装修档次
    getNode702() {
      return getZxdcList()
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              return res.data.data;
            } else {
              this.$Message.error(
                '获取数据失败！' + JSON.stringify(res.data.errmsg)
              );
            }
          } else {
            this.$Message.error(
              '接口查询失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
    },
    // 货柜灯具补贴方式
    getNode7022() {
      getJmbtfsPzList()
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.btfsList = res.data.data;
            } else {
              this.$Message.error(
                '获取数据失败！' + JSON.stringify(res.data.errmsg)
              );
            }
          } else {
            this.$Message.error(
              '接口查询失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
    },
    // 补贴数据(主表)
    getNode703() {
      getStoreBudgetInfo()
        .then(async (res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.nodeResult = res.data.data;
              let jyfsList = await this.getNode701();
              this.zxdcList = await this.getNode702();
              let jyfs = this.nodeResult.jyfs;
              let zxdc = this.nodeResult.zxdc;
              jyfsList.forEach((el) => {
                if (el.dm == jyfs) {
                  this.$set(this.nodeResult, 'jyfsmc', el.mc);
                }
              });
              this.zxdcList.forEach((el) => {
                if (el.dm == zxdc) {
                  this.$set(this.nodeResult, 'zxdcmc', el.mc);
                }
              });
            } else {
              this.$alert(res.data.errmsg, '错误', {
                confirmButtonText: '确定'
              });
            }
          } else {
            this.$alert(res.statusText, '错误', {
              confirmButtonText: '确定'
            });
          }
        })
        .catch((err) => {});
    },
    // 核定修改数据查询（同3店铺批示-贸易公司审批）
    getNode301() {
      let data = {
        id: this.myDjid,
        nodeType: '1',
        fields: 'id,fgsywy,fgsywjl,fgszjltk'
      };
      getStorePolicyOpinion('301', data)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.node2Result = res.data.data;
              // this.goback();
            } else {
              this.$Message.error(
                '审批数据查询失败！' + JSON.stringify(res.data.errmsg)
              );
              this.goback();
            }
          } else {
            this.$Message.error(
              '接口调用失败！' + JSON.stringify(res.statusText)
            );
            this.goback();
          }
        })
        .catch((err) => {});
    },
    setNode() {
      // 询问提交
      if (this.checked == false) {
        this.$message({
          type: 'info',
          message: '请同意[21年营销政策条款]！'
        });
        return;
      }
      this.$confirm('您同意[21年营销政策条款]并确认补贴金额？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let re = this.node2Result;
          let data = {
            router: 'jmsp',
            method: 'saveJmsp',
            data: {
              nodetype: '1',
              jmspmx: {
                id: this.myDjid,
                fgszjltk: this.userInfo.username,
                fgszjltkrq: ' ',
                fgszjlbt: this.userInfo.username,
                fgszjlyj: re.node_4_1,
                fgsmj: '0',
                fgszjlbtrq: ' ',
                fgschje: '0',
                fgsbtje: '0',
                fgszhkje: '0',
                fgszbtje: '0',
                fgsclbtfs: '60',
                fgszxbtfs: '0'
              },
              jmspnodemx: {
                id: this.myDjid,
                node_10_1: re.node_10_1,
                node_5_1: re.node_5_1,
                node_4_1: re.node_4_1,
                node_1_1: re.node_1_1,
                node_2_1: re.node_2_1,
                node_2_2: re.node_2_2,
                node_3_1: re.node_3_1,
                node_3_2: re.node_3_2
              },
              jmsp: {
                id: this.myDjid,
                zxdc: re.node_5_1,
                ygxsbs: re.node_10_1
              }
            }
          };
          /*保存处理页*/
          setNode('3102', data)
            .then((res) => {
              if (res.status == 200) {
                if (res.data.errcode == 0) {
                  this.$Message.success(JSON.stringify(res.data.errmsg));
                  this.goback();

                  /*执行办理 */
                  /*插入办理页面*/
                  this.$parent.$emit('myFlowsend');
                } else {
                  this.$Message.error(
                    '数据保存失败！' + JSON.stringify(res.data.errmsg)
                  );
                }
              } else {
                this.$Message.error(
                  '接口调用失败！' + JSON.stringify(res.statusText)
                );
              }
            })
            .catch((err) => {
              this.$Message.error('接口调用失败！' + JSON.stringify(err));
            });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消确认'
          });
        });
    },
    goback() {
      this.$parent.$emit('closedialog');
    },
    mysendNode() {
      this.setNode();
    },
    directiveMsg() {
      this.$alert('数据不合法，请检查修改！', '提示', {
        confirmButtonText: '确定',
        callback: (action) => {
          return;
        }
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.box-sign {
  margin-bottom: 20px;
  text-align: center;
}
</style>