<template>
  <!-- 开户审批批示 -->
  <div class="apvlins_wrap">
    <box-contain :isshowheader="headerObj">
      <div class="zone_one">
        <div class="inp_item">
          <label class="inp_item_name" for="tradeCor">贸易公司：</label>
          <el-input id="tradeCor"></el-input>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">加盟性质：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">主品牌直营店</el-radio>
            <el-radio :label="2">主品牌加盟店</el-radio>
            <el-radio :label="3">轻商务直营店</el-radio>
            <el-radio :label="4">轻商务加盟店</el-radio>
          </el-radio-group>
        </div>
        <div class="cols_two flex-between">
          <div class="inp_item">
            <label class="inp_item_name" for="customCode">客户代码：</label>
            <el-input id="customCode"></el-input>
          </div>
          <div class="inp_item required">
            <label class="inp_item_name" for="customName">客户名称：</label>
            <el-input id="customName"></el-input>
          </div>
          <div class="inp_item">
            <label class="inp_item_name" for="storeCode">门店代码：</label>
            <el-input id="storeCode"></el-input>
          </div>
          <div class="inp_item">
            <label class="inp_item_name" for="stroeName">门店名称：</label>
            <el-input id="stroeName"></el-input>
          </div>
          <div class="inp_item required">
            <label class="inp_item_name" for="aoName">开户姓名：</label>
            <el-input id="aoName"></el-input>
          </div>
          <div class="inp_item">
            <label class="inp_item_name" for="useTime">店铺启用日期：</label>
            <el-input id="useTime"></el-input>
          </div>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">开户类型：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">增设新客户，采取独立套账</el-radio>
            <el-radio :label="2">在原有客户下开分店，公用一个套账</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">门店类别：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">专卖店</el-radio>
            <el-radio :label="2">商场</el-radio>
            <el-radio :label="2">MALL</el-radio>
            <el-radio :label="2">快闪店</el-radio>
            <el-radio :label="2">特卖店</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">区域分类：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>选择该店铺的相关负责人</h3>
      <div class="zone_two cols_two flex-between">
        <div class="inp_item charge_time">
          <label class="inp_item_name" for="chargeYM">负责开始年月：</label>
          <el-input
            id="chargeYM"
            placeholder="填写以下人员负责店铺的开始年月"
          ></el-input>
          <span>格式如：201105</span>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="salesman">业务员：</label>
          <el-input id="salesman"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="salasMgr">业务经理：</label>
          <el-input id="salasMgr"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="orderProc">理单员：</label>
          <el-input id="orderProc"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="LoginsticMgr">物流经理：</label>
          <el-input id="LoginsticMgr"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="terminalSpec">终端专员：</label>
          <el-input id="terminalSpec"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="terminalMgr">终端经理：</label>
          <el-input id="terminalMgr"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="GM">总经理：</label>
          <el-input id="GM"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="HRMgr">人资经理：</label>
          <el-input id="HRMgr"></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="regionalMgr">大区经理：</label>
          <el-input id="regionalMgr"></el-input>
        </div>
      </div>
      <h3>贸易公司业务经理描述</h3>
      <div class="zone_three">
        <div class="inp_item">
          <label class="inp_item_name" for="distributor">该店是经销商：</label>
          <el-input id="distributor" placeholder=""></el-input
          ><span>开设的第</span> <el-input></el-input><span>家店/厅</span>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="mainMgr">主要经营者是：</label>
          <el-input id="mainMgr" placeholder=""></el-input>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="legalPer">营业执照法人是：</label>
          <el-input id="legalPer" placeholder=""></el-input>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">该经营者经营理念：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">优</el-radio>
            <el-radio :label="2">良</el-radio>
            <el-radio :label="2">一般</el-radio>
            <el-radio :label="2">差</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item" style="margin-right: 0">
          <label class="inp_item_name" for="dcFee">资金实力：店铺装修</label>
          <el-input id="dcFee" placeholder=""></el-input><span>万；货品</span>
          <el-input></el-input><span>万；年租金</span> <el-input></el-input
          ><span>万；首批资金付：</span> <el-input></el-input><span>万</span>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">租金实行：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">月付</el-radio>
            <el-radio :label="2">季付</el-radio>
            <el-radio :label="2">半年付</el-radio>
            <el-radio :label="2">年付</el-radio>
            <el-radio :label="2">两年付</el-radio>
            <el-radio :label="2">多年付</el-radio>
            <el-radio :label="2">本人店铺</el-radio>
            <el-radio :label="2">商场扣点</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">综上资金实力为：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">A级</el-radio>
            <el-radio :label="2">B级</el-radio>
            <el-radio :label="2">C级</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item">
          <span class="inp_item_name">店铺选址路段为：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">A级路段</el-radio>
            <el-radio :label="2">B级路段</el-radio>
            <el-radio :label="2">C级路段</el-radio>
          </el-radio-group>
        </div>
        <div class="inp_item">
          <label class="inp_item_name" for="annualShipment"
            >估计年出货额可达：</label
          >
          <el-input id="annualShipment" placeholder=""></el-input
          ><span>万；零售额可达</span> <el-input></el-input><span>万</span>
        </div>
        <div class="inp_item">
          本人确保该经销商能为利郎经营三年以上，现申请给予开户
        </div>
        <div class="sign_item flex-end">
          <span>贸易公司业务经理签署：</span>
          <div class="sign"></div>
        </div>
      </div>
      <title-contain value="贸易公司业务经理"></title-contain>
      <section>
        <div class="sign_item flex-end">
          <span>贸易公司业务经理签署：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="贸易公司物流经理"></title-contain>
      <section>
        <div class="inp_item">
          根据业务谈判情况，对该经销商估计年出货<span class="line">150</span
          >万，零售额<span class="line">200</span>万，申请给予开户。
        </div>
        <div class="inp_item others">
          其他意见：<span class="strong">现申请给予开户！</span>
        </div>
        <div class="sign_item flex-end">
          <span>贸易公司物流经理签署：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="总部物流经理"></title-contain>
      <section>
        <div class="item strong">同意</div>
        <div class="sign_item flex-end">
          <span>贸易公司物流经理签署：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="政策处初审"></title-contain>
      <section>
        <ul>
          <li class="inp_item">1、本店是该经销商吴平开设的第1家店/厅。</li>
          <li class="inp_item">
            2、该店的主要经营者及营业执照法人与加盟审批表填写的资料相吻合。
          </li>
        </ul>
        <div class="inp_item others">
          其他意见： <span class="strong">基本资料齐全，现申请开户！</span>
        </div>
        <div class="sign_item flex-end">
          <span>政策处初审：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="政策处经理初审"></title-contain>
      <section>
        <div class="item strong">已审核，该店更换新编码。</div>
        <div class="sign_item flex-end">
          <span>政策处经理初审：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="销售综合管理部部长"></title-contain>
      <section>
        <div class="item strong">同意开户</div>
        <div class="sign_item flex-end">
          <span>销售综合管理部部长：</span>
          <div class="sign"></div>
        </div>
      </section>
      <title-contain value="领航财务"></title-contain>
      <section>
        <div class="sign_item flex-end">
          <span>领航财务：</span>
          <div class="sign"></div>
        </div>
      </section>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
