<template>
  <div class="approve">
    <div class="approve-title">领航副总/主品牌副总经理审批</div>
    <div class="module">
      <div class="module-title">领航副总/主品牌副总经理审批意见</div>
      <div class="module-content">
        <el-input type="textarea" placeholder="请输入内容" v-model="value"></el-input>
      </div>
    </div>
    <div class="approve-btn">
      <button>返回</button>
      <button>领航副总/主品牌副总经理申请</button>
    </div>
    <div class="approve-sign">
      <span>领航副总/主品牌副总经理签署：</span>
      <div>签署</div>
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
.approve {
  height: 100%;
  width: 100%;
  .approve-title {
    font-weight: bold;
    color: var(--text-color);
    font-size: var(--font-size);
    padding-left: 12px;
    position: relative;
    margin-bottom: 14px;
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
    margin-bottom: 14px;
  }
  .module-content {
    padding: 0 6px;
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
</style>
