<template>
  <div class="contains">
    <route-son-items :datas="routeDatas" />
    <div class="two-menu scrollbar-css">
      <!-- 二级路由 -->
      <router-view :info="info" :jyfsList="jyfsList" :zxdcList="zxdcList" :btfs="btfs" :btfsList="btfsList" :zgfsList="zgfsList"></router-view>
    </div>
  </div>
</template>

<script>
import RouteSonItems from '@/components/common/RouteSonItems.vue';
import mixin from '@/utils/mixinPathArrs.js';
import {
  getJyfsList,
  getZxdcList,
  getJmbtfsPzList,
  getStoreBudgetInfo,
  getZgfs
} from '@/network/index';
export default {
  mixins: [mixin],
  data() {
    return {
      info: {},
      jyfsList: [],
      zxdcList: [],
      btfs: null,
      btfsList: [],
      zgfsList: [],
      loading: null
    };
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id == 0) return;


    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getJyfs(); //经营方式
    this.getZxdc(); //装修档次
    this.getJmbtfsPz(); //灯具补贴方式
    this.getInfo();
  },
  methods: {
    // 获取所有信息
    getInfo() {
      getStoreBudgetInfo()
        .then((res) => {
          this.loading.close();
          if (res.data.errcode != 0) {
            this.$message.error(res.data.errmsg);
            return;
          }
          this.info = res.data.data;
          this.btfs = res.data.data.fgsclbtfs; //店铺补贴方式
          if (this.info.iszg == 1) {
            this.getZgfsFun();
          }
        })
        .catch((err) => {
          this.loading.close();
          this.$message.error(err);
        });
    },
    // 当店铺为整改店铺时，获得整改方式
    getZgfsFun() {
      getZgfs()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$message.error(res.data.errmsg);
            return;
          }
          this.zgfsList = res.data.data;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    // 获取经营方式
    getJyfs() {
      getJyfsList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$message.error(res.data.errmsg);
            return;
          }
          this.jyfsList = res.data.data;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    // 获取装修档次
    getZxdc() {
      getZxdcList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$message.error(res.data.errmsg);
            return;
          }
          this.zxdcList = res.data.data;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    // 灯具补贴方式
    getJmbtfsPz() {
      getJmbtfsPzList()
        .then((res) => {
          if (res.data.errcode != 0) {
            this.$message.error(res.data.errmsg);
            return;
          }
          this.btfsList = res.data.data;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    }
  },
  components: {
    RouteSonItems
  }
};
</script>

<style scoped lang="scss">
.contains {
  height: 100%;
}
</style>
