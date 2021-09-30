<template>
  <div class="scan-cotnain">
    <box-contain>
      <div class="scan-content">未上传归档资料</div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';

export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {},
  components: {
    BoxContain
  }
};
</script>

<style scoped lang="scss">
.scan-content {
  width: 800px;
  margin: 140px 0;
  text-align: center;
  font-size: 24px;
}
</style>
