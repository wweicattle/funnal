<template>
  <div class="basic-contain">
    <box-contain>
      <div class="att-contain" v-if="userData.urlData.lx == 'jm'">
        <title-contain value="基本资料" align="center"></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <el-timeline-item timestamp="店铺基本信息" placement="top">
              <!-- <div class="basic-c pro">
                <span class="tit">旧网点补入</span>
                <div class="val">
                  <el-radio-group v-model="copyData.yjmxz">
                    <el-radio label="0">
                      <span class="des"
                        >打勾(√):旧网点补入系统;不打勾:新加盟。</span
                      >(提示:为区分新加盟与之前加盟的资料补入系统)</el-radio
                    >
                  </el-radio-group>
                </div>
              </div> -->
              <div class="after-basic flexcenter">
                <div class="basic-c pro">
                  <span class="tit">所属省份</span>
                  <div class="val pro-select">
                    <!-- <el-input class="value" v-model="copyData.yzmdmc"></el-input> -->
                    <el-select
                      v-model="proShowName"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodPro"
                      :loading="loadings"
                      @change="changeSlecPro"
                    >
                      <el-option
                        v-for="(item, index) in proOptions"
                        :key="item.value + index"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">填表日期</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.tbrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">加盟性质</span>
                  <div class="val">
                    <el-radio-group v-model="copyData.jmxz" class="spe-radio">
                      <el-radio label="1">直营</el-radio>
                      <el-radio label="0">加盟</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">加盟利郎时间</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.jmrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="经营者资料" placement="top">
              <div class="after-basic flexcenter">
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">姓名</span>
                    <div class="val">
                      <el-input class="value" v-model="copyData.xm"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <el-select v-model="copyData.xb">
                        <el-option
                          v-for="item in sexoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c l">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <el-input v-model="copyData.jg"></el-input>
                    </div>
                  </div>

                  <div class="basic-c r">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <el-select v-model="copyData.isjf">
                        <el-option
                          v-for="item in wedoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.sfzhm"></el-input>
                  </div>
                </div>

                <!-- <div class="name"> -->
                <!-- <div class="basic-c l">
                    <span class="tit">学历</span>
                    <div class="val">
                      <el-input v-model="copyData.xl"></el-input>
                    </div>
                  </div> -->

                <div class="basic-c pro name">
                  <span class="tit">出生日期</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.csrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">籍贯</span>
                  <div class="val">
                    <el-input v-model="copyData.jg"></el-input>
                  </div>
                </div> -->
                <!-- </div> -->

                <Address
                  addressName="身份证地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['sfpro', 'sfcity', 'sfarea'],
                    desAttr: 'sfother'
                  }"
                  widthtit="90"
                />

                <!-- title text -->
                <div class="title-text">
                  <span>联系方式</span>
                </div>

                <!-- <div class="basic-c pro name">
                  <span class="tit">住宅电话</span>
                  <div class="val">
                    <el-input v-model="copyData.lxmobile"></el-input>
                  </div>
                </div> -->
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.lxphone"></el-input>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">QQ号码</span>
                  <div class="val">
                    <el-input v-model="copyData.lxqq"></el-input>
                  </div>
                </div> -->
                <!-- <div class="basic-c pro name">
                  <span class="tit">Email</span>
                  <div class="val">
                    <el-input v-model="copyData.lxemail"></el-input>
                  </div>
                </div> -->

                <Address
                  addressName="常住地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['lxpro', 'lxcity', 'lxarea'],
                    desAttr: 'lxother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->

                <div class="title-text">
                  <span>工作单位</span>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.gzdwmc"></el-input>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">传真</span>
                  <div class="val">
                    <el-input v-model="copyData.gzfax"></el-input>
                  </div>
                </div> -->
                <!-- <div class="basic-c pro name">
                  <span class="tit">电话</span>
                  <div class="val">
                    <el-input v-model="copyData.gzmobile"></el-input>
                  </div>
                </div> -->
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <el-input v-model="copyData.gzphone"></el-input>
                  </div>
                </div>

                <Address
                  addressName="地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['gzpro', 'gzcity', 'gzarea'],
                    desAttr: 'gzother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
              </div>
            </el-timeline-item>

            <el-timeline-item timestamp="营业执照的法人资料" placement="top">
              <div class="after-basic flexcenter">
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">姓名</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="copyData.frxm"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <el-select v-model="copyData.xb" placeholder="">
                        <el-option
                          v-for="item in sexoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <el-input v-model="copyData.frjg"></el-input>
                    </div>
                  </div>

                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <el-select v-model="copyData.frisjf">
                        <el-option
                          v-for="item in wedoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">毕业院校</span>
                  <div class="val">
                    <el-input v-model="copyData.frbyxx"></el-input>
                  </div>
                </div> -->
                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frsfzhm"></el-input>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">出生日期</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.frcsrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>

                <!-- <div class="name">
                  
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <el-input v-model="copyData.frjg"></el-input>
                    </div>
                  </div>
                </div> -->

                <div class="basic-c birth name">
                  <span class="tit spe-tit relation">经营与法人关系</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.yy"></el-input>
                  </div>
                </div>

                <Address
                  addressName="身份证地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frsfpro', 'frsfcity', 'frsfarea'],
                    desAttr: 'frsfother'
                  }"
                  widthtit="90"
                />

                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">身份证地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->

                <!-- title text -->
                <div class="title-text">
                  <span>联系方式</span>
                </div>
                <!-- 
                <div class="basic-c pro name">
                  <span class="tit">住宅电话</span>
                  <div class="val">
                    <el-input
                      class="value"
                      v-model="copyData.frlxmobile"
                    ></el-input>
                  </div>
                </div> -->
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frlxphone"></el-input>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">QQ号码</span>
                  <div class="val">
                    <el-input v-model="copyData.frlxqq"></el-input>
                  </div>
                </div> -->
                <!-- <div class="basic-c pro name">
                  <span class="tit">Email</span>
                  <div class="val">
                    <el-input v-model="copyData.frlxemail"></el-input>
                  </div>
                </div> -->

                <Address
                  addressName="常住地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frlxpro', 'frlxcity', 'frlxarea'],
                    desAttr: 'frlxother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
                <div class="title-text">
                  <span>工作单位</span>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <el-input v-model="copyData.frgzdwmc"></el-input>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">传真</span>
                  <div class="val">
                    <el-input v-model="copyData.frgzfax"></el-input>
                  </div>
                </div> -->
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <el-input v-model="copyData.frgzphone"></el-input>
                  </div>
                </div>
                <!-- <div class="basic-c pro name">
                  <span class="tit">电话</span>
                  <div class="val">
                    <el-input v-model="copyData.frgzmobile"></el-input>
                  </div>
                </div> -->

                <Address
                  addressName="地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frgzpro', 'frgzcity', 'frgzarea'],
                    desAttr: 'frgzother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
              </div>
            </el-timeline-item>
            <el-timeline-item></el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <div class="att-contain" v-else>
        <title-contain
          value="整改前 经销商基本资料"
          align="center"
          isshowlogo="before"
          bgcolor="#FFF4F4"
        ></title-contain>
        <div class="att-top">
          <div class="basic-c sys">
            <span class="tit">系统门店名</span>
            <div class="val">
              <!-- <el-input class="value" v-model="copyData.yzmdmc"></el-input> -->
              <el-select
                v-model="copyData.yzmdmc"
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loadings"
                clearable
                @change="changeSlec"
              >
                <el-option
                  v-for="(item, index) in options"
                  :key="item.value + index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="basic-c sys">
            <span class="tit">加盟性质</span>
            <div class="val">
              <el-radio-group v-model="copyData.yjmxz">
                <el-radio label="1">直营</el-radio>
                <el-radio label="0">加盟</el-radio>
              </el-radio-group>
              <!-- <el-input class="value"></el-input> -->
            </div>
          </div>
          <div class="basic-c sys">
            <span class="tit">上次开业日期</span>
            <div class="val">
              <el-date-picker
                value-format="yyyy-MM-dd"
                v-model="copyData.ykyrq"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- <el-input class="value"></el-input> -->
            </div>
          </div>
          <div class="sum-c">
            <div class="basic-c">
              <span class="tit">姓名</span>
              <div class="val">
                <el-input class="value" v-model="copyData.yxm"></el-input>
              </div>
            </div>
            <div class="basic-c">
              <span class="tit">性别</span>
              <div class="val">
                <el-select v-model="copyData.yxb" placeholder="">
                  <el-option
                    v-for="item in sexoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <!-- <el-input class="value"></el-input> -->
              </div>
            </div>
          </div>
          <div class="sum-c">
            <div class="basic-c age">
              <span class="tit">年龄</span>
              <div class="val age">
                <el-input class="value" v-model="copyData.ynn"></el-input>
              </div>
            </div>
            <div class="basic-c phone">
              <span class="tit">手机</span>
              <div class="val">
                <!-- <el-select v-model="copyData.xb">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>-->
                <el-input class="value" v-model="copyData.yphone"></el-input>
              </div>
            </div>
          </div>

          <div class="basic-c sys">
            <span class="tit">家庭电话</span>
            <div class="val">
              <!-- <el-date-picker
              
                v-model="copyData.ykyrq"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>-->

              <el-input class="value" v-model="copyData.ymobile"></el-input>
            </div>
          </div>
        </div>

        <title-contain
          value="整改后 经销商基本资料"
          align="center"
          isshowlogo="after"
        ></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <el-timeline-item timestamp="店铺基本信息" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c pro">
                  <span class="tit">所属省份</span>
                  <div class="val">
                    <!-- <el-input class="value" v-model="copyData.yzmdmc"></el-input> -->
                    <el-select
                      v-model="proShowName"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodPro"
                      :loading="loadings"
                      @change="changeSlecPro"
                    >
                      <el-option
                        v-for="(item, index) in proOptions"
                        :key="item.value + index"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">填表日期</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.tbrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">加盟性质</span>
                  <div class="val">
                    <el-radio-group v-model="copyData.jmxz" class="spe-radio">
                      <el-radio label="1">直营</el-radio>
                      <el-radio label="0">加盟</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">最初加盟时间</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.jmrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="经营者资料" placement="top">
              <div class="after-basic flexcenter">
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">姓名</span>
                    <div class="val">
                      <el-input class="value" v-model="copyData.xm"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <el-select v-model="copyData.xb">
                        <el-option
                          v-for="item in sexoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c l">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <el-input v-model="copyData.jg"></el-input>
                    </div>
                  </div>

                  <div class="basic-c r">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <el-select v-model="copyData.isjf">
                        <el-option
                          v-for="item in wedoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.sfzhm"></el-input>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">出生日期</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.csrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>

                <Address
                  addressName="身份证地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['sfpro', 'sfcity', 'sfarea'],
                    desAttr: 'sfother'
                  }"
                  widthtit="90"
                />

                <!-- title text -->
                <div class="title-text">
                  <span>联系方式</span>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">住宅电话</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.lxmobile"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.lxphone"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">QQ号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.lxqq"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">Email</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.lxemail"></el-input>
                  </div>
                </div>

                <Address
                  addressName="常住地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['lxpro', 'lxcity', 'lxarea'],
                    desAttr: 'lxother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->

                <div class="title-text">
                  <span>工作单位</span>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.gzdwmc"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">传真</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.gzfax"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.gzphone"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">电话</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.gzmobile"></el-input>
                  </div>
                </div>

                <Address
                  addressName="地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['gzpro', 'gzcity', 'gzarea'],
                    desAttr: 'gzother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
              </div>
            </el-timeline-item>

            <el-timeline-item timestamp="营业执照的法人资料" placement="top">
              <div class="after-basic flexcenter">
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">姓名</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="copyData.frxm"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <el-select v-model="copyData.frxb">
                        <el-option
                          v-for="item in sexoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c l">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <el-input v-model="copyData.frjg"></el-input>
                    </div>
                  </div>

                  <div class="basic-c r">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <el-select v-model="copyData.frisjf">
                        <el-option
                          v-for="item in wedoptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.sfzhm"></el-input>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">出生日期</span>
                  <div class="val">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="copyData.frcsrq"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>

                <Address
                  addressName="身份证地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frsfpro', 'frsfcity', 'frsfarea'],
                    desAttr: 'frsfother'
                  }"
                  widthtit="90"
                />

                <div class="basic-c birth name">
                  <span class="tit spe-tit relation">经营与法人关系</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.yy"></el-input>
                  </div>
                </div>

                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">身份证地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->

                <!-- title text -->
                <div class="title-text">
                  <span>联系方式</span>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">住宅电话</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input
                      class="value"
                      v-model="copyData.frlxmobile"
                    ></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frlxphone"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">QQ号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frlxqq"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">Email</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frlxemail"></el-input>
                  </div>
                </div>

                <Address
                  addressName="常住地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frlxpro', 'frlxcity', 'frlxarea'],
                    desAttr: 'frlxother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
                <div class="title-text">
                  <span>工作单位</span>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frgzdwmc"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">传真</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frgzfax"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">手机</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frgzphone"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">电话</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frgzmobile"></el-input>
                  </div>
                </div>

                <Address
                  addressName="地址"
                  :addressDetail="{
                    copyData,
                    attrs: ['frgzpro', 'frgzcity', 'frgzarea'],
                    desAttr: 'frgzother'
                  }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                      
                        @change="proviceChange"
                        clearable
                      >
                        <el-option
                          v-for="item in shengValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>省
                      <el-select v-model="shi_id" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" clearable>
                        <el-option
                          v-for="item in xianValues"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>县
                      <el-input v-model="copyData.yzmdmc" placeholder="详细地址"></el-input>
                    </div>
                  </div>
                </div>-->
              </div>
            </el-timeline-item>
            <el-timeline-item></el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import Address from '@/components/common/Address';
