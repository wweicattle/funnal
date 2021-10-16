<template>
  <div class="store-information">
    <box-contain style="padding-bottom:0;">
      <title-contain value="系统客户信息" align="center"></title-contain>
      <div class="att-top">
        <div class="basic-c sys">
          <span class="tit">系统门店名</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">加盟性质</span>
          <div class="val">
            <el-input class="value" v-model="data.jmxz"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">所属客户名称</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">专卖店名称</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">联系人</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>

        <div class="basic-c sys">
          <span class="tit">联系电话</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">店铺启用日期</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">建档日期</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">系统客户名称</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
        <div class="basic-c sys">
          <span class="tit">系统门店名称</span>
          <div class="val">
            <el-input class="value" v-model="data.sqlx"></el-input>
          </div>
        </div>
      </div>
    </box-contain>
    <box-contain style="padding-top:0;">
      <title-contain value="审批表申请资料" align="center"></title-contain>
      <div class="att-bottom">
        <el-timeline>
          <el-timeline-item timestamp="店铺基本信息" placement="top">
            <div class="after-basic flexcenter">
              <div class="basic-c width">
                <span class="tit">专卖店名称</span>
                <div class="val">
                  <el-input class="value" v-model="data.zmdmc"></el-input>
                </div>
              </div>
              <div class="basic-c width">
                <span class="tit">联系电话(店)</span>
                <div class="val">
                  <el-input class="data.dlxdh"></el-input>
                </div>
              </div>
              <div class="basic-c narrow">
                <span class="tit">传真</span>
                <div class="val">
                  <el-input class="data.cz"></el-input>
                </div>
              </div>
            </div>
            <div class="after-basic flexcenter flex-start">
              <div class="basic-c width">
                <span class="tit">该店是您开的第</span>
                <div class="val">
                  <el-input class="value"></el-input>
                </div>
                <span class="unit">个店/厅</span>
              </div>
              <div class="basic-c width">
                <span class="tit">是否安装电视</span>
                <div class="val">
                  <el-radio-group v-model="data.ds">
                    <el-radio label="0">是</el-radio>
                    <el-radio label="1">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
            <div class="after-basic flexcenter flex-start">
              <div class="basic-c width">
                <span class="tit">加盟位置</span>
                <div class="val">
                  <el-input class="value"></el-input>
                </div>
              </div>
              <div class="basic-c auto">
                <div class="val">
                  <el-input class="value" placeholder="详细地址"></el-input>
                </div>
              </div>
            </div>
            <div class="after-basic flexcenter flex-start">
              <div class="basic-c auto">
                <span class="tit">行政级别</span>
                <div class="val">
                  <el-radio-group v-model="data.xzjb">
                    <el-radio label="0">省份</el-radio>
                    <el-radio label="1">地级市</el-radio>
                    <el-radio label="2">百强县</el-radio>
                    <el-radio label="3">县级市</el-radio>
                    <el-radio label="4">县级</el-radio>
                    <el-radio label="5">镇级</el-radio>
                    <el-radio label="6">直辖市</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="店铺关键指标" placement="top">
            <div class="after-basic flexcenter">
              <div class="basic-c width">
                <span class="tit">原年租金</span>
                <div class="val">
                  <el-input class="value" v-model="data.zmdmc"></el-input>
                </div>
                <span class="unit">万</span>
              </div>
              <div class="basic-c width">
                <span class="tit">商场扣点</span>
                <div class="val">
                  <el-input class="data.dlxdh"></el-input>
                </div>
                <span class="unit">%</span>
              </div>
              <div class="basic-c narrow">
                <span class="tit">店面门数</span>
                <div class="val">
                  <el-input class="data.cz"></el-input>
                </div>
              </div>
            </div>
            <div class="after-basic flexcenter">
              <div class="basic-c width">
                <span class="tit">合同签订时间</span>
                <div class="val">
                  <el-input class="value" v-model="data.zmdmc"></el-input>
                </div>
              </div>
              <div class="basic-c width">
                <span class="tit">营业面积</span>
                <div class="val">
                  <el-input class="data.dlxdh"></el-input>
                </div>
                <div class="unit">平方米</div>
              </div>
              <div class="basic-c narrow">
                <span class="tit">拟开业日期</span>
                <div class="val">
                  <el-input class="data.cz"></el-input>
                </div>
                <span class="unit">个</span>
              </div>
            </div>
            <div class="after-basic flexcenter">
              <div class="basic-c width">
                <span class="tit">租赁年限</span>
                <div class="val">
                  <el-input class="value" v-model="data.zmdmc"></el-input>
                </div>
              </div>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="政策管理处预核定该店补贴" placement="top">
            <el-input type="textarea" placeholder="请输入内容" v-model="data.textarea1"></el-input>
            <div class="c-title-module-todo">
              <span>备注</span>
            </div>
            <div class="todo-content">
              <p class="ul">面积：</p>
              <p class="li">①.面积指店铺的营业面积。</p>
              <p class="li">②.专卖店的营业面积低于100平方米的原则上不予开设。</p>
              <p class="li">③.营业面积不含仓库面积，但包含专卖场内的试衣间面积和专卖场内的卫生间面积。</p>
              <p class="ul">每平方米出货额(4.9)：</p>
              <p class="li">①.营业面积的每平方米必须达到的出货额(折扣:4.9折 单位:万元/㎡)</p>
              <p class="ul">每平方米补贴金额：</p>
              <p class="li">①.公司给予店铺每平方米的补贴金额(单位:元/㎡)</p>
              <p class="ul">3年(商场2年)内总出货回款：</p>
              <p class="li">①.该项计算店铺开业后必须达到的出货回款总额，其中专卖店限期为３年内，商场限制为２年内。</p>
              <p class="li">②.算法:出货回款总额 = 营业面积 * 每平方米出货额</p>
              <p class="ul">3年内总补贴金额：</p>
              <p class="li">①.该项计算店铺开业后公司给予的补贴总额，其中专卖店限期为３年内返回完毕，商场限制为２年内返回完毕。</p>
              <p class="li">②.算法:总补贴金额 = 营业面积 * 每平方米补贴金额</p>
            </div>
          </el-timeline-item>
          <el-timeline-item></el-timeline-item>
        </el-timeline>
      </div>
    </box-contain>
    <box-contain>
      <div class="att-other">
        <div class="after-basic flexcenter">
          <div class="basic-c width">
            <span class="tit">出货开始日期</span>
            <div class="val">
              <el-input class="value" v-model="data.zmdmc"></el-input>
            </div>
          </div>
          <div class="basic-c width">
            <span class="tit">回款开始日期</span>
            <div class="val">
              <el-input class="data.dlxdh"></el-input>
            </div>
          </div>
          <div class="basic-c width">
            <span class="tit">实际开业日期</span>
            <div class="val">
              <el-input class="data.cz"></el-input>
            </div>
          </div>
        </div>
        <div class="after-basic flexcenter flex-start">
          <div class="basic-c width">
            <span class="tit">订单编号</span>
            <div class="val">
              <el-input class="value"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="c-title-module-todo2">备注</div>
      <div class="todo-content2">
        <p class="ul">
          出货与回款日期审批流程：
          <span>贸易公司物流经理</span>
          <i class="el-icon-d-arrow-right"></i>
          <span>总部物流经理</span>
          <i class="el-icon-d-arrow-right"></i>
          <span>经销商</span>
          <i class="el-icon-d-arrow-right"></i>
          <span>政策管理处</span>
        </p>
        <p class="li">①.出货开始日期：贸易公司发货到专卖店的</p>
        <p class="li">②.回款开始日期：贷款的回款开始日期。</p>
        <p class="li">③.实际开业日期：店铺实际开店的时间。</p>
      </div>
    </box-contain>
  </div>
