// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../../store' //用户信息部分
import '@/assets/css/pc_index.scss'
import '../../assets/js/http.js'
import vfilters from '../../assets/js/vfilters.js'
for (let key in vfilters) {
  Vue.filter(key, vfilters[key])
}
import '@/assets/css/base.scss'
import axios from 'axios'
import router from '../../router/pc/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message  } from "element-ui";
Vue.use(ElementUI);
import 'swiper/css/swiper.css';
import anime from "animejs/lib/anime.es.js";
// 时间格式化工具
import moment from 'moment'
Vue.config.productionTip = false
Vue.prototype.$anime = anime;
Vue.prototype.$Toast = Message;
Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
