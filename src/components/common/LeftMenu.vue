<template>
  <div class="left-c">
    <ul class="l-scroll scrollbar-css">
      <template v-for="(val, index) in leftMenuDatas">
        <li
          :key="index"
          @click="menuItemClick(val, index)"
          :class="{ activeIndex: activeIndex == index ? true : false }"
          :style="{opacity:((userData.urlData.id!=0)||havePolicy||index==0)?1:0.5}"
        >
          <div class="dea-content">
            <!-- <img src="static/img/01.png" alt=""> -->
            <img :src="val" alt />
            <img :src="leftMenuDataCopyimgs[index]" alt />
            <span class="icon-name">{{ val.name }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'LEFTMENU',
  data() {
    return {
      leftMenuDatas: [],
      activeIndex: null,
      leftMenuDataimgs: [
        'static/img/01.png',
        'static/img/02.png',
        'static/img/03.png',
        'static/img/04.png',
        'static/img/05.png',
        'static/img/06.png',
        'static/img/07.png',
        'static/img/08.png',
        'static/img/09.png',
        'static/img/10.png',
        'static/img/11.png',
        'static/img/12.png',
        'static/img/13.png'
      ],
      leftMenuDataCopyimgs: []
    };
  },
  created() {
    if (this.userData.urlData.id != 0) {
      this.$router.push('/shopBasic');
    } else {
      this.$router.push('/marketPolicy');
    }
    // if(this){
    //   console.log(this);
    // }
    // 从状态中返回路由数据（Error菜单项组件不要显示）
    // 去掉最后一项
    let changeRoutes = JSON.parse(JSON.stringify(this.dynamicRoutes));
    changeRoutes.pop();
    this.leftMenuDatas = changeRoutes.map((val) => {
      return {
        path: val.path,
        name: val.name
      };
    });
  },
  mounted() {
    console.log(this.$store.state.policyExist);
  },
  methods: {
    menuItemClick(val, index) {
      let id = this.userData.urlData.id;
      // 判断路由可以点击，是否已经点击过营销政策了
      if (val.path === '/marketPolicy'||(id!=0)) {
        this.$router.push(val.path);
        this.activeIndex = index;
        return;
      }
      if (this.havePolicy) {
        this.$router.push(val.path);
        this.activeIndex = index;
      } else {
        this.$message.info('需通过以上任一条款，才能保存数据！');
      }
    }
  },
  computed: {
    ...mapState(['dynamicRoutes', 'userData', 'policyExist']),
    havePolicy() {
      let vals = Object.values(this.policyExist);
      if (vals.some((val) => val)) return true;
      return false;
    }
  },
  watch: {
    policyExist: {
      handler(newVal) {
        console.log(newVal);
      }
    },

    $route: {
      handler(newVal, oldVal) {
        // 判断当前路由是哪一个，左边菜单栏给与高亮
        this.activeIndex = this.dynamicRoutes.findIndex((val) => {
          if (newVal.path.indexOf(val.path) >= 0) {
            return true;
          }
          return false;
        });
      },
      immediate: true
    },
    activeIndex: {
      handler(index) {
        let data = [...this.leftMenuDataimgs];
        // 拼接图片路径
        let indexStr = (index + 1 + '').padStart(2, 0);
        data[index] = `static/img/${indexStr}${indexStr}.png`;
        this.leftMenuDataCopyimgs = data;
      },
      immediate: true
    },
   
  }
};
</script>

<style scoped lang="scss">
.left-c {
  height: 100%;
  font-weight: 550;
  width: 167px;
  color: var(--nosle-text-color);
  overflow: hidden;
  background: #fff;
  ul {
    height: 100%;
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
        img {
          padding-right: 5px;
          // height: 22px;
          height: 20px;
        }
      }

      .icon-name {
        // padding-top: 2px;
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
        font-weight: 600;
        background: var(--auxiliary-color);
      }
      &:hover {
        // opacity: 0.4;
      }
    }
    &.l-scroll {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
