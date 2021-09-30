<template>
  <div>
    <box-contain> 
      <div>
        kaishi pating
      </div>
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
</style>
