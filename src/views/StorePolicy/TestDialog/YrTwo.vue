// 利郎副总裁确认
<template>
  <div class="dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>营销领导审批</span>
        <span>/Leader approval</span>
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
        <div class="basic-c large">
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
        </div>
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
              <el-radio label="0">LILANZ 利郎六代正常装修（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="1">LILANZ 利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="2">LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL） </el-radio>
              <el-radio label="3">LESS IS MORE（轻商务)</el-radio>
              <el-radio label="4">LESS IS MORE（二代轻商务)</el-radio>
              <el-radio label="5">LILANZ 利郎七代装修</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="box-btns flexcenter">
        <el-button>返回</el-button>
        <el-button type="primary" colo>营销领导审批确认</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <p><span>营销领导审批签字确认:</span>
          <span class="sign-name">{{resResult.zbyxld}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getStorePolicyOpinion } from '@/network/index';
export default {
  data() {
    return {
      resResult: {}
    };
  },
  mounted() {
    this.getNode304();
  },
  methods: {
    getNode304() {
      let data = { id: 16455, nodeType: '4', fields: 'zbyxld' };
      getStorePolicyOpinion('304', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.resResult = res.data.data;
          } else {
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
</style>