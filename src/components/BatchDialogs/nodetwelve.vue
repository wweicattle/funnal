// 利郎总裁终审
<template>
  <div class="partialPublic dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>主品牌总经理审批</span>
        <span>/General manager approval</span>
      </p>
    </div>
    <div class="d-node">
      <p>LILANZ主品牌总经理审批意见</p>
    </div>
    <div class="d-content">
      <div class="box_items">
        <el-input
          type="textarea"
          placeholder="请输入审核意见"
          v-model="resObj.zbfzcyj"
        ></el-input>

        <!-- <div class="strong">{{resObj.zbfzcyj}}</div> -->
      </div>
      <div class="box-btns flexcenter">
        <el-button @click="$parent.$emit('closedialog')">返回</el-button>
        <el-button type="primary" @click="sendNode">确认该申请</el-button>
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <div class="sign-contain">
          <span class="sign-tit">LILANZ主品牌总经理签署：</span>
          <div class="sign-name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMangerApprove, sendMangerApprove } from '@/network';
export default {
  data() {
    return {
      resObj: {}
    };
  },
  created() {
    getMangerApprove().then((res) => {
      if (res.data.errcode == 0) {
        this.resObj = res.data.data;
        // console.log(this.resObj);
      } else {
        this.$message.error(res.data.errcode || '发生了错误');
      }
    });
  },
  methods: {
    sendMangerApprove() {
      sendMangerApprove(this.resObj.zbfzcyj).then((res) => {
        if (res.data.errcode == 0) {
          this.$message.success('保存成功！');
          /*执行办理 */
          /*插入办理页面*/
          this.$parent.$emit('myFlowsend');
          this.goback();
        } else {
          this.$message.error(res.data.errcode || '发生了错误');
        }
      });
    },
    sendNode() {
      this.sendMangerApprove();
    },
    goback() {
      this.$parent.$emit('closedialog');
    }
  }
};
</script>

<style scoped lang='scss'>
.partialPublic {
  .box_items {
    margin-bottom: 20px;
    min-height: 66px;
    /deep/ textarea {
      min-height: 100px !important;
    }
  }
}
</style>