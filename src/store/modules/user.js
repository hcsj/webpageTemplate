import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_INFO_COMMIT = 'USER_INFO_COMMIT' //sessionStorage 传值进state
export const USER_MESSAGE_COMMIT = 'USER_MESSAGE_COMMIT' //用户未读信息的实时展示

export default {
  // state: JSON.parse(sessionStorage.getItem('user')) || {},
  state:{
    userInfo:{
      // "userStatus": null,
      // "bankCardNo": null,
      // "buy": null,
      // "userType": null,
      // "userName": "18018376331",
      // "authorize": null,
      // "status": null,
      // "risklv": null
    },
    isUserLogin:false,
    messageTotal:0
  },
  //mutations 同步的操作
  mutations: {

    [USER_SIGNIN](state, user) {
      // console.log(state);
      // console.log(user);
      sessionStorage.setItem('userInfo', JSON.stringify(user));
      sessionStorage.setItem('isUserLogin', 'true');
      if(JSON.stringify(user)){
        Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : user)
        state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
      }
      // Object.assign(state.user, user)//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

      // console.log(state)
    },
    [USER_SIGNOUT](state) {
      console.log("USER_SIGNOUT");
      state.isUserLogin = false;
      state.messageTotal = 0;
      state.userInfo = {};
      // sessionStorage.removeItem('XAuthToken');
      // sessionStorage.removeItem('userInfo');
      // sessionStorage.removeItem('isUserLogin');
      sessionStorage.clear();
      // Object.keys(state).forEach(k => Vue.delete(state, k))//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
    },
    [USER_INFO_COMMIT](state){
      Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {})
      state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
    },
    [USER_MESSAGE_COMMIT](state, messageTotal) {
      sessionStorage.setItem('messageTotal', messageTotal);
      if(messageTotal){
        state.messageTotal = sessionStorage.getItem('messageTotal') ? JSON.parse(sessionStorage.getItem('messageTotal')) : 0;
      }
    },
  },
  //action 异步的操作
  actions: {
    [USER_SIGNIN]({commit}, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({commit}) {
      commit(USER_SIGNOUT)
    },
    [USER_INFO_COMMIT]({commit}) {
      commit(USER_INFO_COMMIT)
    },
    [USER_MESSAGE_COMMIT]({commit}) {
      commit(USER_MESSAGE_COMMIT)
    },
  }
}
