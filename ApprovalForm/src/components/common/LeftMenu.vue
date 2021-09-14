<template>
  <div class="left-c">
    <ul>
      <li class="logo"><img src="static/img/logo.png" alt="" /></li>
      <template v-for="(val, index) in leftMenuDatas">
        <li
          :key="index"
          @click="$router.push(val.path), (activeIndex = index)"
          :class="{ activeIndex: activeIndex == index ? true : false }"
        >
          <div class="dea-content">
            <img :src="val" alt="" />
            <img :src="leftMenuDataCopyimgs[index]" alt="" />
            <span class="icon-name">{{ val.name }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:"LEFTMENU",
  data() {
    return {
      leftMenuDatas: [],
      activeIndex: 0,
      leftMenuDataimgs: [
        "static/img/1.png",
        "static/img/2.png",
        "static/img/3.png",
        "static/img/4.png",
        "static/img/5.png",
        "static/img/6.png",
        "static/img/7.png",
        "static/img/8.png",
      ],
      leftMenuDataCopyimgs: [],
    };
  },
  created() {
    this.leftMenuDatas = this.dynamicRoutes.map((val) => {
      return {
        path: val.path,
        name: val.name,
      };
    });
    console.log(this.leftMenuDatas);
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState(["dynamicRoutes"]),
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        // console.log(newVal);
        // // 判断当前路由是哪一个，左边菜单栏给与高亮
        // // this.
        // console.log(this.dynamicRoutes);
        // let index = this.dynamicRoutes.forEach((val) => {
        //   // console.log(newVal);
        //   // console.log(val);
        //   console.log(newVal.path.indexOf(val.path,0)>=0);
        //   // if (newVal.path.indexOf(val.path) >= 0) return true;
        //   // return false;
        // });
        // console.log(index);
      },
      immediate: true,
    },
    activeIndex: {
      handler(index) {
        let data = [...this.leftMenuDataimgs];
        data[index] = `static/img/${index+1}${index+1}.png`;
        this.leftMenuDataCopyimgs = data;
      },
      immediate:true
    },
  },
};
</script>

<style scoped lang="scss">
.left-c {
  font-weight: 600;
  color: var(--nosle-text-color);
  ul {
    li {
      text-align: center;
      height: 44px;
      // width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      // border: 1px solid #ccc;
      letter-spacing: var(--t-letter-space);
      cursor: pointer;
      .dea-content {
        width: 120px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
      }
      img {
        padding-right: 3px;
        // height: 22px;
      }
      .icon-name {
        padding-top: 2px;
      }
      &.logo {
        height: 50px;
        position: relative;
        background: #283049;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 28px;
          margin: auto;
        }
      }
      &.activeIndex {
        color: var(--sle-text-color);
      }
      &:hover {
        // opacity: 0.4;
      }
    }
  }
}
</style>
