<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="table-content">
        <ul>
          <li>
            <span class="problem">面积(m²):</span>
            <el-input v-model="copyData.yzmdmc"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span class="problem pro_radio">每平方米出货额(4.9):</span>
            <el-radio-group v-model="copyData.yjmxz">
              <el-radio :label="0">2.1万元/m²</el-radio>
              <el-radio :label="1">1.8万元/m²</el-radio>
              <el-radio :label="2">1.7万元/m²</el-radio>
              <el-radio :label="3">1.6万元/m²</el-radio>
              <el-radio :label="4">1.5万元/m²</el-radio>
              <el-radio :label="5">1.4万元/m²</el-radio>
              <el-radio :label="6">1.2万元/m²</el-radio>
              <el-radio :label="7">0万元/m²</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span class="problem">3年(商场2年)内总出货回款:</span>
            <div class="inp_box">
              <el-input class="inp_line"></el-input>
              <span class="inp_box_em">m² x </span>
              <el-input class="inp_line"></el-input>
              <span class="inp_box_line">万元/m² =</span>
              <el-input class="inp_line"></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <span class="problem pro_radio">每平方米补贴金额:</span>
            <el-radio-group v-model="copyData.yjmxz">
              <el-radio :label="0">1300元/m²</el-radio>
              <el-radio :label="1">1100元/m²</el-radio>
              <el-radio :label="2">900元/m²</el-radio>
              <el-radio :label="3">700元/m²</el-radio>
              <el-radio :label="4">0元/m²</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span class="problem">3年(商场2年)内总补贴金额:</span>
            <div class="inp_box">
              <el-input class="inp_line"></el-input>
              <span class="inp_box_em">m² x </span>
              <el-input class="inp_line"></el-input>
              <span class="inp_box_line">万元/m² =</span>
              <el-input class="inp_line"></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </li>
        </ul>
        <!-- 签名区 -->
        <div class="terms_agree">
          <div class="terms_sign">
            <span>营销企划部按实际图纸计算确认：</span>
            <div></div>
          </div>
          <div class="terms_sign">
            <span>营销政策管理处核对确认：</span>
            <div></div>
          </div>
        </div>
        <!-- 备注区 -->
        <title-contain value="备注"></title-contain>
        <div class="remarks">
          <p class="rearks_title">面积:</p>
          <p class="rearks_list">①.面积指店铺的营业面积</p>
          <p class="rearks_list">②.专卖店的营业面积低于100平方米的原则上不予开设</p>
          <p class="rearks_list">③.营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积</p>
          <p class="rearks_title">每平方米出货额(4.9):</p>
          <p class="rearks_list">营业面积的每平方米必须达到的出货额(折扣:4.9折 单位:万元/㎡)。</p>
          <p class="rearks_title">每平方米补贴金额:</p>
          <p class="rearks_list">公司给予店铺每平方米的补贴金额(单位:元/㎡)</p>
          <p class="rearks_title">3年(商场2年)内总出货回款:</p>
          <p class="rearks_list">①.该项计算店铺开业后必须达到的出货回款总额，其中专卖店限期为３年内，商场限制为２年内</p>
          <p class="rearks_list">②.算法:出货回款总额 = 营业面积 * 每平方米出货额</p>
          <p class="rearks_title">3年内总补贴金额:</p>
          <p class="rearks_list">①.该项计算店铺开业后公司给予的补贴总额，其中专卖店限期为３年内返回完毕，商场限制为２年内返回完毕</p>
          <p class="rearks_list">②.算法:总补贴金额 = 营业面积 * 每平方米补贴金额</p>
        </div>
      </div>
    </box-contain>
  </div>
</template>
<style lang="scss" scoped>
/deep/ .el-input {
  height: 24px;
  width: 184px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
  }
}
/deep/ .el-radio-group {
  width: 260px;

  .el-radio {
    width: 120px;
    margin: 0 10px 10px 0;
    font-weight: 400;
  }
}
.table-content {
  font-size: var(--font-size);
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding: 10px 0;
      .problem {
        width: 6em;
        display: inline-block;
        text-align: right;
        margin-right: 15px;
      }
      .pro_radio {
        vertical-align: top;
      }
      .inp_box {
        border: 1px solid #ececec;
        padding: 4px 10px;
        box-sizing: border-box;
        display: inline-block;
        /deep/.el-input__inner {
          border: none !important;
          border-bottom: 1px solid#333 !important;
          border-radius: 0;
          width: 3em;
        }
        .inp_line {
          border: none !important;
          border-bottom: #333 !important;
          width: 3em;
          margin: 0 2px;
        }
      }
    }
  }
  .terms_agree {
    text-align: right;
    padding: 18px 37px;
    .terms_sign {
      font-size: 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      span {
        font-size: var(--font-size);
        font-weight: 400;
        color: #333333;
        line-height: 23px;
        font-weight: bold;
      }
      div {
        display: inline-block;
        min-width: 160px;
        font-size: 24px;
        line-height: 24px;
        padding: 5px 5px;
        height: 35px;
        text-align: center;
        border-bottom: 1px solid #000000;
      }
    }
  }
  /deep/.title-contain {
    color: #333;
    background-color: #fafbfc;
  }
  .remarks {
    color: #595959;
    line-height: 28px;
    padding-left: 20px;
    box-sizing: border-box;
    .rearks_title {
      font-weight: 500;
    }
    .rearks_list {
      text-indent: 2em;
    }
  }
}
</style>
<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';

export default {
  name: 'App',
  data() {
    return {
      headerObj: { text: '政策管理处预核定该店补贴金额' },
      copyData: {}
    };
  },
  components: {
    BoxContain,
    TitleContain
  }
};
</script>
