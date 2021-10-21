<template>
  <div>
    <!-- <box-contain> -->
    <box-contain>
      <div class="b-content">
        <div class="tables-contain">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column align='center' prop="date" label="出货额" width="60">
            </el-table-column> -->

            <el-table-column align="center" label="出货额">
              <el-table-column
                align="center"
                prop="chksrq"
                label="开始计算出货时间"
                min-width="80"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="chje"
                label="金额"
                min-width="70"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="回款额">
              <el-table-column
                align="center"
                prop="hkksrq"
                label="开始计算回款时间"
                min-width="90"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="hkje"
                label="金额"
                min-width="50"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="实际补贴">
              <el-table-column
                align="center"
                prop="je1"
                label="第一次补贴"
                min-width="60"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="je2"
                label="第二次补贴"
                min-width="60"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="je3"
                label="第三次补贴"
                min-width="60"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" prop="wbtje" label="未补贴金额">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </box-contain>
    <!-- </box-contain> -->
    <!-- <box-contain>
      <div class="subsidy-contain">
        <ul>
          <li>
            <div class="tit">
              <img src="static/img/goods1.png" alt="" />
              <span class="name">出货额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">
              <img src="static/img/goods2.png" alt="" />
              <span class="name">回额款</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">
              <img src="static/img/goods3.png" alt="" />
              <span class="name">补贴金额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
          <li>
            <div class="tit">
              <img src="static/img/goods4.png" alt="" />
              <span class="name">未补贴金额</span>
            </div>
            <div class="val">
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
              <div class="text">
                <span class="attr">开始出货时间</span>
                <span class="attr-val">2020-12-12</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </box-contain> -->
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TableContain from '@/components/common/TableContain';
import { getActucalMoney } from '@/network';
export default {
  data() {
    return {
      tableData: [
        {
          zbtje: 45600.0,
          hkksrq: '2013-06-22 00:00:00',
          je2: 45600.0,
          chksrq: '2013-06-20 00:00:00',
          je1: 177167.0,
          je3: 200000.0,
          id: 7449,
          chje: 8746032.54,
          hkje: 0.0,
          rq: '2014-09-16 14:51:12',
          wbtje: -377167.0
        }
      ]
    };
  },
  created() {
    // 请求数据
    this.getActucalMoney();
  },
  mounted() {},
  methods: {
    getActucalMoney() {
      getActucalMoney().then((da) => {
        if (da.data.errcode == 0) {
          // 处理接口返回数据
          this.tableData=da.data.data;
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(da.data.errmsg)
          );
        }
      });
    }
  },
  components: {
    BoxContain,
    TableContain
  }
};
</script>

<style scoped lang="scss">
.subsidy-contain {
  padding: 0 15px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49.2%;
      margin-bottom: 15px;
      border-radius: 4px;
      padding: 6px 10px;
      border: 1.4px solid var(--line-color);
      .tit {
        height: 30px;
        // border: 1px solid #ccc;
        display: flex;
        align-items: center;
        img {
          height: 80%;
        }
        .name {
          padding-left: 6px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-color);
        }
      }
      .val {
        .text {
          margin: 20px 0;
          display: flex;
          .attr {
            text-align: right;
            width: 100px;
            margin-right: 14px;
          }
          .attr-val {
            font-weight: 600;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
