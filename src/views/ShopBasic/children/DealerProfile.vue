<template>
  <div class="basic-contain">
    <box-contain>
      <div class="att-contain">
        <title-contain value="整改前 经销商基本资料" align="center" isshowlogo="before" bgcolor="#FFF4F4"></title-contain>
        <div class="att-top">
          <div class="basic-c sys">
            <span class="tit">系统门店名</span>
            <div class="val">
              <el-input class="value" v-model="copyData.yzmdmc"></el-input>
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
            <span class="tit">原开业日期</span>
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
                <el-select v-model="copyData.yxb" placeholder="请选择">
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
                <!-- <el-select v-model="copyData.xb" placeholder="请选择">
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

        <title-contain value="整改后 经销商基本资料" align="center" isshowlogo="after"></title-contain>
        <div class="att-bottom">
          <el-timeline>
            <el-timeline-item timestamp="店铺基本信息" placement="top">
              <div class="after-basic flexcenter">
                <div class="basic-c pro">
                  <span class="tit">所属省份</span>
                  <div class="val">
                    <el-input class="value" v-model="copyData.sskhmc"></el-input>
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
                      <el-select v-model="copyData.xb" placeholder="请选择">
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
                  <div class="basic-c">
                    <span class="tit">婚否{{ typeof copyData.isjf }}</span>
                    <div class="val">
                      <el-select v-model="copyData.isjf" placeholder="请选择">
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
                  <span class="tit">毕业院校</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.byxx"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">学历</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group>-->
                      <el-input v-model="copyData.xl"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group>-->
                      <el-input v-model="copyData.jg"></el-input>
                    </div>
                  </div>
                </div>

                <Address
                  addressName="身份证地址"
                  :addressDetail="{ copyData, attrs: ['sfpro', 'sfcity'], desAttr: 'sfother' }"
                  widthtit="90"
                />

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
                  :addressDetail="{ copyData, attrs: ['lxpro', 'lxcity'], desAttr: 'lxother' }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                        placeholder="请选择"
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
                      <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" placeholder="请选择" clearable>
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
                  :addressDetail="{ copyData, attrs: ['gzpro', 'gzcity'] }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                        placeholder="请选择"
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
                      <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" placeholder="请选择" clearable>
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
                      <el-input class="value" v-model="copyData.frxm"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <el-select v-model="copyData.xb" placeholder="frxb">
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
                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <el-select v-model="copyData.frisjf" placeholder="请选择">
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
                  <span class="tit">毕业院校</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frbyxx"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">学历</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group>-->
                      <el-input v-model="copyData.frxl"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group>-->
                      <el-input v-model="copyData.frjg"></el-input>
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
                    <el-input v-model="copyData.frsfzhm"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit spe-tit">经营与法人关系</span>
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
                  :addressDetail="{ copyData, attrs: ['frsfpro', 'frsfcity'] }"
                  widthtit="90"
                />

                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">身份证地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                        placeholder="请选择"
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
                      <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" placeholder="请选择" clearable>
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
                    <el-input class="value" v-model="copyData.frlxmobile"></el-input>
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
                  :addressDetail="{ copyData, attrs: ['frlxpro', 'frlxcity'] }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">常住地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                        placeholder="请选择"
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
                      <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" placeholder="请选择" clearable>
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
                    <el-input v-model="copyData.frlxphone"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">电话</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group>-->
                    <el-input v-model="copyData.frlxmobile"></el-input>
                  </div>
                </div>

                <Address
                  addressName="地址"
                  :addressDetail="{ copyData, attrs: ['frgzpro', 'frgzcity'] }"
                  widthtit="90"
                />
                <!-- <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <el-select
                        v-model="shen_id"
                        placeholder="请选择"
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
                      <el-select v-model="shi_id" placeholder="请选择" @change="cityChange" clearable>
                        <el-option
                          v-for="item in shiValues"
                          :key="item.label"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>市
                      <el-select v-model="xian_id" placeholder="请选择" clearable>
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

    <!-- <box-contain logoVis="before" :isshowheader="headerObj">
      <div class="b-content">
        <ul>
          <li>
            <span>系统门店名:</span>
            <el-input v-model="copyData.yzmdmc"></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="copyData.yjmxz">
              <el-radio label="0">直营</el-radio>
              <el-radio label="1">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>上一次装修开业日期:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>
          <li>
            <span>姓名:</span>
            <el-input v-model="copyData.xm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.xb">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>年龄:</span>
            <el-input v-model="copyData.ynn"></el-input>
          </li>
          <li>
            <span>手机:</span>
            <el-input v-model="copyData.yphone"></el-input>
          </li>

          <li>
            <span>首次开业时间:</span>
            <el-input v-model="copyData.ykyrq"></el-input>
          </li>
        </ul>
      </div>
    </box-contain>
    <box-contain logoVis="before" :isshowheader="headerObjs">
      <div class="b-content">
        <title-contain value="店铺基本信息"></title-contain>
        <ul>
          <li>
            <span>贸易名称:</span>
            <el-input v-model="copyData.sskhmc"></el-input>
          </li>

          <li>
            <span>门店性质:</span>
            <el-radio-group v-model="copyData.jmxz">
              <el-radio label="0">直营</el-radio>
              <el-radio label="1">加盟</el-radio>
            </el-radio-group>
          </li>

          <li>
            <span>填表日期:</span>
            <el-input v-model="copyData.tbrq"></el-input>
          </li>
          <li>
            <span>本人加盟日期:</span>
            <el-input v-model="copyData.jmrq"></el-input>
          </li>
        </ul>
        <title-contain value="经营者资料"></title-contain>
        <ul>
          <li>
            <span>姓名:</span>
            <el-input v-model="copyData.jyzxm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.jyzxb">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>出生日期:</span>
            <el-input v-model="copyData.csrq"></el-input>
          </li>
          <li>
            <span>婚否:</span>
            <el-input v-model="copyData.isjf"></el-input>
          </li>

          <li>
            <span>毕业院校:</span>
            <el-input v-model="copyData.byxx"></el-input>
          </li>
          <li>
            <span>学历:</span>
            <el-input v-model="copyData.xl"></el-input>
          </li>
          <li>
            <span>籍贯:</span>
            <el-input v-model="copyData.jg"></el-input>
          </li>
          <li class="id-number">
            <span>身份证号:</span>
            <el-input v-model="copyData.sfzhm"></el-input>
          </li>
          <li class="address-css">
            <span>身份证地址:</span>
            <el-input v-model="copyData.sfpro"></el-input
            ><span class="pro">省</span
            ><el-input v-model="copyData.sfcity"></el-input
            ><span class="city">市/县</span>
            <el-input></el-input>
          </li>
        </ul>
        <div class="c-tit">联系方式</div>
        <ul>
          <li>
            <span>住宅电话:</span>
            <el-input v-model="copyData.lxphone"></el-input>
          </li>
          <li>
            <span>手机号码:</span>
            <el-input v-model="copyData.lxmobile"></el-input>
          </li>
          <li>
            <span>QQ:</span>
            <el-input v-model="copyData.lxqq"></el-input>
          </li>
          <li>
            <span>Email:</span>
            <el-input v-model="copyData.lxemail"></el-input>
          </li>
          <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.lxpro"></el-input
            ><span class="pro">省</span
            ><el-input v-model="copyData.lxcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.lxother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">工作单位</div>
        <ul>
          <li>
            <span>单位名称:</span>
            <el-input v-model="copyData.gzdwmc"></el-input>
          </li>
          <li>
            <span>传真:</span>
            <el-input v-model="copyData.gzfax"></el-input>
          </li>
          <li>
            <span>手机号:</span>
            <el-input v-model="copyData.ymobile"></el-input>
          </li>

          <li class="address-css">
            <span>单位地址:</span>
            <el-input></el-input><span class="pro">省</span><el-input></el-input
            ><span class="city">市/县</span>
            <el-input></el-input>
          </li>
        </ul>

        <title-contain value="法人资料"></title-contain>
        <ul>
          <li>
            <span>姓名:</span>
            <el-input v-model="copyData.frxm"></el-input>
          </li>
          <li>
            <span>性别:</span>
            <el-radio-group v-model="copyData.frxb">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>出生日期:</span>
            <el-input v-model="copyData.frcsrq"></el-input>
          </li>
          <li>
            <span>婚否:</span>
            <el-input v-model="copyData.frisjf"></el-input>
          </li>

          <li>
            <span>毕业院校:</span>
            <el-input v-model="copyData.frbyxx"></el-input>
          </li>
          <li>
            <span>学历:</span>
            <el-input v-model="copyData.frxl"></el-input>
          </li>
          <li>
            <span>籍贯:</span>
            <el-input v-model="copyData.frjg"></el-input>
          </li>

          <li class="id-number">
            <span>身份证号:</span>
            <el-input v-model="copyData.frsfzhm"></el-input>
          </li>
          <li>
            <span>经营者与法人关系:</span>
            <el-input v-model="copyData.yy"></el-input>
          </li>
          <li class="address-css">
            <span>身份证地址:</span>
            <el-input v-model="copyData.frsfpro"></el-input
            ><span class="pro">省</span
            ><el-input v-model="copyData.yjmcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frsfother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">联系方式</div>
        <ul>
          <li>
            <span>住宅电话:</span>
            <el-input v-model="copyData.frgzphone"></el-input>
          </li>
          <li>
            <span>手机号码:</span>
            <el-input v-model="copyData.frlxmobile"></el-input>
          </li>
          <li>
            <span>QQ:</span>
            <el-input v-model="copyData.frlxqq"></el-input>
          </li>
          <li>
            <span>Email:</span>
            <el-input v-model="copyData.frlxemail"></el-input>
          </li>
          <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.frgzpro"></el-input
            ><span class="pro">省</span
            ><el-input v-model="copyData.frgzcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frgzother"></el-input>县
          </li>
        </ul>
        <div class="c-tit">工作单位</div>
        <ul>
          <li>
            <span>单位名称:</span>
            <el-input v-model="copyData.frgzdwmc"></el-input>
          </li>
          <li>
            <span>传真:</span>
            <el-input v-model="copyData.frgzfax"></el-input>
          </li>
          <li>
            <span>手机号:</span>
            <el-input v-model="copyData.frlxmobile"></el-input>
          </li>

          <li class="address-css">
            <span>单位地址:</span>
            <el-input v-model="copyData.frgzpro"></el-input
            ><span class="pro">省</span
            ><el-input v-model="copyData.frgzcity"></el-input
            ><span class="city">市</span>
            <el-input v-model="copyData.frgzother"></el-input>县
          </li>
        </ul>
      </div>
    </box-contain>-->

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import Address from '@/components/common/Address';

