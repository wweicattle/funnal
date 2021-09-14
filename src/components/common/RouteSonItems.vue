<template>
  <div class="route-contains">
    <ul class="flexcenter">
      <template v-for="(val, index) in datas">
        <li
          @click="itemclick(val, index)"
          :key="index"
          :class="{activeClass: activeIndex == index }"
        >
          {{ val.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemclick(val, index) {
      this.$router.push(val.path);
      this.activeIndex = index;
    },
  },
  props: {
    datas: {
      type: Array,
      defualt: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.route-contains {
  font-weight: 600;
  color:var(--nosle-text-color);
  background: #fff;
  ul {
    padding: 0 20px;
    justify-content: flex-start;
    height: 38px;
    li {
      margin-right: 25px;
      position: relative;
      cursor: pointer;
      &.activeClass {
        color:var(--text-color) ;
        &::after {
          content: "";
          display: block;
          width: 18px;
          height: 2px;
          background: var(--sle-text-color);
          position: absolute;
          bottom: -7px;
          left: 0;
          right: 0;
          margin: auto;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
