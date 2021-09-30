<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <div class="remind">*请确保边角完整，无反光遮挡</div>
    <template v-for="(val, index) in imgList">
        <div class="id-content" :key="index">
          <div class="id-img-con">
            <img :src="val.fileName" alt="" v-viewer/>
            <div class="id-des">
              <div class="d-header">{{headerObj.text}}：描述</div>
              <div>图片名称:<span>{{val.name}}</span></div>
                          <div>图片大小:<span>{{(Number((val.filesize||0)/1024)).toFixed(2)+'KB'}}</span></div>

              <div>上传人员:<span>{{val.name}}</span></div>
              <div>上传日期:<span>{{val.modified}}</span></div>
            </div>
          </div>
        </div>
      </template>
    </box-contain>
  </div>
</template>
  <script>
import BoxContain from "@/components/common/BoxContain";
import TitleContain from "@/components/common/TitleContain";
import { getJmspImgList } from "@/network/index";

export default {
  name: "App",
  data() {
    return {
      headerObj: { text: "测量准确图" },
      imgList: [],
    };
  },
  created() {
    console.log();
    getJmspImgList("营业执照").then((da) => {
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.imgList = data;
        console.log(data);
      } else {
        this.$Message.error("获取数据失败！" + JSON.stringify(da.data.errmsg));
      }
    });
  },
  components: {
    BoxContain,
    TitleContain,
  },
};
</script>
