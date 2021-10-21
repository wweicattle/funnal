<template>
  <!-- 开户审批批示 -->
  <div class="apvlins_wrap">
    <box-contain>
      <template v-if="!noneResult">
        <!-- 开户申请表 -->
        <title-contain value="开户申请表" align="center"></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <!-- 基本信息 -->
            <el-timeline-item timestamp="基本信息" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c col-h">
                  <span class="tit long">贸易公司</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.sskhmc"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">区域分类</span>
                  <div class="val">
                    <el-select v-model="kaihuData.qydm" placeholder="选择所属区域">
                      <el-option
                        v-for="item in kaihuPz.areaList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">客户代码</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.khdm"></el-input>
                  </div>
                </div>
                <div class="basic-c whole">
                  <span class="tit long">加盟性质</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.khfl">
                      <el-radio :label="item.dm" v-for="(item, index) in kaihuPz.khfl" :key="index">{{item.mc}}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit required long">客户名称</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.khmc"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit required">门店代码</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.mddm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit required long">门店名称</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.mdmc"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit">开户姓名</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.xm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-t-m">
                  <span class="tit long">开户类型</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.khlx">
                      <el-radio :label="1">新增客户，采取独立套账</el-radio>
                      <el-radio :label="2">开分店，共用一个套账</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-t">
                  <span class="tit long">店铺启用日期</span>
                  <div class="val">
                    <el-date-picker v-model="kaihuData.qyrq" type="date" placeholder="选择日期"></el-date-picker>
                    <!-- <el-input class="value" v-model="kaihuData.qyrq"></el-input> -->
                  </div>
                </div>
                <div class="basic-c col-f-3">
                  <span class="tit long">门店类别</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.mdlb" class="flex-between">
                      <el-radio :label="item.dm" v-for="(item, index) in kaihuPz.mdlb" :key="index" >{{item.mc}}</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">实际营业面积</span>
                  <div class="val">
                    <div class="val flexcenter">
                      <el-input class="value" v-model="kaihuData.yymj"></el-input>
                      <span class="suffix">㎡</span>
                    </div>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <!-- 选择该店铺的相关负责人 -->
            <el-timeline-item timestamp="选择该店铺的相关负责人" placement="top">
              <div class="after-basic flexcenter">
                <div class="flexcenter whole">
                  <div class="basic-c col-h">
                    <span class="tit long">负责开始年月</span>
                    <div class="val">
                      <el-input
                        class="value"
                        placeholder="格式如：201105"
                        v-model="kaihuData.fzksny"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c col-f">
                    <span class="tit">大区经理</span>
                    <div class="val">
                      <el-input class="value" v-model="kaihuData.dqzjlxm"></el-input>
                    </div>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">业务员</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.ywyxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">业务经理</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.ywjlxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">理单员</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.ldyxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">物流经理</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.wljlxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">终端专员</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.zdzyxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">终端经理</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.zdjlxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">总经理</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.zjlxm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">人资经理</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.pxjlxm"></el-input>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <!-- 贸易公司业务经理描述 -->
            <el-timeline-item timestamp="贸易公司业务经理描述" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c col-f">
                  <span class="tit long">该店是经销商</span>
                  <div class="val">
                    <el-input class="value" v-model="kaihuData.node_1_1"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">开设的第</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_2"></el-input>
                    <span class="suffix">店/厅</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">主要经营者</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_3"></el-input>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">营业执照法人</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_4"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit longer">该经营者经营理念</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.node_1_5">
                      <el-radio label="1">优</el-radio>
                      <el-radio label="2">良</el-radio>
                      <el-radio label="3">一般</el-radio>
                      <el-radio label="4">差</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="title-text">资金实力</div>
                <div class="basic-c col-f">
                  <span class="tit long">店铺装修</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_6"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">货品</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_7"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">年租金</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_8"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">首批资金付</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_10"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c whole">
                  <span class="tit long">租金实行</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.node_1_9">
                      <el-radio label="1">月付</el-radio>
                      <el-radio label="2">季付</el-radio>
                      <el-radio label="3">半年付</el-radio>
                      <el-radio label="4">年付</el-radio>
                      <el-radio label="5">两年付</el-radio>
                      <el-radio label="6">多年付</el-radio>
                      <el-radio label="7">本人店铺</el-radio>
                      <el-radio label="8">商场扣点</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">综上资金实力</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.node_1_11">
                      <el-radio label="1">A级</el-radio>
                      <el-radio label="2">B级</el-radio>
                      <el-radio label="3">C级</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">店铺选址路段</span>
                  <div class="val">
                    <el-radio-group v-model="kaihuData.node_1_12">
                      <el-radio label="1">A级路段</el-radio>
                      <el-radio label="2">B级路段</el-radio>
                      <el-radio label="3">C级路段</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit longer">估计年出货可达</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_13"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">零售额可达</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="kaihuData.node_1_14"></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
              </div>
              <div>
                <el-checkbox v-model="checked">本人确保该经销商能为利郎经营三年以上，现申请给予开户</el-checkbox>
              </div>
              <div class="sign-contain">
                <span class="sign-tit">贸易公司业务经理签署：
                </span>
                <div class="sign-name">{{ kaihuData.zdr }}
                </div>
              </div>
            </el-timeline-item>
            <template v-if="showApvl">
              <!-- 贸易公司业务经理 -->
              <el-timeline-item timestamp="贸易公司业务经理" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">同意</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司业务经理签署：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 贸易公司物流经理 -->
              <el-timeline-item timestamp="贸易公司物流经理" placement="top">
                <div>
                  <div class="box_item">
                    <div>根据业务谈判情况，对该经销商估计年出货<span class="line">150</span>万，零售额<span class="line">200</span>万，申请给予开户。</div>
                    <div class="strong">同意</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司物流经理签署：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 总部物流经理 -->
              <el-timeline-item timestamp="总部物流经理" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">同意</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">总部物流经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 政策处初审 -->
              <el-timeline-item timestamp="政策处初审" placement="top">
                <div>
                  <div class="box_item">
                    <div>
                      1、本店是该经销商吴平开设的第1家店/厅。
                      </div>  
                    <div>2、该店的主要经营者及营业执照法人与加盟审批表填写的资料相吻合。</div>
                    <div class="strong">基本资料齐全，现申请开户！</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">政策处初审：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 政策处经理初审 -->
              <el-timeline-item timestamp="政策处经理初审" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">已审核，该店更换新编码。</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">政策处经理初审：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 销售管理部部长 -->
              <el-timeline-item timestamp="销售管理部部长" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">同意开户</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">销售综合管理部部长：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 领航财务 -->
              <el-timeline-item timestamp="领航财务" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">同意开户</div> 
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">领航财务：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
            </template>
            <el-timeline-item timestamp="" placement="top"> </el-timeline-item>
          </el-timeline>
        </div>
      </template>
      <template v-else>
        <div class="no-result">该店没有开户申请表</div>
      </template>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
