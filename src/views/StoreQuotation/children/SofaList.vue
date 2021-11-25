<template>
  <div class="basic-contain">
    <box-contain>
      <title-contain value="LILANZ利郎专卖沙发制作清单" align="center" bgcolor="#F0F7FF"></title-contain>
      <div class="att-bottom">
        <el-timeline>
          <el-timeline-item timestamp="基本信息" placement="top">
            <div class="after-basic flexcenter">
              <div class="basic-c pro">
                <span class="tit spetit">款式</span>
                <div class="val">
                  <el-radio-group v-model="quotationData.kslx">
                    <el-radio :label="1">专卖店</el-radio>
                    <el-radio :label="2">商场</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="basic-c pro">
                <span class="tit">下单日期</span>
                <div class="val">
                  <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                  </el-radio-group>-->
                  <el-input v-model="quotationData.xdrq"></el-input>
                </div>
              </div>
              <div class="basic-c pro">
                <span class="tit spetit">联系人</span>
                <div class="val">
                  <el-input v-model="quotationData.zmdqrr"></el-input>
                </div>
              </div>
            </div>
            <div class="after-basic flexcenter">
              <div class="basic-c pro">
                <span class="tit">联系电话</span>
                <div class="val">
                  <el-input v-model="quotationData.ghsphone" v-checkParam="{ regex: 'phone' }"></el-input>
                </div>
              </div>
              <div class="basic-c pro spe">
                <span class="tit">委托供货厂全称</span>
                <div class="val">
                  <el-input v-model="quotationData.ghskhmc"></el-input>
                </div>
              </div>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="客户信息" placement="top">
            <div class="after-basic flexcenter sale-num">
              <div class="basic-c long">
                <span class="tit">公司全称</span>
                <div class="val">
                  <el-input v-model="quotationData.fgskhmc"></el-input>
                </div>
              </div>
              <div class="basic-c min">
                <span class="tit">联系人</span>
                <div class="val">
                  <el-input v-model="quotationData.fgslxr"></el-input>
                </div>
              </div>
              <div class="basic-c min">
                <span class="tit">联系电话</span>
                <div class="val">
                  <el-input v-model="quotationData.zmdphone"></el-input>
                </div>
              </div>
              <div class="basic-c long">
                <span class="tit">专卖店全称</span>
                <div class="val">
                  <el-input v-model="quotationData.zmdmc"></el-input>
                </div>
              </div>
              <div class="basic-c min">
                <span class="tit">联系人</span>
                <div class="val">
                  <el-input v-model="quotationData.zmdlxr"></el-input>
                </div>
              </div>
              <div class="basic-c min">
                <span class="tit">联系电话</span>
                <div class="val">
                  <el-input v-model="quotationData.zmdphone"></el-input>
                </div>
              </div>
            </div>
          </el-timeline-item>
          <el-timeline-item></el-timeline-item>
        </el-timeline>
      </div>
    </box-contain>
    <!-- <box-contain  :isshowheader="headerObj">
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
    </box-contain>-->
    <div class="margin-t"></div>
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
        </div>-->
        <div class="tables-contain">
          <table-contain :tableData="selectVal" :tableLabel="tableLabel"></table-contain>
        </div>
        <div class="total-contain">
          <!-- <div class="total-num">
            小计:
            <span class="pri pri-weight">{{ quotationData.je }}</span>
          </div> -->
          <div class="num-monmey">
            <span class="mar-right">合计(大写):</span>
            <span class="pri-weight">{{ quotationData.bhjje }}</span>
          </div>
          <div class="total-content">
            <div class="flexcenter methods">
              <div class="mar-right">交货方式:</div>
              <div>
                <el-radio-group v-model="quotationData.jhfs">
                  <el-radio :label="1">自提</el-radio>
                  <el-radio :label="2">送货</el-radio>
                  <el-radio :label="3">代办交货</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class>
              <span class="mar-right">交货日期:</span>
              <span class="pri-weight">{{ quotationData.xdrq }}</span>
            </div>
          </div>
          <div class="describe">
            <!-- <div class="tit">备注:</div> -->
            <div class="list">备注:{{ quotationData.bz }}</div>
          </div>

          <footer>
            <div class="foot-line">
              <span class="pri-weight total">总计:</span>
              <div class="pri pri-weight" v-if="quotationData.hjje">{{ '￥' + quotationData.hjje }}</div>
            </div>
            <div class="foot-names flexcenter">
              <div>
                供货商确认:
                <span class="pri-weight">
                  {{
                    quotationData.ghsqrr
                  }}
                </span>
              </div>
              <div>
                财务审核:
                <span class="pri-weight">
                  {{
                    quotationData.cwshr
                  }}
                </span>
              </div>
              <div>
                营销中心策划部:
                <span class="pri-weight">
                  {{
                    quotationData.qhshr
                  }}
                </span>
              </div>
              <div>
                下单品:
                <span class="pri-weight">{{ quotationData.zdr }}</span>
              </div>
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
      selectVal: []
    };
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id == 0) return;
    this.load = this.$Loading.service({
      fullscreen: true,
    });
    // 请求灯具清单数据
    this.getQuotationList();
  },
  mounted() { },
  methods: {
    getQuotationList() {
      getQuotationList("沙发清单").then((da) => {
        this.load.close();
        if (da.data.errcode == 0) {
          // 处理接口返回数据
          this.quotationData = da.data.data;
          this.mxlist = this.quotationData.mxlist || [];

          this.selectVal = this.mxlist.filter((val) => {
            if (val.lb == 0) {
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

<!-- <style scoped lang="scss">
/deep/ .el-input {
  .el-input__inner {
    height: 100%;
    border: none;
    padding: 0 5px;
    font-size: var(--font-size);
  }
}
/deep/ .el-select {
  .el-input__suffix {
    line-height: 30px;
    display: flex;
    align-items: center;
  }
}
/deep/ .el-radio {
  margin-right: 11px;
  padding: 6px 0;
  .el-radio__label {
    font-size: var(--font-size);
    padding-left: 6px;
  }
}
/deep/ .el-radio-group {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: inherit;
}

/deep/ .el-date-editor {
  // width: 100%;
  // height: 100%;
  &.el-input {
    width: 100%;
  }
  .el-input__prefix {
    // right:5px
    display: none;
  }
  .el-input__icon {
    line-height: 30px;
  }
}
/deep/ .el-timeline {
  font-size: var(--font-size);
  .el-timeline-item {
    &:last-child {
      display: none;
    }
  }

  .el-timeline-item__wrapper {
    padding-left: 20px;
  }
}

.basic-c {
  display: flex;
  min-height: 28px;
  line-height: 28px;
  margin-bottom: 15px;
  border: 1px solid #ececec;
  .tit {
    padding: 0 10px;
    background: #f6f7f9;
    font-weight: 600;
    border-right: 1px solid #ececec;
    width: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .val {
    flex: 1;
    overflow: hidden;
  }
}
.basic-contain {
  height: 100%;
  // background: var(--main-back);
  .att-bottom {
    padding: 0 15px;
    // border: 1px solid red;
    .after-basic {
      flex-wrap: wrap;
      justify-content: space-between;

      & > .pro {
        width: 234px;
        .tit {
          width: 120px;
        }
      }
      & > .tot-line {
        width: 100%;
        justify-content: flex-start;
        .basic-c {
          margin-right: 20px;
        }
        .tit {
          width: 120px;
        }
        .val {
          width: 112px;
        }
      }
      &.flex-start {
        justify-content: flex-start;
        .pro {
          margin-right: 20px;
        }
      }
    }
  }
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
      overflow: scroll;
      white-space: nowrap;
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
</style> -->
