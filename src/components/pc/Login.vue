<template>
  <div>
    <div id="nav">
      <nav>
        <div class="parcel">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt>
          </div>
          <div class="nav">
            <h2>欢迎登录</h2>
            <router-link to="/">返回东金中心首页</router-link>
          </div>
        </div>
      </nav>
    </div>
    <beautyAlert
      ref="beautyAlert"
      :message="beautyAlertMsg"
      :callBackFuncType="beautyAlertFuncType"
    ></beautyAlert>
    <!-- 会员登录 -->
    <div id="login-c" v-if="tabOne">
      <div class="login-c">
        <!-- 登录表单 -->
        <form action>
          <!-- <div class="cut" @click="changeTab(1)">
            <div class="title">机构登录</div>
          </div> -->
          <h3>会员登录</h3>
          <div class="errorMsg">{{loginErrorMsg}}</div>
          <div id="logins" class="login-name">
            <div class="logins-l">
              <i class="fa fa-tablet fa-lg"></i>
            </div>
            <input
              type="tel"
              maxlength="11"
              name="mobileNumber"
              v-model="loginForm.mobileNumber"
              placeholder="请输入账号/手机号/邮箱"
              required="required"
            >
          </div>
          <div id="logins" class="login-password">
            <div class="logins-l">
              <i class="fa fa-unlock-alt fa-lg"></i>
            </div>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
              required="required"
            >
          </div>
          <div class="graph-code" style="margin-left: 15px;">
            <div id="captcha">
              <p id="wait" class="show">正在加载验证码......</p>
            </div>
          </div>
          <input type="button" class="btn" value="立即登录" @click.submit.prevent="login()">
          <div class="logins-b">
            <router-link :to="{name:'modifyPassword'}">忘记密码?</router-link>
            <router-link to="/register/0" style="float:right; color:orangered;">免费注册</router-link>
          </div>
        </form>
      </div>
    </div>
     <!-- 机构登录 -->
    
    <!-- 页脚组件 -->
    <foot-nav :class="'foot'"></foot-nav>
  </div>
</template>

