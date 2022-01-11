<template>
  <div class="id-contain">
    <box-contain :isshowheader="headerObj">
      <title-contain
        value="商圈"
        @sendBig="watchBig"
        :watchBig="watchAt"
      ></title-contain>

      <div class="map-content">
        <div class="upload">
          <iframe
            :src="iFrameSrc"
            frameborder="0"
            class="scrollbar-css"
            id="ifrmname"
            ref="iframeFa"
            name="refresh_name"
          ></iframe>
        </div>
      </div>
      <el-dialog
        :visible.sync="dialogTableVisible"
        title="商圈图"
        @close="closeIframe"
      >
        <iframe :src="iFrameSrc" frameborder="0" name="iframe"   ref="iframeFa"></iframe>
      </el-dialog>
    </box-contain>
  </div>
</template>
  <script>
import BoxContain from '@/components/common/BoxContain';
import TitleContain from '@/components/common/TitleContain';
import { mapState } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      headerObj: { text: '附近商圈' },
      imgList: [],
      dialogTableVisible: false,
      watchAt: true
    };
  },
  components: {
    BoxContain,
    TitleContain
  },
  created() {},
  computed: {
    ...mapState(['userData']),
    iFrameSrc() {
      let mapID = this.userData.urlData.id;
      let { username, userid,userssid } = this.userData.userInfo;
      let src = `http://webt.lilang.com:9001/jmspnew/WinData.aspx?jmid=${mapID}&userid=${userid}&username=${username}&userssid=${userssid}`;
      return src;
    }
  },
  methods: {
    closeIframe() {
      // 刷新iframe
      window.open(this.$refs.iframeFa.src, 'refresh_name', '');
    },
    watchBig() {
      this.dialogTableVisible = true;
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
  width: 1040px;
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
    width: 1030px;
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
   
  }
  .el-button {
    background: var(--sle-text-color);
    border: none;
    margin-left: 20px;
  }
}
</style>