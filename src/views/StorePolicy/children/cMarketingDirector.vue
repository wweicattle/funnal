// 公司营销各总监1
<template>
  <div class="company-approval">
    <box-contain :isshowheader="titleOne">
      <div class="salesman">
        <!-- 内容 -->
        <div class="sContent">
          <ul class="ul-content">
            <li>
              <span>是否同意该店开业：</span>
              <el-radio-group v-model="form.opinion">
                <el-radio label="1">同意</el-radio>
                <el-radio label="0">不同意</el-radio>
              </el-radio-group>
            </li>
            <li>
              <span>该店是经销商开第：</span>
              <el-input></el-input>
              <span class="clearWidth">个店/厅</span>
            </li>
            <li>
              <span>主要实际经营者：</span>
              <el-input></el-input>
            </li>
            <li>
              <span>该店营业执照法人：</span>
              <el-input></el-input>
              <span class="clearWidth">原因：</span>
              <el-input style="width:260px"></el-input>
            </li>
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
              <el-input></el-input>
            </li>
          </ul>
        </div>
        <!-- 签字 -->
        <div class="sign">
          <p><span>领导签字确认:</span>
            <span class="sign-name"></span>
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
      titleOne: { text: '市场管理中心/领航营销管理有限公司/零售管理中心签署意见' },
      form: {
        opinion: '',
        grade: ''
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '../shop-basic-assets/bublic.scss';
</style>