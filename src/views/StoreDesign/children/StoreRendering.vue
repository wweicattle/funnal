<template>
<!-- 店铺效果图 -->
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <template v-for="(item, index) in storeImgsList">
        <div class="id-content" :key="index">
          <div class="id-img-con">
            <img :src="item.fileName" alt="" v-viewer/>
            <div class="id-des">
              <div class="d-header">{{headerObj.text}}：描述</div>
              <div>图片名称:<span>{{item.name}}</span></div>
              <div>图片大小:<span>{{(Number((item.filesize||0)/1024)).toFixed(2)+'KB'}}</span></div>
              <div>上传人员:<span>{{item.modifier}}</span></div>
              <div>上传日期:<span>{{item.modified}}</span></div>
            </div>
          </div>
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
      headerObj: {text: '店铺效果图'},
      loading: null,
      storeImgsList:[],
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
      getStoreDesignImgs('效果图').then(res=>{
        console.log("res",res);
        this.loading.close()
        if(res.data.errcode == 0){
          this.storeImgsList = res.data.data;
        } else {
          this.$Message.error(
            "获取数据失败！" + JSON.stringify(da.data.errmsg)
          );
        }
      })

    }
  },
};
</script>

<style scoped lang="scss">
.id-contain {
  font-size: 12px;
  .id-content {
    margin-top: 20px;
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
        background: url("/static/img/comlogo.png") no-repeat 20% 2%;
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
  .upload {
    margin-top: 0px;
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
}
</style>
