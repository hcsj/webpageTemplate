// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import '../../assets/js/http.js'
import router from '../../router/mobile/index'
import '@/assets/css/mobile_index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css';
import anime from "animejs/lib/anime.es.js";
// 时间格式化工具
import moment from 'moment'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$anime = anime;
Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
