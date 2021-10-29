<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
      <!-- <el-image src="static/img/hetong.png" alt v-viewer lazy /> -->

      <template v-for="(val, index) in imgList">
        <div class="id-content" :key="index">
          <div class="id-img-con">
            <div class="img-l">
              <el-image :src="val.fileName" alt v-viewer lazy />
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
          <div class="id-img-con">
            <div class="img-l">
              <!-- <el-image :src="val.fileName" alt v-viewer lazy /> -->
            </div>
            <div class="id-des">
              <div class="d-header">：描述</div>
              <div>
                图片名称:
                <span></span>
              </div>
              <div>
                图片大小:
                <span></span>
              </div>

              <div>
                上传人员:
                <span></span>
              </div>
              <div>
                上传日期:
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain';
import { getJmspImgList } from '@/network/index';

export default {
  name: 'App',
  data() {
    return {
      headerObj: { text: '身份证复印件' },
      imgList: []
    };
  },
  created() {
    console.log();
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
        .el-image {
          width: 340px;
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
  }
  .upload {
    margin-top: 20px;
    width: 381px;
    background: #f6f7f9;
    text-align: center;
    height: 254px;
    display: flex;
    align-items: center;
    justify-content: center;
    .con {
      color: #a4aab6;
      .el-icon-plus {
        padding-bottom: 15px;
        font-size: 30px !important;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.7;
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