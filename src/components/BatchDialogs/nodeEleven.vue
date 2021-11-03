<!--
 * @Descripttion:政策管理处核定意见
-->
<template>
  <div class="dialog-page approve partialPublic">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>政策管理处核定意见</span>
        <span>/Policy management approval</span>
      </p>
    </div>
    <div class="module">
      <div class="tables">
        <div class="table_title">
          <span class="tab_el" style="width: 110px">经营方式</span>
          <span class="tab_el" style="width: 110px" v-if="info.iszg == 1"
            >整改方式</span
          >
          <span class="tab_el" style="width: 110px">装修档次</span>
          <span class="tab_el" style="width: 120px" v-if="info.iszg == 1"
            >前一年销售额</span
          >
          <span class="tab_el" style="width: 120px" v-if="info.iszg == 0"
            >店租</span
          >
          <span class="tab_el btfs">货柜灯具补贴方式</span>
        </div>
        <div class="table_con">
          <div class="tab_el" style="width: 110px">
            <span
              v-for="(item, i) in jyfsList"
              :key="i"
              v-show="info.jyfs == item.dm"
              >{{ item.mc }}</span
            >
          </div>
          <div class="tab_el" style="width: 110px" v-if="info.iszg == 1">
            <span
              v-for="(item, i) in zgfsList"
              :key="i"
              v-show="info.zgfs == item.dm"
              >{{ item.mc }}</span
            >
          </div>
          <div class="tab_el" style="width: 110px">
            <span
              v-for="(item, i) in zxdcList"
              :key="i"
              v-show="info.zxdc == item.dm"
              >{{ item.mc }}</span
            >
          </div>
          <div style="width: 120px" class="tab_el" v-if="info.iszg == 1">
            <div class="flex">
              <el-input
                class="inp_line"
                v-model="info.lsje1"
                readonly
              ></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </div>
          <div style="width: 120px" class="tab_el" v-if="info.iszg == 0">
            <div class="flex">
              <el-input class="inp_line" v-mode="info.nzje" readonly></el-input>
              <span class="inp_box_line">万元</span>
            </div>
          </div>
          <div class="tab_el btfs">
            <span v-if="btfsList.length < 1">无数据~</span>
            <template>
              <el-radio-group v-model="info.fgsclbtfs">
                <el-radio
                  v-for="(item, i) in btfsList"
                  :key="i"
                  :label="item.dm"
                  >{{ item.mc }}</el-radio
                >
              </el-radio-group>
            </template>
          </div>
        </div>
      </div>
      <div class="basic-c large" style="width: 40%">
        <span class="tit">实际营业面积</span>
        <div class="val">
          <el-input v-model="info.nzje"></el-input>
        </div>
      </div>
    </div>
    <div class="box-btns flexcenter">
      <el-button>返回</el-button>
      <el-button type="primary" @click="confirm">核定该店补贴金额</el-button>
    </div>
    <div class="sign-contain" style="margin-top: 30px">
      <span class="sign-tit">营销企划部按实际图纸计算确认：</span>
      <div class="sign-name">{{ info.zbkjsjy }}</div>
    </div>
    <div class="sign-contain" style="margin-top: 15px">
      <span class="sign-tit">营销政策管理处核对确认：</span>
      <div class="sign-name">{{ info.zbzcgl }}</div>
    </div>
  </div>
</template>

<script>
import {
  getJyfsList,
  getZxdcList,
  getJmbtfsPzList,
  getStoreBudgetInfo,
  getZgfs
} from '@/network/index';
export default {
  data() {
    return {
      info: {},
      jyfsList: [],
      zxdcList: [],
      btfs: '70',
      btfsList: [],
      zgfsList: []
    };
  },
  created() {
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getJyfs(); //经营方式
    this.getZxdc(); //装修档次
    this.getJmbtfsPz(this.$store.state.userData.userID); //灯具补贴方式
    this.getInfo(this.$store.state.userData.userID);
  },
  mounted() {},
  methods: {
    confirm() {
      this.$confirm('是否确认保存', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.submit();
        })
        .catch(() => {});
    },
    submit() {
      // 
      this.$parent.$emit('myFlowsend');
      this.$parent.$emit('closedialog');
    },
    // 获取所有信息
    getInfo() {
      getStoreBudgetInfo()
        .then((res) => {
          this.loading.close();
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.info = res.data.data;
          this.$set(this.info, 'fgsclbtfs', res.data.data.fgsclbtfs);
          // this.info.fgsclbtfs =   //店铺补贴方式
          if (this.info.iszg == 1) {
            this.getZgfsFun();
          }
        })
        .catch((err) => {
          this.loading.close();
          this.$Message.error(err);
        });
    },
    // 当店铺为整改店铺时，获得整改方式
    getZgfsFun() {
      getZgfs()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.zgfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 获取经营方式
    getJyfs() {
      getJyfsList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.jyfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 获取装修档次
    getZxdc() {
      getZxdcList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.zxdcList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    },
    // 灯具补贴方式
    getJmbtfsPz() {
      getJmbtfsPzList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$Message.error(res.data.errmsg);
            return;
          }
          this.btfsList = res.data.data;
        })
        .catch((err) => {
          this.$Message.error(err);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.approve {
  height: 100%;
  width: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.tables {
  flex: 1;
  overflow: hidden;
  border: 1px solid var(--border-color);
  margin-bottom: 15px;
  height: 700px;
  .flex {
    display: flex;
    align-items: center;
  }
  .table_title {
    display: flex;
    height: 43px;
    align-items: center;
    background-color: rgb(246, 247, 249);
    .tab_el {
      font-weight: 600;
    }
  }
  .table_con {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* height: 580px; */
    height: 100%;
    .tab_el {
      padding: 12px 8px;
      box-sizing: border-box;
      height: 100%;
    }
    .btfs {
      text-align: left;
      /deep/.el-radio-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        .el-radio {
          width: 100%;
          .el-radio__label {
            margin-top: -17px;
            display: inline-block;
            padding-left: 22px;
            line-height: 1.26em;
          }
        }
      }
      /deep/.el-radio,
      .el-radio__input {
        white-space: normal;
        margin-bottom: 12px;
      }
    }

    .inp_line,
    /deep/.el-input__inner {
      /* border: none !important; */
      /* border-bottom: 1px solid #595959 !important; */
      overflow: hidden;
      width: 64px;
      margin: 0 2px;
    }
    .inp_box_line {
      color: #595959;
      height: 100%;
    }
  }
  .btfs {
    flex: 1;
    overflow: hidden;
  }
  .tab_el {
    text-align: center;
    border-right: 1px solid var(--border-color);
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .tab_el:last-child {
    border: none;
  }
}
.module {
  display: flex;
  flex-direction: column;
}
</style>
