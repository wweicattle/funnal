<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <title-contain
        value="地图"
        @sendBig="watchBig"
      :watchBig="watchAt"
      ></title-contain>

      <!-- <button @click="closeIframe">sascloseIframe</button> -->

      <div class="map-content">
        <div class="upload">
          <!-- <div class="con"> -->
          <iframe
            :src="iFrameSrc"
            frameborder="0"
            class="scrollbar-css"
            id="ifrmname"
            ref="iframeFa"
          name="refresh_name"
          ></iframe>
          <!-- <el-icon class="el-icon-plus"></el-icon>
          <div>上传地图</div> -->
          <!-- </div> -->
        </div>
        <!-- <div>
          <el-button type="primary" size="small">
            查看大图
          </el-button>
        </div> -->
      </div>
      <!-- <div class="id-content">
        <div class="remind">
          *店铺位置修正后，不宜随意修改，请联系总部信息IT部
        </div>
        <div class="id-img-con">
          <img src="static/img/hetong.png" alt="" />
          <div class="id-des">
            <div class="d-header">租赁合同：描述</div>
            <div>图片名称:<span>租赁合同</span></div>
            <div>图片大小:<span>0.8M</span></div>
            <div>上传人员:<span>加盟申请人</span></div>
            <div>上传日期:<span>2010-07-27 21:37:26</span></div>
          </div>
        </div>
      </div> -->
      <title-contain value="经销商上传地图"></title-contain>
      <template v-for="(val, index) in imgList">
        <div class="id-content" :key="index">
          <div class="id-img-con">
            <div class="img-l">
              <el-image
                :src="val.fileName"
                alt
                lazy
                v-if="isImg(val.name.split('.')[1])"
              />
              <div class="upload" v-else>
                <div class="con">
                  <div class="name">
                    <el-icon class="el-icon-notebook-2"></el-icon
                    > <el-tooltip
                      class="item"
                      effect="dark"
                      :content="val.name"
                      placement="top"
                    >
                      <span class="text">{{ val.name }} </span>
                    </el-tooltip>
                  </div>
                  <div>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="downloadFile(val.fileName, 1)"
                    >
                      查看文件
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="downloadFile(val.fileName, 2)"
                    >
                      下载文件
                    </el-button>
                  </div>
                  <!-- <div>打开文件</div> -->
                </div>
              </div>
            </div>
            <div class="id-des">
              <div class="d-header">{{ headerObj.text }}：描述</div>
              <div>
                图片名称:
                <span>{{ val.name }}</span>
              </div>
              <div>
                图片大小:
                <span>{{
                  Number((val.filesize || 0) / 1024).toFixed(2) + 'KB'
                }}</span>
              </div>

              <div>
                上传人员:
                <span>{{ val.modifier }}</span>
              </div>
              <div>
                上传日期:
                <span>{{ val.modified }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-if="imgList.length == 0" class="without-content">
        <div class="id-content">
          <div class="no-result">
            <img src="static/img/qieimg.png" alt="" />无上传图片
          </div>
        </div>
      </div>
      <!-- <div class="upload">
        <div class="con">
          <el-icon class="el-icon-plus"></el-icon>
          <div>上传租赁合同图片</div>
        </div>
      </div> -->

      <el-dialog
        :visible.sync="dialogTableVisible"
        title="地图"
        @close="closeIframe"
      >
        <iframe
            :src="iFrameSrc"
            frameborder="0"
            name="iframe"
          ></iframe>
      </el-dialog>
    </box-contain>
  </div>
</template>
  <script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import { getJmspImgList } from '@/network/index';
import isImg from '@/utils/isImg.js';
import { mapState } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      headerObj: { text: '商圈路段图' },
      imgList: [],
      dialogTableVisible: false,
      watchAt:true
    };
  },
  components: {
    BoxContain,
    TitleContain
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id == 0 || !id) return;
    getJmspImgList('路段图').then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.imgList = data;
      } else {
        this.$Message.error('获取数据失败！' + JSON.stringify(da.data.errmsg));
      }
    });
  },
  computed: {
    ...mapState(['userData']),
    iFrameSrc() {
      let mapID = this.userData.urlData.id;
      let mapType = this.userData.urlData.lx;
      let userid = this.userData.userInfo.userid;
      let src = `http://webt.lilang.com:9001/jmspnew/getpoint/showpoint.aspx?mapID=${mapID}&mapType=${mapType}&userid=${userid}`;
      return src;
    }
  },
  methods: {
    closeIframe() {
      // 刷新iframe
         window.open(this.$refs.iframeFa.src,'refresh_name','')
    },
    watchBig() {
      this.dialogTableVisible = true;
      // console.log(ifrmname.cloneNode());
      this.$nextTick((val) => {
        // console.log(this.$refs.dialogs);
        // this.$refs.dialogs.appendChild(ifrmname.cloneNode());
      });

      // this.$refs.dialogs.$el
      //   .querySelector('.son-content')
      //   .appendChild(ifrmname);
    },
    isImg(fileName) {
      console.log(fileName);
      return isImg(fileName);
    },
    downloadFile(fileName, state) {
      if (state == 2) {
        const link = document.createElement('a');
        fetch(fileName)
          .then((res) => res.blob())
          .then((blob) => {
            // 将链接地址字符内容转变成blob地址
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
      } else {
        window.open(fileName);
      }
    }
  }
};
</script>
  <style  scoped lang="scss">
::v-deep .el-dialog {
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto !important;
  position: absolute;
  width: 1000px;
  height: 94%;
  overflow: hidden;
  .el-dialog__header {
    border-bottom: 1px solid #e1e1e1;
  }
  .el-dialog__body {
    padding: 0;
    height: calc(100% - 70px);
    // border: 1px solid red;
    overflow: hidden;
    &::-webkit-scrollbar {
      // 滚动条的背景
      width: 16px;
      background: inherit;
      height: 14px;
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-radius: 999px;
      width: 20px;
      border: 5px solid transparent;
    }

    &::-webkit-scrollbar-track {
      box-shadow: 1px 1px 5px #fff;
    }

    &::-webkit-scrollbar-thumb {
      //滚动条的滑块样式修改
      width: 20px;
      min-height: 20px;
      background-clip: content-box;
      box-shadow: 0 0 0 5px #999 inset;
    }
  }

  .son-content {
    width: 1000px;
    height: 100%;
  }
  iframe {
    padding-top: 10px;
    width: 996px;
    height: 100%;
  }
}

.scrollbar-css {
  &::-webkit-scrollbar {
    // 滚动条的背景
    width: 16px;
    background: inherit;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    width: 20px;
    border: 5px solid transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px #fff;
  }

  &::-webkit-scrollbar-thumb {
    //滚动条的滑块样式修改
    width: 20px;
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px #999 inset;
  }
}
.id-contain {
  font-size: 12px;
  .id-content {
    .remind {
      color: #f13e3e;
      margin: 10px 0;
    }
    .id-img-con {
      //   border: 1px solid red;
      display: flex;
      height: 254px;
      img {
        width: 381px;
      }
      .id-des {
        padding: 20px 0 0 20px;
        background: url('/static/img/comlogo.png') no-repeat 20% 2%;
        .d-header {
          color: #0670ff;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 600;
        }
        & > div {
          padding-bottom: 15px;
          & > span {
            font-weight: 600;
            padding-left: 15px;
          }
        }
      }
    }
  }
  .map-content {
    display: flex;
    align-items: flex-end;
    .upload {
      margin-top: 20px;
      width: 100%;
      background: #f6f7f9;
      text-align: center;
      height: 454px;
      display: flex;
      align-items: center;
      justify-content: center;
      iframe {
        width: 100%;
        height: 100%;
      }
      // .con {
      //   color: #a4aab6;
      //   .el-icon-plus {
      //     padding-bottom: 15px;
      //     font-size: 30px !important;
      //   }
      //   &:hover {
      //     cursor: pointer;
      //     opacity: 0.7;
      //   }
      // }
    }
    .expand {
    }
  }
  .el-button {
    background: var(--sle-text-color);
    border: none;
    margin-left: 20px;
  }
}
</style>