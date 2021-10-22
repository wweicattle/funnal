// 政策管理处审批
<template>
  <div class="partialPublic company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain value="政策管理处初审意见" align="center"></title-contain>
        <div class="box-timeline">
          <div class="box-basic flexcenter salesman special">
            <!-- <div class="basic-c large">
              <span class="tit long">该店是经销商开第</span>
              <div class="val flexcenter">
                <el-input class="value" v-model="resResult.node_2_1"></el-input>
                <span class="suffix">店/厅</span>
              </div>
            </div> -->
            <div class="basic-c large2">
              <span class="tit">主要实际经营者</span>
              <div class="val">
                <el-input v-model="resResult.node_2_2"></el-input>
              </div>
            </div>
            <div class="basic-c large2">
              <span class="tit">该店营业执照法人</span>
              <div class="val">
                <el-input v-model="resResult.node_3_1"></el-input>
              </div>
            </div>
            <div class="basic-c large2">
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
            <div class="basic-c radioL">
              <span class="tit">其他意见</span>
              <div class="val">
                <el-input v-model="resResult.node_4_1"></el-input>
              </div>
            </div>
            <div class="sign">
              <div class="sign-contain">
                <span class="sign-tit">政策管理处初审意见：</span>
                <div class="sign-name">{{resResult.zbkfcs}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain.vue';
import { getStorePolicyOpinion } from '@/network/index';
export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      form: {
        opinion: '1',
        grade: '',
        payment: 'down'
      },
      resResult: {}
    };
  },
  mounted() {
    this.getPolicyOpinion();
  },
  methods: {
    getPolicyOpinion() {
      let data = {
        fields: 'zbkfcs',
        id: 16455,
        nodeType: '3',
        zbfields: 'tbrq'
      };
      getStorePolicyOpinion('303', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.resResult = res.data.data;
            console.log(this.resResult);
          } else {
          }
        })
        .catch((err) => {});
    }
  }
};
</script>

<style scoped lang="scss">
</style>