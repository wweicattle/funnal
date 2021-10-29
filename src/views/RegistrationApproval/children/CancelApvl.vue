<template>
  <!-- 专卖店注销审批表 -->
  <div class="cancelapvl_wrap">
    <box-contain>
      <template v-if="!noneResult">
        <!-- 专卖店注销审批表 -->
        <title-contain value="专卖店注销审批表" align="center"></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <!-- 基本信息 -->
            <el-timeline-item timestamp="基本信息" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c col-h">
                  <span class="tit long">贸易公司</span>
                  <div class="val">
                    <el-input
                      class="value"
                      v-model="zxspbData.sskhmc"
                    ></el-input>
                  </div>
                </div>
                <div class="basic-c col-f-3">
                  <span class="tit long">加盟性质</span>
                  <div class="val">
                    <el-radio-group v-model="zxspbData.khfl">
                      <el-radio
                        :label="item.dm"
                        v-for="(item, index) in zxspPz.khfl"
                        :key="index"
                        >{{ item.mc }}</el-radio
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">客户代码</span>
                  <div class="val">
                    <el-input class="value" v-model="zxspbData.khdm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long required">客户名称</span>
                  <div class="val">
                    <el-input class="value" v-model="zxspbData.khmc"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit required">门店代码</span>
                  <div class="val">
                    <el-input class="value" v-model="zxspbData.mddm"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit required long">门店名称</span>
                  <div class="val">
                    <el-input class="value" v-model="zxspbData.mdmc"></el-input>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit">开户姓名</span>
                  <div class="val">
                    <el-input class="value" v-model="zxspbData.xm"></el-input>
                  </div>
                </div>
                <div class="col-f-3 flex-between">
                  <div class="basic-c col-h">
                    <span class="tit long">最初开业日期</span>
                    <div class="val">
                      <el-date-picker
                        v-model="zxspbData.kyrq"
                        type="date"
                        placeholder="选择日期"
                      ></el-date-picker>
                      <!-- <el-input class="value" v-model="zxspbData.kyrq"></el-input> -->
                    </div>
                  </div>
                  <div class="basic-c col-h">
                    <span class="tit long">申请关店日期</span>
                    <div class="val">
                      <el-date-picker
                        v-model="zxspbData.gdrq"
                        type="date"
                        placeholder="选择日期"
                      ></el-date-picker>
                      <!-- <el-input class="value" v-model="zxspbData.gdrq"></el-input> -->
                    </div>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">最后整改日期</span>
                  <div class="val">
                    <el-date-picker
                      v-model="zxspbData.zgrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                    <!-- <el-input class="value" v-model="zxspbData.zgrq"></el-input> -->
                  </div>
                </div>
                <div class="basic-c col-f-3">
                  <span class="tit long">门店类别</span>
                  <div class="val">
                    <el-radio-group v-model="zxspbData.mdlb">
                      <el-radio
                        :label="item.dm"
                        v-for="(item, index) in zxspPz.mdlb"
                        :key="index"
                        >{{ item.mc }}</el-radio
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">店铺实际面积</span>
                  <div class="val flexcenter">
                    <el-input class="value" v-model="zxspbData.sjmj"></el-input>
                    <span class="suffix">㎡</span>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <!-- 贸易公司业务经理描述 -->
            <el-timeline-item timestamp="贸易公司业务经理描述" placement="top">
              <div class="after-basic flexcenter">
                <div class="whole flexcenter">
                  <div class="basic-c col-h">
                    <span class="tit longer">本店关闭是经销商</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_1_1"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c col-f">
                    <span class="tit">的第</span>
                    <div class="val flexcenter">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_1_2"
                      ></el-input>
                      <span class="suffix">店/厅</span>
                    </div>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit custom">该经销商还有正常营业利郎专卖店</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_1_3"
                    ></el-input>
                    <span class="suffix">家</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">专卖厅</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_1_4"
                    ></el-input>
                    <span class="suffix">家</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">合计</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_1_5"
                    ></el-input>
                    <span class="suffix">家</span>
                  </div>
                </div>
                <div class="basic-c mutil">
                  <span class="tit longer">关闭该单店的原因</span>
                  <div class="val">
                    <el-checkbox-group v-model="reasonList">
                      <el-checkbox label="1">店租到期房东不租</el-checkbox>
                      <el-checkbox label="2"
                        >租金太高，由原来年租金<span class="line">{{
                          zxspbData.node_1_2_3
                        }}</span
                        >万涨到<span class="line">{{
                          zxspbData.node_1_2_4
                        }}</span
                        >万</el-checkbox
                      >
                      <el-checkbox label="3"
                        >经销商打算从事其它生意，想放弃利郎</el-checkbox
                      >
                      <el-checkbox label="4"
                        >经销商在经营期限内经营亏本，放弃经营利郎</el-checkbox
                      >
                      <el-checkbox label="5"
                        >贸易公司给予强行关闭，原因：<span class="line">{{
                          zxspbData.node_1_2_8
                        }}</span></el-checkbox
                      >
                      <el-checkbox label="6"
                        >其它原因：<span class="line">{{
                          zxspbData.node_1_2_10
                        }}</span></el-checkbox
                      >
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="title-text">针对加盟店</div>
                <div class="whole flexcenter">
                  <div class="basic-c col-h">
                    <span class="tit longer">加盟保证金收取</span>
                    <div class="val flexcenter">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_3_1"
                      ></el-input>
                      <span class="suffix">万</span>
                    </div>
                  </div>
                  <div class="basic-c col-h">
                    <span class="tit long">其它押金收取</span>
                    <div class="val flexcenter">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_3_2"
                      ></el-input>
                      <span class="suffix">万</span>
                    </div>
                  </div>
                </div>
                <div class="title-text">针对直营店</div>
                <div class="flex-between col-f-3">
                  <div class="basic-c col-h">
                    <span class="tit long">租凭押金支付</span>
                    <div class="val flexcenter">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_3_3"
                      ></el-input>
                      <span class="suffix">万</span>
                    </div>
                  </div>
                  <div class="basic-c col-h">
                    <span class="tit longer">通过谈判可以回收</span>
                    <div class="val flexcenter">
                      <el-input
                        class="value"
                        v-model="zxspbData.node_1_3_4"
                      ></el-input>
                      <span class="suffix">万</span>
                    </div>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">转让费支付</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_3_5"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-t">
                  <span class="tit custom">转给其它经营人可收回</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_3_6"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-t-2">
                  <span class="tit long">建议如何退还</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_3_7"
                    ></el-input>
                  </div>
                </div>
                <div class="title-text">补贴</div>
                <div class="basic-c col-h">
                  <span class="tit custom"
                    >该店货柜三年内（商场两年）需总出货</span
                  >
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_1"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">实际总出货</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_6"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit longer">一年内需总订货额</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_7"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">实际订货额</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_8"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit long">总补贴金额</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_2"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-f">
                  <span class="tit">已补贴</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_3"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c col-h">
                  <span class="tit long">剩余补贴金额</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_4_4"
                    ></el-input>
                    <span class="suffix">万</span>
                  </div>
                </div>
                <div class="basic-c">
                  <span class="tit long">剩余补贴处理</span>
                  <div class="val">
                    <el-radio-group v-model="zxspbData.node_1_4_5">
                      <el-radio label="1"
                        >经销商自己愿意放弃剩余补贴。</el-radio
                      >
                      <el-radio label="2">申请剩余补贴总部给予返还。</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="title-text">其他</div>
                <div class="basic-c col-t">
                  <span class="tit long">门牌LOGO在</span>
                  <div class="val flexcenter">
                    <el-input
                      class="value"
                      v-model="zxspbData.node_1_5_1"
                    ></el-input>
                    <span class="suffix">日内全部拆除</span>
                  </div>
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
                    <span class="sign-tit">贸易公司业务经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 贸易公司商品经理 -->
              <el-timeline-item timestamp="贸易公司商品经理" placement="top">
                <div>
                  <div class="box_item">
                    <div>1、关闭店货品如何处理：</div>
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A">经销商自己处理</el-checkbox>
                      <el-checkbox label="复选框 B">贸易公司收回</el-checkbox>
                    </el-checkbox-group>
                    <div>
                      2、是否有订下一季的订单，订单金额<span class="line"
                        >0</span
                      >万
                    </div>
                    <div>
                      3、到<span class="line">2016-11-14</span
                      >日止，应收账情况为：贸易公司欠经销商<span class="line"
                        >0</span
                      >万，经销商欠贸易公司<span class="line">0</span>万
                    </div>
                    <div>其他意见：<span class="strong">同意</span></div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司商品经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 贸易公司财务 -->
              <el-timeline-item timestamp="贸易公司财务" placement="top">
                <div>
                  <div class="box_item">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A"
                        >加盟保证金清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 B"
                        >账目往来清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 A"
                        >库存货品协商妥当</el-checkbox
                      >
                      <el-checkbox label="复选框 B"
                        >货柜补贴清理完毕</el-checkbox
                      >
                    </el-checkbox-group>
                    <div>其他意见：<span class="strong">同意</span></div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司财务：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 贸易公司总经理 -->
              <el-timeline-item timestamp="贸易公司总经理" placement="top">
                <div>
                  <div class="box_item">
                    <div>
                      贸易公司总经理对关闭店铺特殊申请:
                      <span class="strong">同意</span>
                    </div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">贸易公司总经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 销售总监 -->
              <el-timeline-item timestamp="销售总监" placement="top">
                <div>
                  <div class="box_item"></div>
                  <div class="sign-contain">
                    <span class="sign-tit">销售总监：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 政策处初审 -->
              <el-timeline-item timestamp="政策处初审" placement="top">
                <div>
                  <div class="box_item">
                    <div>
                      专卖店13年8月份开业，货柜补贴已返还完毕，申请注销，请领导审批。
                    </div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">政策处初审：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 三中心副总监/总部物流经理 -->
              <el-timeline-item
                timestamp="三中心副总监/总部物流经理"
                placement="top"
              >
                <div>
                  <div class="box_item">
                    <div class="strong">同意</div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">三中心副总监/总部物流经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 领航财务管理部经理 -->
              <el-timeline-item timestamp="领航财务管理部经理" placement="top">
                <div>
                  <div class="box_item">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A"
                        >加盟保证金清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 B"
                        >账目往来清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 C"
                        >库存货品协商妥当</el-checkbox
                      >
                    </el-checkbox-group>
                    <div>其他意见：<span class="strong"></span></div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">领航财务管理部经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 副总裁/营销总监/轻商务总经理 -->
              <el-timeline-item
                timestamp="副总裁/营销总监/轻商务总经理"
                placement="top"
              >
                <div>
                  <div class="box_item">
                    <div class="strong">同意</div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">副总裁/营销总监/轻商务总经理：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 领航财务管理部部长 -->
              <el-timeline-item timestamp="领航财务管理部部长" placement="top">
                <div>
                  <div class="box_item">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A"
                        >加盟保证金清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 B"
                        >账目往来清理完毕</el-checkbox
                      >
                      <el-checkbox label="复选框 C"
                        >库存货品协商妥当</el-checkbox
                      >
                    </el-checkbox-group>
                    <div>其他意见：<span class="strong"></span></div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">领航财务管理部部长：</span>
                    <div class="sign-name"></div>
                  </div>
                </div>
              </el-timeline-item>
              <!-- 政策管理处经理 -->
              <el-timeline-item timestamp="政策管理处经理" placement="top">
                <div>
                  <div class="box_item">
                    <div class="strong">同意</div>
                  </div>
                  <div class="sign-contain">
                    <span class="sign-tit">政策管理处经理：</span>
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
        <div class="no-result">
          <img src="static/img/qieimg.png" alt="" />表格无数据
        </div>
      </template>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
