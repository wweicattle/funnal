<!--
 * @Descripttion:市场商品/运营审图审核
-->
<template>
  <div class="dialog-page partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>市场商品/运营审图审核</span>
        <span>/Market commodity oeration approval</span>
      </p>
    </div>
    <div class="module">
      <div class="d-node">
        <p>市场商品/运营审核意见</p>
      </div>
      <!-- <div class="module-title">市场商品/运营审核意见</div> -->
      <div class="module-content">
        <el-input type="textarea" placeholder="请输入审核意见" v-model="res.zbsczyzjyj"></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" @click="submit">市场商品/运营审图确认</el-button>
    </div>

    <div class="box-basic flexcenter salesman special" style="margin-top:30px">
      <div class="sign-contain">
        <span class="sign-tit">LILANZ主品牌总经理签署：</span>
        <div class="sign-name"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNodeZbsc, saveNodeZbsc } from '@/network'
export default {
  data() {
    return {
      res: {},
    };
  },
  created() {
    getNodeZbsc().then(res => {
      if (res.data.errcode == 0) {
        this.res = res.data.data
      } else {
        this.$message.error(res.data.errcode || '发生了错误');
      }
    }).catch(err => {
      this.$message.error(res.data.errcode || '发生了错误');
    })
  },
  methods: {
    submit() {
      saveNodeZbsc(this.res.zbsczyzjyj).then(res => {
        // console.log(res)
        if (res.data.errcode == 0) {
          this.$message({
            message: '市场商品/运营审图确认成功',
            type: 'success'
          });
          this.$parent.$emit('closedialog')
        }
      })
    },
  },
};
</script>


<style lang="scss" scoped>
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
