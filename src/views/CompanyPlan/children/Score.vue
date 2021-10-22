<template>
  <div class="partialPublic company-plan">
    <box-contain>
      <div class="box-contains">
        <title-contain value="LILANZ利郎装修验收评分" align="center"></title-contain>
        <div class="box-timeline">
          <el-timeline>
            <el-timeline-item timestamp="基本信息" placement="top">
              <div class="box-basic flexcenter salesman special">
                <div class="basic-c one-third-one">
                  <span class="tit small_4">款式</span>
                  <div class="val">
                    <el-radio-group v-model="bjqdData.kslx">
                      <el-radio :label="1">专卖店</el-radio>
                      <el-radio :label="2">商场</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">验收日期</span>
                  <div class="val">
                    <el-date-picker v-model="bjqdData.rq" type="date" placeholder="选择日期"></el-date-picker>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="用户" placement="top">
              <div class="box-basic flexcenter salesman special">
                <div class="basic-c one-third-one">
                  <span class="tit small_4">公司全称</span>
                  <div class="val">
                    <el-input v-model="bjqdData.fgskhmc"></el-input>
                  </div>
                </div>
                <div class="basic-c one-third-two">
                  <span class="tit small_3">联系人</span>
                  <div class="val">
                    <el-input v-model="bjqdData.fgslxr"></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系电话</span>
                  <div class="val">
                    <el-input v-model="bjqdData.fgsphone"></el-input>
                  </div>
                </div>
                <div class="basic-c one-third-one">
                  <span class="tit small_4">专卖店全称</span>
                  <div class="val">
                    <el-input v-model="bjqdData.zmdmc"></el-input>
                  </div>
                </div>
                <div class="basic-c one-third-two">
                  <span class="tit small_3">联系人</span>
                  <div class="val">
                    <el-input v-model="bjqdData.zmdlxr"></el-input>
                  </div>
                </div>
                <div class="basic-c one-third">
                  <span class="tit small_4">联系电话</span>
                  <div class="val">
                    <el-input v-model="bjqdData.zmdphone"></el-input>
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
      <footer>
        <div class="foot-names flexcenter">
          <div>
            制单人:
            <span class="pri-weight">{{bjqdData.zdr}}</span>
          </div>
          <div>
            空间组组长:
            <span class="pri-weight">{{bjqdData.zzshr}}</span>
          </div>
          <div>
            营销中心企划部长:
            <span class="pri-weight">{{bjqdData.bzshr}}</span>
          </div>
          <div>
            贸易公司签署:
            <span class="pri-weight"></span>
          </div>
        </div>
      </footer>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain.vue';
import TableContain from '@/components/common/TableContain';
import { getBjqdData } from '@/network/index';
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
          { name: '验收类别', attr: 'lb' },
          { name: '验收项目', attr: 'spmc' },
          { name: '分数占比（%）', attr: 'sl' },
          { name: '验收标准', attr: 'spgg' },
          { name: '验收扣除', attr: 'yskf' },
          { name: '验收计分', attr: 'yszf' },
          { name: '备注', attr: 'bz' }
        ],
        selectVal: [
        ]
      },
      loading:null,
      bjqdData:{},
    };
  },
  created() {
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getBjqdData();
  },
  methods: {
    getBjqdData(){
      getBjqdData().then((res)=>{
        this.loading.close();
        console.log(res);
        if(res.data.errcode == 0){
          let data = res.data.data;
          data.mxlist.forEach(item => {
            // 1/门面部分|2/店堂部分|3/其它|
            switch (item.lb) {
              case 1:
                item.lb = '门面部分';
                break;
              case 2:
                item.lb = '店堂部分';
                break;
              case 3:
                item.lb = '其它';
                break;
              default:
                break;
            }
          });
          this.bjqdData = data;
          this.table.selectVal = data.mxlist
          console.log(this.bjqdData);
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      })
    }
  },
};
</script>

<style scoped lang="scss">
.company-plan {
  background-color: var(--main-back);
  .gray_back {
    margin-top: 10px;
  }
  /deep/ .el-radio-group {
    justify-content: center;
    .el-radio {
      margin-right: 20px;
    }
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
.pri-weight {
  font-weight: 600;
}
.foot-names {
  margin: 50px 0 0 0;
  justify-content: space-between;
  & span {
    margin-left: 10px;
  }
}
</style>