import { getZxspPz, getZxspbData } from '@/network/index';

export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      radio: 3,
      options: [],
      value: '',
      loading: null,
      checked: false,
      checkList: [],
      zxspPz: {}, //注销配置项
      zxspbData: {}, //注销数据
      noneResult: false, // 结果为空
      reasonList: [], //关闭该单店的原因
      showApvl: false //是否展示审批流程
    };
  },
  created() {
    console.log(this.$route);
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getZxspPz();
    this.getZxspbData();
  },
  mounted() {},
  methods: {
    getZxspPz() {
      getZxspPz().then((res) => {
        // this.loading.close();
        console.log(res);
        if (res.data.errcode == 0) {
          this.zxspPz = res.data.data;
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      });
    },
    getZxspbData() {
      getZxspbData().then((res) => {
        this.loading.close();
        console.log(res);
        if (res.data.errcode == 0) {
          this.zxspbData = res.data.data;
          !Object.keys(res.data.data).length && (this.noneResult = true);
          let data = res.data.data;
          let reasons = [
            data.node_1_2_1, //店租到期房东不租:1打钩
            data.node_1_2_2, //租金太高
            data.node_1_2_5, //经销商打算从事其它生意，想放弃利郎
            data.node_1_2_6, //经销商在经营期限内经营亏本，放弃经营利郎
            data.node_1_2_7, //贸易公司给予强行关闭
            data.node_1_2_9 //其它
          ];
          reasons.forEach((item, index) => {
            item == '1' && this.reasonList.push((index + 1).toString());
          });
          console.log('ZxspbData', this.zxspbData);
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/fourth.scss';
.cancelapvl_wrap {
  span.line {
    display: inline-block;
    min-width: 50px;
    border-bottom: 1px solid;
    text-align: center;
    vertical-align: bottom;
    padding: 0 5px;
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
  .box_item {
    margin: 20px 0;
    padding: 10px 20px;
    min-height: 120px;
    border-radius: 5px;
    color: var(--default-text-color);
    border: 1px solid var(--border-color);
    border-left: 8px solid var(--auxiliary-color);
    > div {
      margin-bottom: 10px;
    }
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
  &.mutil {
    align-items: center;
    height: 150px;
    .tit {
      line-height: 150px;
    }
    .el-checkbox-group {
      padding-left: 10px;
    }
  }
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
    &.custom {
      width: auto;
      padding: 0 5px;
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
.col-w {
  width: 100%;
}
.col-h {
  width: 49%;
}
.col-t {
  width: 36.7%;
}
.col-t-2 {
  width: 61.9%;
}
.col-f {
  width: 23.5%;
}
.col-f-3 {
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
.no-result {
  // width: 800px;
  margin: 160px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  img {
    width: 76px;
  }
}
</style>
