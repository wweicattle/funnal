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
        <el-input
          type="textarea"
          placeholder="请输入审批意见"
          v-model="resObj.zbfzjlyj"
        ></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button @click="$parent.$emit('closedialog')">返回</el-button>
      <el-button type="primary" @click="confirm"
        >领航副总/主品牌副总经理确认</el-button
      >
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
import { getNodeZbyx, saveNodeZbyx } from '@/network';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      value: '同意！',
      resObj: {
        ywyid: '',
        ywjlid: ''
      }
    };
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData,
      userInfo: (state) => state.userData.userInfo
    })
  },
  created() {
    getNodeZbyx(this.urlData.id || '0')
      .then((res) => {
        if (res.data.errcode == 0) {
          this.resObj = res.data.data;
          this.resObj.zbfzjlyj = '同意';
        } else {
          this.$message.error(res.data.errcode || '发生了错误');
        }
      })
      .catch((err) => {
        this.$message.error(res.data.errcode || '发生了错误');
      });
  },
  methods: {
    confirm() {
      if (this.resObj.zbfzjlyj == '' || !this.resObj.zbfzjlyj) {
        this.$message.error('请输入审批意见');
        return;
      }
      // this.$confirm('是否确认保存', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(() => {
          this.submit();
        // })
        // .catch(() => {});
    },
    submit() {
      this.resObj.time = this.formatDate(new Date());
      saveNodeZbyx(
        this.urlData.id || '0',
        this.userInfo.username,
        this.resObj
      ).then((res) => {
        if (res.data.errcode == 0) {
          this.$message({
            message: '领航副总/主品牌副总经理审批成功',
            type: 'success'
          });
          this.$parent.$emit('closedialog');
        }
      });
    },
    formatDate(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
      function padLeftZero(str) {
        return ('00' + str).substr(str.length);
      }
      if (time === undefined || '') {
        return;
      }
      const date = new Date(time);
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
      }
      const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          const str = o[k] + '';
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : padLeftZero(str)
          );
        }
      }
      return fmt;
    }
  }
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
      content: '';
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
