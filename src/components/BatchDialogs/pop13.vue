<!--
 * @Descripttion:
 * @version:
 * @Author: voanit
 * @Date: 2021-10-16 08:57:42
 * @LastEditors: voanit
 * @LastEditTime: 2021-10-22 14:41:05
-->
<template>
  <div class="dialog-page approve partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>政策管理处初审意见</span>
        <span>/Policy management approval</span>
      </p>
    </div>
    <div class="module">
      <div class="module-content">
        <div class="module-col">
          <div class="col-item col2" style="margin-right: 2%;">
            <span class="tit">填表日期</span>
            <div class="val">
              <el-input v-model="resResult.tbrq"></el-input>
            </div>
          </div>
          <div class="col-item col2">
            <span class="tit">该店/厅主要实际经营者</span>
            <div class="val">
              <el-input v-model="resResult.node_2_2"></el-input>
            </div>
          </div>
        </div>

        <div class="module-col">
          <div class="col-item col2" style="margin-right: 2%;">
            <span class="tit">该店营业执照法人</span>
            <div class="val">
              <el-input v-model="resResult.node_3_1"></el-input>
            </div>
          </div>
          <div class="col-item col2">
            <div class="val">
              <el-input v-model="resResult.node_3_2"></el-input>
            </div>
          </div>
        </div>
        <div class="basic-c radioB">
          <span class="tit" style="width:145px">专卖店装修档次</span>
          <div class="val">
            <el-radio-group v-model="resResult.node_5_1">
              <el-radio label="0">LILANZ 利郎六代正常装修（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="1">LILANZ 利郎六代正常装修升级版（县城街边店、地级市/省会社区街边店）</el-radio>
              <el-radio label="2">LILANZ 利郎二代精品装修（地级市/省会：商场、购物中心MALL）</el-radio>
              <el-radio label="3">LESS IS MORE（轻商务)</el-radio>
              <el-radio label="4">LESS IS MORE（二代轻商务)</el-radio>
              <el-radio label="5">LILANZ 利郎七代装修</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="col-item col">
          <span class="tit">其他意见</span>
          <div class="val">
            <el-input v-model="resResult.node_4_1"></el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" colo>政策管理处初审确认</el-button>
    </div>
    <div class="sign-contain">
      <span class="sign-tit">政策管理处初审：</span>
      <div class="sign-name">{{ resResult.zbkfcs }}</div>
    </div>
  </div>
</template>

<script>
import { getNodeZbkf } from '@/network/index'
export default {
  data() {
    return {
      value: '同意！',
      data: '',
      radio: '',
      resResult: {},
    };
  },
  created() {
    getNodeZbkf().then(res => {
      if (res.data.errcode == 0) {
        this.resResult = res.data.data
        // this.resResult.node_5_1 += ''
      } else {
        this.$message.error(res.data.errcode || '发生了错误');
      }
    }).catch(err => {
      this.$message.error(res.data.errcode || '发生了错误');
    })
  },
};
</script>


<style lang="scss" scoped>
.sign-contain {
  margin-top: 30px;
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
}
</style>
