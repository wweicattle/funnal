<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
      <!-- <el-image src="static/img/hetong.png" alt v-viewer lazy /> -->

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
                    ><span class="text">{{ val.name }}</span>
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
                <span>{{ val.name }}</span>
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
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import { getJmspImgList } from '@/network/index';
import isImg from '@/utils/isImg.js';

export default {
  name: 'App',
  data() {
    return {
      headerObj: { text: '身份证复印件' },
      imgList: []
    };
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id == 0 || !id) return;
    getJmspImgList('身份证复印件').then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.imgList = data;
      } else {
        this.$Message.error('获取数据失败！' + JSON.stringify(da.data.errmsg));
      }
    });
  },
  components: {
    BoxContain
  },
  methods: {
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
<style   lang="scss">
.id-contain {
  font-size: 13px;
  .remind {
    color: #f13e3e;
    font-size: 12px;
    margin: 15px 0;
  }
  .id-content {
    margin-bottom: 35px;
    .id-img-con {
      // border: 1px solid red;
      display: flex;
      height: 254px;
      overflow: hidden;
      align-items: center;
      .img-l {
        width: 340px;
        position: relative;
        .el-image {
          width: 340px;
        }
        a {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .id-des {
        padding: 20px 0 0 20px;
        background: url('/static/img/comlogo.png') no-repeat 20px 8px;
        .d-header {
          color: #0670ff;
          margin-bottom: 10px;
          font-size: 15px;
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
    .no-result {
      // width: 800px;
      margin: 160px 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      font-size: 14px;
      color: #ccc;
      img {
        width: 76px;
      }
    }
  }
  .upload {
    // margin-top: 20px;width: 100%;
    height: 254px;
    background: #f6f7f9;
    text-align: center;
    // height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .con {
      color: #a4aab6;
      .el-icon-notebook-2 {
        margin-bottom: 15px;
        font-size: 30px !important;
        color: rgb(255, 156, 0);
        // padding-top: 4px;
      }
      .text {
        text-align: left;
        font-size: 20px;
        color: #999;
        // vertical-align: 3px;
        display: inline-block;
        max-width: 120px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
      .name {
        // display: flex;
        // align-items: center;
        // height: 100px;
      }
    }
  }
  .without-content {
    // margin: 20px 0 0 30px;
    // font-size: 20px;
    // color: #ccc;
  }
}
</style>