
<template>
  <div class="approve dialog-page partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>装修用材配送需求</span>
        <span>/General manager approval</span>
      </p>
    </div>
    <div class="basic-c spe">
      <span class="tit">指定装修主材（地板公司配送）</span>
      <div class="val">
        <el-radio-group v-model="resObj.isps">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="module">
      <div class="module-content">
        <div class="basic-c radioB">
          <span class="tit">专卖店装修材料</span>
          <div class="val checks">
            <el-checkbox-group v-model="zxcl">
              <el-checkbox label="1">货柜</el-checkbox>
              <el-checkbox label="2">灯具</el-checkbox>
              <el-checkbox label="3">墙纸</el-checkbox>
              <el-checkbox label="4">模特</el-checkbox>
              <el-checkbox label="5">辅助道具</el-checkbox>
              <el-checkbox label="6">门头标识</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="module-title">如果不配送理由，确保装修达到验收标准：</div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="resObj.zxysbz"
        ></el-input>
      </div>
    </div>

    <div class="box-btns flexcenter">
      <el-button @click="$parent.$emit('closedialog')">返回</el-button>
      <el-button type="primary" @click="confirm">保存</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign-contain">
        <span class="sign-tit">贸易公司企划对接人签字确认：</span>
        <div class="sign-name"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDecPost, SaveDecPost } from '@/network/index';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      data: '',
      radio: '',
      resObj: {},
      zxcl:[]
    };
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData,
      userInfo: (state) => state.userData.userInfo,
    })
  },
  created() {
    getDecPost(this.urlData.id)
      .then((res) => {
        if (res.data.errcode == 0) {
          let data = res.data.data;
          this.zxcl = data.zxcl.split(',').map((val) => val.toString());
          data.isps = data.isps.toString();
          this.resObj = data;
        } else {
          this.$message.error(res.data.errmsg || '发生了错误');
        }
      })
      .catch((err) => {
        this.$message.error('发生了错误');
      });
  },
  methods: {
    confirm() {
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
      // this.resObj.time = this.formatDate(new Date());
      let objs= {
        id: this.urlData.id,
        zxcl: this.zxcl.join(','),
        zxysbz: this.resObj.zxysbz,
        isps: this.resObj.isps
      };
      SaveDecPost(objs)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.$message({
              message: '办理成功',
              type: 'success'
            });
            /*执行办理 dev*/
            /*插入办理页面*/
            this.$parent.$emit('myFlowsend');
            this.$parent.$emit('closedialog');
          } else {
            this.$message.error(res.data.errmsg || '发生了错误');
          }
        })
        .catch((err) => {
          this.$message.error('发生了错误');
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
.approve {
  height: 100%;
  width: 100%;
  padding-bottom: 15px;
  .module-title {
    padding: 10px 0;
    // text-align: center;
    // background: #f0f7ff;
    font-size: var(--font-size);
    font-weight: bold;
    color: #807b7b;
    margin-bottom: 5px;
  }
  .module-content {
    padding-left: 6px;
    margin-bottom: 25px;
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
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: #f0f7ff;
      }
    }
    .checks {
      .el-checkbox-group {
        padding-left: 5px;
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
  .spe {
    margin-left: 6px;
    text-align: center;
  }
}
</style>
