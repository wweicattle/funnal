<template>
  <div class="dialog-page approve">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>政策管理处初审意见</span>
        <span>/Policy management approval</span>
      </p>
    </div>
    <div class="module">
      <div class="tables">
        <div class="table_title">
          <span class="tab_el" style="width:110px">经营方式</span>
          <span class="tab_el" style="width:110px" v-if="info.iszg == 1">整改方式</span>
          <span class="tab_el" style="width:110px">装修档次</span>
          <span class="tab_el" style="width:120px" v-if="info.iszg == 1">前一年销售额</span>
          <span class="tab_el" style="width:120px" v-if="info.iszg == 0">店租</span>
          <span class="tab_el btfs">货柜灯具补贴方式</span>
        </div>
        <div class="table_con">
          <div class="tab_el" style="width:110px">
            <span v-for="(item,i) in jyfsList" :key="i" v-show="info.jyfs == item.dm">{{ item.mc }}</span>
          </div>
          <div class="tab_el" style="width:110px" v-if="info.iszg == 1">
            <span v-for="(item,i) in zgfsList" :key="i" v-show="info.zgfs == item.dm">{{ item.mc }}</span>
          </div>
          <div class="tab_el" style="width:110px">
            <span v-for="(item,i) in  zxdcList" :key="i" v-show="info.zxdc == item.dm">{{ item.mc }}</span>
          </div>
          <div style="width:120px" class="tab_el" v-if="info.iszg == 1">
            <div>
              <el-input class="inp_line" v-model="info.lsje1"></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </div>
          <div style="width:120px" class="tab_el" v-if="info.iszg == 0">
            <div>
              <el-input class="inp_line" v-mode="info.nzje"></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </div>
          <div class="tab_el btfs">
            <span v-if="btfsList.length < 1">无数据~</span>
            <template>
              <el-radio-group v-model="btfs">
                <el-radio v-for="(item,i) in btfsList" :key="i" :label="item.dm">{{ item.mc }}</el-radio>
              </el-radio-group>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" colo>核定该店补贴金额</el-button>
    </div>
    <div class="sign-contain" style="margin-top:30px">
      <span class="sign-tit">营销企划部按实际图纸计算确认：</span>
      <div class="sign-name">{{ info.zbkjsjy }}</div>
    </div>
    <div class="sign-contain" style="margin-top:15px">
      <span class="sign-tit">营销政策管理处核对确认：</span>
      <div class="sign-name">{{ info.zbkjsjy }}</div>
    </div>
  </div>
</template>

