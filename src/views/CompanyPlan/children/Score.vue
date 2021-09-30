<template>
  <div class="company-plan">
    <box-contain :isshowheader="titleOne">
      <div class="form-box">
        <ul>
          <li>
            <span>款式：</span>
            <el-radio-group v-model="form.opinion">
              <el-radio label="0">专卖店</el-radio>
              <el-radio label="1">商场</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>验收日期：</span>
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
            </el-date-picker>
          </li>
        </ul>
        <div>
          <p style="font-weight: bold;font-size=16px">用户</p>
        </div>
        <ul>
          <li>
            <span>公司全称：</span>
            <el-input></el-input>
          </li>
          <li>
            <span>联系人：</span>
            <el-input></el-input>
          </li>
          <li>
            <span>联系电话：</span>
            <el-input></el-input>
          </li>
          <li>
            <span>专卖店全称：</span>
            <el-input></el-input>
          </li>
          <li>
            <span>联系人：</span>
            <el-input></el-input>
          </li>
          <li>
            <span>联系电话：</span>
            <el-input></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain>
      <div class="table-box">
        <table-contain :tableData="table.selectVal" :tableLabel="table.tableLabel"></table-contain>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import TableContain from '@/components/common/TableContain';
export default {
  name: 'Score',
  components: { BoxContain, TableContain },
  data() {
    return {
      titleOne: { text: '验收标准' },
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
          },{
            yslb: '形象板墙',
            ysxm: '2000*1500*750',
            per: '平方',
            ysbz: 3.5,
            yskc: 0.0,
            ysjf: 500.0,
            bz: '-'
          },{
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
@import '../myBasic.scss';
</style>