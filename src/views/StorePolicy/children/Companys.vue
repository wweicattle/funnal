// 贸易公司审批
<template>
  <div class="partialPublic company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain value="加盟店铺需提供的资料" align="center"></title-contain>
        <div class="box-timeline">
          <el-timeline>
            <el-timeline-item timestamp="贸易公司业务审批" placement="top">
              <div class="box-basic salesman">
                <div class="sContent">
                  <p class="txt-sketch">贸易公司业务拓展部随同本表附件提供以下资料：</p>
                  <p class="txt-content">1、加盟商<span>身份证复印件</span>、加盟店<span>商圈路段图</span>、按营销中心企划部要求的<span>测量装修准确图</span>。</p>
                  <p class="txt-content">2、专卖店照片由经销商或店长按拍摄要求直接上传ERP系统指定位置，并于店铺开业一个星期之内上传完毕，超出前台收银首次开单起一个星期内未上传的，系统将无法受理照片上传，即无法办理货柜灯具报销手续。</p>
                  <p class="txt-content">3、经核查经销商联系方式不真实的，营销中心联系不上者直接予以取消补贴。</p>
                </div>
                <div class="sign">
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司业务员同意以上条款签署：</span>
                    <div class="sign-name">{{resResult.fgsywjl}}</div>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="贸易公司总经理审批" placement="top">
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
                    <el-input v-model="resResult.node_3_1" ></el-input>
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
                <div class="basic-c radioL">
                  <span class="tit">道具装修打款核定</span>
                  <div class="val">
                    <el-radio-group v-model="resResult.node_10_1">
                      <el-radio label="1">预估年销售吊牌零售价在200万以上</el-radio>
                      <el-radio label="2">预估年销售吊牌零售价在200万以下</el-radio>
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
                    <span class="sign-tit">贸易公司总经理签署：</span>
                    <div class="sign-name">{{resResult.fgszjltk}}</div>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item> </el-timeline-item>
          </el-timeline>
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
    this.getCompanys();
  },
  methods: {
    getCompanys() {
      let data = {
        id: this.$store.state.userData.mydjid,
        nodeType: '1',
        fields: 'id,fgsywy,fgsywjl,fgszjltk'
      };
      getStorePolicyOpinion('301', data)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.resResult = res.data.data;
            console.log(this.resResult);
          } else {
            // 接口返回错误
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
// @import '../shop-basic-assets/myBasic.scss';
// @import '../shop-basic-assets/uiReadjust.scss';
</style>