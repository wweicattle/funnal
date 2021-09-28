
<template>
  <div
    class="title-contain"
    :class="{ center: align == 'center' ? true : false }"
    :style="{ textAlign: align, background: bgcolor }"
  >
    {{ value }}
    <img src="static/img/before.png" alt="" v-if="isshowlogo == 'before'" />
    <img src="static/img/after.png" alt="" v-if="isshowlogo == 'after'" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    isshowlogo: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: '#f0f7ff'
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
.title-contain {
  height: 40px;
  // background: #f0f7ff;
  color: var(--sle-text-color);
  line-height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin: 15px 0;
  padding-left: 15px;
  position: relative;
  &.center {
    color: var(--text-color);
    font-size: 17px;
    padding-left: 0;
  }
  img {
    position: absolute;
    right: 0;
    top: -5px;
    height: 50px;
  }
}
</style>
