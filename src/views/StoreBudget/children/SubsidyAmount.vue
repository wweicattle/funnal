<template>
  <div class="id-contain">
    <box-contain>
      <div class="table-content">
        <title-contain value="营销中心预核定补贴金额" align="center"></title-contain>
        <div class="table-main">
          <el-timeline>
            <el-timeline-item timestamp="货柜灯具补贴" placement="top">
              <div class="tables">
                <div class="table_title">
                  <span class="tab_el" style="width:110px">经营方式</span>
                  <span class="tab_el" style="width:110px" v-if="info.iszg==1">整改方式</span>
                  <span class="tab_el" style="width:110px">装修档次</span>
                  <span class="tab_el" style="width:120px" v-if="info.iszg==1">前一年销售额</span>
                  <span class="tab_el" style="width:120px" v-if="info.iszg==0">店租</span>
                  <span class="tab_el btfs">货柜灯具补贴方式</span>
                </div>
                <div class="table_con">
                  <div class="tab_el" style="width:110px">
                    <span v-for="(item,i) in jyfsList" :key="i" v-show="info.jyfs==item.dm">{{item.mc}}</span>
                  </div>
                  <div class="tab_el" style="width:110px" v-if="info.iszg==1">
                    <span v-for="(item,i) in zgfsList" :key="i" v-show="info.zgfs==item.dm">{{item.mc}}</span>
                  </div>
                  <div class="tab_el" style="width:110px">
                    <span v-for="(item,i) in  zxdcList" :key="i" v-show="info.zxdc==item.dm">{{item.mc}}</span>
                  </div>
                  <div style="width:120px" class="tab_el" v-if="info.iszg==1">
                    <div>
                      <el-input class="inp_line" v-model="info.lsje1"></el-input>
                      <span class="inp_box_line">万元</span>
                    </div>
                  </div>
                  <div style="width:120px" class="tab_el" v-if="info.iszg==0">
                    <div>
                      <el-input class="inp_line" v-mode="info.nzje"></el-input>
                      <span class="inp_box_line">万元</span>
                    </div>
                  </div>
                  <div class="tab_el btfs">
                    <span v-if="btfsList.length<1">无数据~</span>
                    <template>
                      <el-radio-group v-model="btfs">
                        <el-radio v-for="(item,i) in btfsList" :key="i" :label="item.dm">{{item.mc}}</el-radio>
                      </el-radio-group>
                    </template>
                  </div>
                </div>
              </div>
              <!-- 签名区 -->
              <div class="terms_agree">
                <div class="terms_sign">
                  <span>营销企划部按实际图纸计算确认：</span>
                  <div>{{info.zbkjsjy}}</div>
                </div>
                <div class="terms_sign">
                  <span>营销政策管理处核对确认：</span>
                  <div>{{info.zbzcgl}}</div>
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

  .el-timeline-item__wrapper {
    padding-left: 20px;
  }
}

.table-content {
  .table-main {
    padding-left: 14px;
  }
  .tables {
    overflow: hidden;
    border: 1px solid var(--border-color);
    .table_title {
      display: flex;
      height: 43px;
      align-items: center;
      background-color: rgb(246, 247, 249);
      .tab_el {
        font-weight: 600;
      }
    }
    .table_con {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 580px;
      .tab_el {
        padding: 12px 8px;
        box-sizing: border-box;
      }
      .btfs {
        text-align: left;
        /deep/.el-radio-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          .el-radio {
            width: 100%;
            .el-radio__label {
              margin-top: -17px;
              display: inline-block;
              padding-left: 22px;
              line-height: 1.26em;
            }
          }
        }
        /deep/.el-radio,
        .el-radio__input {
          white-space: normal;
          margin-bottom: 12px;
        }
      }

      .inp_line,
      /deep/.el-input__inner {
        border: none !important;
        border-bottom: 1px solid #595959 !important;
        overflow: hidden;
        width: 64px;
        margin: 0 2px;
      }
      .inp_box_line {
        color: #595959;
      }
    }
    .btfs {
      flex: 1;
      overflow: hidden;
    }
    .tab_el {
      text-align: center;
      border-right: 1px solid var(--border-color);
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .tab_el:last-child {
      border: none;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      line-height: 30px;
      margin-bottom: 15px;
      border: 1px solid var(--border-color);
      .problem {
        display: inline-block;
        width: 180px;
        background-color: var(--main-back);
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
        color: var(--text-color);
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
      color: var(--default-text-color);
      font-size: var(--font-size);
      font-weight: 600;
      line-height: 25px;
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
    return {};
  },
  props: {
    info: { type: Object, default: () => {} },
    jyfsList: { type: Array, default: [] },
    zxdcList: { type: Array, default: [] },
    btfs: { type: Number, default: null },
    btfsList: { type: Array, default: [] },
    zgfsList: { type: Array, default: [] }
  },
  components: {
    BoxContain,
    TitleContain
  }
};
</script>
