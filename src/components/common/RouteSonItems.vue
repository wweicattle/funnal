<template>
  <div class="route-contains">
    <ul class="flexcenter">
      <template v-for="(val, index) in datas">
        <li
          @click="$router.push(val.path)"
          :key="index"
          :class="{ activeClass: activeIndex == index }"
        >{{ val.name }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RouteItems',
  data() {
    return {
      activeIndex: 0
    };
  },
  created() { },
  mounted() { },
  methods: {
    // itemclick(val, index) {
    //   this.$router.push(val.path);
    //   // this.activeIndex = index;
    // },
  },
  props: {
    datas: {
      type: Array,
      defualt: () => []
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal.path);
        this.activeIndex = this.datas.findIndex((val) => {
          return val.path == newVal.path;
        });
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
.route-contains {
  font-weight: 500;
  color: #A4AAB6;
  background: var(--main-back);
  height: 48px;
  border-bottom: 1px solid var(--line-color);
  // border-bottom: 1px solid red;

  ul {
    background: #fff;
    padding: 0 20px;
    justify-content: flex-start;
    // height: 48px;
    height: 100%;
    li {
      margin-right: 25px;
      position: relative;
      cursor: pointer;
      &.activeClass {
        color: var(--text-color);
        font-weight: 600;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: var(--sle-text-color);
          position: absolute;
          bottom: -16px;
          left: 0;
          right: 0;
          margin: auto;
          border-radius: 2px;
          z-index: 100;
        }
      }
    }
  }
}
</style>
