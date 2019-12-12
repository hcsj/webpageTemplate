<template>
  <div>
      <div id="nav">
      <nav>
        <div class="parcel">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt>
          </div>
          <div class="nav">
            <!-- <h2>欢迎登录</h2> -->
            <router-link to="/">返回东金中心首页</router-link>
          </div>
        </div>
      </nav>
    </div>
    <beautyAlert ref="beautyAlert" :message="beautyAlertMsg" :callBackFuncType="beautyAlertFuncType"></beautyAlert>
    <div class="openAccount-con modifyPwd" style="height: 500px;">
      <div class="openAccount-title">重置登录密码</div>
      <div class="openAccount-form">
        <el-form ref="form" :model="form" :rules="formRules" label-width="110px">
          <el-form-item label="手机号" prop="mobileNumber">
            <!--{{userInfo.userMobile}}-->
            <el-input v-model="form.mobileNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="拖动滑块验证">
            <div id="captcha">
              <p id="wait" class="show">正在加载验证码......</p>
            </div>
          </el-form-item>
          <el-form-item label="短信验证码" prop="smsCode">
            <el-input type="tel" v-model="form.smsCode" placeholder="请输入短信验证码" class="smsCodeInput"></el-input>
            <span class="codeImg">
              <input type="button" class="identifyCode"
                     :disabled="isCodeDisabled" v-model="codeText" @click="sendMsg"/>
            </span>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入6-18位数字、字母组合密码" type="password"></el-input>
            <!-- <span class="con-tips">请输入6-18位数字、字母组合密码</span> -->
          </el-form-item>
          <div align="center">
            <input type="button" class="btn" value="确认" @click="submitModifyPwd('form')"/>
          </div>
        </el-form>
      </div>

    </div>

    <!--底部-->
    <vFooter :class="'foot'"></vFooter>
  </div>

</template>

<script>
  import footer from '@/components/pc/common/FootNav'
  import gtInit from '@/assets/js/gt'
  import beautyAlert from '@/components/pc/common/BeautyAlert'
  import validates from '@/assets/js/validate.js'

  var validPhone = (rule, value, callback) => {
    if (!validates.isvalidPhone(value)) {
      callback(new Error('请输入正确的11位手机号码'))
    } else {
      callback()
    }
  }
   var validatePwd = (rule, value, callback) => {
    if (!validates.isPwd(value)) {
      callback(new Error('密码为6-18位字母和数字组合'))
    } else {
      callback()
    }
 }

  export default {
    name: "modify-password",
    computed: {
      isUserLogin() {
        if (this.$store.state.user.isUserLogin) {
          return this.$store.state.user.isUserLogin;
        } else {
          this.$store.commit('USER_INFO_COMMIT');
          return this.$store.state.user.isUserLogin;
        }

      },
      userInfo() {
        if (this.$store.state.user.isUserLogin) {
          return this.$store.state.user.userInfo;
        } else {
          this.$store.commit('USER_INFO_COMMIT');
          return this.$store.state.user.userInfo;
        }
      }
    },
    data() {
      return {
        beautyAlertFuncType: null,
        beautyAlertMsg: "",//统一提示框的提示信息
        smsShow: false,
        gtCapValid: "",//滑动滑块
        codeText: "获取验证码",
        isCodeDisabled: false,
        time:90,
        form: {
          mobileNumber:"",
          smsCode: "",
          password: ""
        },
        formRules: {
          mobileNumber:[
            {required: true, trigger: 'blur', validator: validPhone}
          ],
          smsCode: [
            {required: true, trigger: 'blur', message: '请输入收到的验证码'},
            {min: 4, max: 6, message: '短信验证码位数错误', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请确认新密码', trigger: 'blur'},
            {min: 6, max: 18, message: '请输入6～18位数字和字母组合', trigger: 'blur',validator:validatePwd}
          ],
        }
      }
    },
    components: {
      vFooter: footer,
      beautyAlert
    },
    methods: {
      //初始化极验
      initGtCaptcha() {
        var _this = this;
        this.$axios
          .get("core-api/token/startCaptcha?t=" + (new Date()).getTime())
          .then(function (res) {
            console.log(res);
            let resData = res.data;
            if (resData.retCode == "N00000") {
              let bodyResult = resData.body;
              window.initGeetest({
                // 以下 4 个配置参数为必须，不能缺少
                gt: bodyResult.gt,
                challenge: bodyResult.challenge,
                offline: !bodyResult.success, // 表示用户后台检测极验服务器是否宕机
                new_captcha: bodyResult.new_captcha, // 用于宕机时表示是新验证码的宕机

                product: "popup", // 产品形式，包括：float，popup
                width: "100%"
              }, function (captchaObj) {
                _this.captchaObj = captchaObj;
                captchaObj.appendTo('#captcha');
                captchaObj.onReady(function () {
                  document.getElementById('wait').style.display = 'none';
                });
                captchaObj.onSuccess(function () {
                  _this.gtCapValid = captchaObj.getValidate();
                })
                captchaObj.onError(function () {
                  // 出错啦，可以提醒用户稍后进行重试
                  // 出错啦，可以提醒用户稍后进行重试
                  _this.beautyAlertMsg = '出错啦，请稍后进行重试';
                  _this.$refs['beautyAlert'].showDialogDiv();
                });
              });
            } else {
              _this.beautyAlertMsg = resData.retMsg;
              _this.$refs['beautyAlert'].showDialogDiv();

            }
          })
          .catch(function (err) {
            _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
            _this.$refs['beautyAlert'].showDialogDiv();
          })

      },
      //发送短信
      sendMsg() {
        var _this = this;
        if (_this.gtCapValid == "") {
          _this.beautyAlertMsg = "请拖动滑块完成验证～";
          _this.$refs['beautyAlert'].showDialogDiv();
          return false;
        }
        console.log(_this.gtCapValid)
        if (_this.gtCapValid != "") {
          let params = {
            "mobileNumber": _this.form.mobileNumber,
            "actionType": 5,
            "geetestChallenge": _this.gtCapValid.geetest_challenge,
            "geetestValidate": _this.gtCapValid.geetest_validate,
            "geetestSeccode": _this.gtCapValid.geetest_seccode
          }
          this.$axios
            .post("core-api/token/verifySms", params)
            .then(function (res) {
              console.log(res)
              let resData = res.data;
              if (resData.retCode == "N00000") {
                //获取验证码之后开始倒计时
                _this.isCodeDisabled = true;
                let interval = window.setInterval(function () {
                  _this.codeText = _this.time + '秒';
                  --_this.time;
                  if (_this.time < 0) {
                    _this.codeText = "重新发送";
                    _this.time = 90;
                    _this.isCodeDisabled = false;
                    window.clearInterval(interval);
                  }
                }, 1000);

              } else {
                _this.beautyAlertMsg = resData.retMsg;
                _this.$refs['beautyAlert'].showDialogDiv();
                _this.gtCapValid = "";
                _this.captchaObj.reset();
              }
            })
            .catch(function (err) {
              console.log(err);
              _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
              _this.$refs['beautyAlert'].showDialogDiv();
              _this.gtCapValid = "";
              _this.captchaObj.reset();
            })
        }
      },
      //确认重置登录密码
      submitModifyPwd(formName){
        let _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (_this.gtCapValid == "") {
              _this.beautyAlertMsg = "请拖动滑块完成验证～";
              _this.$refs['beautyAlert'].showDialogDiv();
              return false;
            }
            let params = {
              "mobileNumber": this.form.mobileNumber,
              "password": this.form.password,
              "smsCode": this.form.smsCode
            }
            this.$axios
              .post("core-api/token/forgetPWD", params)
              .then(function (res) {
                console.log(res)
                let resData = res.data;
                if (resData.retCode == "N00000") {
                  let bodyResult = resData.body;
                  // console.log(bodyResult);
                  _this.$store.commit('USER_SIGNOUT');
                  _this.$router.replace({
                    name: "modifyPasswordSuccess"
                  });

                } else {
                  _this.beautyAlertMsg = resData.retMsg;
                  _this.$refs['beautyAlert'].showDialogDiv();
                  _this.gtCapValid = "";
                  _this.captchaObj.reset();
                }
              })
              .catch(function (err) {
                console.log(err);
                _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
                _this.$refs['beautyAlert'].showDialogDiv();
                _this.gtCapValid = "";
                _this.captchaObj.reset();
              })
            // this.activeStep = 2;

          }
        });
      }

    },
      created() {
        // console.log(111)
        this.initGtCaptcha();
        if(this.userInfo.userMobile){
          this.form.mobileNumber = this.userInfo.userMobile;
        }else{
          this.form.mobileNumber = "";
        }
      }
    }
