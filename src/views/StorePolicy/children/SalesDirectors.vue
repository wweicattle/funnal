// 分管销售总监审批
<template>
  <div class="partialPublic company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain
          value="贸易公司分管销售总监同意以上条款签署"
          align="center"
        ></title-contain>
        <div class="box-timeline">
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
                  <el-radio label="0"
                    >LILANZ
                    利郎六代正常装修（县城街边店、地级市/省会社区街边店）</el-radio
                  >
                  <el-radio label="1"
                    >LILANZ
                    利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio
                  >
                  <el-radio label="2"
                    >LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL）
                  </el-radio>
                  <el-radio label="3">LESS IS MORE（轻商务)</el-radio>
                  <el-radio label="4">LESS IS MORE（二代轻商务)</el-radio>
                  <el-radio label="5">LILANZ 利郎七代装修</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="basic-c radioL">
              <span class="tit">道具装修打款核定</span>
              <div class="val">
                <el-radio-group v-model="resResult.node_10_1">
                  <el-radio label="up"
                    >预估年销售吊牌零售价在200万以上</el-radio
                  >
                  <el-radio label="down"
                    >预估年销售吊牌零售价在200万以下</el-radio
                  >
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
                <span class="sign-tit"
                  >贸易公司分管销售总监同意以上条款签署：</span
                >
                <div class="sign-name">{{ resResult.fgsdqjl }}</div>
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
        payment: 'down'
      },
      resResult: {}
    };
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData
    })
  },
  mounted() {
    let id = this.urlData.id;
    if (id == 0 || !id) return;
    this.urlData.id && this.getSalesDirectors();
  },
  methods: {
    getSalesDirectors() {
      let data = {
        id: this.urlData.id,
        nodeType: '2',
        fields: 'fgsdqjl'
      };
      getStorePolicyOpinion('301', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            let resd = res.data.data;
            this.resResult = resd;
          }
        })
        .catch((err) => {});
    }
  }
  // watch: {
  //   formResults: {
  //     handler(val) {
  //       this.formResult = JSON.parse(JSON.stringify(val));
  //     },
  //     immediate: true
  //   }
  // }
};
</script>

<style scoped lang="scss">
// @import '../shop-basic-assets/myBasic.scss';
// @import '../shop-basic-assets/uiReadjust.scss';
</style>