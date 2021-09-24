// 贸易公司审批
<template>
  <div class="company-approval">
    <div class="primary-page">
      <!-- 标题 -->
      <div class="primary-title">
        <p>加盟店铺需提供的资料</p>
      </div>
      <!-- 业务审批 -->
      <div class="salesman">
        <div class="node">
          <p>贸易公司业务审批</p>
        </div>
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
      <!-- 总经理审批 -->
      <div class="salesman">
        <div class="node">
          <p>贸易公司总经理审批</p>
        </div>
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
            <li class="li-flex">
              <span>道具装修打款核定：</span>
              <div class="txt-box">
                <el-radio-group v-model="form.payment">
                  <el-radio label="up">预估年销售吊牌零售价在200万以上</el-radio>
                  <el-radio label="down">预估年销售吊牌零售价在200万以下</el-radio>
                </el-radio-group>
              </div>
            </li>
            <li>
              <span>其他意见：</span>
              <el-input></el-input>
            </li>
          </ul>
        </div>
        <div class="sign">
          <p><span>贸易公司总经理签署：</span>
            <span class="sign-name"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        opinion: '1',
        grade: '',
        payment: 'down'
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '../shop-basic-assets/bublic.scss';
</style>