<template>
  <div class="basic-contain">
    <box-contain>
      <title-contain value="基础装修报价清单" align="center" bgcolor="#F0F7FF"></title-contain>
      <div class="att-bottom">
        <!-- <el-timeline>
          <el-timeline-item timestamp="客户信息" placement="top"> -->
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
        <!-- </el-timeline-item>
          <el-timeline-item> </el-timeline-item>
        </el-timeline> -->
      </div>
    </box-contain>
    <div class="margin-t">
    </div>
    <box-contain>
      <div class="b-content">
        <!-- <div class="three-menus">
          <span class="active-class">商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
          <span>商场壁柜系列</span>
        </div> -->
        <div class="tables-contain">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align='center' prop="date" label="类别" width="60">
            </el-table-column>
            <el-table-column align='center' prop="date" label="序号" width="60">
            </el-table-column>
            <el-table-column align='center' prop="date" label="项目" width="60">
            </el-table-column>
            <el-table-column align='center' prop="date" label="单位" width="60">
            </el-table-column>
            <el-table-column align='center' prop="date" label="参考单价" width="80">
            </el-table-column>
            <el-table-column align='center' label="贸易公司申报">
              <el-table-column align='center' prop="name" label="数量" min-width="50">
              </el-table-column>
              <el-table-column align='center' prop="name" label="单价" min-width="50">
              </el-table-column>
              <el-table-column align='center' prop="name" label="金额" min-width="50">
              </el-table-column>
            </el-table-column>
            <el-table-column align='center' label="总部企划拟定">
              <el-table-column align='center' prop="name" label="数量" min-width="50">
              </el-table-column>
              <el-table-column align='center' prop="name" label="单价" min-width="50">
              </el-table-column>
              <el-table-column align='center' prop="name" label="金额" min-width="50">
              </el-table-column>
            </el-table-column>
            <el-table-column align='center' prop="date" label="工艺,用材" width="100">
            </el-table-column>
          </el-table>
          <!-- <table-contain
            :tableData="tableData"
            :tableLabel="tableLabel"
          ></table-contain> -->
        </div>
        <!-- <div class="total-contain">
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
              <div>供货商确认:<span class="pri-weight">林毓兰</span></div>
              <div>财务审核:<span class="pri-weight">林毓兰</span></div>
              <div>营销中心策划部:<span class="pri-weight">林毓兰</span></div>
              <div>下单品:<span class="pri-weight">林毓兰</span></div>
            </div>
          </footer>
        </div> -->
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import TableContain from '@/components/common/TableContain';

import { mapState } from 'vuex';

export default {
  name: 'JXSDATA',
  data() {
    return {
      quotationData: {},
      copyData: {},
      headerObj: { text: 'LILANZ利郎专卖标志制作清单' },
      headerObjs: { text: '新版经销商基本资料' },
      radio: null,
      tableData: [
        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        },
        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        },

        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        },
        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        },
        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        },
        {
          htbh: '2016-05-03',
          shbs: '王小虎',
          rq: '上海市',
          skr: '上海市',
          jf: '上海市',
          yf: '上海市',
          sqje: 'sqje',
          djzt: '上海市'
        }
      ],
      tableLabel: [
        { name: '合同编号', attr: 'htbh', width: 160 },
        { name: '付款审批审核标识', attr: 'shbs', width: 180 },
        { name: '申请日期', attr: 'rq', width: 120 },
        { name: '收款人', attr: 'skr', width: 100 },
        { name: '甲方', attr: 'jf', width: 100 },
        { name: '乙方', attr: 'yf', width: 100 },
        { name: '申请金额', attr: 'sqje', width: 120 },
        { name: '审批状态', attr: 'djzt' }
      ]
    };
  },
  created() { },
  mounted() { },
  methods: {},
  components: {
    BoxContain,
    TitleContain,
    TableContain
  },
  computed: {
    ...mapState(['ShopBasicData'])
  },
  watch: {
    ShopBasicData: {
      handler(newVal) {
        console.log(newVal);
        this.copyData = JSON.parse(JSON.stringify(newVal));
      },
      immediate: true
    }
  }
};
</script>

<!-- <style scoped lang="scss">
/deep/ .el-table {
  font-size: var(--font-size);
}
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
    // padding-bottom: 20px;
    // border-bottom: 10px solid var(--main-back);
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
