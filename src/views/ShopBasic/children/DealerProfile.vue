<template>
  <div class="basic-contain">
    <box-contain logoVis="before" :isshowheader="headerObj">
      <div class="b-content">
        <ul>
          <li>
            <span>系统门店名:</span>
            <el-input v-model="copyData.yzmdmc"></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="copyData.yjmxz">
              <el-radio :label="0">直营</el-radio>
              <el-radio :label="1">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>上一次装修开业日期:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>
          <li>
            <span >姓名:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.xb">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>年龄:</span>
            <el-input v-model="copyData.ynn"></el-input>
          </li>
          <li>
            <span >手机:</span>
            <el-input v-model="copyData.yphone"></el-input>
          </li>

          <li>
            <span>首次开业时间:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain logoVis="before" :isshowheader="headerObjs">
      <div class="b-content">
        <title-contain value="店铺基本信息"></title-contain>
        <ul>
          <li>
            <span>贸易名称:</span>
            <el-input v-model="copyData.sskhmc"></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="copyData.jmxz">
              <el-radio :label="0">直营</el-radio>
              <el-radio :label="1">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>填表日期:</span>
            <el-input v-model="copyData.tbrq"></el-input>
          </li>
          <li>
            <span>本人加盟日期:</span>
            <el-input v-model="copyData.jmrq"></el-input>
          </li>
        </ul>
        <title-contain value="经营者资料"></title-contain>
        <ul>
          <li>
            <span >姓名:</span>
            <el-input v-model="copyData.jyzxm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.jyzxb">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>出生日期:</span>
            <el-input v-model="copyData.csrq"></el-input>
          </li>
          <li>
            <span >婚否:</span>
            <el-input v-model="copyData.isjf"></el-input>
          </li>

          <li>
            <span>毕业院校:</span>
            <el-input v-model="copyData.byxx"></el-input>
          </li>
          <li>
            <span>学历:</span>
            <el-input v-model="copyData.xl"></el-input>
          </li>
          <li>
            <span>籍贯:</span>
            <el-input v-model="copyData.jg"></el-input>
          </li>
          <li class="id-number">
            <span>身份证号:</span>
            <el-input v-model="copyData.sfzhm"></el-input>
          </li>
          <li class="address-css">
            <span>身份证地址:</span>
            <el-input v-model="copyData.sfpro"></el-input ><span class="pro">省</span><el-input v-model="copyData.sfcity"></el-input
            ><span class="city">市/县</span>
            <el-input></el-input>
          </li>
        </ul>
        <div class="c-tit">联系方式</div>
        <ul>
          <li>
            <span >住宅电话:</span>
            <el-input v-model="copyData.lxphone"></el-input>
          </li>
          <li>
            <span>手机号码:</span>
            <el-input v-model="copyData.lxmobile"></el-input>
          </li>
          <li>
            <span >QQ:</span>
            <el-input v-model="copyData.lxqq"></el-input>
          </li>
          <li>
            <span>Email:</span>
            <el-input v-model="copyData.lxemail"></el-input>
          </li>
          <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.lxpro"></el-input><span class="pro">省</span><el-input v-model="copyData.lxcity"></el-input
            ><span class="city" >市</span>
            <el-input v-model="copyData.lxother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">工作单位</div>
        <ul>
          <li>
            <span>单位名称:</span>
            <el-input v-model="copyData.dwmc"></el-input>
          </li>
          <li>
            <span>传真:</span>
            <el-input v-model="copyData.yzmdfax"></el-input>
          </li>
          <li>
            <span>手机号:</span>
            <el-input v-model="copyData.ymobile"></el-input>
          </li>

          <li class="address-css">
            <span>单位地址:</span>
            <el-input></el-input><span class="pro">省</span><el-input></el-input
            ><span class="city">市/县</span>
            <el-input></el-input>
          </li>
        </ul>

        <title-contain value="法人资料"></title-contain>
        <ul>
          <li>
            <span>姓名:</span>
            <el-input v-model="copyData.frxm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.frxb">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>出生日期:</span>
            <el-input v-model="copyData.frcsrq"></el-input>
          </li>
          <li>
            <span>婚否:</span>
            <el-input v-model="copyData.frisjf"></el-input>
          </li>

          <li>
            <span>毕业院校:</span>
            <el-input v-model="copyData.frbyxx"></el-input>
          </li>
          <li>
            <span>学历:</span>
            <el-input v-model="copyData.frxl"></el-input>
          </li>
          <li>
            <span>籍贯:</span>
            <el-input v-model="copyData.frjg"></el-input>
          </li>

          <li class="id-number">
            <span>身份证号:</span>
            <el-input v-model="copyData.frsfzhm"></el-input>
          </li>
          <li>
            <span>经营者与法人关系:</span>
            <el-input v-model="copyData.yy"></el-input>
          </li>
          <li class="address-css">
            <span>身份证地址:</span>
            <el-input v-model="copyData.frsfpro"></el-input><span class="pro">省</span><el-input v-model="copyData.yjmcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frsfother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">联系方式</div>
        <ul>
          <li>
            <span>住宅电话:</span>
            <el-input v-model="copyData.frgzphone"></el-input>
          </li>
          <li>
            <span>手机号码:</span>
            <el-input v-model="copyData.frlxmobile"></el-input>
          </li>
          <li>
            <span>QQ:</span>
            <el-input v-model="copyData.frlxqq"></el-input>
          </li>
          <li>
            <span>Email:</span>
            <el-input v-model="copyData.frlxemail"></el-input>
          </li>
            <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.frgzpro"></el-input><span class="pro">省</span><el-input v-model="copyData.frgzcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frgzother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">工作单位</div>
        <ul>
          <li>
            <span>单位名称:</span>
            <el-input v-model="copyData.frgzdwmc"></el-input>
          </li>
          <li>
            <span>传真:</span>
            <el-input v-model="copyData.frgzfax"></el-input>
          </li>
          <li>
            <span>手机号:</span>
            <el-input v-model="copyData.frlxmobile"></el-input>
          </li>

          <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.frgzpro"></el-input><span class="pro">省</span><el-input v-model="copyData.frgzcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frgzother"></el-input>县
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
  name: "JXSDATA",
  data() {
    return {
      copyData: {},
      headerObj: { text: "旧版经销商基本资料" },
      headerObjs: { text: "新版经销商基本资料" },
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
    ShopBasicData: {
      handler(newVal) {
        console.log(newVal);
        this.copyData = JSON.parse(JSON.stringify(newVal));
      },
      immediate: true,
    },
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
.basic-contain {
  height: 100%;
  // background: var(--main-back);
  .b-content {
    // min-height: 300px;
    .c-tit {
      display: inline-block;
      min-width: 88px;
      text-align: right;
      margin-right: 15px;
      font-size: 15px;
      color: var(--text-color);
      margin: 5px 0;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      // padding: 20px 0;
      li {
        width: 33.33%;
        padding: 10px 0;
        // padding-left: 15px;
        & > span {
          display: inline-block;
          min-width: 88px;
          text-align: right;
          margin-right: 15px;
        }
        &:nth-child(4n) {
          // margin-left:15px;
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
      }
    }
  }
}
</style>
