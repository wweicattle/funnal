<template>
  <div class="approve">
    <div class="approve-title">政策管理处初审意见</div>
    <div class="module">
      <div class="module-content">
        <div class="module-col">
          <div class="col-item">
            <span class="tit">填表日期</span>
            <div class="val">
              <el-input v-model="data"></el-input>
            </div>
            <div class="col-other">该日期为经销商填写的日期,总部可以进行修改</div>
          </div>
        </div>

        <div class="col-item col2">
          <span class="tit">该店/厅主要实际经营者</span>
          <div class="val">
            <el-input v-model="data"></el-input>
          </div>
        </div>
        <div class="module-col">
          <div class="col-item col2" style="margin-right: 2%;">
            <span class="tit">该店营业执照法人</span>
            <div class="val">
              <el-input v-model="data"></el-input>
            </div>
          </div>
          <div class="col-item col2">
            <div class="val">
              <el-input v-model="data"></el-input>
            </div>
          </div>
        </div>
        <div class="col-item col1">
          <span class="tit">专卖店装修档次同意</span>
          <div class="val val-radio">
            <el-radio-group v-model="radio">
              <el-radio label="0">利郎六代正常装修(县城街边店、地级市/省会社区街边店)</el-radio>
              <el-radio label="1">利郎六代正常装修升级版(县城街边店、地级市/省会社区街边店)</el-radio>
              <el-radio label="2">利郎二代精品装修(地级市/省会：商场、购物中心MALL)</el-radio>
              <el-radio label="3">小利郎(轻商务)</el-radio>
              <el-radio label="4">小利郎(二代轻商务)</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="module-title">市场总监/副总监审批意见</div>
        <el-input type="textarea" placeholder="请输入内容" v-model="value"></el-input>
      </div>
    </div>
    <div class="approve-btn">
      <button>返回</button>
      <button>总裁签署确认该申请</button>
    </div>
    <div class="approve-sign">
      <span>贸易公司业务员同意以上条款签署：</span>
      <div>签署</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '同意！',
      data: '',
      radio: '',
    };
  },
};
</script>


<style lang="scss" scoped>
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
      width: 150px;
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
      padding: 0 12px 0 18px;
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
</style>
