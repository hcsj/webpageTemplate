import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_INFO_COMMIT = 'USER_INFO_COMMIT' //sessionStorage 传值进state

export default {
    // state: JSON.parse(sessionStorage.getItem('user')) || {},
    state: {
        userInfo: { //储存用户相关信息

        },
        isUserLogin: false,
        messageTotal: 0
    },
    //mutations 同步的操作
    mutations: {

        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('userInfo', JSON.stringify(user));
            sessionStorage.setItem('isUserLogin', 'true');
            if (JSON.stringify(user)) {
                Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : user)
                state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
            }
        },
        [USER_SIGNOUT](state) {
            console.log("USER_SIGNOUT");
            state.isUserLogin = false;
            state.messageTotal = 0;
            state.userInfo = {};
            sessionStorage.clear();
            // Object.keys(state).forEach(k => Vue.delete(state, k))//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
        },
        [USER_INFO_COMMIT](state) {
            Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {})
            state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
        }
    },
    //action 异步的操作
    actions: {
        [USER_SIGNIN]({ commit }, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({ commit }) {
            commit(USER_SIGNOUT)
        },
        [USER_INFO_COMMIT]({ commit }) {
            commit(USER_INFO_COMMIT)
        }
    }
}
