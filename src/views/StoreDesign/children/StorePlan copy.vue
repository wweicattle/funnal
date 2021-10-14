<template>
<!-- 店铺平面图 -->
  <div class="id-contain">
    <box-contain>
      <template v-if="!noneResult">
        <div v-viewer>
          <div class="id-content" v-for="(item, index) in storeImgsList" :key="index">
            <div class="id-img-con">
              <img :src="item.fileName" alt=""  v-if="item.isImage"/>
              <a class="upload" :href="item.fileName" v-else><span class="con">点击下载</span></a>
              <div class="id-des">
                <div class="d-header">店铺{{item.description}}：描述</div>
                <div>{{item.isImage?'图片':'文件'}}名称:<span>{{item.name}}</span></div>
                <div>{{item.isImage?'图片':'文件'}}大小:<span>{{(Number((item.filesize||0)/1024)).toFixed(2)+'KB'}}</span></div>
                <div>上传人员:<span>{{item.modifier}}</span></div>
                <div>上传日期:<span>{{item.modified}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="no-result">
          未上传店铺平面图
        </div>
      </template>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import { getStoreDesignImgs } from "@/network/index";

export default {
  components: { BoxContain },
  data() {
    return {
      loading: null,
      storeImgsList:[],
      noneResult:false, // 结果为空
    };
  },
  created() {
    console.log(this.$route);
    this.loading = this.$Loading.service({
      fullscreen: true,
    });
    this.getStoreDesignImgs()
  },
  mounted() {},
  methods: {
    getStoreDesignImgs(){
      getStoreDesignImgs('平面图').then(res=>{
        console.log("res",res);
        this.loading.close()
        if(res.data.errcode == 0){
          if(!res.data.data.length){this.noneResult = true;return;}
          res.data.data.forEach(element => {
            element.isImage = this.isAssetTypeAnImage(element.fileName);
          });
          this.storeImgsList = res.data.data;
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      })

    },
    isAssetTypeAnImage(url) {
      let ext = url.substr(url.lastIndexOf('.')+1)
      return [
      'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
      indexOf(ext.toLowerCase()) !== -1;
    } 
  },
};
</script>

<style scoped lang="scss">
@import '@/views/StoreDesign/common.scss';
</style>
