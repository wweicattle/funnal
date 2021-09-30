import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/common.scss"
import "@/network/axios"
import "@/network/index"
import "@/utils/globalOptions"
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// 图片预览
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})
Vue.use(ElementUI);
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css' 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
Vue.use(VueAwesomeSwiper,)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');