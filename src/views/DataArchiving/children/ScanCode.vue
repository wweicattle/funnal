<template>
  <div class="scan-cotnain">
    <box-contain>
      <div class="scan-content">
        <img src="static/img/qieimg.png" alt="" />未上传归档资料
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
.scan-cotnain{
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
.scan-content {
  // width: 800px;
  // margin: 160px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  padding-bottom: 100px;
  img {
    width: 76px;
  }

}
}

</style>
