<template>
  <div class="contains">
    <route-son-items :datas="routeDatas" />
    <div class="two-menu">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouteSonItems from "@/components/common/RouteSonItems.vue";
import mixin from "@/utils/mixinPathArrs.js";
export default {
  mixins: [mixin],
  data() {
    return {};
  },
  created() {
  },
  mounted() {},
  methods: {},
  components: {
    RouteSonItems,
  },
};
</script>

<style scoped lang="scss">
.contains {
  height: 100%;
}
</style>
