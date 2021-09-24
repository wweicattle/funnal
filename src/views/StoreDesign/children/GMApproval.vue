<template>
<!-- LILANZ主品牌总经理审批 -->
  <div class="gmapvl_wrap">
    <box-contain :isshowheader="headerObj">
      <div>
        <div class="box_item"></div>
        <div class="sign_item flex-end">
          <span>LILANZ主品牌总经理签署：</span><div class="sign"></div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
export default {
  components: { BoxContain },
  data() {
    return {
      headerObj: {text: 'LILANZ主品牌总经理意见审批'}
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
@import "@/assets/css/fourth.scss";
.gmapvl_wrap{
  .box_item{
    margin: 20px 0;
    height: 160px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    border-left: 8px solid var(--auxiliary-color);
  }
}
</style>
