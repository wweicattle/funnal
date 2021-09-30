/*!
 * 利郎个项目参考报价
 */
<template>
  <div class="reference-price">
    <div class="nav">
      <div class="nav-item" v-for="(item,index) in navList" :key="'qa' + index" :class="{ 'nav-item-active': navActive == index }" @click="navActive = index">{{ item }}</div>
    </div>
    <box-contain>
      <h1>单位工程预算表</h1>
      <div class="tables-contain">
        <table-contain :tableData="selectVal" :tableLabel="tableLabel"></table-contain>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from "@/components/common/BoxContain";
import TableContain from "@/components/common/TableContain";
import json from "./exp.json"
export default {
  name: "referencePrice",
  data() {
    return {
      navActive: 0,
      navList: ['道具制作清单', '标志清单', '灯具清单', '模特清单', '辅助道具', '沙发清单'],
      tableLabel: json.tableLabel,
      selectVal: json.selectVal,
    }
  },
  components: { BoxContain, TableContain },
  mounted() {
    console.log(json)
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ececec;
  padding: 3px;
  margin: 14px;
  .nav-item {
    padding: 4px 10px;
    font-size: var(--font-size);
    font-weight: 500;
    color: var(--default-text-color);
    line-height: 20px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
  }
  .nav-item-active {
    color: var(--sle-text-color);
    background: #ffffff;
    background: #f0f7ff;
  }
}
h1 {
  width: 100%;
  font-weight: bolder;
  color: #333333;
  text-align: center;
  padding: 6px 0;
  background: #f0f7ff;
  text-shadow: 0px 1px 15px rgba(222, 222, 222, 0.2);
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>