import shengValues, { findCity, findCountry } from '@/utils/Provice.js';
import { mapState, mapMutations } from 'vuex';
import { editJmspData, getKhList, getJmspData, getProKhList } from '@/network';
import eventBus from '@/utils/eventbus';
export default {
  // mixins: [mixin],
  name: 'JXSDATA',
  data() {
    return {
      shen_id: -1,
      shi_id: -1,
      xian_id: -1,
      shiValues: [],
      xianValues: [],
      shengValues,
      showDialog: true,
      copyData: {},
      headerObj: { text: '旧版经销商基本资料' },
      headerObjs: { text: '新版经销商基本资料' },
      radio: null,
      sexoptions: [
        {
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        },
        {
          value: '中',
          label: '中'
        }
      ],
      wedoptions: [
        {
          value: '0',
          label: '未婚'
        },
        {
          value: '1',
          label: '已婚'
        }
      ],
      activities: [
        {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }
      ],
      options: [],
      value: [],
      list: [],
      loadings: false,
      khValue: '',
      copyData: {},
      khList: [],
      proOptions: [],
      proCessList: [],
      proList: [],
      timer: null,
      proName: '',
      proShowName: ''
    };
  },
  created() {
    // 请求客户列表，只有整改需要获取
    if (this.userData.urlData.lx != 'jm') {
      this.getKhList();
    }
    this.getOneProKhList();
    eventBus.$on('sendData', this.clickSave);
  },
  mounted() {},
  methods: {
    ...mapMutations(['EDITURLDATA']),
    ...mapMutations({ setBasicData: 'SET_SHOP_DATA' }),
    debounce(query, opName) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        // 设置防抖
        this.loadings = true;
        if (opName == 'pro') {
          // 这是所属省份操作
          this.getProKhList(query);
          return;
        }
        this.getKhList(query);
      }, 600);
    },
    async changeSlec(vals) {
      if (!vals) {
        this.getKhList();
        this.copyData.khid = 0;
        this.copyData.mdid = 0;
      } else {
        let { khid = 0, mdid = 0 } = this.khList.find((val) => {
          return val.mdmc == vals;
        });
        this.copyData.khid = khid;
        this.copyData.mdid = mdid;
      }
    },
    changeSlecPro(vals) {
      // if (!vals) {
      //   this.getProKhList();
      //   this.copyData.sskiid=0;
      // } else {
      let { khid = 0 } = this.proCessList.find((val) => {
        return val.khmc == vals;
      });
      console.log(khid);
      this.copyData.sskhid = khid;

      // }
    },
    remoteMethod(query, opename) {
      this.debounce(query);
    },
    remoteMethodPro(query) {
      this.debounce(query, 'pro');
    },

    getKhList(mdmc = '') {
      // this.loading = this.$Loading.service({
      //   fullscreen: true
      // });
      //wwcattle
      let obj = {
        sskhid: this.userData.userInfo.userssid,
        mdmc
      };
      getKhList(obj).then((da) => {
        this.loadings = false;
        // this.loading.close();
        if (da.data.errcode == 0) {
          // 把状态中的id修改即可 变成已经保存过的单
          this.khList = da.data.data;
          this.list = this.khList.map((val) => {
            return {
              value: `${val.mdmc}`,
              label: `${val.mdmc}`
            };
          });
          this.options = JSON.parse(JSON.stringify(this.list));
        } else {
          this.$message({
            message: da.data.errmsg || '客户列表查询失败!',
            type: 'warning'
          });
        }
      });
    },
    // 所属省份比较特殊，需要与sskhid进行比较
    getOneProKhList(sskhmc = '') {
      let obj = {
        sskhid: this.userData.userInfo.userssid,
        sskhmc
      };
      getProKhList(obj).then((da) => {
        this.loadings = false;
        if (da.data.errcode == 0) {
          console.log(da.data);
          // 判断sskhid有没有在所属省份中 如果没有则默认第一个
          console.log(this.copyData.sskhid);
          this.proCessList = da.data.data;
          let isExsitPro = this.proCessList.findIndex((val) => {
            return val.khid == this.copyData.sskhid;
          });

          if (isExsitPro >= 0) {
            // 存在
            this.proShowName = this.proCessList[isExsitPro].khmc;
          } else {
            this.proShowName = this.proCessList[0]?.khmc;
            this.copyData.sskhid = this.proCessList[0]?.khid;
          }

          this.proList = this.proCessList.map((val) => {
            return {
              value: `${val.khmc}`,
              label: `${val.khmc}`
            };
          });
          this.proOptions = JSON.parse(JSON.stringify(this.proList));
        } else {
          this.$message({
            message: da.data.errmsg || '客户列表查询失败!',
            type: 'warning'
          });
        }
      });
    },
    getProKhList(sskhmc = '') {
      let obj = {
        sskhid: this.userData.userInfo.userssid,
        sskhmc
      };
      getProKhList(obj).then((da) => {
        this.loadings = false;
        if (da.data.errcode == 0) {
          console.log(da.data);
          // 判断sskhid有没有在所属省份中 如果没有则默认第一个
          console.log(this.copyData.sskhid);
          this.proCessList = da.data.data;
          // let isExsitPro = this.proCessList.findIndex((val) => {
          //   return val.khid == this.copyData.sskhid;
          // });

          // if (isExsitPro >= 0) {
          //   // 存在
          //   this.proShowName = this.proCessList[isExsitPro].khmc;
          // } else {
          //   this.proShowName = this.proCessList[0]?.khmc;
          //   this.copyData.sskhid = this.proCessList[0]?.khid;
          // }

          this.proList = this.proCessList.map((val) => {
            return {
              value: `${val.khmc}`,
              label: `${val.khmc}`
            };
          });
          this.proOptions = JSON.parse(JSON.stringify(this.proList));
        } else {
          this.$message({
            message: da.data.errmsg || '客户列表查询失败!',
            type: 'warning'
          });
        }
      });
    },

    clickSave() {
      this.loading = this.$Loading.service({
        fullscreen: true
      });
      // wwcattle
      editJmspData(this.copyData)
        .then((da) => {
          if (da.data.errcode == 0) {
            console.log(da.data);
            // 把状态中的id修改即可 变成已经保存过的单
            let data = { ...this.userData.urlData };
            data.id = da.data.data;
            this.copyData.id = data.id;
            // data.id = 0;
            this.EDITURLDATA(data);
            this.$message({
              message: '数据保存成功！',
              type: 'success'
            });
            // 重新请求有id的数据
            getJmspData(data.id)
              .then((da) => {
                this.loading.close();
                if (da.data.errcode == 0) {
                  let data = da.data.data;
                  // 判断所有的字段返回1900-就为空
                  let attrs = [
                    'nxksrq',
                    'ynxksrq',
                    'ckksrq',
                    'ckjsrq',
                    'zxksrq',
                    'zxjsrq',
                    'hgazrq',
                    'nkyrq',
                    'sjkyrq',
                    'nxjsrq',
                    'ynxjsrq'
                  ];
                  attrs.forEach((val, inedx) => {
                    if (data[val].includes(1900)) {
                      data[val] = '';
                    }
                  });
                  console.log(data);
                  this.setBasicData(data);
                } else {
                  this.$Message.error(
                    '获取数据失败！' + JSON.stringify(da.data.errmsg)
                  );
                }
              })
              .catch((err) => {
                console.log(err);
                this.$Message.error(
                  '获取数据失败！' + err + JSON.stringify(da.data.errmsg)
                );
              });
          } else {
            this.$message({
              message: da.data.errmsg || '信息保存错误，请检查',
              type: 'warning'
            });
          }
        })
        .catch((val) => {
          this.$message({
            message: val,
            type: 'warning'
          });
        });
    },
    proviceChange() {
      this.shiValues = findCity(this.shen_id);
      this.xianValues = findCountry(this.shen_id, 0);
      this.shi_id = 0;
      this.xian_id = 0;
    },
    cityChange() {
      this.xian_id = 0;
      this.xianValues = findCountry(this.shen_id, this.shi_id);
    }
  },
  components: {
    BoxContain,
    TitleContain,
    Address
  },
  computed: {
    ...mapState(['ShopBasicData', 'userData'])
  },
  watch: {
    ShopBasicData: {
      handler(newVal) {
        if (Object.keys(newVal).length <= 0) return;
        // 进行处理接口数据-日期截取
        // this.copyData = JSON.parse(JSON.stringify(newVal));
        this.copyData = newVal;
        // 对所属省份字段处理 根据sskhid

        let dateArr = ['csrq', 'ykyrq', 'tbrq', 'jmrq'];
        let arrs = ['yjmxz', 'jmxz', 'isjf', 'frisjf'];
        // 返回接口数字转为字符串
        dateArr.forEach((val) => {
          this.copyData[val] = this.copyData[val].split(' ')[0];
        });
        arrs.forEach((val) => {
          this.copyData[val] = this.copyData[val] + '';
        });
      },
      immediate: true
    }
    // 'copyData.yzmdmc'(newVal) {
    //   // 重新请求
    //   if (!newVal) {
    //     // this.getKhList();
    //   }
    // }
  },
  beforeDestroy() {
    eventBus.$off('sendData', this.clickSave);
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
    // color: var(--text-color);
  }
}
/deep/ .el-select {
  .el-input__suffix {
    line-height: 28px;
    display: flex;
    align-items: center;
    // height: 100%;
    // border: none;
    // padding: 0 5px;
  }
}

