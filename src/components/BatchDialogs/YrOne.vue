// 弹出层
<template>
  <div class="dialog">
    <div class="dialog-box">
      <div class="box-top">
        <p>利郎整改审批表</p>
        <i class="el-icon-close"></i>
      </div>
      <div class="box-bottom">
        <yr-two></yr-two>
      </div>
    </div>
  </div>
</template>

<script>
import YrTwo from './YrTwo.vue';
export default {
  components: { YrTwo },
  name: 'YrOne'
};
</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(51, 51, 51, 0.4);
  .dialog-box {
    background-color: var(--main-color);
    width: 730px;
    min-height: 70%;
    margin-top: 10%;
    margin-left: 20%;
    position: relative;
    .box-top {
      height: 58px;
      border-bottom: 2px solid var(--line-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      & > p {
        font-size: 18px;
        font-weight: bold;
      }
      /deep/ [class*=' el-icon-'],
      [class^='el-icon-'] {
        font-size: 20px;
        color: #d9d9d9;
        &:hover {
          color: var(--sle-text-color);
        }
      }
    }
    .box-bottom {
      padding: 0 20px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>