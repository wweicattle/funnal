// 利郎副总裁确认
<template>
  <div class="partialPublic dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>营销领导审批</span>
        <span>/LEADER APPROVAL</span>
      </p>
    </div>
    <div class="d-node">
      <p>市场管理中心/领航营销管理有限公司/零售管理中心签署</p>
    </div>
    <div class="d-content">
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c large">
          <span class="tit">是否同意该店开业</span>
          <div class="val">
            <el-radio-group v-model="resResult.node_1_1">
              <el-radio label="同意">同意</el-radio>
              <el-radio label="不同意">不同意</el-radio>
            </el-radio-group>
          </div>
        </div>
        <!-- <div class="basic-c large">
          <span class="tit">主要实际经营者</span>
          <div class="val">
            <el-input v-model="resResult.node_2_2"></el-input>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">该店营业执照法人</span>
          <div class="val">
            <el-input v-model="resResult.node_3_1"></el-input>
          </div>
        </div> -->
        <div class="basic-c large">
          <span class="tit">原因</span>
          <div class="val">
            <el-input v-model="resResult.node_3_2"></el-input>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit">专卖店装修档次</span>
          <div class="val">
            <el-radio-group v-model="resResult.node_5_1">
              <template v-for="(val, index) in zxdc">
                <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="box-btns flexcenter">
        <el-button @click="goback">返回</el-button>
        <el-button type="primary" @click="setNode">营销领导审批确认</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <div class="sign-contain">
          <span class="sign-tit">营销领导审批签字确认：</span>
          <div class="sign-name">{{ resResult.zbyxld }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStorePolicyOpinion, setNode } from '@/network/index';
export default {
  data() {
    return {
      myDjid: '',
      userInfo: {},
      resResult: {},
      zxdc: []
    };
  },
  mounted() {
    this.myDjid = this.$store.state.userData.urlData.id;
    this.userInfo = this.$store.state.userData.userInfo;
    this.getNode304();
  },
  created() {
    // 回流店铺装修
    this.zxdc = JSON.parse(window.localStorage.getItem('basicDatas')).zxdc;
  },
  methods: {
    getNode304() {
      let data = {
        id: this.$store.state.userData.urlData.id,
        nodeType: '4',
        fields: 'zbyxld,zbyxldyj'
      };
      getStorePolicyOpinion('304', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.resResult = res.data.data;
            // 根据业务需求,在点击办理时都要默认用户名为姓名
            let names = this.$store.state.userData.userInfo.username;
            this.resResult.zbyxld = names;
            // console.log(this.resResult);
          } else {
          }
        })
        .catch((err) => {});
    },
    setNode() {
      let re = this.resResult;
      let data = {
        data: {
          jmsp: {
            id: this.myDjid,
            khbs: '1'
          },
          jmspmx: {
            tzsjrq: ' ',
            id: this.myDjid,
            zbyxld: this.resResult.zbyxld ,
            zbyxldrq: ' ',
            zbyxldyj: this.resResult.node_4_1
          },
          jmspnodemx: {
            node_xgrq: this.userInfo.username,
            node_8_1: re.node_8_1,
            node_3_2: re.node_3_2,
            node_5_1: re.node_5_1,
            node_3_1: re.node_3_1,
            node_2_2: re.node_2_2,
            node_10_2: re.node_10_2,
            node_10_1: re.node_10_1,
            node_xgr: this.userInfo.username,
            node_4_1: re.node_4_1,
            node_9_1: re.node_9_1,
            node_2_1: re.node_2_1,
            node_6_1: re.node_6_1,
            node_1_1: re.node_1_1,
            node_7_1: re.node_7_1
          },
          nodetype: '4'
        },
        method: 'saveJmsp',
        router: 'jmsp'
      };
      // this.$confirm('确定提交办理?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(() => {
      setNode('3402', data)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.$Message.success(JSON.stringify(res.data.errmsg));

              /*执行办理 */
              /*插入办理页面*/
              this.$parent.$emit('myFlowsend');

              this.goback();
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
      // })
      // .catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消确认'
      //   });
      // });
    },
    goback() {
      this.$parent.$emit('closedialog');
    }
  }
};
</script>

<style scoped lang='scss'>
</style>