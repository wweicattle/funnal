<template>
  <div class="id-contain">
    <box-contain>
      <template v-if="!noneResult">
        <div>
          <div
            class="id-content"
            v-for="(item, index) in storeImgsList"
            :key="index"
          >
            <div class="id-img-con">
              <div class="img-l">
                <el-image
                  :src="item.fileName"
                  alt=""
                  v-if="item.isImage"
                  lazy
                  @click.native="openImageBtn(item.fileName)"
                />
                <a class="upload" :href="item.fileName" v-else
                  ><span class="con">点击下载</span></a
                >
              </div>

              <div class="id-des">
                <div class="d-header">店铺{{ item.description }}：描述</div>
                <div>
                  {{ item.isImage ? '图片' : '文件' }}名称:<span>{{
                    item.name
                  }}</span>
                </div>
                <div>
                  {{ item.isImage ? '图片' : '文件' }}大小:<span>{{
                    Number((item.filesize || 0) / 1024).toFixed(2) + 'KB'
                  }}</span>
                </div>
                <div>
                  上传人员:<span>{{ item.modifier }}</span>
                </div>
                <div>
                  上传日期:<span>{{ item.modified }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="no-result">
          <img src="static/img/qieimg.png" alt="" />无数据
        </div>
      </template>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
import { getStoreDesignImgs } from '@/network/index';

export default {
  components: { BoxContain },
  props: {
    type: {
      default: '',
      type: String
    },
    node: {
      default: '503',
      type: String
    }
  },
  data() {
    return {
      loading: null,
      storeImgsList: [],
      noneResult: false // 结果为空
    };
  },
  created() {
      let id = this.$store.state.userData.urlData.id;
    if (id==0||(!id)) return;
    this.loading = this.$Loading.service({
      fullscreen: true
    });
    this.getStoreDesignImgs();
  },
  mounted() {},
  methods: {
    openImageBtn(imgSrc){
      console.log(323);
      window.open(imgSrc);
    },
    getStoreDesignImgs() {
      getStoreDesignImgs(this.$props.type, this.$props.node).then((res) => {
        console.log('res', res);
        this.loading.close();
        if (res.data.errcode == 0) {
          if (!res.data.data.length) {
            this.noneResult = true;
            return;
          }
          res.data.data.forEach((element) => {
            element.isImage = this.isAssetTypeAnImage(element.fileName);
          });
          this.storeImgsList = res.data.data;
        } else {
          this.$Message.error(
            '获取数据失败！' + JSON.stringify(res.data.errmsg)
          );
        }
      });
    },
    isAssetTypeAnImage(url) {
      let ext = url.substr(url.lastIndexOf('.') + 1);
      return (
        [
          'png',
          'jpg',
          'jpeg',
          'bmp',
          'gif',
          'webp',
          'psd',
          'svg',
          'tiff'
        ].indexOf(ext.toLowerCase()) !== -1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
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
      overflow: hidden;
      align-items: center;
      .img-l {
        width: 340px;
        .el-image {
          width: 340px;
        }
      }

      .id-des {
        // flex: 1;
        padding: 20px 0 0 20px;
        background: url('/static/img/comlogo.png') no-repeat 20px 6px;

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
    width: 340px;
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

.no-result {
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
</style>