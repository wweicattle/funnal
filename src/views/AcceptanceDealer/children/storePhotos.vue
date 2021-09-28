<template>
  <div class="storePhotos">
    <div class="nav">
      <div class="nav-item" :class="{ 'nav-item-active': navActive == index }" v-for="(item,index) in navList" :key="'sp' + index" @click="navActive = index">
        <span>{{ item }}</span>
        <i v-show="navActive == index" class="el-icon-picture-outline"></i>
        <span v-show="navActive == index">14</span>
      </div>
    </div>
    <div ref="list" class="photo-list scroll-list">
      <div class="photo-item" v-for="(item,index) in 10" :key="index" :style="{ marginRight: (index + 1) % num != 0 ? `${mr}px` : '0' }">
        <div class="item-img">
          <img src="./1.jpg" alt />
        </div>
        <div class="item-info">
          <img src="../../../../public/static/img/装饰／logo.png" alt />
          <div class="item-info-detail">
            <span>图片名称：</span>
            <span>专卖店相片灯具</span>
          </div>
          <div class="item-info-detail">
            <span>图片大小：</span>
            <span>0.8M</span>
          </div>
          <div class="item-info-detail">
            <span>上传人员：</span>
            <span>加盟申请人</span>
          </div>
          <div class="item-info-detail">
            <span>图片大小：</span>
            <span>0.8M</span>
          </div>
          <div class="item-info-detail">
            <span>上传日期：</span>
            <span>2010-07-27 21:37:26</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActive: 0,
      navList: ['灯具', '橱窗', '货柜', '中岛', '门头', '收银台/形象墙', '地板/吊顶', '店主形象照', '道具文字说明'],
      scale: 1,
      mr: 0,
      num: 0,
    }
  },
  mounted() {
    this.computedMr()
  },
  methods: {
    computedMr() {
      const { clientWidth } = this.$refs.list
      const childWdith = this.$refs.list.children[0].clientWidth
      const num = Math.floor(clientWidth / childWdith)
      const mr = (clientWidth - 15 - num * childWdith) / (num - 1)
      this.num = num
      this.mr = mr
    }
  },
}
</script>

<style lang="scss" scoped>
.storePhotos {
  height: 100%;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 15px 2px rgba(222, 222, 222, 0.2);
  border-radius: 8px;
  padding: 30px;
  // padding-bottom: 0;
  display: flex;
  flex-direction: column;
  .nav {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    .nav-item {
      padding-right: 40px;
      font-size: 14px;
      font-weight: bold;
      color: var(--default-text-color);
      line-height: 22px;
      cursor: pointer;
      transition: font linear 100ms;
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
    overflow: auto;
    .photo-item {
      margin: 30px 0;
      width: 500px;
      height: 320px;
      background: #ffffff;
      box-shadow: 0px 1px 4px 1px rgba(237, 237, 237, 0.5);
      border-radius: 4px;
      border: 1px solid #f1f1f1;
      // margin-right: 20px;
      display: flex;
      .item-img {
        width: 46.9%;
        // width: ;
        height: 344px;
        transform: translateY(-24px);
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
      .item-info {
        img {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        margin-left: 20px;
        flex: 1;
        .item-info-detail {
          margin-bottom: 20px;
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
    }
  }
}
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
.scroll-list::-webkit-scrollbar {
  width: 6px;
  height: 16px;
  background-color: transparent;
}

/*定义滚动条的轨道，内阴影及圆角*/
.scroll-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

/*定义滑块，内阴影及圆角*/
.scroll-list::-webkit-scrollbar-thumb {
  /*width: 10px;*/
  height: 20px;
  border-radius: 10px;
  background-color: #e0e0e0;

  &:hover {
    background: #e0e0e0;
  }
}
</style>
