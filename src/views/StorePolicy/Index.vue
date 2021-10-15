<template>
  <div class="contains">
    <route-son-items :datas="routeDatas" />
    <div class="two-menu scrollbar-css">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouteSonItems from '@/components/common/RouteSonItems.vue';
import mixin from '@/utils/mixinPathArrs.js';
export default {
  mixins: [mixin],
  data() {
    return {
      /*  dev
       * 装修档次分别对应内容
       * 装修风格没数据
       */
    };
  },
  mounted() {},
  methods: {},
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
