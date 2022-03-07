// 政策管理处审批
<template>
  <div class="partialPublic company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain
          value="政策管理处初审意见"
          align="center"
        ></title-contain>
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
                  <template v-for="(val, index) in zxdc">
                    <el-radio :label="val.dm" :key="index">{{
                      val.mc
                    }}</el-radio>
                  </template>
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
                <div class="sign-name">{{ resResult.zbkfcs }}</div>
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
import { mapState } from 'vuex';
export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      form: {
        opinion: '1',
        grade: '',
        payment: 'down',
        zxdc: []
      },
      resResult: {}
    };
  },
  created() {
    // 回流店铺装修
    this.zxdc = JSON.parse(window.localStorage.getItem('basicDatas')).zxdc;
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData
    })
  },
  mounted() {
    let id = this.urlData.id;
    if (id == 0 || !id) return;
    this.urlData.id && this.getPolicyOpinion();
  },
  methods: {
    getPolicyOpinion() {
      let data = {
        fields: 'zbkfcs',
        id: this.urlData.id,
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