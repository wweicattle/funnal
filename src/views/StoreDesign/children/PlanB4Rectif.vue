<template>
<!-- 整改前平面 -->
  <div>
    <plan type="平面图" node="504"></plan>
  </div>
  <!-- <div class="id-contain">
    <box-contain>
    <div class="id-content">
      <div class="id-img-con">
        <div class="upload">
          <div class="con">
            <el-icon class="el-icon-plus"></el-icon>
            <div>上传整改前平面图</div>
          </div>
        </div>
        <div class="id-des">
          <div class="d-header">平面图：描述</div>
          <div>图片名称:<span>商圈路段图</span></div>
          <div>图片大小:<span>0.8 M</span></div>
          <div>上传人员:<span>加盟申请人</span></div>
          <div>上传日期:<span>2010-07-27  21:37:26</span></div>
        </div>
      </div>
    </div>
    </box-contain>
  </div> -->
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
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
