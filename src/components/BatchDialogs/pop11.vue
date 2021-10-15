<template>
  <div class="approve">
    <div class="approve-title">加盟店铺需提供资料</div>
    <div class="module">
      <div class="module-content">
        <div class="module-todo">
          <p class="ul">贸易公司业务扩展组部随同本表附件提供一下资料：</p>
          <p class="li">1、加盟商身份复印件、加盟店商圈路段图、按营销中心企划部要求的测量装修准确图</p>
          <p class="li">2、专卖店开业一个月内必须将店/厅相片提供给公司营销中心政策管理处存档，否侧政策补贴执行将以月类推滞后执行</p>
          <p class="li">3、经核查经销商联系方式不真实的，营销中心联系不上，直接予以取消补贴</p>
        </div>
        <div class="module-col">
          <div class="col-item col2">
            <span class="tit">负责的业务员</span>
            <div class="val">
              <el-input v-model="data"></el-input>
            </div>
          </div>
          <div class="col-item col2">
            <span class="tit">负责的业务经理</span>
            <div class="val">
              <el-input v-model="data"></el-input>
            </div>
          </div>
        </div>
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
    };
  },
};
</script>


<style lang="scss" scoped>
.approve {
  height: 100%;
  width: 100%;
  padding: 15px 0;
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
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .col-item {
      display: flex;
      min-height: 28px;
      line-height: 28px;
      border: 1px solid #ececec;
      margin-right: 2%;
      .tit {
        padding: 0 10px;
        background: #f6f7f9;
        font-weight: 600;
        border-right: 1px solid #ececec;
        width: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .val {
        flex: 3;
        overflow: hidden;
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
      &:last-child {
        margin-right: 0;
      }
    }
    .col2 {
      width: 49%;
    }
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
