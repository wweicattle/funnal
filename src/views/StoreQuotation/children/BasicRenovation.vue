<template>
  <div class="basic-contain">
    <box-contain logoVis="before" :isshowheader="headerObj">
      <div class="b-content">
        <ul>
          <li>
            <span>款式:</span>
            <el-radio-group v-model="copyData.yjmxz">
              <el-radio :label="0">专卖店</el-radio>
              <el-radio :label="1">商场</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>下单日期:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>

          <li>
            <span>委托供货厂全称:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>
          <li>
            <span>联系人:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
        </ul>

        <div class="c-tit">客户信息</div>
        <ul>
          <li>
            <span>公司全称:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>联系人:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>专卖店全称:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>联系人</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain>
      <div class="b-content">
        <div class="three-menus">
          <span class="active-class">商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
        </div>
        <div class="tables-contain">
          <table-contain
            :tableData="tableData"
            :tableLabel="tableLabel"
          ></table-contain>
        </div>
        <div class="total-contain">
          <div class="total-num">
            小计:
            <span class="pri pri-weight"> 3959.00</span>
          </div>
          <div class="total-content">
            <div>
              <span class="mar-right">合计(大写):</span>
              <span class="pri-weight">一二三四五六七八九十</span>
            </div>
            <div>
              <span class="mar-right">交货方式:</span>
              <el-radio-group v-model="copyData.yjmxz" class="pri-weight">
                <el-radio :label="0">专卖店</el-radio>
                <el-radio :label="1">商场</el-radio>
              </el-radio-group>
            </div>
            <div class="">
              <span class="mar-right">交货日期:</span>
              <span class="pri-weight">2009-12-12</span>
            </div>
          </div>
          <div class="describe">
            <div class="tit">备注:</div>
            <div class="list">列清单一张</div>
          </div>

          <footer>
            <div class="foot-line">
              <span class="pri-weight">总计:</span>
              <div class="pri pri-weight">$2626.00</div>
            </div>
            <div class="foot-names flexcenter">
              <div >供货商确认:<span class="pri-weight">林毓兰</span></div>
              <div>财务审核:<span class="pri-weight">林毓兰</span></div>
              <div>营销中心策划部:<span class="pri-weight">林毓兰</span></div>
              <div>下单品:<span class="pri-weight">林毓兰</span></div>
            </div>
          </footer>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from "@/components/common/BoxContain";
import TitleContain from "@/components/common/TitleContain";
import TableContain from "@/components/common/TableContain";

import { mapState } from "vuex";

export default {
  name: "JXSDATA",
  data() {
    return {
      copyData: {},
      headerObj: { text: "LILANZ利郎专卖标志制作清单" },
      headerObjs: { text: "新版经销商基本资料" },
      radio: null,
      tableData: [
        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },
        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },

        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },
        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },
        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },
        {
          htbh: "2016-05-03",
          shbs: "王小虎",
          rq: "上海市",
          skr: "上海市",
          jf: "上海市",
          yf: "上海市",
          sqje: "sqje",
          djzt: "上海市",
        },
      ],
      tableLabel: [
        { name: "合同编号", attr: "htbh", width: 160 },
        { name: "付款审批审核标识", attr: "shbs", width: 180 },
        { name: "申请日期", attr: "rq", width: 120 },
        { name: "收款人", attr: "skr", width: 100 },
        { name: "甲方", attr: "jf", width: 100 },
        { name: "乙方", attr: "yf", width: 100 },
        { name: "申请金额", attr: "sqje", width: 120 },
        { name: "审批状态", attr: "djzt" },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    BoxContain,
    TitleContain,
    TableContain,
  },
  computed: {
    ...mapState(["ShopBasicData"]),
  },
  watch: {
    ShopBasicData: {
      handler(newVal) {
        console.log(newVal);
        this.copyData = JSON.parse(JSON.stringify(newVal));
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
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
  .el-radio {
    min-width: 80px;
    margin-right: 0;
  }
}
.basic-contain {
  height: 100%;
  // background: var(--main-back);
  .b-content {
    // min-height: 300px;
    .c-tit {
      display: inline-block;
      min-width: 88px;
      text-align: right;
      margin-right: 15px;
      font-size: 15px;
      color: var(--text-color);
      margin: 5px 0;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.33%;
        padding: 10px 0;
        // padding-left: 15px;
        & > span {
          display: inline-block;
          min-width: 88px;
          text-align: right;
          margin-right: 15px;
        }
        &:nth-child(4n) {
          // margin-left:15px;
        }
        &:nth-child(3n) {
          // text-align: right;
          padding-right: 20px;
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
      .pri-weight {
        font-weight: 600;
      }
      .mar-right{
        margin-right: 10px;
      }
      .total-num {
        text-align: right;
        padding: 10px;
        border-bottom: 1px solid var(--line-color);
      }
      .total-content {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
      }
      .describe {
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
          & span{
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
