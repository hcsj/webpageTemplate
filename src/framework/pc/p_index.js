// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../../assets/js/http.js'
import axios from 'axios'
import router from '../../router/pc/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import '@/assets/css/pc_index.scss'
import 'swiper/css/swiper.css';
import anime from "animejs/lib/anime.es.js";
// 时间格式化工具
import moment from 'moment'
Vue.config.productionTip = false
Vue.prototype.$anime = anime;
Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
