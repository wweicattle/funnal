// 利郎副总裁确认
<template>
  <div class="dialog-page company-plan">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>营销领导审批</span>
        <span>/Leader approval</span>
      </p>
    </div>
    <div class="d-node">
      <p>市场管理中心/领航营销管理有限公司/零售管理中心签署</p>
    </div>
    <div class="d-content">
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c large">
          <span class="tit">是否同意该店开业</span>
          <div class="val">
            <el-radio-group>
              <el-radio label="同意">同意</el-radio>
              <el-radio label="不同意">不同意</el-radio>
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
            <el-radio-group>
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
            <el-radio-group>
              <el-radio label="up">预估年销售吊牌零售价在200万以上</el-radio>
              <el-radio label="down">预估年销售吊牌零售价在200万以下</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import '@/views/StorePolicy/shop-basic-assets/myBasic.scss';
@import '@/views/StorePolicy/shop-basic-assets/uiReadjust.scss';
.dialog-page {
  height: 100%;
  width: 100%;
  color: var(--text-color);
  .d-title {
    display: flex;
    align-items: center;
    margin: 18px 0;
    .d-spot {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: var(--sle-text-color);
      margin-right: 8px;
    }
    > p > span:first-child {
      font-size: 16px;
      font-weight: bold;
      padding-right: 6px;
    }
    > p > span:last-child {
      color: #ebeef4;
    }
  }
  .d-node {
    background-color: var(--auxiliary-color);
    padding: 5px 0;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
  }
  .d-content {
    margin: 20px 0;
  }
}
</style>