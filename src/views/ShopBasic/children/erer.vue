<template>
  <div class="exclusive-contain">
    <box-contain :isshowheader="headerObj">
      <div class="b-content">
        <div class="radio-content">
          <span>整改方式:</span>
          <el-radio-group v-model="copyData.zgfs">
            <el-radio :label="0">原专卖店面积扩建</el-radio>
            <el-radio :label="1">原专卖店重新装修</el-radio>
            <el-radio :label="2">专卖店重新选址</el-radio>
            <el-radio :label="3">商城调整</el-radio>
            <el-radio :label="4">原专卖店更换经销商</el-radio>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>品牌系列:</span>
          <el-radio-group v-model="copyData.ppxl">
            <el-radio :label="0">主品牌</el-radio>
            <el-radio :label="1">轻商务</el-radio>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>货柜版本:</span>
          <el-radio-group v-model="copyData.hgbb">
            <el-radio :label="0">第四代</el-radio>
            <el-radio :label="1">第五代</el-radio>
            <el-radio :label="2">第五代修订版</el-radio>
            <el-radio :label="3">第六代</el-radio>
            <el-radio :label="4">第七代</el-radio>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>渠道分布:</span>
          <el-radio-group v-model="copyData.qdfb">
            <el-radio :label="0">shoppingmall</el-radio>
            <el-radio :label="1">社区店</el-radio>
            <el-radio :label="2">主流商圈店</el-radio>
            <el-radio :label="3">商城店中店</el-radio>
            <el-radio :label="4">商城边厅</el-radio>
            <el-radio :label="5">商城店中岛</el-radio>
            <el-radio :label="6">奥莱</el-radio>
          </el-radio-group>
        </div>

        <div class="radio-content">
          <span>专卖店装修档次:</span>
          <el-radio-group v-model="copyData.zxdc">
            <el-radio :label="0">简约装修</el-radio>
            <el-radio :label="1">精品装修</el-radio>
            <el-radio :label="2">二级精品装修</el-radio>
            <el-radio :label="3">轻商务</el-radio>
            <el-radio :label="4">正常装修升级版</el-radio>
            <el-radio :label="5">二级轻商务</el-radio>
            <el-radio :label="6">七代装修</el-radio>
          </el-radio-group>
        </div>
        <ul>
          <li>
            <span>原专卖店名称:</span>
            <el-input v-model="copyData.yzmdmc"></el-input>
          </li>
          <li>
            <span>联系电话(店):</span>
            <el-input v-model="copyData.zmdphone"></el-input>
            <!-- <el-radio-group v-model="radio">
              <el-radio :label="3">直营</el-radio>
              <el-radio :label="6">加盟</el-radio>
            </el-radio-group> -->
          </li>

          <li>
            <span>传真:</span>
            <el-input v-model="copyData.yzmdfax"></el-input>
          </li>

          <li>
            <span>整改后专卖店名称:</span>
            <el-input v-model="copyData.zmdmc"> </el-input>
          </li>

          <li>
            <span>联系电话(店):</span>
            <el-input v-model="copyData.jyzmobile"></el-input>
            <!-- <el-radio-group v-model="radio">
              <el-radio :label="3">直营</el-radio>
              <el-radio :label="6">加盟</el-radio>
            </el-radio-group> -->
          </li>

          <li>
            <span>传真:</span>
            <el-input v-model="copyData.zmdfax"></el-input>
          </li>

          <li>
            <span>该店是你开设的第:</span>
            <el-input v-model="copyData.zmdsl"></el-input>个店/厅
          </li>
          <li>
            <span>是否安装电视:</span>
            <el-radio-group v-model="copyData.zmdtv">
              <el-radio :label="0">是</el-radio>
              <el-radio :label="1">否</el-radio>
            </el-radio-group>
          </li>
        </ul>
        <ul>
          <li class="widhtauto">
            <span>原加盟位置:</span>
            <el-input v-model="copyData.yjmpro"></el-input>
            省
            <el-input v-model="copyData.yjmcity"></el-input>
            市
            <el-input v-model="copyData.yjmarea"></el-input>
            县(区)
            <el-input v-model="copyData.yjmtown"></el-input>
            镇
            <el-input></el-input>
            街/道
            <el-input v-model="copyData.yjmno"></el-input>
            号
            <el-input v-model="copyData.yjmmarket"></el-input>
            商城
          </li>
        </ul>
        <ul>
          <li class="widhtauto">
            <span>整改后加盟位置:</span>
            <el-input v-model="copyData.jmpro"></el-input>
            省
            <el-input v-model="copyData.jmcity"></el-input>
            市
            <el-input v-model="copyData.jmarea"></el-input>
            县(区)
            <el-input v-model="copyData.jmstreet"></el-input>
            镇
            <el-input></el-input>
            街/道
            <el-input v-model="copyData.jmno"></el-input>
            号
            <el-input v-model="copyData.jmmarket"></el-input>
            商城
          </li>
        </ul>

        <div class="radio-content">
          <span>行政级别:</span>
          <el-radio-group v-model="copyData.xzjb">
            <el-radio :label="0">省份</el-radio>
            <el-radio :label="1">地级市</el-radio>
            <el-radio :label="2">百强县</el-radio>
            <el-radio :label="3">县级市</el-radio>
            <el-radio :label="4">县级</el-radio>
            <el-radio :label="5">镇级</el-radio>
            <el-radio :label="6">直辖市</el-radio>
            <el-radio :label="7">特区</el-radio>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>路段级别:</span>
          <el-radio-group v-model="copyData.ldjb">
            <el-radio :label="0">A类</el-radio>
            <el-radio :label="1">B类</el-radio>
            <el-radio :label="2">C类</el-radio>
            <el-radio :label="3">D类</el-radio>
          </el-radio-group>
        </div>
      </div>
    </box-contain>

    <box-contain :isshowheader="headerObjs">
      <div class="b-content">
        <ul>
          <li>
            <span>原租金:</span>
            <el-input v-model="copyData.ynzje"></el-input>万
          </li>

          <li>
            <span>商场扣点:</span>
            <el-input v-model="copyData.ysckd"></el-input>%
          </li>

          <li>
            <span>年物业费:</span>
            <el-input v-model="copyData.ywyf"></el-input>万
          </li>
          <li>
            <span>整改后原租金:</span>
            <el-input v-model="copyData.nzje"></el-input>万
          </li>

          <li>
            <span>商场扣点:</span>
            <el-input v-model="copyData.sckd"></el-input>%
          </li>

          <li>
            <span>年物业费:</span>
            <el-input v-model="copyData.wyf"></el-input>万
          </li>
        </ul>
       
        <ul>
          <li>
            <span>原核定面积为:</span>
            <el-input v-model="copyData.yjzmj"></el-input>平方米
          </li>
          <li>
            <span>店面门数:</span>
            <el-input v-model="copyData.ydoorsl"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span>整改后核定面积为:</span>
            <el-input v-model="copyData.jzmj"></el-input>平方米
          </li>
          <li>
            <span>店面门数:</span>
            <el-input v-model="copyData.doorsl"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span>店面性质:</span>
            <el-radio-group v-model="radio">
              <el-radio :label="3">租赁</el-radio>
              <el-radio :label="6">非租赁</el-radio>
            </el-radio-group>
          </li>
        </ul>
        <div class="c-tit">整改前年度销售零售吊牌及实际销售额</div>
        <ul>
          <li class="widhtauto pd-left">
            从
             <el-input v-model="copyData.lsksrq1"></el-input>
            至
            <el-input v-model="copyData.lsjsrq1"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje1"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje1"></el-input>
          </li>
        </ul>
        <ul>
          <li class="widhtauto pd-left">
            从
            <el-input v-model="copyData.lsksrq2"></el-input>
            至
            <el-input v-model="copyData.lsjsrq2"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje2"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje2"></el-input>
          </li>
        </ul>
        <ul>
          <li class="widhtauto pd-left">
            从
  <el-input v-model="copyData.lsksrq3"></el-input>
            至
            <el-input v-model="copyData.lsjsrq3"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje3"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje3"></el-input>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      copyData: {},
      headerObj: { text: "店铺资料" },
      headerObjs: { text: "店铺关键指标" },
      radio: null,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    BoxContain,
    TitleContain,
  },
  computed: {
    ...mapState(["ShopBasicData"]),
  },
  watch: {
    ShopBasicData(newVal) {
      console.log(newVal);
      this.copyData = JSON.parse(JSON.stringify(newVal));
    },
  },
};
</script>

<style scoped lang="scss">
/deep/ .el-input {
  height: 24px;
  width: 184px;
  margin-right: 4px;
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
        min-width: 120px;
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
          min-width: 120px;
          text-align: right;
          margin-right: 15px;
        }

        &:nth-child(3n) {
          // text-align: right;
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
        &.widhtauto {
          .el-input {
            width: 76px;
          }
          &.pd-left {
            margin-left: 60px;
            .el-input {
              width: inherit;
            }
          }
          span {
            // min-width: auto;
          }

          width: auto;
        }
      }
    }
  }
}
</style>