<script>
import {
  getJyfsList,
  getZxdcList,
  getJmbtfsPzList,
  getStoreBudgetInfo,
  getZgfs
} from '@/network/index';
export default {
  data() {
    return {
      info: {},
      jyfsList: [],
      zxdcList: [],
      btfs: null,
      btfsList: [],
      zgfsList: [],
    };
  },
  created() {
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getJyfs(); //经营方式
    this.getZxdc(); //装修档次
    this.getJmbtfsPz(this.$store.state.userData.userID); //灯具补贴方式
    this.getInfo(this.$store.state.userData.userID);
  },
  mounted() { },
  methods: {
    // 获取所有信息
    getInfo() {
      getStoreBudgetInfo()
        .then((res) => {
          this.loading.close();
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.info = res.data.data;
          this.btfs = res.data.data.fgsclbtfs; //店铺补贴方式
          if (this.info.iszg == 1) {
            this.getZgfsFun();
          }
        })
        .catch((err) => {
          this.loading.close();
          this.$Message.error(err);
        });
    },
    // 当店铺为整改店铺时，获得整改方式
    getZgfsFun() {
      getZgfs()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.zgfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 获取经营方式
    getJyfs() {
      getJyfsList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.jyfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 获取装修档次
    getZxdc() {
      getZxdcList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.zxdcList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 灯具补贴方式
    getJmbtfsPz() {
      getJmbtfsPzList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.btfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    }
  },
};
</script>


<style lang="scss" scoped>
@import "@/views/StorePolicy/shop-basic-assets/myBasic.scss";
@import "@/views/StorePolicy/shop-basic-assets/uiReadjust.scss";
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(51, 51, 51, 0.4);
  .dialog-box {
    background-color: var(--main-color);
    width: 730px;
    min-height: 70%;
    margin-top: 10%;
    margin-left: 20%;
    position: relative;
    .box-top {
      height: 58px;
      border-bottom: 2px solid var(--line-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      & > p {
        font-size: 18px;
        font-weight: bold;
      }
      /deep/ [class*=" el-icon-"],
      [class^="el-icon-"] {
        font-size: 20px;
        color: #d9d9d9;
        &:hover {
          color: var(--sle-text-color);
        }
      }
    }
    .box-bottom {
      padding: 0 20px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
.approve {
  height: 100%;
  width: 100%;
  padding-bottom: 15px;
  .approve-title {
    font-weight: bold;
    color: var(--text-color);
    font-size: var(--font-size);
    padding-left: 12px;
    position: relative;
    margin-bottom: 15px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      background: var(--sle-text-color);
    }
  }
  .module-title {
    padding: 7px 0;
    text-align: center;
    background: #f0f7ff;
    font-size: var(--font-size);
    font-weight: bold;
    color: #333333;
    margin-bottom: 15px;
  }
  .module-content {
    padding: 0 6px;
    /deep/ .el-textarea {
      position: relative;
      margin-bottom: 15px;
      .el-textarea__inner {
        resize: none;
        border: 1px solid #ececec;
        height: 100px !important;
        min-height: 100px !important;
        color: var(--text-color);
        font-weight: bold;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: #f0f7ff;
      }
    }
  }
  .module-todo {
    margin-bottom: 15px;
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
      // text-indent: 2em;
      line-height: 25px;
    }
  }
  .module-col {
    display: flex;
    align-items: center;
    min-height: 28px;
    .col-other {
      height: 30px;
      margin: 0 1%;
    }
  }
  .col-item {
    display: flex;
    line-height: 30px;
    margin-bottom: 15px;
    border: 1px solid #ececec;
    .tit {
      display: inline-block;
      width: 145px;
      background-color: #f6f7f9;
      text-align: center;
      font-weight: 600;
      color: #595959;
      border-right: 1px solid #ececec;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .val {
      flex: 1;
      box-sizing: border-box;
      /* padding: 0 12px 0 0; */
      /deep/ .el-input {
        height: 100%;
        .el-input__inner {
          height: 100%;
          border: none;
          padding: 0 5px;
          font-size: var(--font-size);
        }
      }
    }
    .val-radio {
      padding: 15px 12px 0 18px;
      margin-bottom: 0;
      /deep/ .el-radio-group {
        .el-radio {
          width: 100%;
          margin-bottom: 14px;
          font-weight: 400;
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
  .col1 {
    flex: 1;
  }
  .col2 {
    width: 49%;
  }
  .col3 {
    width: 32%;
  }

  .approve-btn {
    text-align: center;
    margin-bottom: 15px;
    button {
      border: 0;
      min-width: 142px;
      background: var(--sle-text-color);
      font-weight: 600;
      font-size: var(--font-size);
      color: #ffffff;
      padding: 7px 0;
      &:first-child {
        margin-right: 14px;
        color: var(--text-color);
        background: #ffffff;
        border: 1px solid var(--border-color);
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
  .approve-sign {
    font-size: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    span {
      font-size: var(--font-size);
      font-weight: bold;
      color: #333333;
      line-height: 18px;
    }
    div {
      display: inline-block;
      min-width: 110px;
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
      padding: 5px 5px;
      color: var(--text-color);
      height: 30px;
      text-align: center;
      border-bottom: 1px solid #000000;
    }
  }
}
.tables {
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-bottom: 15px;
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
</style>
