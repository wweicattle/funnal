<template>
  <div class="id-contain">
    <box-contain>
      <div class="table-content">
        <title-contain value="政策管理处预核定该店补贴金额" align="center"></title-contain>
        <div class="table-main">
          <el-timeline>
            <el-timeline-item timestamp="基本信息" placement="top">
              <ul class="row">
                <li>
                  <span class="problem">面积(m²)</span>
                  <div class="answer answer_short answer_inp">
                    <el-input v-model="copyData.yzmdmc"></el-input>
                  </div>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="problem pro_radio">每平方米出货额(4.9)</span>
                  <div class="answer answer_radio">
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
                  </div>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="problem">3年(商场2年)内总出货回款</span>
                  <div class="answer answer_short answer_more">
                    <el-input class="inp_line"></el-input>
                    <span class="inp_box_em">m² x </span>
                    <el-input class="inp_line"></el-input>
                    <span class="inp_box_line">万元/m² =</span>
                    <el-input class="inp_line"></el-input>
                    <span class="inp_box_line">万元</span>
                  </div>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="problem pro_radio">每平方米补贴金额</span>
                  <div class="answer answer_radio">
                    <el-radio-group v-model="copyData.yjmxz">
                      <el-radio :label="0">1300元/m²</el-radio>
                      <el-radio :label="1">1100元/m²</el-radio>
                      <el-radio :label="2">900元/m²</el-radio>
                      <el-radio :label="3">700元/m²</el-radio>
                      <el-radio :label="4">0元/m²</el-radio>
                    </el-radio-group>
                  </div>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="problem">3年(商场2年)内总补贴金额</span>
                  <div class="answer answer_short answer_more">
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
                  <span>贸易公司总经理同意本计算办法初步确认：</span>
                  <div></div>
                </div>
                <div class="terms_sign">
                  <span>贸易公司分管销售总监同意以上条款签署：</span>
                  <div></div>
                </div>
              </div>
              <!-- 备注区 -->
              <div class="title-text">备注</div>
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
            </el-timeline-item>
            <el-timeline-item> </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </box-contain>
  </div>
</template>
<style lang="scss" scoped>
.id-contain {
  font-size: 14px;
}
/deep/ .el-input {
  height: 24px;
  width: 184px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
    border: none;
  }
}
/deep/ .el-radio-group {
  .el-radio {
    width: 120px;
    margin: 0 10px 14px 0;
    font-weight: 400;
  }
}
/deep/ .el-timeline {
  font-size: inherit;
  .el-timeline-item {
    &:last-child {
      display: none;
    }
  }
  .el-timeline-item__node {
    background: #fff;
    border: 2px solid var(--sle-text-color);
  }
  .el-timeline-item__wrapper {
    padding-left: 20px;
  }
  .el-timeline-item__timestamp {
    font-size: 16px;
    color: inherit;
    font-weight: 600;
    padding-top: 2px;
    margin-bottom: 20px;
    color: var(--sle-text-color);
  }
}

.table-content {
  .table-main {
    padding-left: 14px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      line-height: 30px;
      margin-bottom: 15px;
      border: 1px solid #ececec;
      .problem {
        display: inline-block;
        width: 180px;
        background-color: #f6f7f9;
        text-align: center;
        font-weight: 600;
        color: #595959;
        border-right: 1px solid #ececec;
      }
      .pro_radio {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .answer {
        flex: 1;
        box-sizing: border-box;
        padding: 0 12px 0 18px;
      }
      .answer_inp {
        /deep/.el-input {
          width: 100%;
        }
      }
      .answer_radio {
        padding: 15px 12px 0 18px;
      }
      .answer_short {
        width: 278px;
      }
      .answer_more {
        .inp_line,
        /deep/.el-input__inner {
          border: none !important;
          border-bottom: 1px solid #595959 !important;
          overflow: hidden;
          width: 2em;
          margin: 0 2px;
        }
        .inp_box_line {
          color: #595959;
        }
      }
    }
  }

  // 有蓝色线的标题
  .title-text {
    font-size: 14px;
    font-weight: 600;
    padding: 10px 0;
    position: relative;
    z-index: 100;
    width: 100%;
    margin-bottom: 15px;
    width: 68px;
    text-align: center;
    &::after {
      content: '';
      height: 12px;
      width: 68px;
      position: absolute;
      bottom: 7px;
      z-index: -1;
      left: 0;
      background: #c1dbff;
    }
  }
  // 签名
  .terms_agree {
    text-align: right;
    padding: 5px 37px 30px 18px;
    .terms_sign {
      font-size: 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      span {
        font-size: 14px;
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

  // 备注
  .remarks {
    color: #595959;
    line-height: 28px;
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
      copyData: {}
    };
  },
  components: {
    BoxContain,
    TitleContain
  }
};
</script>
