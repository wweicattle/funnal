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
    return {
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() { },
  methods: {
    // sendItem(val){
    //   console.log(val);
    // }
  },
  components: {
    RouteSonItems,
  },
};
</script>

<style scoped lang="scss">
.contains {
  height: 100%;
}
h1 {
  width: 100%;
  font-weight: bolder;
  color: #333333;
  text-align: center;
  padding: 15px 0;
  text-shadow: 0px 1px 15px rgba(222, 222, 222, 0.2);
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 20px;
  font-size: 20px;
}

.h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;
}

.h4 {
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 28px;
  text-indent: -8px;
}

div {
  font-size: var(--font-size);
  font-weight: 400;
  line-height: 23px;
}

.wrap {
  display: flex;
}

.text-indent {
  transform: translateX(-1.5em);
}

.pl1 {
  padding-left: 1em;
}

.pl2 {
  padding-left: 2.65em;
}
</style>
