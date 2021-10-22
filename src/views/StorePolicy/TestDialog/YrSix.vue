// 平面图审核---平面图设计，设计方案终审三个页面复用
// 1、确认按钮改成对应审核岗位
// 2、设计专员（YrFive）控制显示表格、改图信息（次数、原因）
<template>
  <div class="partialPublic dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>营销企划方案设计流程</span>
        <span>/process design</span>
      </p>
    </div>
    <div class="d-node">
      <p>营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定</p>
    </div>
    <div class="d-content">
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c radioL">
          <span class="tit">营销政策管理处报送设计时间（设计员）</span>
          <div class="val">
            <el-input></el-input>
          </div>
        </div>
        <div class="basic-c radioL">
          <span class="tit">最后确认时间（部长）</span>
          <div class="val">
            <el-input></el-input>
          </div>
        </div>
      </div>
      <div class="box-btns flexcenter">
        <el-button>返回</el-button>
        <el-button type="primary" colo>空间设计专员确认</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <div class="sign-contain">
          <span class="sign-tit">空间设计专员：</span>
          <div class="sign-name"></div>
        </div>
        <div class="sign-contain">
          <span class="sign-tit">空间组组长：</span>
          <div class="sign-name"></div>
        </div>
        <div class="sign-contain">
          <span class="sign-tit">部长签署：</span>
          <div class="sign-name"></div>
        </div>
      </div>
    </div>
    <div class="d-remarks">
      <p class="box-title">
        <span>备注</span>
      </p>
      <div class="box-content">
        <div>
          <ol>
            <li>空间设专员根据实际测量图纸，填写营业面积；</li>
            <li>营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积；</li>
            <li>必须上传空间[店铺平面图]、[店铺施工图]、[店铺效果图]</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.dialog-page {
  .basic-c .tit {
    width: 255px;
  }
  .box-table {
    margin-top: 0;
    .b-bable-head,
    .b-bable-content-hr {
      > div {
        &:first-child {
          width: 85px;
        }
        &:nth-child(2) {
          width: 60px;
        }
        &:nth-child(3) {
          width: 145px;
        }
      }
    }
  }
}
</style>