import { getKaihuData } from '@/network/index';

export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      headerObj: { text: '开户申请表' },
      radio: 3,
      options: [],
      value: ''
    };
  },
  created() {
    getKaihuData().then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/css/fourth.scss';
.apvlins_wrap {
  .inp_item {
    margin-top: 20px;
    margin-right: 35px;

    &.required > .inp_item_name::before {
      content: '*';
      color: #f13e3e;
      position: absolute;
      left: -10px;
      top: 0;
    }

    .inp_item_name {
      position: relative;
      margin-right: 10px;
      display: inline-block;
      text-align: right;
    }
  }

  .strong {
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
  }
  section {
    position: relative;
    min-height: 80px;
    padding-left: 20px;
    padding-bottom: 15px;

    .sign_item {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 15px;
    }

    .line {
      border-bottom: 1px solid;
    }

    .others {
      font-size: 16px;
    }
  }
  .sign_item {
    margin: 20px 0 30px 0;
    color: var(--text-color);
  }
  .zone_one {
    padding-left: 41px;
  }
  .cols_two {
    width: 578px;
    flex-wrap: wrap;
  }
  .zone_two {
    width: 608px;
  }
  .zone_two .inp_item_name {
    min-width: 98px;
  }
  .charge_time {
    .el-input {
      width: 349px;
    }
    span {
      color: var(--remind-text-color);
      margin-left: 10px;
    }
  }
  .zone_three .inp_item_name {
    min-width: 126px;
  }
  .zone_three span {
    padding: 0 10px;
  }
}
/deep/.el-input {
  font-size: var(--font-size);
  width: 160px;
  height: 24px;
  line-height: 24px;
  .el-input__inner {
    height: 24px;
    line-height: 24px;
  }
}
/deep/.el-input__icon {
  line-height: 24px;
}
</style>
