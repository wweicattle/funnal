<template>
  <div class="basic-contain">
    <box-contain>
      <div class="att-contain">
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
              <el-input class="value" v-model="copyData.yzmdmc"></el-input>
            </div>
          </div>
          <div class="basic-c sys">
            <span class="tit">加盟性质</span>
            <div class="val">
              <el-radio-group v-model="copyData.yjmxz">
                <el-radio label="0">直营</el-radio>
                <el-radio label="1">加盟</el-radio>
              </el-radio-group>
              <!-- <el-input class="value"></el-input> -->
            </div>
          </div>
          <div class="basic-c sys">
            <span class="tit">原开业日期</span>
            <div class="val">
              <el-date-picker
                v-model="copyData.ykyrq"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              <!-- <el-input class="value"></el-input> -->
            </div>
          </div>
          <div class="sum-c">
            <div class="basic-c">
              <span class="tit">姓名</span>
              <div class="val">
                <el-input class="value" v-model="copyData.yzmdmc"></el-input>
              </div>
            </div>
            <div class="basic-c">
              <span class="tit">性别</span>
              <div class="val">
                <el-select v-model="copyData.xb" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <!-- <el-input class="value"></el-input> -->
              </div>
            </div>
          </div>
          <div class="sum-c">
            <div class="basic-c age">
              <span class="tit">年龄</span>
              <div class="val age">
                <el-input class="value" v-model="copyData.yzmdmc"></el-input>
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
                </el-select> -->
                <el-input class="value"></el-input>
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
              </el-date-picker> -->
              <el-input class="value"></el-input>
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
                    <el-input
                      class="value"
                      v-model="copyData.yzmdmc"
                    ></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">填表日期</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">加盟性质</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="basic-c pro">
                  <span class="tit">加盟利郎时间</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
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
                      <el-input
                        class="value"
                        v-model="copyData.yzmdmc"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">出生日期</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">毕业院校</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">学历</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">身份证地址</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <!-- title text -->
                <div class="title-text"><span>联系方式</span></div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">住宅电话</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="copyData.yzmdmc"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">手机</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">QQ号码</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">Email</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">常住地址</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <!-- <span class="tit">毕业院校</span> -->
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>

                <div class="title-text"><span>工作单位</span></div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>

                <div class="name">
                  <div class="basic-c">
                    <span class="tit">传真</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">手机</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c des">
                    <!-- <span class="tit">婚否</span> -->
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c wed">
                    <span class="tit">电话</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
              </div>
            </el-timeline-item>

            <el-timeline-item timestamp="营业执照的法人资料" placement="top">
              <div class="after-basic flexcenter">
                <div class="spe-c">
                  <div class="relate">
                    <div class="basic-c">
                      <span class="tit">*经营者与法人关系</span>
                      <div class="val">
                        <el-input
                          class="value"
                          v-model="copyData.yzmdmc"
                        ></el-input>
                      </div>
                    </div>
                  </div>
                  <div class="text">lorem</div>
                </div>

                <div class="name">
                  <div class="basic-c">
                    <span class="tit">姓名</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="copyData.yzmdmc"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">性别</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">出生日期</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">毕业院校</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">学历</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">籍贯</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <div class="basic-c pro name">
                  <span class="tit">身份证号码</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">身份证地址</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">婚否</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <!-- title text -->
                <div class="title-text"><span>联系方式</span></div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">住宅电话</span>
                    <div class="val">
                      <el-input
                        class="value"
                        v-model="copyData.yzmdmc"
                      ></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">手机</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="name">
                  <div class="basic-c">
                    <span class="tit">QQ号码</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">Email</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <span class="tit">常住地址</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>
                <div class="basic-c pro name">
                  <!-- <span class="tit">毕业院校</span> -->
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>

                <div class="title-text"><span>工作单位</span></div>
                <div class="basic-c pro name">
                  <span class="tit">名称</span>
                  <div class="val">
                    <!-- <el-radio-group v-model="copyData.yjmxz">
                      <el-radio label="0">直营</el-radio>
                      <el-radio label="1">加盟</el-radio>
                    </el-radio-group> -->
                    <el-input class="value"></el-input>
                  </div>
                </div>

                <div class="name">
                  <div class="basic-c">
                    <span class="tit">传真</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c">
                    <span class="tit">手机</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>

                <div class="birth">
                  <div class="basic-c content">
                    <span class="tit">地址</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c des">
                    <!-- <span class="tit">婚否</span> -->
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                  <div class="basic-c wed">
                    <span class="tit">电话</span>
                    <div class="val">
                      <!-- <el-radio-group v-model="copyData.yjmxz">
                        <el-radio label="0">直营</el-radio>
                        <el-radio label="1">加盟</el-radio>
                      </el-radio-group> -->
                      <el-input class="value"></el-input>
                    </div>
                  </div>
                </div>
              </div>
            </el-timeline-item>
            <el-timeline-item> </el-timeline-item>
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
            <el-input v-model="copyData.dwmc"></el-input>
          </li>
          <li>
            <span>传真:</span>
            <el-input v-model="copyData.yzmdfax"></el-input>
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
    </box-contain> -->

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import { mapState } from 'vuex';

export default {
  name: 'JXSDATA',
  data() {
    return {
      copyData: {},
      headerObj: { text: '旧版经销商基本资料' },
      headerObjs: { text: '新版经销商基本资料' },
      radio: null,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
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
      ]
    };
  },
  created() {},
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
        if (Object.keys(newVal).length <= 0) return;
        // 进行处理接口数据-日期截取 性别男女
        this.copyData = JSON.parse(JSON.stringify(newVal));
        let dateArr = ['csrq', 'ykyrq', 'tbrq', 'jmrq'];
        let sex = ['xb', 'jyzxb', 'frxb'];
        dateArr.forEach((val) => {
          this.copyData[val] = this.copyData[val].split(' ')[0];
        });
        sex.forEach((val) => {
          console.log(this.copyData[val]);
          if (this.copyData[val] == '中' || !this.copyData[val])
            this.copyData[val] = '男';
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
    // height: 100%;
    // border: none;
    // padding: 0 5px;
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
/deep/ .el-timeline{
  // width: 100%;
  // height: 100%;
  font-size: var(--font-size);
  .el-timeline-item{
    &:last-child{
      display: none;
    }
  }
  .el-timeline-item__node{
    background:#fff;
    border: 2px solid var(--sle-text-color);

  }
  .el-timeline-item__wrapper{
    padding-left:20px;
  }
  .el-timeline-item__timestamp{
    font-size: 16px;
    color: var(--font-size);
    font-weight: 600;
    padding-top: 2px;
    margin-bottom: 20px;
    color: var(--sle-text-color);
  }
}

.basic-c {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
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
      padding:0 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .sys {
        width: 240px;
        .tit {
          width: 96px;
        }
      }

      .sum-c {
        display: flex;
        justify-content: space-between;
        width: 240px;
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
        .age{
            width: 90px;
        }
        .phone{
          width: 148px;
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
            width: 110px;
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
            margin-right: 10px;
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
          &>span{
            position: relative;
          }
          &>span::after {
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
