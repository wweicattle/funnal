<template>
<!-- 店铺施工图 -->
  <div>
    <plan type="施工图"></plan>
  </div>
</template>

<script>
import Plan from './Plan.vue';

export default {
  components: { Plan },
  data() {
    return {
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {

  },
};
</script>

<style scoped lang="scss">
</style>
