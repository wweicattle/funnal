<template>
  <div class="store-information">
    <box-contain>
      <div class="b-content">
        <div class="c-tit">系统客户信息</div>
        <ul>
          <li>
            <span>申请类型:</span>
            <el-input v-model="quotationData.sqlx"></el-input>
          </li>
          <li>
            <span>专卖店:</span>
            <el-radio-group v-model="quotationData.zmd">
              <el-radio :label="1">直营</el-radio>
              <el-radio :label="2">加盟</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>委托供货厂全称:</span>
            <el-input v-model="quotationData.wtghcmc"></el-input>
          </li>
          <li>
            <span>专卖店名称:</span>
            <el-input v-model="quotationData.zmdmc"></el-input>
          </li>
          <li>
            <span>联系人:</span>
            <el-input v-model="quotationData.lxr"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="quotationData.lxdh"></el-input>
          </li>
        </ul>

        <ul>
          <li>
            <span>店铺启用日期:</span>
            <el-input v-model="quotationData.dpqyrq"></el-input>
          </li>
          <li>
            <span>建档日期:</span>
            <el-input v-model="quotationData.jdrq"></el-input>
          </li>
          <li>
            <span>系统客户名称:</span>
            <el-input v-model="quotationData.xtkhmc"></el-input>
          </li>
          <li>
            <span>系统门店名称:</span>
            <el-input v-model="quotationData.xtmdmc"></el-input>
          </li>
          <li>
            <span>联系人</span>
            <el-input v-model="quotationData.lxrd"></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain style="margin-top:14px">
      <div class="b-content">
        <div class="c-tit">审批表申请资料</div>

        <div class="c-title-module">店铺资料</div>
        <ul>
          <li style="width:45%">
            <span>专卖店名称:</span>
            <el-input v-model="quotationData.zmdmc2"></el-input>
            <span style="text-align:left;margin-left:3px;min-width:0;font-size:12px;color:#999999">城市名称+路段</span>
          </li>
          <li style="width:27.5%">
            <span style="min-width:60px;">联系电话(店):</span>
            <el-input v-model="quotationData.lxdmh2"></el-input>
          </li>
          <li style="width:27.5%">
            <span style="min-width:60px;">传真:</span>
            <el-input v-model="quotationData.cz"></el-input>
          </li>

          <li style="width:45%">
            <span>这是您开设的第:</span>
            <el-input v-model="quotationData.dpsl"></el-input>
            <span style="text-align:left;margin-left:3px">个店/厅</span>
          </li>
          <li>
            <span>是否安装电视:</span>
            <el-radio-group v-model="quotationData.azds">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="2">否</el-radio>
            </el-radio-group>
          </li>
          <li style="width:100%">
            <span>加盟位置:</span>
            <el-input class="local-input" v-model="quotationData.wz1"></el-input>
            <span class="nomin">省</span>
            <el-input class="local-input" v-model="quotationData.wz2"></el-input>
            <span class="nomin">市</span>
            <el-input class="local-input" v-model="quotationData.wz3"></el-input>
            <span class="nomin">县(区)</span>
            <el-input class="local-input" v-model="quotationData.wz4"></el-input>
            <span class="nomin">镇</span>
            <el-input class="local-input" v-model="quotationData.wz5"></el-input>
            <span class="nomin">街/路</span>
            <el-input class="local-input" v-model="quotationData.wz6"></el-input>
            <span class="nomin">号</span>
            <el-input class="local-input" v-model="quotationData.wz7"></el-input>
            <span class="nomin">商城</span>
          </li>
          <li style="width:100%" class="local-type">
            <span>专卖店:</span>
            <el-radio-group v-model="quotationData.dplx">
              <el-radio :label="1">省份</el-radio>
              <el-radio :label="2">地级市</el-radio>
              <el-radio :label="3">百强县</el-radio>
              <el-radio :label="4">县级市</el-radio>
              <el-radio :label="5">县级</el-radio>
              <el-radio :label="6">镇级</el-radio>
              <el-radio :label="7">直辖市</el-radio>
              <el-radio :label="8">特区</el-radio>
            </el-radio-group>
          </li>
        </ul>

        <div class="c-title-module">店铺关键指标</div>
        <ul class="li-tips">
          <li style="width:35%">
            <span>原年租金:</span>
            <el-input v-model="quotationData.zmdmc3"></el-input>
            <span style="text-align:left;margin-left:3px;min-width:0">万</span>
          </li>
          <li style="width:35%">
            <span>商场扣点(店):</span>
            <el-input v-model="quotationData.sckd"></el-input>
            <span style="text-align:left;margin-left:3px;min-width:0">%</span>
          </li>
          <li style="width:30%">
            <span>店面门数:</span>
            <el-input v-model="quotationData.lxdmh2"></el-input>
          </li>
          <li style="width:35%">
            <span>合同签订时间:</span>
            <el-input v-model="quotationData.htqdsj"></el-input>
          </li>
          <li style="width:35%">
            <span>营业面积:</span>
            <el-input v-model="quotationData.yymj"></el-input>
            <span style="text-align:left;margin-left:3px;min-width:0">平方米</span>
          </li>
          <li style="width:30%">
            <span>拟开业时间:</span>
            <el-input v-model="quotationData.nkysj"></el-input>
          </li>
          <li style="width:100%">
            <span>租赁年限从:</span>
            <el-input v-model="quotationData.kssj"></el-input>
            <span class="nomin">至</span>
            <el-input v-model="quotationData.jssj"></el-input>
            <span class="nomin">止</span>
          </li>
        </ul>
        <div class="c-title-module">政策管理处预核定该店补贴</div>
        <div class="c-sign">
          <div class="c-sign-item">
            <span>营销企划部按实际图纸计算确认：</span>
          </div>
          <div class="c-sign-item">
            <span>营销政策管理处核对确认：</span>
          </div>
        </div>
        <div class="c-title-module-todo">备注</div>
        <div class="todo-content" style="padding-bottom: 30px;border-bottom: 1px solid #f3f3f3;margin-bottom: 12px;">
          <p class="ul">面积：</p>
          <p class="li">①.面积指店铺的营业面积。</p>
          <p class="li">②.专卖店的营业面积低于100平方米的原则上不予开设。</p>
          <p class="li">③.营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积。</p>
          <p class="ul">每平方米出货额(4.9)：</p>
          <p class="li">①.营业面积的每平方米必须达到的出货额(折扣:4.9折 单位:万元/㎡)</p>
          <p class="ul">每平方米补贴金额：</p>
          <p class="li">①.公司给予店铺每平方米的补贴金额(单位:元/㎡)</p>
          <p class="ul">3年(商场2年)内总出货回款：</p>
          <p class="li">①.该项计算店铺开业后必须达到的出货回款总额，其中专卖店限期为３年内，商场限制为２年内。</p>
          <p class="li">②.算法:出货回款总额 = 营业面积 * 每平方米出货额</p>
          <p class="ul">3年内总补贴金额：</p>
          <p class="li">①.该项计算店铺开业后公司给予的补贴总额，其中专卖店限期为３年内返回完毕，商场限制为２年内返回完毕。</p>
          <p class="li">②.算法:总补贴金额 = 营业面积 * 每平方米补贴金额</p>
        </div>
        <ul>
          <li>
            <span>出货开始日期:</span>
            <el-input v-model="quotationData.cz"></el-input>
          </li>
          <li>
            <span>回款开始日期:</span>
            <el-input v-model="quotationData.cz"></el-input>
          </li>
          <li>
            <span>实际开业日期:</span>
            <el-input v-model="quotationData.cz"></el-input>
          </li>
          <li>
            <span>订货编号:</span>
            <el-input v-model="quotationData.cz"></el-input>
          </li>
        </ul>
        <div class="c-title-module-todo">备注</div>

        <div class="todo-content">
          <p class="ul">
            出货与回款日期审批流程：
            <span>贸易公司物流经理</span>
            <i class="el-icon-d-arrow-right"></i>
            <span>总部物流经理</span>
            <i class="el-icon-d-arrow-right"></i>
            <span>经销商</span>
            <i class="el-icon-d-arrow-right"></i>
            <span>政策管理处</span>
          </p>
          <p class="li">①.出货开始日期：贸易公司发货到专卖店的</p>
          <p class="li">②.回款开始日期：贷款的回款开始日期。</p>
          <p class="li">③.实际开业日期：店铺实际开店的时间。</p>
        </div>
      </div>
    </box-contain>
  </div>
