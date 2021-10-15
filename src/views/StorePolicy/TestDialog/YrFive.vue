// 平面设计图
<template>
  <div class="dialog-page">
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
      <div class="box-table">
        <!-- 表头 -->
        <div class="b-bable-head">
          <div>面积（m²）</div>
          <div>店租</div>
          <div>每平方米补贴</div>
          <div>基础装修总补贴额</div>
          <div>基础装修补贴方式</div>
        </div>
        <!-- 表格内容 -->
        <div class="b-bable-content">
          <!-- 行 -->
          <div class="b-bable-content-hr">
            <div>100</div>
            <div>100万元</div>
            <div>
              <div class="val">
                <el-radio-group>
                  <el-radio label="0">2.1万元/m²</el-radio>
                  <el-radio label="1">1000万元/m²</el-radio>
                  <el-radio label="2">2.1万元/m²</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div>105 m² x 1.8 万元/m² =189.00万元</div>
            <div>
              <div class="val">
                <el-radio-group>
                  <el-radio label="0">一次性返还（开业满一年销售吊牌零售价350万以上）</el-radio>
                  <el-radio label="1">一次性返还（开业满一年销售吊牌零售价350万以上）</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c radioL">
          <span class="tit" style="width:170px;">是否要求改图（非必填）</span>
          <div class="val">
            <el-radio-group>
              <el-radio label="0">贸易公司要求改图</el-radio>
              <el-radio label="1">总公司要求改图</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">改图次数</span>
          <div class="val">
            <el-select placeholder="请选择">
              <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option> -->
              <!-- <el-option value="11"></el-option> -->
            </el-select>
            <!-- <el-input class="value"></el-input> -->
          </div>
        </div>
        <div class="basic-c large">
          <span class="tit">改图原因</span>
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
        <p><span>空间设计专员:</span>
          <span class="sign-name"></span>
        </p>
        <p><span>空间组组长:</span>
          <span class="sign-name"></span>
        </p>
        <p><span>部长签署:</span>
          <span class="sign-name"></span>
        </p>
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
@import '@/views/StorePolicy/shop-basic-assets/myBasic.scss';
@import '@/views/StorePolicy/shop-basic-assets/uiReadjust.scss';
.basic-c .tit {
  width: 255px;
}
.dialog-page {
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