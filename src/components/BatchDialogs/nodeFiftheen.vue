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
        <el-input type="textarea" placeholder="请输入审核意见" v-model="resObj.zbsczyzjyj"></el-input>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button @click="$parent.$emit('closedialog')">返回</el-button>
      <el-button type="primary" @click="confirm">市场商品/运营审图确认</el-button>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      resObj: {},
    };
  },
  computed: {
    ...mapState({
      urlData: state => state.userData.urlData,
      userInfo: state => state.userData.userInfo
    })
  },
  created() {
    getNodeZbsc(this.urlData.id || '0').then(res => {
      if (res.data.errcode == 0) {
        if (res.data.data == '' || !res.data.data) {
          this.$message.error(res.data.errmsg || '暂无数据');
        } else {
          this.resObj = res.data.data
          this.resObj.zbsczyzjyj = '同意'
        }
      } else {
        this.$message.error(res.data.errmsg || '发生了错误');
      }
    }).catch(err => {
      this.$message.error(res.data.errmsg || '发生了错误');
    })
  },
  methods: {
    confirm() {
      if (this.resObj.zbsczyzjyj == '' || !this.resObj.zbsczyzjyj) {
        this.$message.error('请输入审批意见')
        return
      }
      this.$confirm('是否确认保存', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.submit()
      }).catch(() => {
      });
    },
    submit() {
      this.resObj.time = this.formatDate(new Date())
      saveNodeZbsc(this.urlData.id || '0', this.userInfo.username, this.resObj).then(res => {
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
        's+': date.getSeconds(),
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
