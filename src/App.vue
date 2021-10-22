<template>
  <div id="app">
    <div class="contain">
      <div class="header-content">
        <div class="contain-t">
          <ul>
            <li class="logo">
              <img src="static/img/logo.png" alt />
            </li>
          </ul>
          <div class="header">
            <div class="h-name">利郎整改审批表</div>
            <div class="h-ope">
              <img src="static/img/uploadIcon.png" alt />
              <span class="all-f">所有附件</span>
              <el-button type="primary" class="save" @click="submitSave">保存</el-button>
              <el-button class="submit" @click="submitData">提交</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="contain-b">
        <div class="left-content">
          <left-menu></left-menu>
        </div>
        <div class="rihgt-content">
          <!-- <div class="header">
            <div class="h-name">利郎整改审批表</div>
            <div class="h-ope">
              <img src="static/img/allfu.png" alt="" /><span class="all-f"
                >所有附件</span
              >
              <el-button type="primary" class="save"> 保存</el-button>
              <el-button class="submit">提交</el-button>
            </div>
          </div>-->
          <!--一级路由 -->
          <router-view></router-view>
        </div>
      </div>
      <dialog-title v-if="showDialog" dialogName="利郎整改审批表" @closedialog="showDialog = false">
        <!-- <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil, temporibus debitis voluptate est facilis voluptatem odio nesciunt cum? Adipisci, et eius. Pariatur aperiam voluptatum, assumenda ratione harum animi consequatur quasi voluptatem ea iusto porro sint error repellat, eveniet veritatis explicabo? Voluptatum rem expedita, omnis debitis error id aliquid nam! Aspernatur minima, dolorem cupiditate totam blanditiis nemo voluptatem. Quisquam suscipit obcaecati, unde officiis cum tempora placeat at eligendi quo, doloremque sint quae minus, est mollitia earum animi exercitationem fugiat fugit. Repellendus cumque nam impedit voluptates, similique esse molestiae, doloremque quae temporibus, nihil sunt vitae tenetur dicta unde corporis quasi quidem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil, temporibus debitis voluptate est facilis voluptatem odio nesciunt cum? Adipisci, et eius. Pariatur aperiam voluptatum, assumenda ratione harum animi consequatur quasi voluptatem ea iusto porro sint error repellat, eveniet veritatis explicabo? Voluptatum rem expedita, omnis debitis error id aliquid nam! Aspernatur minima, dolorem cupiditate totam blanditiis nemo voluptatem. Quisquam suscipit obcaecati, unde officiis cum tempora placeat at eligendi quo, doloremque sint quae minus, est mollitia earum animi exercitationem fugiat fugit. Repellendus cumque nam impedit voluptates, similique esse molestiae, doloremque quae temporibus, nihil sunt vitae tenetur dicta unde corporis quasi quidem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil, temporibus debitis voluptate est facilis voluptatem odio nesciunt cum? Adipisci, et eius. Pariatur aperiam voluptatum, assumenda ratione harum animi consequatur quasi voluptatem ea iusto porro sint error repellat, eveniet veritatis explicabo? Voluptatum rem expedita, omnis debitis error id aliquid nam! Aspernatur minima, dolorem cupiditate totam blanditiis nemo voluptatem. Quisquam suscipit obcaecati, unde officiis cum tempora placeat at eligendi quo, doloremque sint quae minus, est mollitia earum animi exercitationem fugiat fugit. Repellendus cumque nam impedit voluptates, similique esse molestiae, doloremque quae temporibus, nihil sunt vitae tenetur dicta unde corporis quasi quidem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nihil, temporibus debitis voluptate est facilis voluptatem odio nesciunt cum? Adipisci, et eius. Pariatur aperiam voluptatum, assumenda ratione harum animi consequatur quasi voluptatem ea iusto porro sint error repellat, eveniet veritatis explicabo? Voluptatum rem expedita, omnis debitis error id aliquid nam! Aspernatur minima, dolorem cupiditate totam blanditiis nemo voluptatem. Quisquam suscipit obcaecati, unde officiis cum tempora placeat at eligendi quo, doloremque sint quae minus, est mollitia earum animi exercitationem fugiat fugit. Repellendus cumque nam impedit voluptates, similique esse molestiae, doloremque quae temporibus, nihil sunt vitae tenetur dicta unde corporis quasi quidem.

        </div>-->
        <!-- <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est sit quod dignissimos distinctio odit atque impedit aliquam recusandae, vel, quidem ipsa hic exercitationem culpa neque sequi eum quisquam modi ratione ipsam et? Enim dolorum facere tempora voluptas ratione, qui molestiae repellat ab consequatur deleniti at laboriosam consectetur ipsum obcaecati mollitia quod vero in natus sint repellendus nulla hic neque. Ut, non? Ad, reiciendis voluptate quasi magni rem aut error ducimus. Voluptatum nihil animi necessitatibus minus, voluptatibus sit possimus placeat architecto atque ab quos ex. Officiis praesentium quae laborum obcaecati officia sapiente optio aspernatur sint dicta repudiandae voluptatibus repellat temporibus enim ab quo quam, saepe earum provident rem consequatur. Omnis dolorem debitis facere cumque aperiam aliquam quas reiciendis amet. Corporis perspiciatis dolorem, libero at, repudiandae alias eaque id asperiores minima cupiditate eveniet quia dolor accusantium deserunt vero commodi necessitatibus. Impedit ipsa at est. Consequatur neque ipsa obcaecati architecto ipsam fugiat maiores delectus at aliquid aperiam unde repudiandae accusamus est quo totam, accusantium nam nisi quaerat. Possimus, nam, neque facilis cupiditate non molestiae explicabo, iure natus eaque asperiores consequatur doloribus dolorem autem sequi saepe dicta consequuntur accusamus quam adipisci harum quod qui quis! Vitae, unde omnis soluta iure atque cum ex? Expedita ipsum dolores nesciunt perferendis magni quo porro corporis rerum eum recusandae cupiditate ducimus nostrum quia ab, maxime soluta facilis minus mollitia! In fuga odio, iusto illo sapiente libero excepturi deserunt numquam eligendi, ullam doloremque inventore reiciendis architecto corporis? Odit perspiciatis ipsa magni sequi excepturi, ab tenetur exercitationem totam dignissimos deserunt, mollitia ipsam nesciunt quod, consectetur facilis! Nam cupiditate dicta adipisci, magni non natus quia assumenda iusto reiciendis quidem molestias asperiores impedit tenetur distinctio? Architecto nam impedit esse, neque obcaecati laborum vero, facere distinctio sunt vitae at dolor quia in cum quisquam minima laudantium veritatis molestias id, unde quas aliquam ea voluptas vel. Quam consequuntur nostrum reiciendis praesentium dignissimos rerum eaque earum nam incidunt quod, mollitia saepe libero eveniet fugit aperiam atque necessitatibus ab et perspiciatis illo exercitationem. Ab beatae aut sunt placeat nam perferendis fuga voluptatum temporibus maxime. Debitis voluptatibus expedita voluptatum rem at voluptas fuga ipsam adipisci consequuntur saepe autem porro possimus iure dolores iusto, numquam distinctio ut iste, explicabo facilis dolor perspiciatis facere? Saepe, molestiae autem molestias nisi assumenda ex eum qui voluptatum officia numquam eveniet quam perspiciatis dicta consequuntur voluptatem quas iure ullam repellendus aspernatur amet laborum accusantium, libero quaerat. Numquam, maxime. Mollitia veritatis non et. Deserunt rerum vitae modi laboriosam similique error placeat consequuntur? Necessitatibus, nihil! Voluptates, debitis quaerat, a animi molestiae voluptate quasi exercitationem excepturi dolores officiis vitae dolore quod eius ratione? Atque quasi saepe impedit optio? Modi eveniet harum blanditiis asperiores id enim et fugiat consequatur! Sunt nobis eius iure nihil quos officiis numquam commodi tempora rem veritatis voluptatibus, adipisci, voluptates in est! Nisi minus, tempore quaerat aspernatur libero natus corporis aliquid nemo provident, esse ratione, error minima ab eum autem nobis quia necessitatibus numquam excepturi consectetur enim accusamus adipisci omnis a. Tempora praesentium, aperiam perspiciatis itaque vero blanditiis ipsam voluptates illum aut non hic quibusdam tempore iusto cumque ab quas doloribus accusantium animi nulla voluptatibus at id. Reiciendis laborum, expedita aut fugiat tenetur aspernatur quae adipisci, maxime possimus deserunt repellendus placeat molestiae eos rerum fuga quasi mollitia earum debitis doloribus ipsum ipsa. Distinctio quibusdam perferendis accusamus quidem, ipsum ipsam. Quia suscipit eum inventore optio aliquid earum. Magni, dolores. Ipsa deserunt, sequi cumque dicta cum nobis cupiditate officia obcaecati dolorum nesciunt sit quisquam autem laudantium consectetur enim, accusantium minima eaque harum beatae perspiciatis accusamus consequatur tenetur voluptas quis. Quis iure eligendi molestiae esse, facere dolore odit temporibus nostrum soluta similique dolor. Dolore illum enim ullam sunt consectetur architecto iusto! Repellat, ut illum reiciendis, dignissimos porro, aliquam delectus magni exercitationem sequi quod alias blanditiis eum ullam asperiores voluptates vero hic et impedit. Sit, impedit placeat. Provident vitae asperiores, veniam exercitationem accusamus eveniet expedita quisquam et recusandae, ad non sunt magnam at ex nihil laborum ipsum nobis! Atque in ipsum ipsam aut suscipit impedit velit voluptas. Illo ipsum, sint autem itaque quam accusamus id fugiat quas, vel sequi a sapiente, minus quibusdam excepturi rerum voluptatibus asperiores. At architecto vero commodi accusamus, quasi reprehenderit, voluptatem aperiam autem beatae quidem facere doloremque molestiae error! Dolor, quae! Modi similique temporibus nulla reprehenderit qui magni ullam eos labore incidunt ut, reiciendis fugit, natus ad adipisci eligendi tempore aliquid velit optio iusto sapiente deleniti numquam culpa? Amet nemo earum voluptatem nesciunt quibusdam qui veniam laudantium cum modi error distinctio mollitia, repudiandae deserunt at! Nesciunt sed obcaecati accusamus totam illum odio ducimus excepturi harum, voluptatum, enim accusantium, in sequi iste architecto assumenda ullam ut est eligendi itaque consequatur voluptas fugiat cupiditate. Perspiciatis illum, eius saepe libero repellendus quae voluptas consequatur! Quod natus asperiores aspernatur, explicabo, tempora, quidem voluptatum esse eum sit adipisci quaerat alias cumque optio voluptate temporibus. Aliquid ut, adipisci nesciunt beatae cumque, voluptatem pariatur iusto nam hic ullam provident, nulla voluptates quas quasi harum sint voluptatum reprehenderit sit amet possimus eaque quaerat dicta. Fugit ipsa tempore vel a voluptatum, ut ratione inventore ullam magnam pariatur quos tenetur ducimus laborum voluptate cumque aut, unde vero corporis architecto praesentium voluptatem debitis ea reprehenderit corrupti. Distinctio quibusdam sed culpa voluptas, repellendus laborum suscipit expedita dignissimos doloribus cum! Molestiae, maiores ea quibusdam animi optio velit magnam rerum? Est quasi dolore assumenda earum placeat optio iure error temporibus expedita! Enim perspiciatis assumenda labore praesentium consequatur officia illum ipsam, non quam. Quibusdam, rem voluptatem. Nemo eligendi vel repudiandae eum, officiis tempora consequuntur similique fugit? Voluptatum aspernatur repudiandae fugiat architecto dolor perspiciatis, facilis doloribus odit, quibusdam reprehenderit exercitationem accusantium! Sed consequuntur ipsum doloremque quod soluta quisquam a sit nemo quasi. Aliquid temporibus aspernatur adipisci quae veritatis praesentium amet deleniti eum atque dolore asperiores hic facere, voluptatibus, error incidunt eos accusantium laudantium rem soluta nam, possimus quasi! Non atque minus dolorem at eos repellat accusamus ipsum, quos veniam optio unde possimus ut sequi expedita exercitationem sunt quaerat laboriosam. Distinctio, recusandae. Officia, amet. Amet fuga aliquid nobis, adipisci quo autem, voluptas, esse nesciunt consequuntur qui sed possimus explicabo!</div> -->
        <!-- <yr-two></yr-two> -->
        <!-- <yr-three></yr-three> -->
        <!-- <yr-four></yr-four> -->
        <yr-five></yr-five>
        <!-- <yr-six></yr-six> -->
      </dialog-title>
    </div>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu';
