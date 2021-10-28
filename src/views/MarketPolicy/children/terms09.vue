<template>
  <div class="terms">
    <div class="terms_content">
      <div class="terms_html scrollbar-css" ref="html" @scroll="scrollEvent">
        <table border="0px" width="100%" style="margin: 0px">
          <tbody>
            <tr>
              <h1>09年营销政策条款</h1>
            </tr>
            <td style="font-size: 14px">
              <div>
                <div style="display: flex">
                  1、
                  <div>
                    装修返还款项自开业起三年内(商场两年内)给予返还完毕，满三年(商场满两年)尚未返还完毕的，只按完成出货额的比例进行返还，期满后未返还款项的，不再给予返还
                  </div>
                </div>
                <div style="display: flex">
                  2、
                  <div>专卖店营业面积低于100平方米的原则上不予开设；</div>
                </div>
                <div style="display: flex">
                  3、
                  <div>
                    货柜、灯具、标识、模特、辅助道具等费用专卖店必须在道具下单前一次性打入公司营销中心指定的银行帐户；
                    <b>该笔费用金额允许各贸易公司给予该专卖店超款发货；</b
                    >关于装修补贴金额经销商首次申请返还后，就不再享受本次超款待遇；（老加盟商按该政策执行，新加盟商不享受该政策）
                  </div>
                </div>
                <div style="display: flex">
                  4、
                  <div>
                    新装修店铺必须使用公司IT系统网络，用手工记帐的，公司不予承认，亦不享受装修补贴政策；自该店开始营业起，电脑系统自动生成该店独立账套系统，并开始计算该店的出货回款额，如果经销商中途没有录入出入库数据，影响补贴金额或时间，由经销商自行负责；
                  </div>
                </div>
                <div style="display: flex">
                  5、
                  <div>
                    一年三次大型订货会时各单店独立订货、输单，做为装修补贴政策的重要参考依据；
                  </div>
                </div>
                <div style="display: flex">
                  6、
                  <div>
                    各经销商在装修时必须严格按照营销中心终端企划部的标准进行装修，如果在验收时未达标的，按照各项比例的分数确定该店铺的补贴总金额进行补贴（具体考核办法参照营销中心终端企划部的验收评估标准表）；最低标准95分以上者给予全额返还；
                  </div>
                </div>
                <div style="display: flex">
                  7、
                  <div>补贴金额不含空调、电脑、电视等固定资产；</div>
                </div>
                <div style="display: flex">
                  8、
                  <div>
                    营业面积不含仓库面积，但包含卖场内的试衣间面积和卖场内的卫生间面积；
                  </div>
                </div>
                <div style="display: flex">
                  9、
                  <div>
                    专卖店照片由经销商或店长按拍摄要求直接上传ERP系统指定位置，并于店铺开业一个星期之内上传完毕，超出前台收银首次开单起一个星期内未上传的，系统将无法受理照片的上传，即无法办理货柜、灯具报销手续。
                  </div>
                </div>
              </div>
            </td>
          </tbody>
        </table>
      </div>
      <div class="terms_agree">
        <div class="agree_btn">
          <el-checkbox v-model="checked">已阅读并同意以上条款</el-checkbox>

          <!-- <img src="../编组 10.png" alt />
          
          <span>已阅读并同意以上条款</span> -->
        </div>
        <div class="terms_sign">
          <span>经销商同意以上条款签署：</span>
          <div></div>
        </div>
        <div class="terms_sign">
          <span>贸易公司总经理同意以上条款签署：</span>
          <div></div>
        </div>
      </div>
    </div>
    <div class="terms_nav">
      <div class="terms_nav_title">条款目录</div>
      <div class="termas_nav_item" v-if="anchorList.length == 0">
        <p>暂无目录</p>
      </div>
      <div
        class="termas_nav_item"
        v-for="(item, index) in anchorPoint"
        :key="index"
      >
        <p
          :class="{ 'termas_nav_item-active': anchor.parent == item.href }"
          class="nav1"
          @click="goAnchor(item)"
        >
          {{ item.name }}
        </p>
        <div class="nav2" v-for="(child, k) in item.children" :key="k">
          <p
            :class="{ 'termas_nav_item-active': anchor.child == child.href }"
            @click="goAnchor(child)"
          >
            {{ child.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      anchorPoint: [],
      anchor: {},
      anchorList: [],
      htmls: '',
      checked: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      const col = this.$refs.html.querySelectorAll('.col');
      col.forEach((element) => {
        let obj = {
          name: element.querySelector('.h2').outerText,
          href: '#' + element.querySelector('.h2').id,
          children: []
        };
        this.anchorList.push({
          name: element.querySelector('.h2').outerText,
          href: '#' + element.querySelector('.h2').id
        });
        element.querySelectorAll('.h3').forEach((item) => {
          obj.children.push({ name: item.outerText, href: '#' + item.id });
          this.anchorList.push({ name: item.outerText, href: '#' + item.id });
        });
        this.anchorPoint.push(obj);
      });
    });
  },
  methods: {
    ...mapMutations({ editPolicy: 'SET_POLICY' }),

    goAnchor(selector) {
      const anchor = this.$el.querySelector(selector.href);
      anchor.scrollIntoView(true);
    },
    scrollEvent() {
      let anchorPoint = this.anchorPoint;
      const scrollTop = this.$refs.html.scrollTop;
      let anchor = {};
      scrollTop &&
        anchorPoint.forEach((ele) => {
          if (
            this.$el.querySelector(ele.href).offsetTop <
            scrollTop + this.$refs.html.clientHeight * 0.8
          ) {
            ele.children.forEach((item) => {
              this.$el.querySelector(item.href).offsetTop < scrollTop &&
                this.$set(anchor, 'child', item.href);
            });
            anchor.parent = ele.href;
            if (ele.children.length == 0) {
              anchor.child = '';
            }
          }
        });
      this.anchor = anchor;
    }
  },
  watch: {
    checked(newVal) {
      console.log(newVal);
      let obj = { index: 1, val: newVal };
      this.editPolicy(obj);
    }
  }
};
</script>


<style scoped lang="scss" src="./mixin.scss">
</style>
