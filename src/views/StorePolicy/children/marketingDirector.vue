// 市场管理中心总监/副总监审批
<template>
  <div class="company-approval">
    <box-contain :isshowheader="titleOne">
      <div class="salesman">
        <!-- 内容 -->
        <div class="sContent">
          <ul class="ul-content">
            <li class="li-flex">
              <span>装修档次要求：</span>
              <div class="txt-box">
                <el-radio-group v-model="form.grade">
                  <el-radio disabled label="0">LILANZ 利郎六代正常装修（县城街边店、地级市/省会社区街边店</el-radio>
                  <el-radio disabled label="1">LILANZ 利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio>
                  <el-radio disabled label="2">LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL）</el-radio>
                  <el-radio disabled label="3">LESS IS MORE（轻商务）</el-radio>
                  <el-radio label="4">LESS IS MORE（二代轻商务）</el-radio>
                  <el-radio label="5">LILANZ 利郎七代装修 </el-radio>
                </el-radio-group>
              </div>
            </li>
            <li>
              <span>其他意见：</span>
              <el-input style="width:260px" v-model="form.otherOpinion"></el-input>
            </li>
          </ul>
        </div>
        <!-- 签字 -->
        <div class="sign">
          <p><span>市场管理中心总监/副总监签署:</span>
            <span class="sign-name">{{form.sign}}</span>
          </p>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
export default {
  components: { BoxContain },
  data() {
    return {
      titleOne: { text: '市场管理中心总监/副总监审批' },
      form: {
        opinion: '',
        grade: '5',
        otherOpinion: '合同、营业执照后期补传',
        sign: '陈宏胜'
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '../shop-basic-assets/bublic.scss';
</style>