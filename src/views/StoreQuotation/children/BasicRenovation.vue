<template>
  <div>
    <!-- directive -->
    <!-- <div class="images" v-viewer>
      <img :src="images[0]" v-viewer>
    </div> -->
    <!-- component -->
    <!-- <viewer :images="images">
      <img v-for="src in images" :key="src" :src="src">
    </viewer> -->
    <!-- api -->
    <!-- <button type="button" @click="show">Click to show</button> -->
    <box-contain>
      <div class="scan-content">
        <img src="static/img/qieimg.png" alt="" />未上传基础装修合同
      </div>
    </box-contain>
  </div>
</template>
<script>
// import 'viewerjs/dist/viewer.css';
// import VueViewer from 'v-viewer';
// import Vue from 'vue';
// Vue.use(VueViewer);
export default {
  data() {
    return {
      images: [
        // 'https://picsum.photos/200/200',
        // 'https://picsum.photos/300/200',
        // 'https://picsum.photos/250/200'
      ]
    };
  },
  methods: {
    // show() {
    //   this.$viewerApi({
    //     images: this.images
    //   });
    // }
  }
};
</script>
<style lang="scss">
.scan-content {
  margin: 160px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  img {
    width: 76px;
  }
}
</style>