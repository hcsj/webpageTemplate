// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../../store' //用户信息部分
import axios from 'axios'

import '../../assets/js/http.js'
import vfilters from '../../assets/js/vfilters.js'
for (let key in vfilters) {
  Vue.filter(key, vfilters[key])
}
import '@/assets/css/mobile_index.scss'
import '@/assets/css/base.scss'

import router from '../../router/mobile/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css';
import anime from "animejs/lib/anime.es.js";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Toast } from "mint-ui";

// 时间格式化工具
import moment from 'moment'
Vue.use(ElementUI);
Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$anime = anime;
Vue.prototype.$axios = axios;
Vue.prototype.$Toast = Toast;
Vue.prototype.$moment = moment;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
