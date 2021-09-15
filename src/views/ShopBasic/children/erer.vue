<template>
  <div class="exclusive-contain">
    <box-contain :isshowheader="headerObj">
      <div class="b-content">
        <div class="radio-content">
          <span>整改方式:</span>
          <el-radio>原专卖店面积扩建</el-radio>
          <el-radio>原专卖店重新装修</el-radio>
          <el-radio>专卖店重新选址</el-radio>
          <el-radio>商城调整</el-radio>
          <el-radio>原专卖店更换经销商</el-radio>
        </div>
        <div class="radio-content">
          <span>品牌系列:</span>
          <el-radio>主品牌</el-radio>
          <el-radio>轻商务</el-radio>
        </div>
        <div class="radio-content">
          <span>货柜版本:</span>
          <el-radio>第四代</el-radio>
          <el-radio>第五代</el-radio>
          <el-radio>第五代修订版</el-radio>
          <el-radio>第六代</el-radio>
          <el-radio>第七代</el-radio>
        </div>
        <div class="radio-content">
          <span>渠道分布:</span>
          <el-radio>shoppingmall</el-radio>
          <el-radio>社区店</el-radio>
          <el-radio>主流商圈店</el-radio>
          <el-radio>商城店中店</el-radio>
          <el-radio>商城边厅</el-radio>
          <el-radio>商城店中岛</el-radio>
          <el-radio>奥莱</el-radio>
        </div>


        <div class="radio-content">
          <span>专卖店装修档次:</span>
          <el-radio>简约装修</el-radio>
          <el-radio>精品装修</el-radio>
          <el-radio>二级精品装修</el-radio>
          <el-radio>轻商务</el-radio>
          <el-radio>正常装修升级版</el-radio>
          <el-radio>二级轻商务</el-radio>
          <el-radio>七代装修</el-radio>
        </div>
        <ul>
          <li>
            <span>系统门店名:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">直营</el-radio>
              <el-radio :label="6">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>上一次装修开业日期:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>姓名:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>年龄:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>手机:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>首次开业时间:</span>
            <el-input></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain :isshowheader="headerObjs">
      <div class="b-content">
        <ul>
          <li>
            <span>系统门店名:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">直营</el-radio>
              <el-radio :label="6">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>上一次装修开业日期:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>姓名:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>年龄:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>手机:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>首次开业时间:</span>
            <el-input></el-input>
          </li>
        </ul>
        <div class="c-tit">整改前年度销售零售吊牌及实际销售额</div>
        <ul>
          <li>
            <span>系统门店名:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">直营</el-radio>
              <el-radio :label="6">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>上一次装修开业日期:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>姓名:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>年龄:</span>
            <el-input></el-input>
          </li>
          <li>
            <span>手机:</span>
            <el-input></el-input>
          </li>

          <li>
            <span>首次开业时间:</span>
            <el-input></el-input>
          </li>
        </ul>
      </div>
    </box-contain>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BoxContain from "@/components/common/BoxContain";
import TitleContain from "@/components/common/TitleContain";

export default {
  data() {
    return {
      headerObj: { text: "店铺资料" },
      headerObjs: { text: "店铺关键指标" },

      radio: null,
    };
  },
  created() {
    console.log(222222);
    console.log(32)
  },
  mounted() {},
  methods: {},
  components: {
    BoxContain,
    TitleContain,
  },
};
</script>

<style scoped lang="scss">
/deep/ .el-input {
  height: 24px;
  width: 184px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
  }
}
/deep/ .el-radio-group {
  .el-radio {
    min-width: 80px;
    margin-right: 0;
  }
}
.exclusive-contain {
  height: 100%;
  .b-content {
    // min-height: 300px;
    .c-tit {
      display: inline-block;
      min-width: 100px;
      text-align: right;
      margin-right: 15px;
      font-size: 15px;
      color: var(--text-color);
      margin: 5px 0;
      font-weight: 600;
    }
    .radio-content {
      & > span {
        display: inline-block;
        padding: 10px 0;
        min-width: 100px;
        text-align: right;
        margin-right: 15px;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      // padding: 20px 0;
      li {
        width: 33.33%;
        padding: 10px 0;
        & > span {
          display: inline-block;
          min-width: 100px;
          text-align: right;
          margin-right: 15px;
        }

        &:nth-child(3n) {
          text-align: right;
          padding-right: 20px;
        }
        //   &:nth-child(3n-1) {
        //     text-align: center;
        //   }
        &.address-css {
          // width: 66.66%;
          width: auto;
          text-align: left;
          .pro,
          .city {
            padding: 0 4px;
            min-width: auto;
            margin: 0;
          }
        }
        &.id-number {
          text-align: left;
        }
      }
    }
  }
}
</style>
