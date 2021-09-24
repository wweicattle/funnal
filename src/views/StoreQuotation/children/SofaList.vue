<template>
  <div class="basic-contain">
    <box-contain logoVis="before" :isshowheader="headerObj">
      <div class="b-content">
        <ul>
          <li>
            <span>款式:</span>
            <el-radio-group v-model="quotationData.kslx">
              <el-radio :label="1">专卖店</el-radio>
              <el-radio :label="2">商场</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>下单日期:</span>
            <el-input v-model="quotationData.xdrq"></el-input>
          </li>

          <li>
            <span>委托供货厂全称:</span>
            <el-input v-model="quotationData.ghskhmc"></el-input>
          </li>
          <li>
            <span>联系人:</span>
            <el-input v-model="quotationData.zmdqrr"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="quotationData.ghsphone"></el-input>
          </li>
        </ul>

        <div class="c-tit">客户信息</div>
        <ul>
          <li>
            <span>公司全称:</span>
            <el-input v-model="quotationData.fgskhmc"></el-input>
          </li>
          <li>
            <span>联系人:</span>
            <el-input v-model="quotationData.fgslxr"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="quotationData.zmdphone"></el-input>
          </li>
          <li>
            <span>专卖店全称:</span>
            <el-input v-model="quotationData.zmdmc"></el-input>
          </li>
          <li>
            <span>联系人</span>
            <el-input v-model="quotationData.zmdlxr"></el-input>
          </li>
          <li>
            <span>联系电话:</span>
            <el-input v-model="quotationData.zmdphone"></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain>
      <div class="b-content">
        <!-- <div class="three-menus">
          <template v-for="(val, index) in threeMenus">
            <span
              @click="activeIndex = index"
              :class="{ 'active-class': activeIndex == index }"
              :key="index"
              >{{ val }}</span
            >
          </template>
        </div> -->
        <div class="tables-contain">
          <table-contain
            :tableData="selectVal"
            :tableLabel="tableLabel"
          ></table-contain>
        </div>
        <div class="total-contain">
          <div class="total-num">
            小计:
            <span class="pri pri-weight"> {{quotationData.je}}</span>
          </div>
          <div class="total-content">
            <div>
              <span class="mar-right">合计(大写):</span>
              <span class="pri-weight">{{quotationData.bhjje}}</span>
            </div>
            <div>
              <span class="mar-right">交货方式:</span>
              <el-radio-group v-model="quotationData.jhfs" class="pri-weight">
                <el-radio :label="1">自提</el-radio>
                <el-radio :label="2">送货</el-radio>
                <el-radio :label="3">代办交货</el-radio>
              </el-radio-group>
            </div>
            <div class="">
              <span class="mar-right">交货日期:</span>
              <span class="pri-weight">{{quotationData.xdrq}}</span>
            </div>
          </div>
          <div class="describe">
            <div class="tit">备注:</div>
            <div class="list">{{quotationData.bz}}</div>
          </div>

          <footer>
            <div class="foot-line">
              <span class="pri-weight total">总计:</span>
              <div class="pri pri-weight" v-if="quotationData.hjje">{{"￥"+quotationData.hjje}}</div>
            </div>
            <div class="foot-names flexcenter">
              <div>供货商确认:<span class="pri-weight">{{quotationData.ghsqrr}}</span></div>
              <div>财务审核:<span class="pri-weight">{{quotationData.cwshr}}</span></div>
              <div>营销中心策划部:<span class="pri-weight">{{quotationData.qhshr}}</span></div>
              <div>下单品:<span class="pri-weight">{{quotationData.zdr}}</span></div>
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

import { getQuotationList } from "@/network/index";
export default {
  name: "JXSDATA",
  data() {
    return {
      activeIndex: 0,
      quotationData: {},
      threeMenus: [
        "商场壁柜系列",
        "配件系列",
        "橱窗系列",
        "中岛架系列",
        "辅助必备道具",
        "辅助陈列道具",
        "增补部分",
        "装修主用材",
      ],
      headerObj: { text: "LILANZ利郎专卖标志制作清单" },
      headerObjs: { text: "新版经销商基本资料" },
      radio: null,
      tableLabel: [
        { name: "货物名称", attr: "spmc" },
        { name: "规 格", attr: "spgg" },
        { name: "单位", attr: "dw" },
        { name: "设计数量", attr: "sl" },
        { name: "赠送数量", attr: "zssl" },
        { name: "单 价", attr: "dj" },
        { name: "金额", attr: "je" },
        { name: "备注", attr: "bz" },
      ],
      quotationData: [],
      mxlist: [],
      selectVal:[]
    };
  },
  created() {
    this.load = this.$Loading.service({
      fullscreen: true,
    });
    // 请求灯具清单数据
    this.getQuotationList();
  },
  mounted() {},
  methods: {
    getQuotationList() {
      getQuotationList("沙发清单").then((da) => {
        this.load.close();
        if (da.data.errcode == 0) {
          // 处理接口返回数据
          this.quotationData = da.data.data;
          this.mxlist = this.quotationData.mxlist;
          this.selectVal = this.mxlist.filter((val) => {
            if (val.lb ==0) {
              return val;
            }
            return false;
          });
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
  },
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
        this.quotationData = JSON.parse(JSON.stringify(newVal));
      },
      immediate: true,
    },
    activeIndex: {
      handler(newVal) {
        // djlx=971  lb=1[商场壁柜系列]2[配件系列]3[橱窗系列]4[中岛架系列]5[辅助必备道具]6[辅助陈列道具]7[增补部分]8[装修主用材]
        this.selectVal = this.mxlist.filter((val) => {
          if (val.lb == newVal + 1) {
            return val;
          }
          return false;
        });
      },
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
}
</style>
