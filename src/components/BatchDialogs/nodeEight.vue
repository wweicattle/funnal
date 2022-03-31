// 平面设计图
<template>
  <div class="partialPublic dialog-page">
    <div class="d-title">
      <span class="d-spot"></span>
      <p>
        <span>营销企划方案设计流程</span>
        <span>/PROCESS DESIGN</span>
      </p>
    </div>
    <div class="d-node">
      <p>营销中心企划部专卖店图纸（施工图、平面图、效果图）方案确定</p>
    </div>
    <div class="d-content">
      <div class="box-basic flexcenter salesman special">
        <div class="basic-c radioL">
          <span class="tit">营销政策管理处报送设计时间（设计员）</span>
          <div class="val">
            <!-- <el-input v-model="nodeResult.tzsjrq" disabled></el-input> -->
            <el-date-picker
              value-format="yyyy-MM-dd"
              v-model="nodeResult.tzsjrq"
              disabled
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </div>
        <div class="basic-c radioL" v-if="nodeCs == 8">
          <span class="tit">面积</span>
          <div class="val">
            <el-input v-model="nodeResult.zbmj"></el-input>
            <span class="unit"> 平方米 </span>
          </div>
        </div>
      </div>
      <div class="box-basic flexcenter salesman special" v-if="nodeCs == 8">
        <div class="basic-c radioL">
          <span class="tit" style="width: 255px">是否要求改图</span>
          <div class="val">
            <el-radio-group v-model="nodeResult.picbs">
              <el-radio :label="0">贸易公司要求改图</el-radio>
              <el-radio :label="1">总公司要求改图</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="basic-c">
          <span class="tit" style="width: 255px">改图次数</span>
          <div class="val" style="width: 70px">
            <el-select placeholder="请选择" v-model="nodeResult.picxgcs">
              <el-option
                v-for="(num, index) in picxgcs"
                :key="index"
                :label="num.mc"
                :value="num.dm"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="basic-c large" style="flex: 1; margin-left: 20px">
          <span class="tit">改图原因</span>
          <div class="val more-than-two">
            <el-select placeholder="请选择" v-model="nodeResult.picxgyy">
              <!-- <el-option value="未选择"></el-option> -->
              <el-option
                v-for="(yy, index) in picxgyy"
                :key="index"
                :label="yy.mc"
                :value="JSON.parse(yy.dm)"
              ></el-option>
            </el-select>
            <el-input v-model="setForm.qtyy"></el-input>
          </div>
        </div>
      </div>
      <div class="box-btns flexcenter" style="margintop: 15px">
        <el-button @click="goback">返回</el-button>
        <el-button v-checkSubmit v-if="nodeCs == 8" type="primary"
          >空间设计专员确认</el-button
        >
        <el-button v-checkSubmit v-if="nodeCs == 9" type="primary"
          >空间组组长确认</el-button
        >
        <el-button v-checkSubmit v-if="nodeCs == 10" type="primary"
          >部长签署确认</el-button
        >
      </div>
    </div>
    <div class="box-basic flexcenter salesman special">
      <div class="sign">
        <div class="sign-contain">
          <span class="sign-tit">空间设计专员：</span>
          <div class="sign-name">{{ nodeResult.zbkjsjy }}</div>
        </div>
        <div class="sign-contain">
          <span class="sign-tit">空间组组长：</span>
          <div class="sign-name">{{ nodeResult.zbkjzz }}</div>
        </div>
        <!-- <div class="sign-contain">
          <span class="sign-tit">部长签署：</span>
          <div class="sign-name">{{nodeResult.zbqhbz}}</div>
        </div> -->
      </div>
    </div>
    <div class="d-remarks">
      <p class="box-title">
        <span>备注</span>
      </p>
      <div class="box-content">
        <div>
          <ol>
            <li>空间设专员根据实际测量图纸，填写营业面积；</li>
            <li>
              营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积；
            </li>
            <li>必须上传空间[店铺平面图]、[店铺施工图]、[店铺效果图]</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNodeYxqh, getPicxg, setNode } from '@/network/index.js';
