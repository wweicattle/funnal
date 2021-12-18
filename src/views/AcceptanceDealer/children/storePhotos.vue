<template>
  <div class="storePhotos" v-viewer>
    <div class="nav">
      <div
        class="nav-item"
        :class="{ 'nav-item-active': navActive == index }"
        v-for="(item, index) in navList"
        :key="'sp' + index"
        @click="navActive = index"
      >
        <span>{{ item.name }}</span>
        <i v-show="navActive == index" class="el-icon-picture-outline"></i>
        <span v-show="navActive == index">{{ imgList.length }}</span>
      </div>
    </div>
    <div ref="list" class="photo-list scrollbar-css">
      <div
        class="photo-item"
        v-for="(item, index) in imgList"
        :key="index + item.modified"
      >
        <div class="item-img">
          <img :src="item.fileName" alt />
        </div>
        <div class="item-info">
          <!-- <img src="../../../../public/static/img/装饰／logo.png" alt /> -->
          <el-tooltip
            class="item"
            effect="light"
            :content="'图片名称：' + item.description"
            placement="top-start"
          >
            <div class="item-info-detail">
              <span>图片名称：</span>
              <span>{{ item.description }}</span>
            </div>
          </el-tooltip>
          <div class="item-info-detail">
            <span>图片大小：</span>
            <span>{{ item.filesize }}</span>
          </div>
          <el-tooltip
            class="item"
            effect="light"
            :content="'上传人员：' + item.modifier"
            placement="top-start"
          >
            <div class="item-info-detail">
              <span>上传人员：</span>
              <span>{{ item.modifier }}</span>
            </div>
          </el-tooltip>
          <div class="item-info-detail">
            <span>上传日期：</span>
            <span>{{ item.modified }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDpclzp, getPicture } from '@/network';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      navActive: 0,
      navList: [],
      scale: 1,
      mr: 0,
      num: 0,
      imgList: []
    };
  },
  mounted() {
    // this.computedMr()
       let id = this.$store.state.userData.urlData.id;
    if (id==0||(!id)) return;
    this.init();
  },
  computed: {
    ...mapState({
      urlData: (state) => state.userData.urlData
    })
  },
  watch: {
    navActive(val) {
      const kindType = this.navList[val].accessoryKindType;
      kindType && this.initImg(kindType);
    }
  },
  methods: {
    async init() {
      this.navActive = 0;
      const resNav = await getDpclzp(this.urlData.id);
      if (resNav.data.errcode == 0) {
        this.navList = resNav.data.data.map((item) => {
          const name = item.accessoryKindType.match(/\[(.+?)\]/g)[0];
          return {
            accessoryKindType: item.accessoryKindType,
            name: name.substring(1, name.length - 1)
          };
        });
      }
      const kindType = this.navList[this.navActive].accessoryKindType;
      kindType && this.initImg(kindType);
    },
    async initImg(kindType) {
      const resList = await getPicture(this.urlData.id, { tplxmc: kindType });

      if (resList.data.errcode == 0) {
        resList.data.data.forEach((it) => {
          it.filesize = this.conver(it.filesize);
        });
        this.imgList = resList.data.data;
        this.imgList.length == 0 && this.$message.error('暂无数据');
      }
    },
    conver(limit) {
      var size = '';
      if (limit < 0.1 * 1024) {
        //如果小于0.1KB转化成B
        size = limit.toFixed(2) + 'B';
      } else if (limit < 0.1 * 1024 * 1024) {
        //如果小于0.1MB转化成KB
        size = (limit / 1024).toFixed(2) + 'KB';
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {
        //如果小于0.1GB转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
      } else {
        //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
      }

      var sizestr = size + '';
      var len = sizestr.indexOf('.');
      var dec = sizestr.substr(len + 1, 2);
      if (dec == '00') {
        //当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
      }
      return sizestr;
    }
  }
};
</script>

<style lang="scss" scoped>
.storePhotos {
  height: 100%;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 15px 2px rgba(222, 222, 222, 0.2);
  border-radius: 8px;
  // padding: 30px;
  // padding-bottom: 0;
  display: flex;
  flex-direction: column;
  .nav {
    // margin-bottom: 30px;
    display: flex;
    align-items: center;
    // padding: 15px 30px 0 30px;
    .nav-item {
      padding-right: 25px;
      font-size: var(--font-size);
      font-weight: bold;
      color: var(--default-text-color);
      line-height: 22px;
      cursor: pointer;
      transition: font linear 100ms;
      white-space: nowrap;
    }
    .nav-item-active {
      color: var(--sle-text-color);
      font-size: 16px;
      span:last-child {
        font-size: 14px;
        line-height: 17px;
      }
      i {
        font-size: 13px;
        margin-left: 8px;
        font-weight: bold;
      }
    }
  }
  .photo-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
    padding: 0 30px;
    .photo-item {
      margin-top: 20px;
      width: 45.5%;
      height: 200px;
      background: #ffffff;
      box-shadow: 0px 1px 4px 1px rgba(237, 237, 237, 0.5);
      border-radius: 4px;
      border: 1px solid #f1f1f1;
      margin-left: 6%;
      display: flex;
      background: url('~assets/img/decologo.png') no-repeat 79% 13%;
      .item-img {
        width: 43%;
        height: 200px;
        display: flex;
        justify-content: center;
        /* margin-right: 3%; */
        align-items: center;
        img {
          max-width: 100%;
          max-height: 100%;
          transform: translateX(-25px);
        }
      }
      .item-info {
        height: 200px;
        overflow: hidden;

        // img {
        //   width: 80%;
        //   margin-top: 25px;
        //   margin-bottom: 15px;
        // }
        margin-top: 60px;
        flex: 1;
        display: flex;
        flex-direction: column;
        .item-info-detail {
          white-space: nowrap;
          margin-bottom: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            font-size: var(--font-size);
            font-weight: 400;
            color: var(--default-text-color);
            line-height: 22px;
            &:last-child {
              color: val(--text-color);
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      // &:nth-child(2n) {
      //   margin-right: 0;
      // }
      &:nth-child(2n + 1) {
        margin-left: 3%;
      }
    }
  }
}
</style>
