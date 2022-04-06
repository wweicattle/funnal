<template>
  <!-- 营销企划方案设计流程  -->
  <div class="planapvl_wrap">
    <box-contain>
      <title-contain
        value="营销企划方案设计流程"
        align="center"
      ></title-contain>
      <el-timeline>
        <!-- 营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定 -->
        <el-timeline-item
          timestamp="营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定"
          placement="top"
        >
          <div class="basic-c">
            <span class="tit">营销政策管理处报送设计时间（设计员）</span>
            <div class="val">
              <el-input class="value" v-model="planApvlData.tzsjrq"></el-input>
            </div>
          </div>
          <div class="basic-c">
            <span class="tit">最后确认时间（利郎总裁）</span>
            <div class="val">
              <el-input class="value" v-model="planApvlData.zbfzcrq"></el-input>
            </div>
          </div>
          <div class="sign-contain">
            <span class="sign-tit">空间设计专员签署：</span>
            <div class="sign-name">{{ planApvlData.zbkjsjy }}</div>
          </div>
          <div class="sign-contain">
            <span class="sign-tit">终端企划部副部长/经理</span>
            <div class="sign-name">{{ planApvlData.zbkjzz }}</div>
          </div>
          <!-- <div class="sign-contain">
            <span class="sign-tit">部长签署：</span>
            <div class="sign-name">{{ planApvlData.zbqhbz }}</div>
          </div> -->
        </el-timeline-item>
        <!-- 市场管理中心平面图审批 -->
        <el-timeline-item timestamp="市场管理中心平面图审批" placement="top">
          <div>
            <div class="box_item">
              <div class="strong"></div>
            </div>
            <div class="sign-contain">
              <span class="sign-tit">市场管理中心副总监签署：</span>
              <div class="sign-name"></div>
            </div>
          </div>
        </el-timeline-item>
        <!-- 领航副总/利郎公司副总裁审批意见 -->
        <el-timeline-item
          timestamp="领航副总/利郎公司副总裁审批意见"
          placement="top"
        >
          <div>
            <div class="box_item">
              <div class="strong">{{ planApvlData.zbfzjlyj }}</div>
            </div>
            <div class="sign-contain">
              <span class="sign-tit">领航副总/利郎公司副总裁签署：</span>
              <div class="sign-name">{{ planApvlData.zbfzjl }}</div>
            </div>
          </div>
        </el-timeline-item>
        <el-timeline-item timestamp="" placement="top"> </el-timeline-item>
      </el-timeline>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TitleContain from '@/components/common/TitleContain.vue';
import { getPlanApproval } from '@/network/index';

export default {
  components: { BoxContain, TitleContain },
  data() {
    return {
      headerObj: { text: '营销企划方案设计流程' },
      loading: null,
      planApvlData: {}
    };
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id==0||(!id)) return;
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getPlanApproval();
  },
  mounted() {},
  methods: {
    getPlanApproval() {
      getPlanApproval().then((res) => {
        console.log('res', res);
        this.loading.close();
        if (res.data.errcode == 0) {
          this.planApvlData = res.data.data;
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(res.data.errmsg)
          );
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.planapvl_wrap {
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
  .strong {
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
  }
  .inp_item_name {
    min-width: 285px;
  }
}
/deep/ .el-input {
  .el-input__inner {
    height: 100%;
    border: none;
    padding: 0 5px;
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
.basic-c {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  border: 1px solid #ececec;
  width: 468px;
  .tit {
    flex-shrink: 0;
    width: 270px;
    background: #f6f7f9;
    text-align: center;
    font-weight: 600;
    border-right: 1px solid #ececec;
  }
  .val {
    flex: 1;
  }
}
</style>