</template>
<script>
import BoxContain from "@/components/common/BoxContain";
import TitleContain from '@/components/common/TitleContain';

export default {
  data() {
    return {
      data: { textarea1: '同意！' },
    }
  },
  components: { BoxContain, TitleContain }
}
</script>

<style lang="scss" scoped>
.store-information {
  height: 100%;
  width: 100%;
  box-sizing: bo;
}
.basic-c {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  border: 1px solid #ececec;
  .tit {
    padding: 0 5px;
    background: #f6f7f9;
    text-align: center;
    font-weight: 600;
    border-right: 1px solid #ececec;
  }
  .val {
    flex: 1;
  }
}
.att-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
  .sys {
    width: 250px;
    .tit {
      width: 96px;
    }
  }
  .sum-c {
    display: flex;
    justify-content: space-between;
    width: 250px;
    .basic-c {
      // width: 48%;
      width: 120px;
      .tit {
        width: 50px;
      }
      .val {
        width: 70px;
      }
    }
    .age {
      width: 90px;
    }
    .phone {
      // width: 58%;
      width: 148px;
    }

    //   .age {
    //     width: 36%;
    // .age-w{
    //   width: 40px;
    // }
  }
  .age-c {
    display: flex;
    justify-content: space-between;
    width: 256px;
    .basic-c {
      // width: 48%;
      // width: auto;
      .tit {
        width: 90px;
      }
      // .age{
      //   width: 38%;
      // }
      // .phone{
      //   width: 58%;
      // }
    }

    //   //   .age {
    //   //     width: 36%;
    //   //     // .age-w{
    //   //     //   width: 40px;
    //   //     // }
    //   //     // .t\val{}
    // }
  }
}

