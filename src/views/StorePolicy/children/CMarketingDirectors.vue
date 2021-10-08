// 公司营销各总监
<template>
  <div class="company-approval">
    <box-contain>
      <div class="box-contains">
        <title-contain value="市场管理中心/领航营销管理有限公司/零售管理中心签署意见" align="center"></title-contain>
        <div class="box-timeline">
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
              <span class="tit long">该店是经销商开第</span>
              <div class="val flexcenter">
                <el-input class="value"></el-input>
                <span class="suffix">店/厅</span>
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
            <div class="basic-c radioL">
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
              <span class="tit">其他意见</span>
              <div class="val">
                <el-input></el-input>
              </div>
            </div>
            <div class="sign">
              <p><span>领导签字确认:</span>
                <span class="sign-name"></span>
              </p>
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