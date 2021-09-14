<template>
  <div>
    <ul>
      <template v-for="(val, index) in threeRouteData">
        <li
          :key="index"
          :class="{ active: index == activeIndex }"
          @click="(activeIndex = index), $router.push(val.path)"
        >
          {{ val.name }}
        </li>
      </template>
    </ul>
    <!-- 三级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import mixin from "@/utils/mixinPathArrs.js";

export default {
  mixins: [mixin],
  data() {
    return {
      threeRouteData:[],
      activeIndex: 0,
    };
  },
  created() {
    //筛选出三级路由的路径
    this.routeDatas.forEach(val=>{
      console.log(val);
      console.log(this.$route.path);
      console.log(this.$route.path.indexOf(val.path)>=0);
      if(this.$route.path.indexOf(val.path)>=0){
        this.threeRouteData=val.children;
      }
    })
    console.log(this.threeRouteData);
  },
  mounted() {},
  methods: {},
  watch: {
    //   $route
  },
};
</script>

<style scoped lang="scss">
ul {
  li {
    &.activeClass {
      background: #008c8c;
    }
  }
}
.active {
  background: #008c8c;
  //   color: #fff;
}
</style>
