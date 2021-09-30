<template>
  <div class="company-plan">
    <box-contain>
      <div class="box-contains">
        <title-contain value="LILANZ利郎装修验收评分" align="center"></title-contain>
        <div class="box-timeline">
          <el-timeline>
            <el-timeline-item timestamp="基本信息" placement="top">
              <div class="box-basic flexcenter salesman special">
                <div class="basic-c one-third">
                  <span class="tit small_2">款式</span>
                  <div class="val">
                    <el-radio-group v-model="form.opinion">
                      <el-radio label="0">专卖店</el-radio>
                      <el-radio label="1">商场</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">验收日期</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="用户" placement="top">
              <div class="box-basic flexcenter salesman special">
                <div class="basic-c one-third">
                  <span class="tit small_4">公司全称</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系人</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系电话</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">专卖店全称</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系人</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系电话</span>
                  <div class="val">
                    <el-input></el-input>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item> </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </box-contain>
    <box-contain class="gray_back">
      <div class="table-box">
        <table-contain :tableData="table.selectVal" :tableLabel="table.tableLabel"></table-contain>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain.vue';
import TableContain from '@/components/common/TableContain';
export default {
  name: 'Score',
  components: { BoxContain, TitleContain, TableContain },
  data() {
    return {
      form: {
        opinion: '0',
        date: ''
      },
      table: {
        tableLabel: [
          { name: '验收类别', attr: 'yslb' },
          { name: '验收项目', attr: 'ysxm' },
          { name: '分数占比（%）', attr: 'per' },
          { name: '验收标准', attr: 'ysbz' },
          { name: '验收扣除', attr: 'yskc' },
          { name: '验收计分', attr: 'ysjf' },
          { name: '备注', attr: 'bz' }
        ],
        selectVal: [
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },
          {
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '@/views/StorePolicy/shop-basic-assets/myBasic.scss';
@import '@/views/StorePolicy/shop-basic-assets/uiReadjust.scss';
.company-plan {
  background-color: var(--main-back);
  .gray_back{
    margin-top: 10px;
  }
}
</style>