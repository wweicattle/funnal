<template>
  <div class="contains">
    <!-- 二级 菜单-->
    <route-son-items :datas="routeDatas" />
    <div class="two-menu scrollbar-css" v-viewer>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouteSonItems from '@/components/common/RouteSonItems.vue';
import mixin from '@/utils/mixinPathArrs.js';
import { getJmspData } from '@/network/index';
import { mapState,mapMutations } from 'vuex';
import jsonData from './demo';
export default {
  mixins: [mixin],
  data() {
    return { };
  },
  created() {
    // 新建保存，需要进行维护一套初始字段
    if (this.userData.urlData.id==0) {
      let data = {...jsonData};
      let userssid=this.userData.userInfo.userssid;
      data.tzid=userssid;
      data.sskhid=userssid;
      // lx=jm   iszg=0   lx=zg  iszg=1 
      this.userData.urlData.lx=='jm'?data.iszg=0: this.userData.urlData.lx=='zg'?data.iszg=1:data.iszg=2;
      // data
      this.setBasicData(data);
      return;
    }

    this.load = this.$Loading.service({
      fullscreen: true
    });

    getJmspData(this.userData.urlData.id)
      .then((da) => {
        this.load.close();
        if (da.data.errcode == 0) {
          let data = da.data.data;
          this.setBasicData(data);
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      })
      .catch((err) => {
        console.log(err);
        this.$Message.error(
          '获取数据失败！' + err + JSON.stringify(da.data.errmsg)
        );
      });
  },
  mounted() {},
  methods: {
    ...mapMutations({ setBasicData: 'SET_SHOP_DATA' })
  },
  components: {
    RouteSonItems
  },
  computed: {
    ...mapState(["userData"])
  }
};
</script>

<style scoped lang="scss">
.contains {
  height: 100%;
}
</style>