.att-bottom {
  padding: 0 15px;
  // border: 1px solid red;
  margin-top: 25px;
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
        content: "";
        height: 12px;
        width: 60px;
        position: absolute;
        bottom: 4px;
        z-index: -1;
        left: 0;
        background: #c1dbff;
      }
    }
    .width {
      width: 34%;
      .tit {
        width: 110px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
    .narrow {
      width: 28%;
      .tit {
        width: 75px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
    .auto {
      // width: 300px;
      flex: 1;
      .tit {
        width: 110px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
  }
}
.att-other {
  padding: 21px 15px 0 15px;
  border-top: 1px solid #f3f3f3;
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
        content: "";
        height: 12px;
        width: 60px;
        position: absolute;
        bottom: 4px;
        z-index: -1;
        left: 0;
        background: #c1dbff;
      }
    }
    .width {
      width: 32%;
      .tit {
        width: 110px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
    .narrow {
      width: 28%;
      .tit {
        width: 75px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
    .auto {
      // width: 300px;
      flex: 1;
      .tit {
        width: 110px;
        white-space: nowrap;
      }
      .unit {
        padding: 0 7px;
        color: var(--remind-text-color);
      }
    }
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

/deep/ .el-input {
  .el-input__inner {
    height: 100%;
    border: none;
    padding: 5px;
    font-size: var(--font-size);
  }
}
/deep/ .el-radio-group {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  // .el-radio {
  //   min-width: 90px;
  //   margin-right: 0;
  // }
}

.flexcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-start {
  justify-content: flex-start !important;
  .basic-c {
    margin-right: 2%;
  }
}
.c-title-module-todo {
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  position: relative;
  z-index: 100;
  margin-top: 14px;
  // width: 100%;
  display: inline-block;
  &::after {
    content: "";
    height: 12px;
    width: 100%;
    position: absolute;
    bottom: 15%;
    z-index: -1;
    left: 0;
    background: #c1dbff;
  }
}
.c-title-module-todo2 {
  height: 40px;
  color: var(--text-color);
  line-height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
  padding-left: 15px;
  position: relative;
  text-align: left;
}
.todo-content {
  margin-top: 14px;
  padding-left: 15px;

  .ul {
    color: var(--default-text-color);
    font-size: var(--font-size);
    font-weight: 600;
    line-height: 25px;
    span {
      color: #f13e3e;
      line-height: 14px;
    }
    i {
      font-size: 12px;
      color: #f13e3e;
      margin: 0 5px;
    }
  }
  .li {
    color: var(--default-text-color);
    font-size: var(--font-size);
    text-indent: 2em;
    line-height: 25px;
  }
}
.todo-content2 {
  // margin-top: 14px;
  padding-left: 30px;
  padding-bottom: 15px;
  .ul {
    color: var(--default-text-color);
    font-size: var(--font-size);
    font-weight: 600;
    line-height: 25px;
    span {
      color: #f13e3e;
      line-height: 14px;
    }
    i {
      font-size: 12px;
      color: #f13e3e;
      margin: 0 5px;
    }
  }
  .li {
    color: var(--default-text-color);
    font-size: var(--font-size);
    text-indent: 2em;
    line-height: 25px;
  }
}
/deep/ .el-textarea {
  position: relative;
  .el-textarea__inner {
    resize: none;
    border: 1px solid #ececec;
    height: 85px !important;
    min-height: 85px !important;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #f0f7ff;
  }
}
</style>
