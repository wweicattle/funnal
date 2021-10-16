<template>
  <div class="dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>领航副总/主品牌副总经理审批</span>
        <span>/General manager approval</span>
      </p>
    </div>
    <div class="module">
      <div class="d-node">
        <p>领航副总/主品牌副总经理审批意见</p>
      </div>
      <div class="module-content">
        <el-input type="textarea" placeholder="请输入内容" v-model="value"></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" colo>领航副总/主品牌副总经理申请</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <p>
          <span>领航副总/主品牌副总经理签署：</span>
          <span class="sign-name"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '同意！'
    };
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
.module-content {
  padding: 0 6px;
  margin: 15px 0;
  /deep/ .el-textarea {
    position: relative;
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
}
.approve-btn {
  text-align: center;
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
      margin-top: 14px;
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
  margin-top: 15px;
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
</style>
