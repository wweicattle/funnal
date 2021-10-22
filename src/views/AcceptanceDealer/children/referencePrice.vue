/*!
 * 利郎个项目参考报价
 */
<template>
  <div class="reference-price">
    <div class="nav">
      <div class="nav-item" v-for="(item,index) in navList" :key="'qa' + index" :class="{ 'nav-item-active': navActive == index }" @click="navActive = index">{{ item }}</div>
    </div>
    <box-contain style="padding-top:9px;">
      <h1>单位工程预算表</h1>
      <el-table :data="tableData[navActive]" stripe>
        <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
        <template v-for="(val, index) in tableLabel">
          <el-table-column :prop="val.attr" :label="val.name" :width="val.width" align="center" :key="index"></el-table-column>
        </template>
      </el-table>
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
      navList: ['门面部份', '地面部份', '墙面部份', '吊顶部份', '其它'],
      tableLabel: json.tableLabel,
      tableData: json.selectVal,
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
  margin: 14px 14px 0 14px;
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
