// 贸易公司审批
<template>
  <div class="company-approval">
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
                  <p><span>贸易公司业务员同意以上条款签署：</span>
                    <span class="sign-name"></span>
                  </p>
                  <p><span>贸易公司业务经理同意以上条款签署：</span>
                    <span class="sign-name"></span>
                  </p>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="贸易公司总经理审批" placement="top">
              <div class="box-basic flexcenter salesman special">
                <div class="basic-c large">
                  <span class="tit">是否同意该店开业</span>
                  <div class="val">
                    <el-radio-group v-model="form.opinion">
                      <el-radio label="0">同意</el-radio>
                      <el-radio label="1">不同意</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c large">
                  <span class="tit">主要实际经营者</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c large">
                  <span class="tit">该店营业执照法人</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c small">
                  <span class="tit">原因</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c radioL">
                  <span class="tit">专卖店装修档次</span>
                  <div class="val">
                    <el-radio-group v-model="form.opinion">
                      <el-radio label="0">简约装修</el-radio>
                      <el-radio label="1">正常装修</el-radio>
                      <el-radio label="2">精品装修</el-radio>
                      <el-radio label="3">轻商务</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c radioL">
                  <span class="tit">装修风格要求</span>
                  <div class="val">
                    <el-radio-group v-model="form.payment">
                      <el-radio label="up">预估年销售吊牌零售价在200万以上</el-radio>
                      <el-radio label="down">预估年销售吊牌零售价在200万以下</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c radioL">
                  <span class="tit">其他意见</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="sign">
                  <p><span>贸易公司业务经理同意以上条款签署：</span>
                    <span class="sign-name"></span>
                  </p>
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
export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      form: {
        opinion: '1',
        grade: '',
        payment: 'down',
        num: ''
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '../shop-basic-assets/myBasic.scss';
@import '../shop-basic-assets/uiReadjust.scss';

</style>