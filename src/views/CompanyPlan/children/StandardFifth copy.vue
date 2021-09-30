<template>
  <div class="company-plan">
    <box-contain :isshowheader="titleOne">
      <div>
        <div class="preview-box"></div>
        <div class="list-box">
          <div class="list-items">
            <swiper ref="mySwiper" :options="swiperOptions" @swiper="onSwiper" @click="gg" @slideChange="onSlideChange">
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
  components: { BoxContain },
  data() {
    return {
      titleOne: { text: '验收标准' },
      photo: [
        'https://picsum.photos/200/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/200/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/250/200'
      ],
      swiperOptions: {
        slidesPerView: 3,
        grabCursor: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: false,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.el-icon-arrow-right',
          prevEl: '.el-icon-arrow-left'
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
      _swiperLength - _activeInde == 1 &&
        (this.isNext = true) &&
        (this.isPrev = false);
      _activeInde == 0 && (this.isPrev = true) && (this.isNext = false);
      _activeInde > 0 &&
        _swiperLength - _activeInde > 1 &&
        (this.isPrev = false) &&
        (this.isNext = false);
    },
    gg() {
      console.log('click');
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
  },
  watch: {
    photo(val, oldVal) {
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
      }
      .list-box {
        flex: 1;
        overflow-x: auto;
        border: 1px solid;
        position: relative;
        .list-items {
          height: 75%;
          width: 100;
        }
        .list-pagination {
          top: 75%;
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
          top: 80%;
          height: 20%;
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