/deep/ .el-radio-group {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: flex;
  align-items: center;
  font-size: var(--font-size);
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
  // width: 100%;
  // height: 100%;
  font-size: var(--font-size);
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
  height: 28px;
  line-height: 28px;
  border: 1px solid #ececec;
  .tit {
    padding: 0 8px;
    background: #f6f7f9;
    text-align: center;
    font-weight: 600;
    border-right: 1px solid #ececec;
  }
  .val {
    flex: 1;
  }
}

.basic-contain {
  .att-contain {
    .att-top {
      padding: 0 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .sys {
        width: 240px;
        .tit {
          width: 100px;
        }
        .val {
          /deep/ .spe-radio {
            justify-content: flex-start !important;
          }
        }
      }

      .sum-c {
        display: flex;
        justify-content: space-between;
        width: 240px;
        .basic-c {
          // width: 48%;
          width: 115px;
          .tit {
            width: 50px;
          }
          .val {
            width: 70px;
          }
        }
        .age {
          width: 85px;
        }
        .phone {
          width: 145px;
        }
      }
      .age-c {
        display: flex;
        justify-content: space-between;
        width: 256px;
        .basic-c {
          .tit {
            width: 90px;
          }
        }
      }
    }
    .att-bottom {
      padding: 0 15px;
      // border: 1px solid red;
      .after-basic {
        flex-wrap: wrap;
        justify-content: space-between;
        & > .pro {
          width: 360px;
          .tit {
            width: 100px;
            &.spe-tit {
              width: 120px;
            }
          }
        }
        .pro-select {
          .el-select {
            width: 100%;
          }
        }
        & > .name {
          width: 360px;
          display: flex;
          justify-content: space-between;
          .basic-c {
            width: 172px;
            &.l {
              width: 190px;
            }
            &.r {
              width: 158px;
            }
          }
          .tit {
            width: 87px;
          }
          .val {
            width: 92px;
          }
        }
        & > .birth {
          width: 100%;
          // border: 1px solid red;
          display: flex;
          justify-content: space-between;
          .content {
            // margin-right: 10px;
            width: 100%;
          }
          .spe-tit {
            width: 140px;
          }

          .des {
            flex: 1;
          }
          .tit {
            width: 90px;
          }
          .relation {
            width: 120px;
          }
          .wed {
            margin-left: 15px;

            .val {
              width: 80px;
            }
          }
          .el-select {
            width: 130px;
          }
          .val {
            display: flex;
            & > .el-input {
              // padding-left: 30px;
            }
          }
        }
        .spe-c {
          width: 100%;
          display: flex;
          align-items: center;
          .relate {
            width: calc(100% - 187px);
            margin-right: 15px;
            .tit {
              width: 160px;
            }
            .val {
              width: 190px;
            }
          }
          .text {
            flex: 1;
          }
        }
        .title-text {
          font-size: 14px;
          font-weight: 600;
          padding: 10px 0;
          position: relative;
          z-index: 100;
          width: 100%;
          margin-bottom: 15px;
          & > span {
            position: relative;
          }
          & > span::after {
            content: '';
            height: 14px;
            width: 100%;
            position: absolute;
            bottom: -4px;
            z-index: -1;
            left: -1px;
            background: #c1dbff;
          }
        }
      }
      .des {
        color: rgb(216, 8, 8);
      }
    }
  }
}

// .basic-contain {
//   height: 100%;
//   // background: var(--main-back);
//   .b-content {
//     // min-height: 300px;
//     .c-tit {
//       display: inline-block;
//       min-width: 88px;
//       text-align: right;
//       margin-right: 15px;
//       font-size: 15px;
//       color: var(--text-color);
//       margin: 5px 0;
//       font-weight: 600;
//     }
//     ul {
//       display: flex;
//       flex-wrap: wrap;
//       // justify-content: space-between;
//       // padding: 20px 0;
//       li {
//         width: 33.33%;
//         padding: 10px 0;
//         // padding-left: 15px;
//         & > span {
//           display: inline-block;
//           min-width: 88px;
//           text-align: right;
//           margin-right: 15px;
//         }
//         &:nth-child(4n) {
//           // margin-left:15px;
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
//       }
//     }
//   }
// }
</style>
