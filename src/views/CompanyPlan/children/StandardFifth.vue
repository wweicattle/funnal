<template>
  <div class="company-plan">
    <box-contain>
      <div>
        <div class="preview-box">
          <viewer :images="photo">
            <!-- <img v-for="(src,index) in photo" v-show="clickedRealIndex==index" :src="src" :key="index"> -->
            <div v-for="(src,index) in photo" :src="src" :key="index">
              <img v-show="clickedRealIndex==index" :src="src" :key="index" alt="" style="width:100%">
            </div>
          </viewer>
        </div>
        <div class="list-box">
          <!-- swiper-no-swiping -->
          <div class="list-items">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(src,index) in photo" :key="index">
                <img class="swiper-lazy" :src="src" :key="index">
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
  name: 'StandardFifth',
  components: { BoxContain },
  data() {
    let _this = this;
    return {
      titleOne: { text: '验收标准' },
      clickedRealIndex: 0,
      photo: [
        require('../imgs/index_img001_01.jpg'),
        require('../imgs/index_img001_02.jpg'),
        require('../imgs/index_img002_01.jpg'),
        require('../imgs/index_img002_02.jpg'),
        require('../imgs/index_img003_01.jpg'),
        require('../imgs/index_img003_02.jpg'),
        require('../imgs/index_img004_01.jpg'),
        require('../imgs/index_img004_02.jpg'),
        require('../imgs/index_img005_01.jpg'),
        require('../imgs/index_img005_02.jpg')
      ],
      swiperOptions: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: false,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
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
          },
          slideChangeTransitionEnd: function () {
            let current = document.querySelector(
              '.swiper-pagination-current'
            ).innerHTML;
            let total = document.querySelector(
              '.swiper-pagination-total'
            ).innerHTML;
            current > 1 &&
              total != current &&
              (_this.isPrev = false) &&
              (_this.isNext = false);
          },
          reachEnd() {
            _this.isNext = true;
            _this.isPrev = false;
          },
          reachBeginning() {
            _this.isNext = false;
            _this.isPrev = true;
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
  methods: {},
  mounted() {},
  watch: {}
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
      top: 5px;
      bottom: 60px;
      left: 0;
      right: 0;
      display: flex;
      & > div {
        margin: 20px;
      }
      .preview-box {
        width: 420px;
        flex-shrink: 0;
        box-shadow: 0px 1px 4px 1px rgba(230, 230, 230, 0.5);
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
        margin-left: 0px;
        .list-items {
          height: 59%;
          width: 100%;
          /deep/ .swiper-container {
            height: 100%;
          }
          /deep/ .swiper-slide {
            box-shadow: 0px 1px 4px 1px rgba(230, 230, 230, 0.5);
            box-sizing: border-box;
            -moz-box-sizing: border-box; /* Firefox */
            -webkit-box-sizing: border-box; /* Safari */
            height: 98%;
            text-align: center;
            overflow: hidden;
            > img {
              width: 100%;
            }
          }
          /deep/ 。swiper-wrapper{
            padding: 5px;
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
          justify-content: flex-end;
          & > div {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            font-size: 20px;
            color: var(--remind-text-color);
            > :first-child {
              color: var(--text-color);
            }
            > :last-child {
              font-size: 14px;
            }
            /deep/ .swiper-pagination-bullet {
              border-radius: 0%;
              background-color: var(--auxiliary-color);
              opacity: 1;
            }
            /deep/ .swiper-pagination-bullet-active {
              background-color: var(--sle-text-color);
            }
            /deep/ .swiper-pagination-current,
            /deep/ .swiper-pagination-total {
              padding: 0 3px;
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
            width: 35px;
            height: 35px;
            color: #ffffff;
            background-color: var(--sle-text-color);
            margin-right: 10px;
            line-height: 35px;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            outline: none;
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