<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
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
      headerObj: { text: '店铺合同' },
      imgList: []
    };
  },
  created() {
    let id = this.$store.state.userData.urlData.id;
    if (id == 0 || !id) return;
    getJmspImgList('店租合同').then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.imgList = data;
        if (this.imgList.length == 0) return;
        this.imgList[0].fileName =
          'https://oos-fj2.ctyunapi.cn/lilanz/public/maxhub/maxhub_guide2.pdf';
        this.imgList[0].name = 'ew.pdf';
      } else {
        this.$Message.error('获取数据失败！' + JSON.stringify(da.data.errmsg));
      }
    });
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
            link.download = file_name;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
      } else {
        window.open(fileName);
      }
    }
  },

  components: {
    BoxContain
  }
};
</script>
