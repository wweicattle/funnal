<template>
  <div class="table-contain">
    <el-table :data="tableData" stripe :header-cell-style="{ background: '#F6F7F9' }" border>
      <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
      <template v-for="(val, index) in tableLabel">
        <el-table-column
          :prop="val.attr"
          :label="val.name"
          :width="val.width"
          align="center"
          :key="index"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TABLES",
  data() {
    return {};
  },
  created() { },
  mounted() { },
  methods: {},
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableLabel: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="scss">
.table-contain {
  width: 100%;
  // border: 1px solid red;
  overflow: hidden;
  /deep/ .el-table {
    font-size: inherit;
    width: 100%;
    min-height: 300px;
    td.el-table__cell,
    th.el-table__cell.is-leaf {
      // border: none !important;
      border-left: none;
      border-right: none;
    }
    .el-table__row--striped {
      background: var(--main-back);
    }
  }
}
</style>
