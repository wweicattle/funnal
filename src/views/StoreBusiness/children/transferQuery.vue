<template>
  <div class="transfer-query">
    <div class="query-item">
      <span>查询日期：</span>
      <el-date-picker v-model="value1" size="small" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      <span>调拨出库：</span>
      <el-select v-model="value" placeholder="请选择" size="mini" style="width:100px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <span>调拨仓库：</span>
      <el-select v-model="value" placeholder="请选择" size="mini" style="width:100px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" circle size="mini"></el-button>
      <el-checkbox v-model="checked">只显示未补贴</el-checkbox>
    </div>
    <el-empty :image="emptyImg" style="height:100%;" description="请选择查询条件"></el-empty>

    <div class="query-list"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      checked: false,
      emptyImg: require('./empty.png')
    }
  },
}
</script>

<style lang="scss" scoped>
.transfer-query {
  padding: 15px 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.query-item {
  display: flex;
  align-items: center;
  button {
    margin: 0 10px;
    height: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    background-color: var(--sle-text-color);
    border: 0;
    &:active {
      opacity: 0.8;
    }
  }
  span {
    color: var(--default-text-color);
    margin: 0 0 0 10px;
    &:first-child {
      margin-left: 0;
    }
  }
  /deep/ .el-date-editor {
    width: auto;
    padding: 5px 5px;
    input {
      width: 75px;
    }
    .el-range-separator {
      width: 30px;
      font-size: var(--font-size);
      line-height: 20px;
    }
    i {
      width: 20px;
      font-size: var(--font-size);
      line-height: 20px;
    }
  }
  /deep/ .el-checkbox {
    .el-checkbox__label {
      padding-left: 5px;
    }
  }
}
/deep/ .el-empty__image {
  height: 54px;
}
</style>
