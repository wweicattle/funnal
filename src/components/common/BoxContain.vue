<template>
  <div class="box-contain">
    <!-- <slot name="header">旧版经销商基本资料 </slot> -->
    <div
      class="b-header"
      :style="{
        'text-align': isshowheader.position ? isshowheader.position : 'left'
      }"
      v-if="isshowheader&&(isshowheader.text.length > 0)"
    >
      {{ isshowheader&&(isshowheader.text) }}
    </div>
    <div class="logo" v-if="logoVis.length > 0">
      <img src="static/img/audge.png" alt="" v-if="logoVis == 'before'" />
      <img src="static/img/audge.png" alt="" v-if="logoVis == 'after'" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Box-Contain',
  props: {
    logoVis: {
      type: String,
      default: ''
    },
    isshowheader: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.box-contain {
  background: var(--main-color);
  box-shadow: 0px 1px 13px 2px rgba(222, 222, 222, 0.2);
  border-radius: 7px;
  position: relative;
  padding: 15px 20px;
  // margin-bottom: 15px;
  .b-header {
    font-size: 17px;
    font-weight: 600;
    color: var(--text-color);
    border-bottom: 1px solid var(--line-color);
    // padding: 10px 0;
    padding-bottom: 15px;
    margin-bottom: 10px;
  }
  .logo {
    position: absolute;
    right: 0;
    top: 0;
    width: 117px;
    img {
      width: 100%;
    }
  }
}
</style>
