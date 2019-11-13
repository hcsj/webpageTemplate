/**
 * Created by superman on 17/2/16.
 * http配置
 */
'use strict'
import axios from 'axios'
import globalConfig from '../../../config/global.js'
// import store from '../../store/'
// import router from '../../router/index'
import { Loading } from 'element-ui';
axios.defaults.baseURL = globalConfig.url.apiUrl;//测试服务器
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.method = "POST";
// axios 配置
axios.defaults.timeout = 30000;//5000
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = "application/json;charset=utf-8";
        config.headers['channel-code'] = "WEBSITE";
        config.headers['client-type'] = "MOH5";
        config.headers['version'] = "0.0.1";
        if (window.sessionStorage.XAuthToken) {
            config.headers['x-auth-token'] = window.sessionStorage.XAuthToken;
        }
        Open();

        return config;
    },
    err => {
        return Promise.reject(err);
    });

let _this = this;

axios.interceptors.response.use(
    response => {
        Close();
        //会话过期跳登录页
        if (response.data.retCode == 'NZ0003' || response.data.retCode == 'NZ0001' || response.data.retCode == 'N10013') {//token过期
            // alert("会话过期，请重新登录!");
            // sessionStorage.removeItem("XAuthToken");
            //   store.commit('USER_SIGNOUT');
            //   router.replace({
            //     name: 'login'
            //   })
        }
        return response;
    }, function (error) {
        Close();
        if (error.code == 'ECONNABORTED') {
            Toast("抱歉，加载失败");
            return Promise.reject(error)
        }
    }
);
let count = 0;
let loading = null;
export function Open() {
   
    loading = Loading.service({
        lock: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        customClass: 'customLoading'
    });
   
}

export function Close() {
    if (count > 0) {
        count--;
    }

    if (count <= 0){
        loading.close()
    }
}

export default axios;
