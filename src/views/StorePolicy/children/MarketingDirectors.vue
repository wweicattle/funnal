// 市场管理中心总监/副总监审批
<template>
  <div class="partialPublic company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain value="市场管理中心总监/副总监审批" align="center"></title-contain>
        <div class="box-timeline">
          <div class="box-basic flexcenter salesman special">
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
                <span class="sign-tit">市场管理中心总监/副总监签署：</span>
                <div class="sign-name">{{resResult.zbzdjl}}</div>
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
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData
    })
  },
   created() {
    // 回流店铺装修
    this.zxdc = JSON.parse(window.localStorage.getItem('basicDatas')).zxdc;
  },
  mounted() {
       let id = this.urlData.id;
    if (id==0||(!id)) return;
    this.urlData.id && this.getMarketingOpinion();
  },
  methods: {
    getMarketingOpinion() {
      let data = {
        id: this.urlData.id,
        nodeType: '5',
        fields: 'zbzdjl,zbzdjlyj'
      };
      getStorePolicyOpinion('305', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.resResult = res.data.data;
          } else {
          }
        })
        .catch((err) => {});
    }
  },
  // watch: {
  //   formResults: {
  //     handler(val) {
  //       this.formResult = JSON.parse(JSON.stringify(this.formResults));
  //       console.log(this.formResult);
  //     },
  //     immediate: true
  //   }
  // }
};
</script>

<style scoped lang="scss">
.company-approval .special .basic-c.large {
  width: 32%;
}
</style>