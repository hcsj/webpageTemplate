'use strict';
module.exports = {
  url: {//全局
    
    //sit测试环境
    baseIP:"website-sit.neafex.com",//websocket地址
    apiUrl:"https://xiucai-api-sit.neafex.com/",
    unifyUrl:"https://sit-tianxiang-h5.neafex.com/#/login",//天象跳转页面
    
    // uat
    // baseIP:"website-uat.neafex.com",//websocket地址
    // apiUrl:"https://uat-xiucai-api.neafex.com/",
    // unifyUrl:"https://uat-centrallogin.neafex.com/#/login"

    // prod
    // baseIP:"website-prod0625.neafex.com",//websocket地址
    // apiUrl:"https://xiucai-api-prod0625.neafex.com/",
    // unifyUrl:'https://tianxiang-h5.neafex.com/#/login' //天象跳转页面
  },
  /*本地启动服务端口号*/
  port: 8080
};