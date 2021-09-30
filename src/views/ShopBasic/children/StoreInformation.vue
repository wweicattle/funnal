<template>
  <div class="exclusive-contain">
    <box-contain>
      <div class="store-des">
        <title-contain
          value="店铺资料"
          align="center"
          bgcolor="#F0F7FF"
        ></title-contain>
        <div class="att-top">
          <div class="basic-c">
            <span class="tit">整改方式</span>
            <div class="val">
              <el-radio-group v-model="copyData.zgfs">
                <template v-for="(val, index) in zgfs">
                  <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
                </template>
              </el-radio-group>
            </div>
          </div>

          <div class="basic-c">
            <span class="tit">货柜版本</span>
            <div class="val">
              <el-radio-group v-model="copyData.hgbb">
                <template v-for="(val, index) in hgbb">
                  <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
                </template>
              </el-radio-group>
            </div>
          </div>

           <div class="basic-c">
            <span class="tit">品牌系列</span>
            <div class="val">
                <el-radio-group v-model="copyData.ppxl">
                  <template v-for="(val, index) in ppxl">
                    <el-radio :label="val.dm" :key="index">{{
                      val.mc
                    }}</el-radio>
                  </template>
                </el-radio-group>
            </div>
          </div>
          <div class="basic-c">
            <span class="tit">渠道分布</span>
            <div class="val">
              <el-radio-group v-model="copyData.jyfs">
                <template v-for="(val, index) in jyfs">
                  <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
                </template>
              </el-radio-group>
              <!-- <el-input  v-model="copyData.yzmdmc"></el-input> -->
            </div>
          </div>
          <div class="basic-c">
            <span class="tit">专卖店装修档次</span>
            <div class="val">
              <el-radio-group v-model="copyData.zxdc">
                <template v-for="(val, index) in zxdc">
                  <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
                </template>
              </el-radio-group>
              <!-- <el-input  v-model="copyData.yzmdmc"></el-input> -->
            </div>
          </div>

          <div class="average flexcenter">
            <div class="store-c adu-l flexcenter">
              <div class="basic-c l">
                <span class="tit">该店是您开设的第</span>
                <div class="val">
                  <el-input v-model="copyData.zmdsl"></el-input>
                </div>
              </div>
              <div class="basic-c r">
                <span class="tit">是否安装电视</span>
                <div class="val">
                  <el-radio-group v-model="copyData.zmdtv">
                    <el-radio :label="0">是</el-radio>
                    <el-radio :label="1">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
            <!-- <div class="basic-c adu-r">
              <span class="tit">品牌系列</span>
              <div class="val">
                <el-radio-group v-model="copyData.ppxl">
                  <template v-for="(val, index) in ppxl">
                    <el-radio :label="val.dm" :key="index">{{
                      val.mc
                    }}</el-radio>
                  </template>
                </el-radio-group>
              </div>
            </div> -->
          </div>
          <div class="average flexcenter">
            <div class="store-c adu-l flexcenter">
              <div class="basic-c l">
                <span class="tit">整改后专卖店名称</span>
                <div class="val">
                  <el-input v-model="copyData.zmdmc"> </el-input>
                </div>
              </div>
              <div class="basic-c r">
                <span class="tit">联系电话（店）</span>
                <div class="val">
                  <el-input v-model="copyData.jyzmobile"></el-input>
                </div>
              </div>
            </div>
            <div class="basic-c adu-r">
              <span class="tit">传真</span>
              <div class="val">
                <el-input v-model="copyData.zmdfax"></el-input>
              </div>
            </div>
          </div>

          <div class="average flexcenter">
            <div class="store-c adu-l flexcenter">
              <div class="basic-c l">
                <span class="tit">整改后专卖店名称</span>
                <div class="val">
                  <el-input v-model="copyData.zmdmc"></el-input>
                </div>
              </div>
              <div class="basic-c r">
                <span class="tit">联系电话（店）</span>
                <div class="val">
                  <el-input v-model="copyData.jyzmobile"></el-input>
                </div>
              </div>
            </div>
            <div class="basic-c adu-r">
              <span class="tit">传真</span>
              <div class="val">
                <el-input v-model="copyData.zmdfax"></el-input>
              </div>
            </div>
          </div>

          <div class="add flexcenter">
            <div class="basic-c shop">
              <span class="tit">原加盟位置</span>
              <div class="val">
                <el-input
                  v-model="copyData.yzmdmc"
                  placeholder="选择"
                ></el-input>
              </div>
            </div>
            <div class="basic-c text">
              <!-- <span class="tit">系统门店名</span> -->
              <div class="val">
                <el-input v-model="copyData.yzmdmc"></el-input>
              </div>
            </div>
            <!-- <div class="basic-c adu-r">
              <span class="tit">系统门店名</span>
              <div class="val">
                <el-input  v-model="copyData.yzmdmc"></el-input>
              </div>
            </div> -->
          </div>

          <div class="add flexcenter">
            <div class="basic-c shop">
              <span class="tit">整改后加盟位置</span>
              <div class="val">
                <el-input v-model="copyData.yzmdmc"></el-input>
              </div>
            </div>
            <div class="basic-c text">
              <!-- <span class="tit">系统门店名</span> -->
              <div class="val">
                <el-input v-model="copyData.yzmdmc"></el-input>
              </div>
            </div>
            <!-- <div class="basic-c adu-r">
              <span class="tit">系统门店名</span>
              <div class="val">
                <el-input  v-model="copyData.yzmdmc"></el-input>
              </div>
            </div> -->
          </div>
          <div class="basic-c">
            <span class="tit">行政级别</span>
            <div class="val">
              <el-radio-group v-model="copyData.xzjb">
                <el-radio :label="0">省份</el-radio>
                <el-radio :label="1">地级市</el-radio>
                <el-radio :label="2">百强县</el-radio>
                <el-radio :label="3">县级市</el-radio>
                <el-radio :label="4">县级</el-radio>
                <el-radio :label="5">镇级</el-radio>
                <el-radio :label="6">直辖市</el-radio>
                <el-radio :label="7">特区</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="basic-c way">
            <span class="tit">行政级别</span>
            <div class="val">
              <el-radio-group v-model="copyData.ldjb">
                <el-radio :label="0">A类</el-radio>
                <el-radio :label="1">B类</el-radio>
                <el-radio :label="2">C类</el-radio>
                <el-radio :label="3">D类</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>

        <title-contain
          value="店铺关键指标"
          align="center"
          bgcolor="#F0F7FF"
        ></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <el-timeline-item timestamp="店铺基本信息" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c pro">
                  <span class="tit">原年租金</span>
                  <div class="val">
                    <el-input v-model="copyData.ynzje"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">商场扣点</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.ysckd"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">年物业费</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.ywyf"></el-input>
                  </div>
                </div>

                <div class="basic-c pro">
                  <span class="tit">整改后年租金</span>
                  <div class="val">
                    <el-input v-model="copyData.nzje"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">商场扣点</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.sckd"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">年物业费</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.wyf"></el-input>
                  </div>
                </div>

                <div class="tot-line flexcenter">
                  <div class="basic-c">
                    <span class="tit">原核定面积</span>
                    <div class="val">
                      <el-input v-model="copyData.yjzmj"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">店面门数</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                      <el-input v-model="copyData.ydoorsl"></el-input>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro">
                  <span class="tit">整改后核定面积</span>
                  <div class="val">
                    <el-input v-model="copyData.jzmj"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">店面门数</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.doorsl"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">店铺性质</span>
                  <div class="val">
                    <el-radio-group v-model="copyData.htbs">
                      <el-radio :label="0">租赁</el-radio>
                      <el-radio :label="1">非租赁</el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item
              timestamp="整改前年度销售零售吊牌价及实际销售额"
              placement="top"
            >
              <div class="after-basic flexcenter sale-num">
                <div class="basic-c pro">
                  <span class="tit">起止年限</span>
                  <div class="val">
                    <el-input v-model="copyData.lsksrq1"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">零售吊牌价</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.lsjsrq1"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">实际销售额为</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input v-model="copyData.lsje1"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">起止年限</span>
                  <div class="val">
                    <el-input v-model="copyData.yzmdmc"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">零售吊牌价</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">实际销售额为</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">起止年限</span>
                  <div class="val">
                    <el-input v-model="copyData.yzmdmc"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">零售吊牌价</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">实际销售额为</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
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

    <!-- <box-contain :isshowheader="headerObj">
      <div class="b-content">
        <div class="radio-content">
          <span>整改方式:</span>
          <el-radio-group v-model="copyData.zgfs">
            <template v-for="(val, index) in zgfs">
              <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
            </template>
        
        </div>
        <div class="radio-content">
          <span>品牌系列:</span>
          <el-radio-group v-model="copyData.ppxl">
            <template v-for="(val, index) in ppxl">
              <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>货柜版本:</span>
          <el-radio-group v-model="copyData.hgbb">
            <template v-for="(val, index) in hgbb">
              <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
            </template>
        
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>渠道分布:</span>
          <el-radio-group v-model="copyData.jyfs">
            <template v-for="(val, index) in jyfs">
              <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
            </template>
         
        </div>

        <div class="radio-content">
          <span>专卖店装修档次:</span>
          <el-radio-group v-model="copyData.zxdc">
            <template v-for="(val, index) in zxdc">
              <el-radio :label="val.dm" :key="index">{{ val.mc }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <ul>
          <li>
            <span>原专卖店名称:</span>
            <el-input v-model="copyData.yzmdmc"></el-input>
          </li>
          <li>
            <span>联系电话(店):</span>
            <el-input v-model="copyData.zmdphone"></el-input>
          
          </li>

          <li>
            <span>传真:</span>
            <el-input v-model="copyData.yzmdfax"></el-input>
          </li>

          <li>
            <span>整改后专卖店名称:</span>
            <el-input v-model="copyData.zmdmc"> </el-input>
          </li>

          <li>
            <span>联系电话(店):</span>
            <el-input v-model="copyData.jyzmobile"></el-input>
          </li>

          <li>
            <span>传真:</span>
            <el-input v-model="copyData.zmdfax"></el-input>
          </li>

          <li>
            <span>该店是你开设的第:</span>
            <el-input v-model="copyData.zmdsl"></el-input>个店/厅
          </li>
          <li>
            <span>是否安装电视:</span>
            <el-radio-group v-model="copyData.zmdtv">
              <el-radio :label="0">是</el-radio>
              <el-radio :label="1">否</el-radio>
            </el-radio-group>
          </li>
        </ul>
        <ul>
          <li class="widhtauto">
            <span>原加盟位置:</span>
            <el-input v-model="copyData.yjmpro"></el-input>
            省
            <el-input v-model="copyData.yjmcity"></el-input>
            市
            <el-input v-model="copyData.yjmarea"></el-input>
            县(区)
            <el-input v-model="copyData.yjmtown"></el-input>
            镇
            <el-input></el-input>
            街/道
            <el-input v-model="copyData.yjmno"></el-input>
            号
            <el-input v-model="copyData.yjmmarket"></el-input>
            商城
          </li>
        </ul>
        <ul>
          <li class="widhtauto">
            <span>整改后加盟位置:</span>
            <el-input v-model="copyData.jmpro"></el-input>
            省
            <el-input v-model="copyData.jmcity"></el-input>
            市
            <el-input v-model="copyData.jmarea"></el-input>
            县(区)
            <el-input v-model="copyData.jmstreet"></el-input>
            镇
            <el-input></el-input>
            街/道
            <el-input v-model="copyData.jmno"></el-input>
            号
            <el-input v-model="copyData.jmmarket"></el-input>
            商城
          </li>
        </ul>

        <div class="radio-content">
          <span>行政级别:</span>
          <el-radio-group v-model="copyData.xzjb">
            <el-radio :label="0">省份</el-radio>
            <el-radio :label="1">地级市</el-radio>
            <el-radio :label="2">百强县</el-radio>
            <el-radio :label="3">县级市</el-radio>
            <el-radio :label="4">县级</el-radio>
            <el-radio :label="5">镇级</el-radio>
            <el-radio :label="6">直辖市</el-radio>
            <el-radio :label="7">特区</el-radio>
          </el-radio-group>
        </div>
        <div class="radio-content">
          <span>路段级别:</span>
          <el-radio-group v-model="copyData.ldjb">
            <el-radio :label="0">A类</el-radio>
            <el-radio :label="1">B类</el-radio>
            <el-radio :label="2">C类</el-radio>
            <el-radio :label="3">D类</el-radio>
          </el-radio-group>
        </div>
      </div>
    </box-contain>

    <box-contain :isshowheader="headerObjs">
      <div class="b-content">
        <ul>
          <li>
            <span>原租金:</span>
            <el-input v-model="copyData.ynzje"></el-input>万
          </li>

          <li>
            <span>商场扣点:</span>
            <el-input v-model="copyData.ysckd"></el-input>%
          </li>

          <li>
            <span>年物业费:</span>
            <el-input v-model="copyData.ywyf"></el-input>万
          </li>
          <li>
            <span>整改后原租金:</span>
            <el-input v-model="copyData.nzje"></el-input>万
          </li>

          <li>
            <span>商场扣点:</span>
            <el-input v-model="copyData.sckd"></el-input>%
          </li>

          <li>
            <span>年物业费:</span>
            <el-input v-model="copyData.wyf"></el-input>万
          </li>
        </ul>

        <ul>
          <li>
            <span>原核定面积为:</span>
            <el-input v-model="copyData.yjzmj"></el-input>平方米
          </li>
          <li>
            <span>店面门数:</span>
            <el-input v-model="copyData.ydoorsl"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span>整改后核定面积为:</span>
            <el-input v-model="copyData.jzmj"></el-input>平方米
          </li>
          <li>
            <span>店面门数:</span>
            <el-input v-model="copyData.doorsl"></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span>店面性质:</span>
            <el-radio-group v-model="copyData.htbs">
              <el-radio :label="0">租赁</el-radio>
              <el-radio :label="1">非租赁</el-radio>
            </el-radio-group>
          </li>
        </ul>
        <div class="c-tit">整改前年度销售零售吊牌及实际销售额</div>
        <ul>
          <li class="widhtauto pd-left">
            从
            <el-input v-model="copyData.lsksrq1"></el-input>
            至
            <el-input v-model="copyData.lsjsrq1"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje1"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje1"></el-input>
          </li>
        </ul>
        <ul>
          <li class="widhtauto pd-left">
            从
            <el-input v-model="copyData.lsksrq2"></el-input>
            至
            <el-input v-model="copyData.lsjsrq2"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje2"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje2"></el-input>
          </li>
        </ul>
        <ul>
          <li class="widhtauto pd-left">
            从
            <el-input v-model="copyData.lsksrq3"></el-input>
            至
            <el-input v-model="copyData.lsjsrq3"></el-input>
            止；零售吊牌价为：
            <el-input v-model="copyData.lsje3"></el-input>
            万；实际销售额为
            <el-input v-model="copyData.xsje3"></el-input>
          </li>
        </ul>
      </div>
    </box-contain> -->
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import { mapState } from 'vuex';
import { getZmdzlPz } from '@/network/index';
export default {
  data() {
    return {
      copyData: {},
      headerObj: { text: '店铺资料' },
      headerObjs: { text: '店铺关键指标' },
      radio: null,
      ppxl: [],
      zgfs: [],
      zxdc: [],
      jyfs: [],
      hgbb: []
    };
  },
  created() {
    // 请求基本配置的资料
    getZmdzlPz().then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        let { ppxl, zgfs, zxdc, jyfs, hgbb } = data;
        Object.assign(this.$data, { ppxl, zgfs, zxdc, jyfs, hgbb });
      } else {
        this.$Message.error('获取数据失败！' + JSON.stringify(da.data.errmsg));
      }
    });
  },
  mounted() {},
  methods: {},
  components: {
    BoxContain,
    TitleContain
  },
  computed: {
    ...mapState(['ShopBasicData'])
  },
  watch: {
    ShopBasicData: {
      handler(newVal) {
        this.copyData = JSON.parse(JSON.stringify(newVal));
        //el-radio 最终值为string
        let arrs = ['ppxl', 'zgfs', 'zxdc', 'jyfs', 'hgbb'];
        arrs.forEach((val) => {
          this.copyData[val] = this.copyData[val] + '';
        });
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .el-input {
  .el-input__inner {
    height: 100%;
    border: none;
    padding: 0 5px;
    font-size: var(--font-size);
  }
}
/deep/ .el-select {
  .el-input__suffix {
    line-height: 30px;
    display: flex;
    align-items: center;
  }
}
/deep/ .el-radio {
  margin-right: 11px;
  padding: 6px 0;
  .el-radio__label {
    font-size: var(--font-size);
    padding-left: 6px;
  }
}
/deep/ .el-radio-group {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: inherit;
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
  font-size: var(--font-size);
  .el-timeline-item {
    &:last-child {
      display: none;
    }
  }
  .el-timeline-item__node {
    background: #fff;
    border: 2px solid var(--sle-text-color);
  }
  .el-timeline-item__wrapper {
    padding-left: 20px;
  }
  .el-timeline-item__timestamp {
    font-size: 16px;
    color: inherit;
    font-weight: 600;
    padding-top: 2px;
    margin-bottom: 20px;
    color: var(--sle-text-color);
  }
}

.basic-c {
  display: flex;
  min-height: 28px;
  line-height: 28px;
  margin-bottom: 15px;
  border: 1px solid #ececec;
  .tit {
    padding: 0 10px;
    background: #f6f7f9;
    font-weight: 600;
    border-right: 1px solid #ececec;
    width: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .val {
    flex: 1;
    overflow: hidden;
  }
}
// /deep/ .el-input {
//   height: 24px;
//   width: 184px;
//   margin-right: 4px;
//   .el-input__inner {
//     height: 24px;
//     line-height: 24px;
//     padding: 0 5px;
//   }
// }
// /deep/ .el-radio-group {
//   .el-radio {
//     min-width: 80px;
//     margin-right: 0;
//   }
//   .el-radio__label {
//     padding-right: 10px;
//   }
// }
.exclusive-contain {
  .store-des {
    .att-top {
      padding: 0 15px;
      // border: 1px solid red;
      .average {
        justify-content: space-between;
        // overflow: hidden;
        .adu-l {
          width: 500px;
          // border: 1px solid #000;
        }
        .adu-r {
          margin-left: 20px;
          flex: 1;
          // border: 1px solid rgb(223, 18, 18);
        }
        .store-c {
          justify-content: space-between;
          width: 500px;
          .l {
            width: 270px;
          }
          .r {
            flex: 1;
            margin-left: 10px;
          }
        }
      }
      .add {
        justify-content: space-between;
        .text {
          flex: 1;
          margin-left: 10px;
        }
        .shop {
          width: 270px;
        }
      }
      .way {
        width: 500px;
      }
    }
    .att-bottom {
      padding: 0 15px;
      // border: 1px solid red;
      .after-basic {
        flex-wrap: wrap;
        justify-content: space-between;
        & > .pro {
          width: 234px;
          .tit {
            width: 120px;
          }
        }
        & > .tot-line {
          width: 100%;
          justify-content: flex-start;
          .basic-c {
            margin-right: 20px;
          }
          .tit {
            width: 120px;
          }
          .val {
            width: 112px;
          }
        }
        &.sale-num {
          .pro {
            // width: 170px;
          }
        }
      }
    }
  }
}
// .exclusive-contain {
//   height: 100%;
//   .b-content {
//     // min-height: 300px;
//     .c-tit {
//       display: inline-block;
//       min-width: 100px;
//       text-align: right;
//       margin-right: 15px;
//       font-size: 15px;
//       color: var(--text-color);
//       margin: 5px 0;
//       font-weight: 600;
//     }
//     .radio-content {
//       & > span {
//         display: inline-block;
//         padding: 10px 0;
//         min-width: 120px;
//         text-align: right;
//         margin-right: 15px;
//       }
//     }
//     ul {
//       display: flex;
//       flex-wrap: wrap;
//       // justify-content: space-between;
//       // padding: 20px 0;
//       li {
//         width: 33.33%;
//         padding: 10px 0;
//         & > span {
//           display: inline-block;
//           min-width: 120px;
//           text-align: right;
//           margin-right: 15px;
//         }

//         &:nth-child(3n) {
//           // text-align: right;
//           padding-right: 20px;
//         }
//         //   &:nth-child(3n-1) {
//         //     text-align: center;
//         //   }
//         &.address-css {
//           // width: 66.66%;
//           width: auto;
//           text-align: left;
//           .pro,
//           .city {
//             padding: 0 4px;
//             min-width: auto;
//             margin: 0;
//           }
//         }
//         &.id-number {
//           text-align: left;
//         }
//         &.widhtauto {
//           .el-input {
//             width: 76px;
//           }
//           &.pd-left {
//             margin-left: 60px;
//             .el-input {
//               width: inherit;
//             }
//           }
//           span {
//             // min-width: auto;
//           }

//           width: auto;
//         }
//       }
//     }
//   }
// }
</style>