import evenbus from "@/utils/eventbus"
import DialogTitle from '@/components/common/DialogTitle.vue';
import YrTwo from './components/BatchDialogs/YrTwo.vue';
import YrThree from './views/StorePolicy/TestDialog/YrThree.vue';
import YrFour from './views/StorePolicy/TestDialog/YrFour.vue';
import YrFive from './views/StorePolicy/TestDialog/YrFive.vue';
import YrSix from './components/BatchDialogs/pop9.vue';

export default {
  data() {
    return {
      showDialog: false
    };
  },
  created() {

  },
  mounted() {
    const _this = this
    window.onload = () => {
      window.addEventListener('message', function (e) {
        console.log(e.data)
        if (e.data == 'close') {
          _this.showDialog = false
        }
      }, false)
    }
  },
  components: {
    LeftMenu,
    DialogTitle,
    YrTwo,
    YrThree,
    YrFour,
    YrFive,
    YrSix
  },
  methods: {
    submitData() {
      this.showDialog = true;
    },
    submitSave() {
      evenbus.$emit("sendData")
    }
  }
};
</script>
<style lang="scss" >
@import url("~assets/css/base.css");
body,
html {
  height: 100%;
  width: 100%;
  overflow: auto;
}

#app {
  height: 100%;
  overflow: hidden;
  .contain {
    height: 100%;
    background: var(--main-back);
    // background: red;
    .header-content {
      background: #283049;
      .contain-t {
        display: flex;
        background: #283049;
        max-width: 1420px;
        margin: 0 auto;
        position: relative;
        left: 0;
        right: 0;
        ul {
          width: 167px;
          height: 50px;
          position: relative;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 28px;
            margin: auto;
          }
        }

        .header {
          flex: 1;
          height: 50px;
          // background: #ffffff;
          background: #283049 !important;
          // border: 1px solid red;
          // border-bottom: 1px solid rgb(228, 225, 225);
          // box-shadow: 0px 1px 3px 0px rgba(192, 192, 192, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 18px;
          // font-size: var();
          font-weight: 500;
          // border-bottom: 1px solid #f7eeee;
          .h-name {
            font-size: 17px;
            letter-spacing: 1px;
            color: #fff !important;
            position: relative;
            font-weight: 600;
            &::before {
              content: "";
              position: absolute;
              width: 1px;
              height: 62%;
              left: -10px;
              background: #fff;
              top: 0;
              bottom: 0;
              margin: auto 0;
            }
          }
          .h-ope {
            color: #fff;
            display: flex;
            align-items: center;
            .all-f {
              padding-right: 26px;
            }
            .el-button {
              height: 27px;
              border-radius: 2px !important;
              // width: 64px;
              text-align: center;
              line-height: 27px;
              padding: 0 27px !important;
              &.save {
                color: #fff;
                border: 1px solid #fff;
                background: #283049 !important;
              }
              &.submit {
                background: var(--sle-text-color);
                color: #fff;
                border: none !important;
              }
            }
            img {
              height: 17px;
              padding-right: 3px;
            }
          }
        }
      }
    }

    .contain-b {
      max-width: 1040px;
      display: flex;
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 15px;
      height: calc(100% - 80px);
      .left-content {
        width: 164px;
        height: 100%;
        overflow: hidden;
        overflow-y: scrroll;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
      }
      .rihgt-content {
        background: var(--main-back);
        flex: 1;
        margin-left: 14px;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        overflow: hidden;
        .content {
          // border: 1px solid #e79393;
          height: calc(100% - 200px);
        }
      }
    }
  }
}
</style>
<style lang="scss">
// @media screen and (max-width: 1024px) {
//   body {
//     // background-color:lightblue;
//     max-width: 1024px;
//   }
// }

// @media screen and (min-width: 1024px) {
//   .rihgt-content {
//     .route-contains {
//       padding: 0 0 0 25px;
//     }
//     .two-menu {
//       padding-right: 0;
//       // height: calc(100% - 73px);
//     }
//   }
//   .contain-b {
// background-color:lightblue;
//     max-width: 1024px;
//     position: relative;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     margin-top: 15px;
//     height: calc(100% - 65px) !important;
//     .left-c {
//       height: calc(100% - 15px);
//     }
//   }
//   .contain-t {
//     .header {
//       border-bottom: none !important;
//       background: #283049 !important;
//       .h-name {
//         color: #fff !important;
//         position: relative;
//         &::before {
//           content: '';
//           position: absolute;
//           width: 1px;
//           height: 62%;
//           left: -10px;
//           background: #fff;
//           top: 0;
//           bottom: 0;
//           margin: auto 0;
//         }
//       }
//       .h-ope {
//         .save {
//           background: #283049 !important;
//         }
//         .submit {
//           border: none !important;
//         }
//       }
//     }
//   }
//   body {
//     background: var(--main-back);
//   }
// }
iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
</style>
