<template>
  <div>
    <div class="login-webpage">
      <div class="bck">
        <!-- <img src="@/assets/img/logo1.png" alt /> -->
      </div>
      <div id="login-box">
        <div class="title">会员登录</div>
        <div class="login">
          <div class="input-box" :class="mobileNumber?'input-box-focus':''">
            <input type="text" maxlength="11" v-model="mobileNumber" placeholder="请输入账号" />
            <span class="line"></span>
            <i class="el-icon-user"></i>
          </div>
          <div class="input-box" :class="password?'input-box-focus':''">
            <input type="password" v-model="password" placeholder="请输入密码" />
            <span class="line"></span>
            <i class="el-icon-key"></i>
          </div>
          <div id="captcha">
            <span id="wait" class="geetest_wait_text">正在加载验证码....</span>
          </div>
        </div>
        <div class="button-login" @click="login()">登录</div>
        <div class="bottom-msg">
          <span>忘记密码?</span>
          <span class="to-register" @click="skip('register')">免费注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gtInit from "@/assets/js/gt";
import validates from "@/assets/js/validate.js";
export default {
  data() {
    return {
      mobileNumber: "",
      password: "",
      captchaObj: "",
      gtCapValid: ""
    };
  },
  mounted() {
    this.accquireToken();
  },
  methods: {
    skip(name) {
      this.$router.push({
        name: name
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
            let XAuthToken = resData.body["X-AUTH-TOKEN"];
            console.log(XAuthToken);
            sessionStorage.setItem("XAuthToken", XAuthToken);
            _this.initGtCaptcha();
          } else {
            _this.$Toast(resData.retMsg);
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.$Toast("服务器出现问题，请稍后再试");
        });
    },
    //密码登录初始化极验
    initGtCaptcha() {
      var _this = this;
      this.$axios
        .get("core-api/token/startCaptcha?t=" + new Date().getTime())
        .then(function(res) {
          console.log(res);
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
                width: "100%"
              },
              function(captchaObj) {
                _this.captchaObj = captchaObj;
                captchaObj.appendTo("#captcha");
                captchaObj.onReady(function() {
                  document.getElementById("wait").style.display = "none";
                });
                captchaObj.onSuccess(function() {
                  _this.gtCapValid = captchaObj.getValidate();
                });
                captchaObj.onError(function() {
                  // 出错啦，可以提醒用户稍后进行重试
                  _this.$Toast("出错啦，请稍后进行重试");
                });
              }
            );
          } else {
            // 出错啦，可以提醒用户稍后进行重试
            _this.$Toast(resData.retMsg);
            _this.accquireToken();
          }
        })
        .catch(function(err) {
          _this.$Toast("服务器出现问题，请稍后再试");
        });
    },
    //密码登录
    login() {
      let _this = this;
      if (!validates.isvalidPhone(_this.mobileNumber)) {
        _this.$Toast("请输入正确的11位手机号码");
        return;
      }
      if (!validates.isPwd(_this.password)) {
        _this.$Toast("密码为6-18位字母和数字组合");
        return;
      }
      if (_this.gtCapValid == "") {
         _this.$Toast("请拖动滑块验证");
        return
      }
      let params = {
        mobileNumber: _this.mobileNumber,
        password: _this.password,
        geetestChallenge: _this.gtCapValid.geetest_challenge,
        geetestValidate: _this.gtCapValid.geetest_validate,
        geetestSeccode: _this.gtCapValid.geetest_seccode
      };
      this.$axios
        .post("core-api/token/signIn", params)
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.getUserInfo();
          } else {
            _this.$Toast(resData.retMsg);
            _this.gtCapValid = "";
            _this.captchaObj.reset();
          }
        })
        .catch(function(err) {
          _this.gtCapValid = "";
          _this.captchaObj.reset();
          console.log(err);
          _this.$Toast("服务器出现问题，请稍后再试");
        });
    },
    //储存用户信息
    getUserInfo() {
      let _this = this;
      this.$axios
        .get("core-api/userSignIn/loginUserInfo")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            if (resData.body) {
              _this.$store.commit("USER_SIGNIN", resData.body);
              _this.$router.push({
                name: "home"
              });
            }
          } else {
            _this.$Toast(resData.retMsg);
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.$Toast("服务器出现问题，请稍后再试");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-webpage {
  width: 100%;
  height: 100%;
  //   min-height: 700px;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-height: 500px;
  .bck {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    img {
      opacity: 0.8;
      display: block;
      width: 70px;
      margin-bottom: 2rem;
    }
  }
}

#login-box {
  text-align: center;
  width: 400px;
  height: 420px;
  position: relative;
  top: -2rem;
  padding: 40px;
  transition: 0.5s;
  .title {
    margin: 0 auto;
    display: inline-block;
    color: #4b4b4b;
    padding: 8px 40px;
    background: $base;
    color: white;
    font-weight: bold;
    font-size: 17px;
    clip-path: polygon(
      0 0,
      13px 50%,
      0 100%,
      45% 100%,
      50% calc(100% - 5px),
      55% 100%,
      100% 100%,
      calc(100% - 13px) 50%,
      100% 0,
      55% 0,
      50% 5px,
      45% 0
    );
  }
  .login {
    margin: 50px 0;
  }
  .bottom-msg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #808080;
    margin: 20px 0;
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .to-register {
      color: $base;
    }
  }
  .button-login {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: $base;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    transition: 0.5s;
    box-shadow: 0 0 5px transparent;
    &:active {
      background: $base;
      opacity: 0.8;
    }
    &:hover {
      box-shadow: 0px 0px 5px $base;
    }
  }
}
</style>