<template>
  <div class="company-plan">
    <box-contain :isshowheader="titleOne">
      <div>
        <div class="preview-box">
          <viewer :images="photo">
            <img v-for="(src,index) in photo" v-show="clickedRealIndex==index" :src="src" :key="index">
          </viewer>
        </div>
        <div class="list-box">
          <div class="list-items">
            <swiper ref="mySwiper" :options="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
              <swiper-slide v-for="(src,index) in photo" :key="index">
                <img :src="src" :key="index">
              </swiper-slide>
            </swiper>
          </div>
          <div class="list-pagination">
            <div class="swiper-pagination"></div>
          </div>
          <div class="list-btn">
            <i class="el-icon-arrow-left" :class="{isHighlight:isPrev}"></i>
            <i class="el-icon-arrow-right" :class="{isHighlight:isNext}"></i>
          </div>
        </div>
      </div>
    </box-contain>
  </div>
</template>

<script>
import BoxContain from '@/components/common/BoxContain.vue';
export default {
  name: 'StandardFourth',
  components: { BoxContain },
  data() {
    let _this = this;
    return {
      titleOne: { text: '验收标准' },
      clickedRealIndex: 0,
      photo: [
        require('../imgs/001.jpg'),
        require('../imgs/001_01.jpg'),
        require('../imgs/001_02.jpg'),
        require('../imgs/001.jpg'),
        require('../imgs/001_01.jpg'),
        require('../imgs/001_02.jpg'),
      ],
      swiperOptions: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        autoplay: false,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type:'fraction',
          clickable: true
        },
        navigation: {
          nextEl: '.el-icon-arrow-right',
          prevEl: '.el-icon-arrow-left'
        },
        on: {
          click: function () {
            _this.clickedRealIndex = parseInt(
              // 所选下标
              this.clickedSlide.dataset.swiperSlideIndex || this.clickedIndex
            );
          }
        }
      },
      isPrev: true,
      isNext: false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      let _activeInde = this.$refs.mySwiper.swiper.activeIndex;
      let _swiperLength = this.$refs.mySwiper.$slots.default.length;
      // console.log(_activeInde, _swiperLength);
      if (_swiperLength == _activeInde + 2) {
        this.isPrev = false;
        this.isNext = true;
      } else if (_activeInde < 1) {
        this.isPrev = true;
        this.isNext = false;
      } else {
        this.isNext = false;
        this.isPrev = false;
      }
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
  },
  watch: {
    clickedRealIndex(val, oldVal) {
      //普通的watch监听
      console.log('a: ' + val, oldVal);
    }
  }
};
</script>

<style scoped lang="scss">
.company-plan {
  width: 100%;
  height: 100%;
  position: relative;
  .box-contain {
    width: 100%;
    height: 100%;
    position: relative;
    & > div {
      position: absolute;
      top: 49px;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      & > div {
        margin: 20px;
      }
      .preview-box {
        width: 420px;
        flex-shrink: 0;
        box-shadow: 0px 1px 4px 1px rgba(71, 48, 48, 0.5);
        & > div {
          height: 100%;
          position: relative;
          overflow: hidden;
          & > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
        }
      }
      .list-box {
        flex: 1;
        overflow-x: auto;
        position: relative;
        .list-items {
          height: 80%;
          width: 100;
          /deep/ .swiper-container {
            height: 100%;
          }
          /deep/ .swiper-slide {
            box-shadow: 0px 1px 4px 1px rgba(237, 237, 237, 0.5);
            z-index: 9999;
            position: relative;
            box-sizing: border-box;
            -moz-box-sizing: border-box; /* Firefox */
            -webkit-box-sizing: border-box; /* Safari */
            > img {
              width: 100%;
            }
          }
        }
        .list-pagination {
          position: absolute;
          top: 85%;
          height: 5%;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          & > div {
            width: 40%;
            display: flex;
            justify-content: space-evenly;
            /deep/ .swiper-pagination-bullet {
              border-radius: 0%;
              background-color: var(--auxiliary-color);
              opacity: 1;
            }
            /deep/ .swiper-pagination-bullet-active {
              background-color: var(--sle-text-color);
            }
          }
        }
        .list-btn {
          position: absolute;
          top: 90%;
          height: 10%;
          left: 0;
          right: 0;
          display: flex;
          align-items: flex-end;
          & > i {
            display: inline-block;
            width: 25px;
            height: 25px;
            color: #ffffff;
            background-color: var(--sle-text-color);
            margin-right: 10px;
            line-height: 25px;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
          }
          .isHighlight {
            background-color: var(--auxiliary-color);
          }
        }
      }
    }
  }
}
</style>