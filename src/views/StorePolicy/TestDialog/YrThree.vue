// 利郎总裁终审
<template>
  <div class="dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>主品牌总经理审批</span>
        <span>/General manager approval</span>
      </p>
    </div>
    <div class="d-node">
      <p>LILANZ主品牌总经理审批意见</p>
    </div>
    <div class="d-content">
      <div class="box_item">
        <div class="strong">同意！</div>
      </div>
      <div class="box-btns flexcenter">
        <el-button>返回</el-button>
        <el-button type="primary" colo>总裁签署确认该申请</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <p><span>LILANZ主品牌总经理签署:</span>
          <span class="sign-name"></span>
        </p>
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
</style>