<template>
  <div class="transfer-query">
    <div class="query-item">
      <div class="item-wrap">
        <span>查询日期：</span>
        <el-date-picker v-model="value1" size="small" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </div>
      <div class="item-wrap">
        <span>调拨出库：</span>
        <el-select v-model="value" placeholder="请选择" size="mini" style="width:110px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <span>调拨仓库：</span>
        <el-select v-model="value" placeholder="请选择" size="mini" style="width:110px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" circle size="mini"></el-button>
        <el-checkbox v-model="checked">只显示未补贴</el-checkbox>
      </div>
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
  // display: flex;
  // flex-direction: column;
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
    margin: 0 0 0 14px;
    &:first-child {
      margin-left: 0;
    }
  }
  .item-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
  }
  /deep/ .el-date-editor {
    width: auto;
    padding: 3px 14px;
    height: 28px;
    display: flex;
    align-items: center;
    input {
      width: 85px;
    }
    .el-range-separator {
      width: 45px;
      font-size: var(--font-size);
      line-height: 20px;
    }
    i {
      width: 30px;
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
