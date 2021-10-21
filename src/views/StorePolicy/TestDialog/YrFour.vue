// 贸易公司总经理审批
<template>
  <div class="dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>贸易公司预算该店补贴金额</span>
        <span>/General manager approval</span>
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
          <div class="b-bable-content-hr">
            <div>{{nodeResult.jyfsmc}}</div>
            <div>{{nodeResult.zxdcmc}}</div>
            <div><span>{{nodeResult.nzje||0}}</span>万元</div>
            <div>
              <div class="val">
                <el-radio-group v-model="nodeResult.fgsclbtfs">
                  <el-radio v-for="(fs,index) in btfsList" :label="fs.dm" :key="index">{{fs.mc}}</el-radio>
                  <!-- <el-radio label="0">本年冬季订货额+次年春夏季订货额+次年秋季订货额合计金额达80万</el-radio>
                  <el-radio label="1">次年春夏季订货额+次年秋季订货额+次年冬季订货额合计金额达80万,满一年返还;未达到按三年(3:3:4)返还:</el-radio>
                  <el-radio label="2">次年秋季订货额+次年冬季订货额+第二年春夏订货额合计金额达80万,满一年返还;未达到按三年(3:3:4)返还;</el-radio>
                  <el-radio label="3">一年内出库总额达到单店价(4.9折)80万,满一年返还,未达到按三年(3:3:4)返还;</el-radio>
                  <el-radio label="4">本年冬季订货额+次年春夏季订货额+次年秋季订货额合计金额达100万,满一年返还;未达到按两年(5:5)返还;</el-radio>
                  <el-radio label="5">次年春夏季订货额+次年秋季订货额+次年冬季订货额合计金额达100万,满一年返还;未达到按两年(5:5)返还;</el-radio>
                  <el-radio label="6">次年秋季订货额+次年冬季订货额+第二年春夏订货额合计金额达100万满,一年返还;未达到按两年(5:5)返还;</el-radio>
                  <el-radio label="7">一年内出库总额达到单店价(4.9折)100万,满一年返还,未达到按两年(5:5)返还;</el-radio>
                  <el-radio label="8">两年内出库额必须达到60万做为基数(回款额不得低于出库额);</el-radio>
                  <el-radio label="9">开业后即返还；</el-radio> -->
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
            <el-radio-group v-model="setForm.opinion" style="justify-content:center">
              <el-radio label="同意">同意</el-radio>
              <el-radio label="不同意">不同意</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">主要实际经营者</span>
          <div class="val">
            <el-input v-model="setForm.operator"></el-input>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">该店营业执照法人</span>
          <div class="val">
            <el-input v-model="setForm.legalPerson"></el-input>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">原因</span>
          <div class="val">
            <el-input v-model="setForm.season"></el-input>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit">专卖店装修档次</span>
          <div class="val">
            <el-radio-group v-model="nodeResult.zxdc">
              <el-radio v-for="(dc,index) in zxdcList" :label="Number(dc.dm)" :key="index" style="width:40%;display:flex">{{dc.mc}}</el-radio>
              <!-- <el-radio label="0">LILANZ 利郎六代正常装修（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="1">LILANZ 利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="2">LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL） </el-radio>
              <el-radio label="3">LESS IS MORE（轻商务)</el-radio>
              <el-radio label="4">LESS IS MORE（二代轻商务)</el-radio>
              <el-radio label="5">LILANZ 利郎七代装修</el-radio> -->
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit">道具装修打款核定</span>
          <div class="val">
            <el-radio-group v-model="setForm.dkhd">
              <el-radio label="1">预估年销售吊牌零售价在200万以上</el-radio>
              <el-radio label="2">预估年销售吊牌零售价在200万以下</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c radioL">
          <span class="tit">其他意见</span>
          <div class="val">
            <el-input></el-input>
          </div>
        </div>
      </div>
      <div class="box-sign">
        <el-checkbox v-model="checked">同意【2018年营销政策条款】</el-checkbox>
      </div>
      <div class="box-btns flexcenter">
        <el-button>返回</el-button>
        <el-button type="primary" colo>总裁签署确认该申请</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <p><span>贸易公司 总经理 同意以上条款签署:</span>
          <span class="sign-name"></span>
        </p>
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

        <div>
          <p>每平方米补贴金额：</p><span>111万元</span>
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
  getJmbtfsPzList
} from '@/network/index.js';
export default {
  data() {
    return {
      checked: true,
      nodeResult: {},
      btfsList: [],
      zxdcList: [],
      setForm: {
        opinion: '同意',
        operator: '',
        legalPerson: '',
        season: '',
        dkhd: '1'
      }
    };
  },
  mounted() {
    // this.getNode701();
    // this.getNode702();
    this.getNode7022();
    this.getNode703();
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
              console.log(res.data.errmsg);
            }
          } else {
            console.log(res.statusText);
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
              console.log(res.data.errmsg);
            }
          } else {
            console.log(res.statusText);
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
              console.log(res.data.data);
            } else {
              console.log(res.data.errmsg);
            }
          } else {
            console.log(res.statusText);
          }
        })
        .catch((err) => {});
    },
    // 补贴数据
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
                  console.log(this);
                  this.$set(this.nodeResult, 'jyfsmc', el.mc);
                }
              });
              this.zxdcList.forEach((el) => {
                if (el.dm == zxdc) {
                  this.$set(this.nodeResult, 'zxdcmc', el.mc);
                }
              });
              console.log(this.nodeResult);
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
    }
  }
};
</script>

<style scoped lang='scss'>
@import '@/views/StorePolicy/shop-basic-assets/myBasic.scss';
@import '@/views/StorePolicy/shop-basic-assets/uiReadjust.scss';
.box-sign {
  margin-bottom: 20px;
  text-align: center;
}
</style>