</script>

<style lang="scss" scoped>
@import "../../../assets/css/pc/blendent.scss";
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
#footer.foot {
  min-width: 1250px;
  margin-top: 350px;
}
.errorMsg{
  height: 20px;
  font-size: 13px;
  color: red;
  padding-left: 25px;
}
  .con-tips {
    font-size: 12px;
    color: #cccccc;
  }

  .openAccount-con .btn {
    width: 150px;
  }

  .smsCodeInput {
    width: 150px;
  }

  .identifyCode {
    width: 100%;
    height: 42px;
    border-radius: 0;
    margin-left: 0;
    border-top: 0 !important;
    border-right: 0 !important;
    margin-bottom: 0;
    background: transparent;
  }

  .openAccount-con .codeImg {
    display: block;
    height: 42px;
    float: right;
    border: 1px solid #ececec !important;
    cursor: pointer;
  }
/*开户绑卡*/
.openAccount-con.modifyPwd{
  position: relative;
  top: 200px;
}
.openAccount-con{
	width:800px;
	height: 651px;
	margin:0 auto;
	background: #fff;
  border:1px solid #e9e9e9;
  position: relative;
  top: 150px;
  // left: calc(50% - 400px);
}
.openAccount-con .openAccount-title,.productDetail-con .openAccount-title{
	height: 57px;
	border-bottom: 1px solid #e9e9e9;
	line-height: 56px;
	padding-left:15px;
	font-size: 18px;
}
.productDetail-con .openAccount-title{
	border:1px solid #e9e9e9;
	border-bottom: 0;
	margin-top: 20px;
	background: #fff;
}
.openAccount-con .openAccount-form{
	width:384px;
	height: 100%;
	margin:0 auto;
	padding-top:45px;
}
.openAccount-con .personal-info,.openAccount-con .card-info{
	font-size: 16px;
	line-height: 16px;
	margin-bottom: 27px;
}
.openAccount-con .card-info{
	margin-top: 23px;
}
/*.openAccount-con input{*/
	/*width:300px;*/
	/*height: 40px;*/
	/*margin-bottom: 20px;*/
	/*margin-left: 9px;*/
	/*padding-left: 11px;*/
/*}*/
.openAccount-con .codeInput{
	width:190px;
	margin-left: 13px;
}
.openAccount-con .codeImg{
	width:110px;
	border:1px solid #ececec;
	border-left: 0;
	height: 40px;
}
.openAccount-con .btn{
	border: 0!important;
	margin-top: 22px;
	font-size: 18px;
	color: #fff;
	background:#ff5635;
	/*margin-left: 84px;*/
  height: 45px;
  cursor: pointer;
}
/*开户鼠标滑过*/
.openAccount-con .btn:hover{
	background: #e72500;
}
</style>
