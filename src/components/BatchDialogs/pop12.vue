<template>
  <div class="approve dialog-page partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>市场总监/副总监审批</span>
        <span>/General manager approval</span>
      </p>
    </div>
    <div class="module">
      <div class="module-content">
        <div class="basic-c radioB">
          <span class="tit">专卖店装修档次</span>
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
        <div class="module-title">市场总监/副总监审批意见</div>
        <el-input type="textarea" placeholder="请输入内容" v-model="resResult.zbzdjlyj"></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" colo>确认办理</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="box-basic flexcenter salesman special">
        <div class="sign-contain">
          <span class="sign-tit">市场总监/副总监签署：</span>
          <div class="sign-name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNodeZbzd } from '@/network/index'
export default {
  data() {
    return {
      data: '',
      radio: '',
      resResult: {},
    };
  },
  created() {
    getNodeZbzd().then(res => {
      if (res.data.errcode == 0) {
        this.resResult = res.data.data
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
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    min-height: 28px;
  }
  .col-item {
    display: flex;
    line-height: 30px;
    margin-bottom: 15px;
    border: 1px solid #ececec;
    .tit {
      display: inline-block;
      width: 130px;
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
}
</style>
