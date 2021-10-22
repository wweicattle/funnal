<template>
  <div class="dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>加盟店铺需提供资料</span>
        <span>/Shop provide information</span>
      </p>
    </div>
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
              <el-select v-model="res.ywyxm" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.xm" :value="item.xm"></el-option>
              </el-select>
            </div>
          </div>
          <div class="col-item col2">
            <span class="tit">负责的业务经理</span>
            <div class="val">
              <el-select v-model="res.ywjlxm" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.xm" :value="item.xm"></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" colo>同意提供资料</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <p>
          <span>贸易公司业务员同意以上条款签署：</span>
          <span class="sign-name"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getRys, getNodeYw } from '@/network'
export default {
  data() {
    return {
      res: {},
      options: [],
    };
  },
  created() {
    getNodeYw().then(res => {
      if (res.data.errcode == 0) {
        this.res = res.data.data
      }
    })
    getRys().then(res => {
      if (res.data.errcode == 0) {
        this.options = res.data.data
      }
    })
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
</style>

