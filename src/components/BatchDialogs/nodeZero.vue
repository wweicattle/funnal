<!--
 * @Descripttion:加盟店铺需提供资料(贸易公司业务员签署)
-->
<template>
  <div class="dialog-page partialPublic">
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
              <el-select v-model="resObj.ywyid" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.xm" :value="item.id"></el-option>
              </el-select>
            </div>
          </div>
          <div class="col-item col2">
            <span class="tit">负责的业务经理</span>
            <div class="val">
              <el-select v-model="resObj.ywjlid" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.xm" :value="item.id"></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button @click="$parent.$emit('closedialog')">返回</el-button>
      <el-button type="primary" @click="confirm">同意提供资料</el-button>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign-contain">
        <span class="sign-tit">贸易公司业务员同意以上条款签署：</span>
        <div class="sign-name">{{ywyxm}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRys, saveFgsywy,getNodeYw } from '@/network';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      resObj: {
        ywyid:0,
        ywjlid:0
      },
      options: [],
      ywyxm:""

    };
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData,
      userInfo: (state) => state.userData.userInfo,
      khid: (state) => state.ShopBasicData.sskhid
    })
  },
  created() {
      getNodeYw().then((res) => {
      if (res.data.errcode == 0) {
        let data = res.data.data;
       this.resObj.ywyid = Number(data.ywyid)>0 ? data.ywyid : 0;
        this.resObj.ywjlid = Number(data.ywjlid)>0 ? data.ywjlid : 0;
        this.ywyxm=data.ywyxm;
      } else {
        this.$message.error(res.data.errmsg || '发生了错误');
      }
    });
    getRys(this.khid)
      .then((res) => {
        if (res.data.errcode == 0) {
          this.options = res.data.data;
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
      // if (!this.resObj.ywyid || !this.resObj.ywjlid) {
      //   this.$message.error('请选择后提交');
      //   return;
      // }
      // test
      // this.resObj.ywyid = 33
      // this.resObj.ywjlid = 33
      this.resObj.time = this.formatDate(new Date());

      saveFgsywy(this.urlData.id, this.userInfo.username, this.resObj)
        .then((res) => {
          if (res.data.errcode == 0) {
            this.$message({
              message: '贸易公司业务员同意成功',
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