</template>
<script>
import BoxContain from "@/components/common/BoxContain";
export default {
  data() {
    return {
      quotationData: {},
    }
  },
  components: { BoxContain }
}
</script>

<style lang="scss" scoped>
.store-information {
  height: 100%;
  width: 100%;
}
.b-content {
  // min-height: 300px;
  .c-tit {
    padding-bottom: 12px;
    min-width: 88px;
    margin: 0 11px;

    font-size: 15px;
    color: var(--text-color);
    font-weight: 600;
    border-bottom: 1px solid #f3f3f3;
  }
  .c-title-module {
    height: 40px;
    color: var(--sle-text-color);
    line-height: 40px;
    font-size: 15px;
    font-weight: 600;
    margin: 15px 0;
    padding-left: 15px;
    position: relative;
    text-align: left;
    background: rgb(240, 247, 255);
  }
  .c-title-module-todo {
    height: 40px;
    color: var(--text-color);
    line-height: 40px;
    font-size: 15px;
    font-weight: 600;
    margin: 15px 0;
    padding-left: 15px;
    position: relative;
    text-align: left;
    background: #fafbfc;
  }
  .todo-content {
    margin-top: 14px;
    padding-left: 15px;

    .ul {
      color: var(--default-text-color);
      font-size: var(--font-size);
      font-weight: 600;
      line-height: 25px;
      span {
        color: #f13e3e;
        line-height: 14px;
      }
      i {
        font-size: 12px;
        color: #f13e3e;
        margin: 0 5px;
      }
    }
    .li {
      color: var(--default-text-color);
      font-size: var(--font-size);
      text-indent: 2em;
      line-height: 25px;
    }
  }
  .c-sign {
    width: 100%;
    margin-top: 40px;
    .c-sign-item {
      text-align: right;
      margin-top: 10px;
      position: relative;
      span {
        margin-right: 110px;
        color: var(--text-color);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 2px;
        right: 0;
        width: 105px;
        height: 1px;
        background: #333333;
      }
    }
  }
  .li-tips {
    li {
      span {
        min-width: 80px;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .local-type {
      .el-radio {
        min-width: 80px !important;
        margin-right: 0;
      }
    }
    li {
      width: 33.33%;
      padding: 10px 0;
      // padding-left: 15px;
      .local-input {
        width: 65px !important;
      }

      & > span {
        display: inline-block;
        min-width: 95px;
        text-align: right;
        margin-right: 15px;
      }
      .nomin {
        min-width: 0;
        margin: 0 5px;
      }
      &:nth-child(4n) {
        // margin-left:15px;
      }
      &:nth-child(3n) {
        // text-align: right;
        // padding-right: 20px;
      }
      //   &:nth-child(3n-1) {
      //     text-align: center;
      //   }
      &.address-css {
        // width: 66.66%;
        width: auto;
        text-align: left;
        .pro,
        .city {
          padding: 0 4px;
          min-width: auto;
          margin: 0;
        }
      }
      &.id-number {
        text-align: left;
      }
    }
  }
  .three-menus {
    width: 100%;
    margin-bottom: 15px;
    font-size: 12px;
    span {
      display: inline-block;
      width: 100px;
      text-align: center;
      margin-right: 10px;
      height: 28px;
      line-height: 28px;
      border-radius: 2px;
      border: 1px solid #d9d9d9;
      &:hover {
        cursor: pointer;
      }
      &.active-class {
        color: #fff;
        background: var(--sle-text-color);
      }
    }
  }
  .total-contain {
    // padding: 0 20px;
    .pri-weight {
      font-weight: 600;
    }
    .mar-right {
      margin-right: 10px;
    }
    .total-num {
      text-align: right;
      padding: 10px;
      border-bottom: 1px solid var(--line-color);
      .pri {
        padding-right: 10px;
      }
    }
    .total-content {
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    .describe {
      padding: 0 15px;
      .tit {
        margin: 20px 0;
      }
      .list {
        margin: 20px 0;
        height: 25px;
        line-height: 25px;
        background: #fafbfc;
      }
    }

    footer {
      .foot-line {
        border-top: 1px solid #000;
        position: relative;
        height: 34px;
        line-height: 34px;
        .total {
          padding-left: 15px;
        }
        .pri {
          width: 120px;
          text-align: center;
          color: #fff;
          background: #333333;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .foot-names {
        margin: 50px 0 0 0;
        justify-content: space-between;
        & span {
          margin-left: 10px;
        }
      }
    }
  }
}
/deep/ .el-input {
  height: 24px;
  width: 124px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
  }
}
/deep/ .el-radio-group {
  .el-radio {
    min-width: 70px;
    margin-right: 0;
  }
}
</style>