import { getKaihuData, getKhpsPz, getZxspPz } from '@/network/index';

export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      radio: 3, //加盟性质  还未处理
      loading: null,
      checked: true,
      showApvl:false,//是否展示审批流程
      kaihuPz:{}, //开户配置项
      kaihuData:{},//开户数据
      noneResult:false, // 结果为空
    };
  },
  created() {
    console.log(this.$route);
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getZxspPz(); //加盟性质配置
    this.getKhpsPz();
    this.getKaihuData();
  },
  mounted() {},
  methods: {
    getZxspPz(){
      getZxspPz().then((res) => {
        // this.loading.close();
        console.log(res);
        if(res.data.errcode == 0){
          this.kaihuPz = res.data.data;
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
    getKhpsPz(){
      getKhpsPz().then((res) => {
        // this.loading.close();
        console.log(res);
        if(res.data.errcode == 0){
          let areaList = []
          res.data.data.qyfl.map((val)=>{
            areaList.push({
              value: val.dm,
              label: val.mc
            })
            // val.value= val.dm;
            // val.label = val.mc
          })
          res.data.data.areaList = areaList;
          this.kaihuPz = Object.assign(this.kaihuPz,res.data.data)
          console.log("kaihuPz",this.kaihuPz);
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
    getKaihuData() {
      getKaihuData().then((res) => {
        this.loading.close();
        console.log(res);
        if(res.data.errcode == 0){
          this.kaihuData = res.data.data;
          !Object.keys(res.data.data).length && (this.noneResult = true)
          console.log("kaihuData",this.kaihuData);
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/fourth.scss';
.apvlins_wrap {
  span.line{
    display: inline-block;
    min-width: 50px;
    border-bottom: 1px solid ;
    text-align: center;
    vertical-align: bottom;
    padding:0 5px;
  }
  .strong {
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
  }
  .sign_item {
    margin: 20px 0 0px 0;
    color: var(--text-color);
  }
  .box_item{
    margin: 20px 0;
    padding: 10px 20px;
    min-height: 120px;
    border-radius: 5px;
    color: var(--default-text-color);
    border: 1px solid var(--border-color);
    border-left: 8px solid var(--auxiliary-color);
    >div{margin-bottom: 10px;}
  }
}
/deep/ .el-input {
  .el-input__inner {
    height: 100%;
    border: none;
    padding: 0 5px;
  }
}
/deep/.el-input__icon {
  line-height: 24px;
}
/deep/ .el-select {
  width: 100%;
  .el-input__suffix {
    line-height: 30px;
    display: flex;
    align-items: center;
    // height: 100%;
    // border: none;
    // padding: 0 5px;
  }
}
/deep/ .el-radio-group {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: inherit;
  .el-radio {
    // min-width: 90px;
    margin-right: 10px;
  }
  .el-radio__label {
    padding-left: 5px;
  }
}
/deep/ .el-date-editor {
  // width: 100%;
  // height: 100%;
  &.el-input {
    width: 100%;
  }
  .el-input__prefix {
    // right:5px
    display: none;
  }
  .el-input__icon {
    line-height: 30px;
  }
}
/deep/ .el-timeline {
  // width: 100%;
  // height: 100%;
  font-size: inherit;
  .el-timeline-item {
    &:last-child {
      display: none;
    }
  }
  .el-timeline-item__wrapper {
    padding-left: 20px;
  }

}
/deep/.el-checkbox {
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #0670ff;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #0670ff;
  }
}
.whole {
  width: 100%;
  justify-content: flex-start;
  .basic-c {
    margin-right: 2%;
    &:last-child {
      margin-right: 0;
    }
  }
}
.basic-c {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  border: 1px solid #ececec;
  .tit {
    flex-shrink: 0;
    width: 76px;
    background: #f6f7f9;
    text-align: center;
    font-weight: 600;
    border-right: 1px solid #ececec;
    &.long {
      width: 92px;
    }
    &.longer {
      width: 115px;
    }
    &.required::before {
      content: '*';
      color: #f13e3e;
      padding-right: 2px;
    }
  }
  .val {
    flex: 1;
    .suffix {
      padding-right: 3.5px;
      flex-shrink: 0;
      color: var(--remind-text-color);
    }
  }
}
.col-w{
  width: 100%;
}
.col-h{
  width: 49%;
}
.col-t{
  width: 36.7%;
}
.col-t-m{
  width: 61.3%;
}
.col-t-2{
  width: 61.9%;
}
.col-f{
  width: 23.5%;
}
.col-f-3{
  width: 74.5%;
}

.att-bottom {
  padding: 0 6px;
  .after-basic {
    flex-wrap: wrap;
    justify-content: space-between;
    .title-text {
      font-size: 14px;
      font-weight: 600;
      padding: 10px 0;
      position: relative;
      z-index: 100;
      width: 100%;
      margin-bottom: 15px;
      &::after {
        content: '';
        height: 12px;
        width: 60px;
        position: absolute;
        bottom: 4px;
        z-index: -1;
        left: 0;
        background: #c1dbff;
      }
    }
  }
}
.no-result{
  width: 800px;
  margin: 140px 0;
  text-align: center;
  font-size: 24px;
}
</style>
