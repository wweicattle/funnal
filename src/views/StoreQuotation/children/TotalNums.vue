<template>
  <div class="basic-contain">
    <box-contain>
      <title-contain value="LILANZ利郎专卖报价总览清单" align="center" bgcolor="#F0F7FF"></title-contain>

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
          <table-contain :tableData="getQuotationList" :tableLabel="tableLabel"></table-contain>
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

import { getQuotationToalList } from "@/network/index";
export default {
  name: "JXSDATA",
  data() {
    return {
      activeIndex: 0,
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
        { name: "货柜类型", attr: "mc" },
        { name: "货柜版本", attr: "hgbb" },
        { name: "装修档次", attr: "zxdc" },
        { name: "供应商", attr: "ghskhmc" },
        { name: "报价时间", attr: "xdrq" },
        { name: "金额", attr: "zje" },
        { name: "当前审批人", attr: "shr" },
        { name: "审批节点", attr: "shgwmc" },
      ],
      getQuotationList: [],
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
    this.getQuotationLists();
  },
  mounted() { },
  methods: {
    getQuotationLists() {
      getQuotationToalList().then((da) => {
        this.load.close();
        if (da.data.errcode == 0) {
          // 处理接口返回数据
          this.getQuotationList = da.data.data;
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
    // ShopBasicData: {
    //   handler(newVal) {
    //     this.getQuotationList = JSON.parse(JSON.stringify(newVal));
    //   },
    //   immediate: true,
    // },
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