import shengValues, { findCity, findCountry } from "@/utils/Provice.js";
import { mapState } from 'vuex';
import { editJmspData } from "@/network"
export default {
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
        },

      ],
      wedoptions: [{
        value: '0',
        label: '未婚'
      },
      {
        value: '1',
        label: '已婚'
      },

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
      ]
    };
  },
  created() {
    console.log(this.$store.state.userData);
  },
  mounted() { },
  methods: {
    clickSave() {
      this.loading = this.$Loading.service({
        fullscreen: true
      });
      editJmspData(this.copyData).then(da => {
        this.loading.close();
        if (da.data.errcode == 0) {
          this.$message({
            message: '数据保存成功！',
            type: 'success'
          });
        } else {
          this.$message({
            message: da.data.errmsg || "信息保存错误，请检查",
            type: 'warning'
          });
        }
      }).catch(val => {
        this.$message({
          message: val,
          type: 'warning'
        });
      })
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
    },
    // clickSummit() {
    //   console.log("open dailog");
    //   this.showDialog=true;
    // }
  },
  components: {
    BoxContain,
    TitleContain,
    Address
  },
  computed: {
    ...mapState(['ShopBasicData'])
  },
  watch: {
    ShopBasicData: {
      handler(newVal) {
        if (Object.keys(newVal).length <= 0) return;
        // 进行处理接口数据-日期截取 
        // this.copyData = JSON.parse(JSON.stringify(newVal));
        this.copyData = newVal;

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
    padding: 0 10px;
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
          width: 96px;
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
        & > .name {
          width: 360px;
          display: flex;
          justify-content: space-between;
          .basic-c {
            width: 172px;
          }
          .tit {
            width: 90px;
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
          .des {
            flex: 1;
          }
          .tit {
            width: 90px;
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
              padding-left: 30px;
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
            content: "";
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