export default {
  data() {
    return {
      nodeCs: 8,
      myDjid: '',
      userInfo: {},
      nodeResult: { picbs: 0 ,zbmj:0},
      picxgcs: {},
      picxgyy: {},
      setForm: {
        area: '',
        rent: '',
        level: '0',
        num: [0, 1, 2, 3],
        yy: ['尺寸错误', '需求不明', '观念冲突', '其他'],
        numSelect: '',
        reason: ''
      }
    };
  },
  mounted() {
    this.nodeCs = this.$store.state.userData.nodeData.cs;
    this.myDjid = this.$store.state.userData.urlData.id;
    this.userInfo = this.$store.state.userData.userInfo;
    this.getNodePicxg();
    this.getNodeYxqh();
  },
  methods: {
    //  暂时作废
    // getNode501() {
    //   getPlanApproval()
    //     .then((res) => {
    //       if (res.status == 200) {
    //         if (res.data.errcode == 0) {
    //            res.data.data.picbs=-1
    //           this.nodeResult = res.data.data;
    //           console.log(this.nodeResult);
    //         } else {
    //           this.$Message.error(
    //             '获取数据失败！' + JSON.stringify(res.data.errmsg)
    //           );
    //         }
    //       } else {
    //         this.$Message.error(
    //           '接口查询失败！' + JSON.stringify(res.statusText)
    //         );
    //       }
    //     })
    //     .catch((err) => {});
    // },
    getNodeYxqh() {
      getNodeYxqh(this.myDjid)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.nodeResult = res.data.data;
              // 根据业务需求,在点击办理时都要默认用户名为姓名
              let names = this.$store.state.userData.userInfo.username;
              // this.nodeResult.zbkjsjy = names;
              this.nodeResult.zbkjzz = names;
              this.nodeResult.zbqhbz = names;
            } else {
              this.$Message.error(
                '数据查询失败' + JSON.stringify(res.data.errmsg)
              );
            }
          } else {
            this.$Message.error(
              '接口调用失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
    },
    getNodePicxg() {
      getPicxg('3503', 'getPicxgcs')
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.picxgcs = res.data.data;
            } else {
              this.$Message.error('错误：' + JSON.stringify(res.data.errmsg));
            }
          } else {
            this.$Message.error(
              '接口调用失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
      getPicxg('3502', 'getPicxgyy')
        .then((res) => {
          if (res.status == 200) {
            if (res.data.errcode == 0) {
              this.picxgyy = res.data.data;
              console.log(this.picxgyy);
            } else {
              this.$Message.error('错误：' + JSON.stringify(res.data.errmsg));
            }
          } else {
            this.$Message.error(
              '接口调用失败！' + JSON.stringify(res.statusText)
            );
          }
        })
        .catch((err) => {});
    },
    setNode(nCs) {
      // this.$confirm('确定提交办理?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(() => {
      let re = this.nodeResult;
      if (nCs == 8) {
        let data = {
          method: 'saveJmsp',
          router: 'jmsp',
          data: {
            jmspmx: {
              picxgyy: re.picxgyy,
              id: this.myDjid,
              picxgcs: JSON.stringify(re.picxgcs),
              zbkjsjyrq: ' ',
              zbkjsjy: this.userInfo.username,
              picbs: re.picbs
            },
            jmsp: {
              id: this.myDjid,
              jzmj: re.zbmj,
              zbmj: re.zbmj,
              sjmj: re.zbmj
            }
          }
        };
        setNode('3501', data)
          .then((res) => {
            if (res.status == 200) {
              if (res.data.errcode == 0) {
                this.$Message.success(JSON.stringify(res.data.errmsg));

                /*执行办理 */
                /*插入办理页面*/
                this.$parent.$emit('myFlowsend');

                this.goback();
              } else {
                this.$Message.error(
                  '数据保存失败！' + JSON.stringify(res.data.errmsg)
                );
              }
            } else {
              this.$Message.error(
                '接口调用失败！' + JSON.stringify(res.statusText)
              );
            }
          })
          .catch((err) => {
            this.$Message.error('接口调用失败！' + JSON.stringify(err));
          });
      } else if (nCs == 9) {
        let data = {
          router: 'jmsp',
          method: 'saveJmsp',
          data: {
            jmspmx: {
              zbkjzzrq: ' ',
              zbkjzz: this.userInfo.username,
              id: this.myDjid
            }
          }
        };
        setNode('3505', data)
          .then((res) => {
            if (res.status == 200) {
              if (res.data.errcode == 0) {
                this.$Message.success(JSON.stringify(res.data.errmsg));

                /*执行办理 */
                /*插入办理页面*/
                this.$parent.$emit('myFlowsend');

                this.goback();
              } else {
                this.$Message.error(
                  '数据保存失败！' + JSON.stringify(res.data.errmsg)
                );
              }
            } else {
              this.$Message.error(
                '接口调用失败！' + JSON.stringify(res.statusText)
              );
            }
          })
          .catch((err) => {
            this.$Message.error('接口调用失败！' + JSON.stringify(err));
          });
      } else if (nCs == 10) {
        let data = {
          router: 'jmsp',
          method: 'saveJmsp',
          data: {
            jmspmx: {
              zbqhbzrq: ' ',
              tzqrrq: re.tzqrrq,
              zbqhbz: this.userInfo.username,
              id: this.myDjid
            }
          }
        };
        setNode('3506', data)
          .then((res) => {
            if (res.status == 200) {
              if (res.data.errcode == 0) {
                this.$Message.success(JSON.stringify(res.data.errmsg));

                /*执行办理 */
                /*插入办理页面*/
                this.$parent.$emit('myFlowsend');

                this.goback();
              } else {
                this.$Message.error(
                  '数据保存失败！' + JSON.stringify(res.data.errmsg)
                );
              }
            } else {
              this.$Message.error(
                '接口调用失败！' + JSON.stringify(res.statusText)
              );
            }
          })
          .catch((err) => {
            this.$Message.error('接口调用失败！' + JSON.stringify(err));
          });
      } else {
        console.log('未传入节点参数');
      }
      // })
      // .catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消确认'
      //   });
      // });
    },
    goback() {
      this.$parent.$emit('closedialog');
    },
    directiveMsg() {
      //'这个方法返回错误提示;提示关闭后，定位到第一个错误地方'
      this.$alert('数据不合法，请检查修改！', '提示', {
        confirmButtonText: '确定',
        callback: (action) => {
          return;
        }
      });
    },
    mysendNode() {
      this.setNode(this.nodeCs);
    }
  }
};
</script>

<style scoped lang='scss'>
.dialog-page {
  .basic-c .tit {
    width: 255px;
  }
  .box-table {
    margin-top: 0;
    .b-bable-head,
    .b-bable-content-hr {
      > div {
        &:first-child {
          width: 85px;
          .my-line-input {
            width: 50px;
          }
        }
        &:nth-child(2) {
          width: 85px;
          .my-line-input {
            width: 45px;
          }
        }
        &:nth-child(3) {
          width: 120px;
        }
        &:nth-child(4) {
          width: 180px;
          .my-line-input {
            width: 40px;
          }
        }
      }
    }
  }
  .box-basic {
    .basic-c {
      .val {
        position: relative;
        .unit {
          position: absolute;
          right: 10px;
          top: 0;
          z-index: 100;
          background: #fff;
          color: #999999;
        }
      }
      .more-than-two {
        display: flex;
      }
    }
  }
}
</style>