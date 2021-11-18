<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
      <template v-for="(val, index) in imgList">
        <div class="id-content" :key="index">
          <div class="id-img-con">
            <div class="img-l">
              <el-image :src="val.fileName" alt  lazy v-if="false" />
              <div class="upload" v-else>
                <div class="con">
                  <el-icon class="el-icon-plus"></el-icon>
                  <div>上传地图</div>
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
      headerObj: { text: '店铺合同' },
      imgList: []
    };
  },
  components: {
    BoxContain
  },
  created() {
    getJmspImgList('店租合同').then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.imgList = data;
      } else {
        this.$Message.error('获取数据失败！' + JSON.stringify(da.data.errmsg));
      }
    });
  }
};
</script>