<script>
import FootNav from "./common/FootNav";
import utils from "@/assets/js/utils";
import gtInit from "@/assets/js/gt";
import beautyAlert from "@/components/pc/common/BeautyAlert";
import validates from "@/assets/js/validate.js";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    FootNav,
    beautyAlert
  },
  data() {
    return {
      tabOne:true,
      tabTwo:false,
      beautyAlertFuncType: null,
      beautyAlertMsg: "",
      captchaObj: null,
      gtCapValid: "", //滑动滑块
      codeText: "获取验证码",
      isCodeDisabled: false,
      time: 10,
      loginErrorMsg: "",
      loginForm: {
        mobileNumber: "",
        password: "",
        verifyCode: "",
        loginFrom: "login"
      }
    };
  },
  methods: {
    //初始化极验
    initGtCaptcha() {
      var _this = this;
      this.$axios
        .get("core-api/token/startCaptcha?t=" + new Date().getTime())
        .then(function(res) {
          // console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            let bodyResult = resData.body;
            window.initGeetest(
              {
                // 以下 4 个配置参数为必须，不能缺少
                gt: bodyResult.gt,
                challenge: bodyResult.challenge,
                offline: !bodyResult.success, // 表示用户后台检测极验服务器是否宕机
                new_captcha: bodyResult.new_captcha, // 用于宕机时表示是新验证码的宕机

                product: "popup", // 产品形式，包括：float，popup
                width: "289px"
              },
              function(captchaObj) {
                _this.captchaObj = captchaObj;
                captchaObj.appendTo("#captcha"); //添加滑动模块
                captchaObj.onReady(function() {
                  document.getElementById("wait").style.display = "none"; //让等待验证消失
                });
                captchaObj.onSuccess(function() {
                  _this.gtCapValid = captchaObj.getValidate();
                });
                captchaObj.onError(function() {
                  // 出错啦，可以提醒用户稍后进行重试
                  _this.beautyAlertMsg = "出错啦，请稍后进行重试";
                  _this.$refs["beautyAlert"].showDialogDiv();
                });
              }
            );
          } else if (resData.retCode == "NZ0003") {
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
            _this.accquireToken();
          } else {
            // 出错啦，可以提醒用户稍后进行重试
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
          }
        })
        .catch(function(err) {
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //login form 校验
    checkLoginForm() {
      if (!validates.isvalidPhone(this.loginForm.mobileNumber)) {
         this.loginErrorMsg = "请输入正确的手机号";
        return false;
      } 
        if (!validates.isvalidateLetterAndNum(this.loginForm.password)
        ) {
           this.loginErrorMsg = "请输入6-18位数字和字母的密码";
          return false;
        }
         if (this.gtCapValid == "") {
           this.loginErrorMsg = "请拖动滑块验证";
            return false;
        } 

        return true
    },
    //登录
    login() {
      let _this = this;
      if (_this.checkLoginForm()) {
        console.log("登录form校验成功");
        let params = {
          mobileNumber: _this.loginForm.mobileNumber,
          password: _this.loginForm.password,
          geetestChallenge: _this.gtCapValid.geetest_challenge, //极验返回字段
          geetestValidate: _this.gtCapValid.geetest_validate, //极验返回字段
          geetestSeccode: _this.gtCapValid.geetest_seccode //极验返回字段
        };
        this.$axios
          .post("core-api/token/signIn", params)
          .then(function(res) {
            console.log(res);
            let resData = res.data;
            if (resData.retCode == "N00000") {
              // alert("登录成功，下面请求user信息");
              _this.getUserInfo();
            } else {
              _this.beautyAlertMsg = resData.retMsg;
              _this.$refs["beautyAlert"].showDialogDiv();
              _this.gtCapValid = "";
              _this.captchaObj.reset();
            }
          })
          .catch(function(err) {
            console.log(err);
            _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
            _this.$refs["beautyAlert"].showDialogDiv();
            _this.gtCapValid = "";
            _this.captchaObj.reset();
          });
      }
      // this.$store.commit('USER_SIGNIN',{"userName":"zll"});
      // window.location.href="https://opentest.hopebank.com:17720/webGateway/index.html?requestKey=58b695d4-bff6-40df-84b3-8c68103d1010&router=OPENTOPUP&platform_no=9999";
    },
    //获取用户方法
    getUserInfo() {
      let _this = this;
      this.$axios
        .get("core-api/userSignIn/loginUserInfo")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            if (resData.body) {
              sessionStorage.setItem("userInfo", JSON.stringify(resData.body));
              sessionStorage.setItem("isUserLogin", "true");
            }
            _this.$router.push({
              path: "/"
            });
          } else {
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //进入登录页，无token时获取token
    accquireToken() {
      let _this = this;
      this.$axios
        .get("core-api/base/getToken")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            // 从后端获取token
            let XAuthToken = resData.body["X-AUTH-TOKEN"];
            console.log(XAuthToken);
            //保存到浏览器的 sessionStorage 里面,但会随着页面关闭而改变
            sessionStorage.setItem("XAuthToken", XAuthToken); //将XAuthToken，储存到 "XAuthToken"键值中
            _this.initGtCaptcha();
          } else {
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    // 切换机构登录
      changeTab(e){
    if (e=='1') {
       this.tabTwo = true;
      this.tabOne = false;
    }else if(e=='2'){
       this.tabOne = true;
      this.tabTwo = false;
     
    }
     this.initGtCaptcha()
  }
  },
  created() {
    //判断是否存在token
    if (window.sessionStorage.XAuthToken) {
      this.initGtCaptcha();
    } else {
      this.accquireToken();
    }
  },

};
</script>

<style lang="scss" scoped>
@import "../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
@import "../../assets/css/pc/blendent.scss";
#nav {
  width: 100%;
  height: 100px;
  left: 0;
  z-index: 9999;
  position: absolute;
  background: $white;
  min-width: 1250px;
}

nav {
  width: 100%;
  line-height: 65px;
  text-align: center;
  background: $white;
  a {
    color: $text;
    position: absolute;
    top: 20px;
    right: 50px;
  }
}
.parcel {
  width: 60%;
  height: 65px;
  position: relative;
}
.logo {
  width: 150px;
  height: 60px;
  position: absolute;
  left: 3%;
  top: 30%;
  text-align: center;
}
.logo img {
  height: 100%;
}
.nav {
  width: 80%;
  height: 65px;
  position: absolute;
  right: 0;
  h2 {
    font-weight: 200;
    text-align: left;
    font-size: 20px;
    line-height: 100px;
  }
}
html,
body {
  width: 100%;
  height: 100%;
}
#captcha {
  width: 287px;
  margin-top: 20px;
  position: relative;
  left: -7px;
}
#login-c {
  width: 100%;
  height: 850px;
  min-width: 1250px;
  position: relative;
  top: 0;
  overflow: hidden;
  background: url("../../assets/images/login.jpg");
  background-size: 100%;
  .login-c {
    width: 55%;
    height: 100%;
    overflow: hidden;
    position: relative;
    form {
      display: block;
      width: 400px;
      height: 420px;
      background: white;
      position: absolute;
      left: calc(50% - 200px);
      top: calc(50% - 150px);
      opacity: 0.9;
      // animation: move 1s ease 1 both;
      .cut{
        width: 0;
        height: 0;
        border-top: 50px solid rgb(61, 132, 238);
        border-bottom: 50px solid transparent;
        border-right: 50px solid rgb(61, 132, 238);
        border-left: 50px solid transparent;
        position: absolute;
        z-index: 8;
        transition:border-top 0.5s,border-right 0.8s;
        cursor: pointer;
        right: 0;
        &:hover{
           border-top: 80px solid rgb(37, 118, 240);
           border-right: 80px solid rgb(74, 145, 252);
        }
        &:hover .title{
          text-shadow: 0 0 5px white;
           top: -40px;
          left: 10px;
        }
        .title{
          transition: 0.5s;
          width: 80px;
          display: inline-block;
          color: white;
          transform: rotate(45deg);
          position: absolute;
          top: -20px;
          left: -20px;
        }
      }
      .cut1{
        width: 0;
        height: 0;
        border-top: 50px solid #E56550;
        border-bottom: 50px solid transparent;
        border-right: 50px solid #E56550;
        border-left: 50px solid transparent;
        position: absolute;
        z-index: 8;
        transition:border-top 0.5s,border-right 0.8s;
        cursor: pointer;
        right: 0;
        &:hover{
           border-top: 80px solid rgb(235, 90, 68);
           border-right: 80px solid rgb(235, 120, 102);
        }
        &:hover .title{
          text-shadow: 0 0 5px white;
           top: -40px;
          left: 10px;
        }
        .title{
          transition: 0.5s;
          width: 80px;
          display: inline-block;
          color: white;
          transform: rotate(45deg);
          position: absolute;
          top: -20px;
          left: -20px;
        }
      }
      h3 {
        text-align: center;
        font-weight: 200;
        padding: 16px 0;
        color: $text;
      }
      #logins {
        width: 287px;
        height: 50px;
        border: 1px solid $border;
        border-radius: 4px;
        margin-top: 10px;
        position: relative;
        transition: 1s;
        &:hover {
          border: 1px solid $second;
          box-shadow: 0 0 5px $shadow;
        }
        &:hover .logins-l {
          color: $second;
        }
        &:hover .logins-l::before {
          background: $second;
        }
        input {
          font-size: 15px;
          width: 217px;
          height: 50px;
          display: block;
          background: none;
          border: none;
          position: absolute;
          top: 0;
          padding-left: 70px;
        }
      }
      .logins-l {
        width: 56px;
        height: 56px;
        // background: red;
        position: absolute;
        left: 0;
        color: $border;
        text-align: center;
        line-height: 50px;
        transition: 0.5s;
        z-index: 2;
      }
      .logins-l::before {
        content: "";
        width: 2px;
        height: 40px;
        background: $border;
        position: absolute;
        right: -2px;
        top: 8px;
        opacity: 0.3;
        transition: 0.5s;
      }
    }@keyframes move {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 0.9;
      }
    }
  }
}
.btn {
  display: block;
  border: none;
  font-size: 15px;
  width: 287px;
  height: 56px;
  background: $second;
  line-height: 50px;
  text-align: center;
  color: $white;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 5px $shadow;
  }
}
.logins-b {
  width: 287px;
  height: 50px;
  line-height: 50px;
  a {
    font-size: 14px;
    color: $text;
    &:hover {
      text-decoration: underline;
    }
  }
}
#footer.foot {
  min-width: 1250px;
}
.errorMsg {
  height: 20px;
  font-size: 13px;
  color: red;
  padding-left: 25px;
}
</style>
