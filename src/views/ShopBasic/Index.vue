<template>
  <div class="contains">
    <!-- 二级 菜单-->
    <route-son-items :datas="routeDatas" />
    <div class="two-menu scrollbar-css">
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
    return {
    };
  },
  created() {},
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
