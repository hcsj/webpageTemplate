// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require("babel-polyfill");
import Vue from 'vue'
import App from './App'
import router from '@/router/pc/index'

const globalConfig = require('../../../config/global');

// console.log(globalConfig);

//引入全局样式
import '@/assets/css/pc/index.scss'
//引入Element-ui插件
import ElementUI from 'element-ui';
import vfilters from '@/assets/js/vfilters.js'
import utils from '@/assets/js/utils.js' //引入公共方法
import 'element-ui/lib/theme-chalk/index.css';
for(let key in vfilters){
  Vue.filter(key,vfilters[key])
}
Vue.use(ElementUI);
import store from '@/store/'
import AMap from 'vue-amap'; //引入定位功能
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '0c7865cc799e24d645f8dd86d2cc5b3b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
    'AMap.CircleEditor', 'AMap.Geolocation']
});
import axios from "axios";
import '@/assets/js/http.js'
import '@/assets/js/utils.js'
// 时间格式化工具
import moment from 'moment'
Vue.config.productionTip = false
Vue.prototype.$siteSet = {
  siteName: "东金中心官网",
  callbackTimeout:120000,
  pageSize:5,
  servePhone:'0439-6660660',
  serveTime:'9:00 - 17:00',
  baseIP:globalConfig.url.baseIP,//websocket地址
  unifyUrl:globalConfig.url.unifyUrl,
  qr1Url:"https://oss.neafex.com/xiucai-img/xiucai_Android.jpg",//安卓app
  qr2Url:"https://oss.neafex.com/xiucai-img/wxgzh.jpeg",//微信公众号
  qr3Url:"https://oss.neafex.com/xiucai-img/xiucai_iOS.jpg",//苹果app
}

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
