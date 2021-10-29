<!--
 * @Descripttion:领航副总/主品牌副总经理审批
-->
<template>
  <div class="dialog-page partialPublic">
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
        <el-input type="textarea" placeholder="请输入审批意见" v-model="resObj.zbfzjlyj"></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" @click="submit">领航副总/主品牌副总经理确认</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign-contain">
        <span class="sign-tit">领航副总/主品牌副总经理签署：</span>
        <div class="sign-name">{{ resObj.zbyxld }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNodeZbyx, saveNodeZbyx } from '@/network'
export default {
  data() {
    return {
      value: '同意！',
      resObj: {},
    };
  },
  created() {
    getNodeZbyx().then(res => {
      if (res.data.errcode == 0) {
        this.resObj = res.data.data
      } else {
        this.$message.error(res.data.errcode || '发生了错误');
      }
    }).catch(err => {
      this.$message.error(res.data.errcode || '发生了错误');
    })
  },
  methods: {
    submit() {
      this.resObj.node_1_1 = '同意'
      console.log(1)
      saveNodeZbyx(this.resObj).then(res => {
        console.log(res)
        if (res.data.errcode == 0) {
          this.$message({
            message: '领航副总/主品牌副总经理审批成功',
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
.sign-contain {
  margin-top: 30px;
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
</style>
