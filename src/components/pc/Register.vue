<template>
  <div>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" v-show="false"></el-amap>
    <div id="nav">
      <nav>
        <div class="parcel">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt>
          </div>
          <div class="nav">
            <h2>欢迎注册</h2>
            <router-link to="/">返回东金中心首页</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div id="register-c">
      <beautyAlert
        ref="beautyAlert"
        :message="beautyAlertMsg"
        :callBackFuncType="beautyAlertFuncType"
      ></beautyAlert>
      <div class="openAccount-con register">
        <!-- <div class="openAccount-title">注册</div> -->
        <div class="stepWrap">
          <el-steps :active="activeStep" finish-status="success" align-center>
            <el-step title="注册"></el-step>
            <el-step title="开通存管账户"></el-step>
            <el-step title="风险测评"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
        <div class="openAccount-form" v-if="activeStep == 0">
          <el-form ref="step1Form" :model="step1" :rules="step1Rules" label-width="110px">
            <el-form-item label="手机号" prop="mobileNumber">
              <div class="el-input">
                <el-input
                  v-model="step1.mobileNumber"
                  placeholder="请输入手机号"
                  @blur.prevent="userVerify(1)"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="拖动滑块验证">
              <div id="captcha">
                <p id="wait" class="show">正在加载验证码......</p>
              </div>
            </el-form-item>
            <el-form-item label="短信验证码" prop="smsCode" v-if="smsShow">
              <el-input
                type="tel"
                v-model="step1.smsCode"
                placeholder="请输入短信验证码"
                class="smsCodeInput"
              ></el-input>
              <span class="codeImg">
                <input
                  type="button"
                  class="identifyCode"
                  :disabled="isCodeDisabled"
                  v-model="codeText"
                  @click="sendMsg"
                >
              </span>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
              <el-input type="password" v-model="step1.password" placeholder="请设置登录密码"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input type="password" v-model="step1.confirmPassword" placeholder="请再次确认登录密码"></el-input>
            </el-form-item>
            <el-form-item label="推荐人手机号" prop>
              <el-input
                v-model="step1.recomMobileNumber"
                placeholder="请输入推荐人手机号（选填）"
                @blur.prevent="userVerify(2)"
              ></el-input>
            </el-form-item>
            <el-form-item label="输入邮箱" prop="email">
              <el-input v-model="step1.email" placeholder="请输入邮箱（选填）"></el-input>
            </el-form-item>
            <el-form-item label prop="agree">
              <el-checkbox v-model="step1.agree">我已经阅读并同意
                <el-button type="text" @click="open1">《用户服务协议》</el-button>
                <el-button type="text" @click="open2">《风险揭示书》</el-button>
                <el-button type="text" @click="open3">《资金承诺函》</el-button>
              </el-checkbox>
            </el-form-item>
          </el-form>

          <div align="right">
            <input type="button" class="btn" value="立即注册" @click="step1Submit('step1Form')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已注册？
            <router-link :to="{name:'login'}">
              <span class="fontCff5635" style="color:#ff6549">请登录</span>
            </router-link>
          </div>
        </div>
        <div class="openAccount-form" v-if="activeStep == 1">
          <el-form ref="step2Form" :model="step2" :rules="step2Rules" label-width="80px">
            <div class="item-input">
              <div class="name">银行卡信息</div>
            </div>
            <el-form-item label="银行卡号" prop="bankNum">
              <el-input
                v-model="step2.bankNum"
                placeholder="请输入银行卡号码"
                @blur.prevent="bankCardVerify()"
              ></el-input>
              <span class="con-tips">请输入与本账号相同手机号绑定的银行卡</span>
            </el-form-item>
            <div class="item-input">
              <div class="name">持卡人身份信息</div>
            </div>
            <el-form-item label="姓名" prop="userName">
              <el-input v-model="step2.userName" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="证件类型" prop="idNoType">
              <el-select v-model="step2.idNoType" placeholder="请选择证件类型" style="width: 100%;">
                <el-option label="身份证" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号码" prop="credNum">
              <el-input v-model="step2.credNum" placeholder="请输入证件号码"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="step1.mobileNumber" disabled ></el-input>
            </el-form-item>
          </el-form>
          <div align="center">
            <input type="button" class="btn" value="开通存管账户" @click="step2Submit('step2Form')">
            <!-- <a class="skip" @click="next1()">跳过</a> -->
          </div>
        </div>
        <div class="question" v-if="activeStep == 2">
         <el-main v-if="waiting" v-loading="waiting" element-loading-background="rgba(255, 255, 255, 0.7)"
                 class="callbackEleLoading"
                 element-loading-text="开户结果获取中，请等待～" style="height: 488px;">
        </el-main>
          <div v-if="!waiting && isSuccess && !isTimeout">
          <div>
            <div class="warn">
              <div>郑重提醒：投资者需具备相应的风险承受能力，审慎参与市场投资，合理配置金融资产。本风险承受能力评估并不构成对投资者未来所承担投资风险程度的保证，仅作为本公司客户适当性服务的依据。实际投资时请慎重选择，本公司不对投资者据此投资所产生的风险承担责任。投资有风险，可能导致投资者产生亏损，请投资者在购买产品过程中注意根据调查结果核对自己的风险承受能力和产品风险匹配情况。无论投资者是否根据调查结果进行投资，均属投资者的独立行为，相应的风险亦由投资者独立承担。</div>
              <p>本人声明：在投资者风险承受能力测试过程中，本人提供的全部信息是真实、准确和完整的，测试结果真实、准确地反映了本人的投资风险承受程度。</p>
              <p>
                以下一系列问题可在您选择产品前，协助评估您的风险承受能力、理财方式及投资目标。
                <span>（每个问题请选择唯一选项，不可多选）</span>
              </p>
              <p
                style="line-height: 1.5;"
              >请在下列各题最合适的答案上打勾，我们将根据您的选择来评估您对投资风险的适应度，并提供适合您投资的产品和服务建议。我们承诺对您的个人资料严格保密。</p>
            </div>
            <div class="questionList">
              <div
                class="question1 question-detail"
                v-for="(question,index) in questionList"
                :key="index"
              >
                <div>
                  <span class="questionNum badge floatL">{{index+1}}</span>
                  <span class="floatL">{{question.question}}</span>
                </div>
                <li v-for="(answer,i) in question.answers" class="floatL" :key="i">
                  <input
                    type="radio"
                    :name="index+1"
                    @change="question.selectedAnswer = answer.score"
                  >
                  <span>{{ answer.answer }}</span>
                </li>
              </div>
            </div>
            <div align="center">
              <input type="button" class="btn" value="提交测评" @click="step3Submit()">
              <!-- <a class="skip" @click="next()" style>跳过</a> -->
            </div>
          </div>
          </div>

          <div>
            <div
              class="buySuccess rechargeSuccess widthdrawSuccess"
              style="height: 488px;"
              v-if="!waiting && !isSuccess && !isTimeout"
            >
              <div class="fail">开户失败</div>
              <div class="success-msg">
                请稍后在我的账户-银行账户中重试&#x3000; 或继续做
                <a
                  href="javascript:;"
                  @click="todoRisk()"
                  style="color:greenyellow"
                >风险测评</a>
              </div>
            </div>
          </div>
          <div
            class="buySuccess rechargeSuccess widthdrawSuccess"
            style="height: 488px;"
            v-if="!waiting && isTimeout"
          >
            <div class="fail">等待超时</div>
            <div class="success-msg">
              请稍后在我的账户-银行账户中重试&#x3000; 或继续做
              <a
                href="javascript:;"
                @click="todoRisk()"
                style="color:greenyellow"
              >风险测评</a>
            </div>
          </div>
          <div class="mask" v-if="isRiskResult"></div>
          <div class="question-result" v-if="isRiskResult">
            <section>
              <div class="result-title">评估结果</div>
              <div class="score">
                <div class="score-con">
                  <span class="floatL">得分总计</span>
                  <span class="floatL sumNum">{{riskTotalScore}}</span>
                  <span class="floatL">分</span>
                </div>
              </div>
              <p class="grade-title">您的风险承受能力等级为：</p>
              <p class="grade">{{risk.riskLv}}级--{{risk.riskLvName}}</p>
              <br>
              <input type="button" name value="下一步" class="btn" @click="activeStep = 3">
            </section>
          </div>
        </div>
        <div class="question" v-if="activeStep == 2.5">
          <div v-if="waiting">
            <div class="warn">
              <div>郑重提醒：投资者需具备相应的风险承受能力，审慎参与市场投资，合理配置金融资产。本风险承受能力评估并不构成对投资者未来所承担投资风险程度的保证，仅作为本公司客户适当性服务的依据。实际投资时请慎重选择，本公司不对投资者据此投资所产生的风险承担责任。投资有风险，可能导致投资者产生亏损，请投资者在购买产品过程中注意根据调查结果核对自己的风险承受能力和产品风险匹配情况。无论投资者是否根据调查结果进行投资，均属投资者的独立行为，相应的风险亦由投资者独立承担。</div>
              <p>本人声明：在投资者风险承受能力测试过程中，本人提供的全部信息是真实、准确和完整的，测试结果真实、准确地反映了本人的投资风险承受程度。</p>
              <p>
                以下一系列问题可在您选择产品前，协助评估您的风险承受能力、理财方式及投资目标。
                <span>（每个问题请选择唯一选项，不可多选）</span>
              </p>
              <p
                style="line-height: 1.5;"
              >请在下列各题最合适的答案上打勾，我们将根据您的选择来评估您对投资风险的适应度，并提供适合您投资的产品和服务建议。我们承诺对您的个人资料严格保密。</p>
            </div>
            <div class="questionList">
              <div
                class="question1 question-detail"
                v-for="(question,index) in questionList"
                :key="index"
              >
                <div>
                  <span class="questionNum badge floatL">{{index+1}}</span>
                  <span class="floatL">{{question.question}}</span>
                </div>
                <li v-for="(answer,i) in question.answers" class="floatL" :key="i">
                  <input
                    type="radio"
                    :name="index+1"
                    @change="question.selectedAnswer = answer.score"
                  >
                  <span>{{ answer.answer }}</span>
                </li>
              </div>
            </div>
            <div align="center">
              <input type="button" class="btn" value="提交测评" @click="step3Submit()">
              <!-- <a class="skip" @click="next2()" style>跳过</a> -->
            </div>
          </div>
          <!-- <div>
            <div
              class="buySuccess rechargeSuccess widthdrawSuccess"
              style="height: 488px;"
              v-if="!waiting && !isSuccess && !isTimeout"
            >
              <div class="fail">开户失败</div>
              <div class="success-msg">请稍后在我的账户-银行账户中重试～</div>
              <div class="linkBtn">
                <router-link :to="{name:'userCenter'}">
                  <a class="continueBuy">返回我的账户</a>
                </router-link>
              </div>
            </div>
          </div>-->
          <!-- <div
            class="buySuccess rechargeSuccess widthdrawSuccess"
            style="height: 488px;"
            v-if="!waiting && isTimeout"
          >
            <div class="fail">等待超时</div>
            <div class="success-msg">请稍后在我的账户-银行账户中重试</div>
            <div class="linkBtn">
              <router-link :to="{name:'userCenter'}">
                <a class="continueBuy">返回我的账户</a>
              </router-link>
            </div>
          </div>-->
          <div class="mask" v-if="isRiskResult"></div>
          <div class="question-result" v-if="isRiskResult">
            <section>
              <div class="result-title">评估结果</div>
              <div class="score">
                <div class="score-con">
                  <span class="floatL">得分总计</span>
                  <span class="floatL sumNum">{{riskTotalScore}}</span>
                  <span class="floatL">分</span>
                </div>
              </div>
              <p class="grade-title">您的风险承受能力等级为：</p>
              <p class="grade">{{risk.riskLv}}级--{{risk.riskLvName}}</p>
              <br>
              <input type="button" name value="下一步" class="btn" @click="activeStep = 3">
            </section>
          </div>
        </div>
        <div class="finish" v-if="activeStep == 3" style="height:500px">
          <div class="finishTips" align="center">恭喜您已完成所有资料！</div>
          <div align="center">
            <input type="button" class="btn" value="返回首页" @click="getUserInfo()">
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <vFooter style="margin-top:200px"></vFooter>
  </div>
</template>


<script>
import footer from "@/components/pc/common/FootNav";
import beautyAlert from "@/components/pc/common/BeautyAlert";
import gtInit from "@/assets/js/gt";
import utils from "@/assets/js/utils";
import validates from "@/assets/js/validate.js";
var validPhone = (rule, value, callback) => {
  if (!validates.isvalidPhone(value)) {
    callback(new Error("请输入正确的11位手机号码"));
  } else {
    callback();
  }
};
var validateIdnumber = (rule, value, callback) => {
  if (!validates.isvalidateIdnumber(value)) {
    callback(new Error("请输入正确的身份证号码"));
  } else {
    callback();
  }
};
var validatePwd = (rule, value, callback) => {
  if (!validates.isPwd(value)) {
    callback(new Error("密码为6-18位字母和数字组合"));
  } else {
    callback();
  }
};
export default {
  name: "register",
  computed: {
    isUserLogin() {
      if (this.$store.state.user.isUserLogin) {
        return this.$store.state.user.isUserLogin;
      } else {
        this.$store.commit("USER_INFO_COMMIT");
        return this.$store.state.user.isUserLogin;
      }
    },
    userInfo() {
      if (this.$store.state.user.isUserLogin) {
        return this.$store.state.user.userInfo;
      } else {
        this.$store.commit("USER_INFO_COMMIT");
        return this.$store.state.user.userInfo;
      }
    }
  },
  data() {
    let self = this;
    return {
        location:false,
         positions: {
        lng: "",
        lat: "",
        address: "",
        loaded: false
      },
      center: [121.59996, 31.197646],
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result.position.lng,result.position.lat);  //  能获取定位的所有信息
                if (result && result.position) {
                  self.positions.lng = result.position.lng;
                  self.positions.lat = result.position.lat;
                  self.positions.loaded = true;
                  self.$nextTick();
                  // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                  sessionStorage.setItem(
                    "location",
                    result.position.lng + "," + result.position.lat
                  );
                  self.location = true
                }
              });
            }
          }
        }
      ],
      risk: {
        //测评结果
        riskLv: "3",
        riskLvName: "积极型"
      },
      riskTotalScore: 0,
      isRiskResult: false, //测评结果显示
      beautyAlertFuncType: null,
      beautyAlertMsg: "", //统一提示框的提示信息
      smsShow: false, //短信验证码展示
      captchaObj: null,
      step1mobileNumberValidate: false, //注册第一步手机号在数据库的校验结果
      step1recomMobileNumberValidate: false, //注册第一步推荐人手机号在数据库的校验结果
      step2BankCardNumValidate: false, //注册第二步银行卡号在数据库的校验结果
      gtCapValid: "", //滑动滑块
      activeStep: 0, //从0开始
      isCodeDisabled: false,
      codeText: "获取验证码",
      time: 90,
      isCodeDisabled: false,
      step1: {
        mobileNumber: "",
        smsCode: "",
        password: "",
        confirmPassword: "",
        recomMobileNumber: "",
        email: "",
        agree: true
      },
      step1Rules: {
        mobileNumber: [
          { required: true, trigger: "blur", validator: validPhone }
        ],
        smsCode: [
          { required: true, trigger: "blur", message: "请输入收到的验证码" },
          { min: 4, max: 6, message: "短信验证码位数错误", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请设置登录密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "请输入6～18位数字和字母组合",
            trigger: "blur",
            validator: validatePwd
          }
        ],
        confirmPassword: [
          { required: true, message: "请确认登录密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "请输入6～18位数字和字母组合",
            trigger: "blur",
            validator: validatePwd
          }
        ],
        recomMobileNumber: [{ trigger: "change", validator: validPhone }],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        agree: [
          {
            required: true,
            message: "请先阅读并同意《用户服务协议》《风险揭示书》《资金承诺函》",
            trigger: "blur"
          }
        ]
      },
      step2: {
        userName: "",
        idNoType: "1",
        credNum: "",
        bankNum: ""
      },
      step2Rules: {
        userName: [
          { required: true, trigger: "blur", message: "请输入真实姓名" },
          { min: 2, max: 6, message: "姓名长度有误", trigger: "blur" }
        ],
        idNoType: [
          { required: true, message: "请选择证件类型", trigger: "change" }
        ],
        credNum: [
          { required: true, trigger: "blur", validator: validateIdnumber }
        ],
        bankNum: [
          { required: true, trigger: "blur", message: "请输入银行卡号" }
        ]
      },
      step3: {
        riskScore: ""
      },
      questionList: [],
      skip: false, //是否跳过按键
      waiting: false,
      isSuccess: true,
      isTimeout: false,
      selfTimeout: null,
      websock: null,
      message1: `<strong>这是 <i>HTML</i> 片段</strong>`,
    };
  },
  components: {
    vFooter: footer,
    beautyAlert
  },
  methods: {
    //打开用户协议服务的方法
    open1() {
      var _this = this;
      this.$axios
        .post("core-api/cms/siteHelp/article/" + "/YHXY")
        .then(function(res) {
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.message1 = resData.body.siteHelp.helpContent;
            _this
              .$alert(_this.message1, "用户服务协议", {
                dangerouslyUseHTMLString: true,
                closeOnClickModal: true
              })
              .then(() => {})
              .catch(() => {});
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //打开风险揭示书的方法
    open2() {
      var _this = this;
      this.$axios
        .post("core-api/cms/siteHelp/article/" + "/FXJSS")
        .then(function(res) {
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.message1 = resData.body.siteHelp.helpContent;
            _this
              .$alert(_this.message1, "用户服务协议", {
                dangerouslyUseHTMLString: true,
                closeOnClickModal: true
              })
              .then(() => {})
              .catch(() => {});
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //打开资金承诺函方法
    open3() {
       var _this = this;
      this.$axios
        .post("core-api/cms/siteHelp/article/" + "/ZJCNH")
        .then(function(res) {
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.message1 = resData.body.siteHelp.helpContent;
            _this
              .$alert(_this.message1, "资金承诺函", {
                dangerouslyUseHTMLString: true,
                closeOnClickModal: true
              })
              .then(() => {})
              .catch(() => {});
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //跳过方法
    next1() {
      this.activeStep = 2.5;
      this.getQuestionList();
    },
    next2() {
      this.activeStep = 3;
    },
    // 极验初始化
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
                  _this.smsShow = true;
                });
                captchaObj.onError(function() {
                  // 出错啦，可以提醒用户稍后进行重试
                  // 出错啦，可以提醒用户稍后进行重试
                  _this.beautyAlertMsg = "出错啦，请稍后进行重试";
                  _this.$refs["beautyAlert"].showDialogDiv();
                });
              }
            );
          } else {
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
          }
        })
        .catch(function(err) {
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //获取短信验证码
    sendMsg() {
      var _this = this;
      if (_this.gtCapValid == "") {
        _this.beautyAlertMsg = "请拖动滑块完成验证～";
        _this.$refs["beautyAlert"].showDialogDiv();
        return false;
      }
      if (_this.step1mobileNumberValidate == false) {
        _this.beautyAlertMsg = "注册手机号已注册～";
        _this.$refs["beautyAlert"].showDialogDiv();
        return false;
      }
      console.log(_this.gtCapValid);
      if (
        _this.gtCapValid != "" &&
        validates.isvalidPhone(_this.step1.mobileNumber)
      ) {
        let params = {
          mobileNumber: this.step1.mobileNumber,
          actionType: 1,
          geetestChallenge: _this.gtCapValid.geetest_challenge,
          geetestValidate: _this.gtCapValid.geetest_validate,
          geetestSeccode: _this.gtCapValid.geetest_seccode
        };
        this.$axios
          .post("core-api/token/verifySms", params)
          .then(function(res) {
            console.log(res);
            let resData = res.data;
            if (resData.retCode == "N00000") {
              //获取验证码之后开始倒计时
              _this.isCodeDisabled = true;
              let interval = window.setInterval(function() {
                _this.codeText = _this.time + "秒";
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
    },
    //第一步提交
    step1Submit(formName) {
      // console.log( "推荐人手机号数据库校验：",this.step1recomMobileNumberValidate );
      // console.log("注册人手机号数据库校验：", this.step1mobileNumberValidate);
      let _this = this;
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          if (_this.step1mobileNumberValidate == false) {
            _this.beautyAlertMsg = "注册手机号已注册～";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          if (_this.gtCapValid == "") {
            _this.beautyAlertMsg = "请拖动滑块完成验证～";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          let pwdReg = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,18}$/;
          if (pwdReg.test(this.step1.password)) {
            _this.beautyAlertMsg = "密码为6～18位数字和字母组合";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          if (pwdReg.test(this.step1.confirmPassword)) {
            _this.beautyAlertMsg = "密码为6～18位数字和字母组合";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          if (this.step1.password != this.step1.confirmPassword) {
            _this.beautyAlertMsg = "确认密码需与登录密码一致～";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          if (
            this.step1.recomMobileNumber != "" &&
            this.step1recomMobileNumberValidate == false
          ) {
            _this.beautyAlertMsg = "推荐人手机号未在本渠道编号下注册～";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          console.log(this.step1.agree);
          if (this.step1.agree == false) {
            _this.beautyAlertMsg =
              "请先阅读并同意《用户服务协议》《风险揭示书》《资金承诺函》";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
           if (!this.location) {
            _this.beautyAlertMsg = "无法获取当前地理位置,请返回后再试";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
             }
          let params = {
            mobileNumber: _this.step1.mobileNumber,
            password: _this.step1.password,
            confirmPassword: _this.step1.confirmPassword,
            email: _this.step1.email,
            referrer: _this.step1.recomMobileNumber,
            smsCode: _this.step1.smsCode,
            rgLocation: window.sessionStorage.location?window.sessionStorage.location:'' //地理位置
          };
          this.$axios
            .post("core-api/token/register", params)
            .then(function(res) {
              console.log(res);
              let resData = res.data;
              if (resData.retCode == "N00000") {
                _this.activeStep = 1;
                //成功之后，把相关信息存入session，保存registerActive为1，表示进入到了第二步
                sessionStorage.setItem("registerActive", "1");
                //第一步提交成功后需要重新获取用户信息，前端算登录
                _this.getUserInfo();
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
        }
      });
    },
    //第二步提交
    step2Submit(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          if (_this.step2BankCardNumValidate == false) {
            _this.beautyAlertMsg =
              "银行卡号输入不正确或不支持该银行开通存管账户";
            _this.$refs["beautyAlert"].showDialogDiv();
            return false;
          }
          let year, month, day;
              let credNum = _this.step2.credNum;
              if (credNum.length == 15) {//15位身份证
                year = "19" + credNum.substring(6, 8);
                month = credNum.substring(8, 10);
                day = credNum.substring(10, 12);
              } else if (credNum.length == 18) {//18位身份证
                year = credNum.substring(6, 10);
                month = credNum.substring(10, 12);
                day = credNum.substring(12, 14);
              }
              console.log(year + "-" + month + "-" + day)

              let birth = year + "-" + month + "-" + day;

              let calResult = utils.calFactAge(birth, new Date());
              // if (calResult.year < 18) {
              //   _this.beautyAlertMsg = "您未满18周岁，不符合注册年龄";
              //   _this.$refs['beautyAlert'].showDialogDiv();
              //   return false;
              // }
          let params = {
            userName: _this.step2.userName,
            idNoType: _this.step2.idNoType,
            idNo: _this.step2.credNum,
            cardNo: _this.step2.bankNum
          };
          
          this.$axios
            .post("core-api/userSignIn/open", params)
            .then(function(res) {
              console.log(res);
              let resData = res.data;
              if (resData.retCode == "N00000") {
                // _this.beautyAlertMsg = resData.retMsg;
                // _this.$refs["beautyAlert"].showDialogDiv();
                // _this.activeStep = 2;
                // _this.getQuestionList();
                let bodyResult = resData.body;
                window.location.href = bodyResult.localUrl;
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
        }
      });
    },
    //进入页面，无token时获取token
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
    //开户提示错误或超时时的风险测评操作
    todoRisk() {
      this.waiting = false;
      this.isSuccess = true;
      this.isTimeout = false;
    },
    //第三步提交
    step3Submit() {
      let _this = this;
      console.log(this.questionList);
      //获取
      var selectedAnswerResult = this.questionList.filter(function(
        item,
        index,
        array
      ) {
        return item.selectedAnswer;
      });
      console.log(selectedAnswerResult);
      let questionListLength = this.questionList.length;
      let answerListLength = selectedAnswerResult.length;
      if (answerListLength < questionListLength) {
        _this.beautyAlertMsg = "风险测评还没完成，请继续完成～";
        _this.$refs["beautyAlert"].showDialogDiv();
      } else if (answerListLength > questionListLength) {
        _this.beautyAlertMsg = "发生错误啦";
        _this.$refs["beautyAlert"].showDialogDiv();
      } else if (answerListLength == questionListLength) {
        let selectedAnswersArr = [];
        selectedAnswerResult.forEach(item => {
          selectedAnswersArr.push(item.selectedAnswer);
        });
        let totalScore = selectedAnswersArr.reduce((a, b) => a + b);
        console.log(totalScore);
        _this.riskTotalScore = totalScore;
        _this.riskEval(totalScore);
        // _this.activeStep = 3;
      }
    },
    //题库提交接口
    riskEval(score) {
      let _this = this;
      this.$axios
        .get("core-api/userSignIn/resultEvaluating/" + score)
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.risk.riskLv = resData.body.riskLv;
            _this.risk.riskLvName = resData.body.riskLvName;
            _this.isRiskResult = true;
            //成功之后，把相关信息存入session，保存registerActive为2，表示进入到了第三步
            sessionStorage.setItem("registerActive", "3");
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
    //手机号输入后检验是否注册过
    userVerify(type) {
      let _this = this;
      let params = {
        mobileNumber: _this.step1.mobileNumber
      };
      if (type == 1) {
        //注册手机号
        if (validates.isvalidPhone(_this.step1.mobileNumber)) {
          params.mobileNumber = _this.step1.mobileNumber;
        } else {
          return;
        }
      } else if (type == 2) {
        //推荐人手机号
        if (validates.isvalidPhone(_this.step1.recomMobileNumber)) {
          params.mobileNumber = _this.step1.recomMobileNumber;
        } else {
          return;
        }
      }
      this.$axios
        .post("core-api/token/userVerify", params)
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (type == 1) {
            //注册手机号
            if (resData.retCode == "N00000") {
              _this.step1mobileNumberValidate = true;
            } else {
              _this.beautyAlertMsg = resData.retMsg;
              _this.$refs["beautyAlert"].showDialogDiv();
            }
          } else if (type == 2) {
            //推荐人手机号
            _this.step1recomMobileNumberValidate = true;
            if (resData.retCode == "N20003") {
              _this.step1mobileNumberValidate = true;
            } else if (resData.retCode == "N00000") {
              _this.beautyAlertMsg = "该推荐手机号未注册过";
              _this.$refs["beautyAlert"].showDialogDiv();
            } else {
              _this.beautyAlertMsg = resData.retMsg;
              _this.$refs["beautyAlert"].showDialogDiv();
            }
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //银行卡号输完之后的校验，校验新网是否支持之类的
    bankCardVerify() {
      let _this = this;
      if (_this.step2.bankNum == "") {
        return false;
      }
      this.$axios
        .get("core-api/xinwang/getCardInfoByNo/" + _this.step2.bankNum)
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            if (resData.body.verify == true) {
              _this.step2BankCardNumValidate = true;
            } else {
              _this.beautyAlertMsg = resData.body.verifyMessage;
              _this.$refs["beautyAlert"].showDialogDiv();
              _this.step2BankCardNumValidate = false;
            }
          } else {
            _this.step2BankCardNumValidate = false;
            _this.beautyAlertMsg = resData.retMsg;
            _this.$refs["beautyAlert"].showDialogDiv();
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.step2BankCardNumValidate = false;
          _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
          _this.$refs["beautyAlert"].showDialogDiv();
        });
    },
    //第三步获取题库
    getQuestionList() {
      let _this = this;
      this.$axios
        .get("core-api/userSignIn/questionBank")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            if (resData.body && resData.body.length != 0) {
              _this.questionList = resData.body;
              // console.log(_this.questionList)
            } else {
              _this.beautyAlertMsg = "题库为空";
              _this.$refs["beautyAlert"].showDialogDiv();
            }
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
    //初始化weosocket
    initWebSocket() {
      //记录开户结果状态，等待状态
      sessionStorage.setItem("registerOpenResult", "1");
      console.log(this.$siteSet.baseIP);
      let XAuthToken = window.sessionStorage.getItem("XAuthToken");
      console.log(XAuthToken);
      if (XAuthToken) {
        let websocket = "";
        if ("WebSocket" in window) {
          const wsuri =
            "ws://" + this.$siteSet.baseIP + "/websocket/" + XAuthToken; //ws地址
          // const wsuri = "ws://192.168.32.191:8088/ws";//ws地址
          window.websock = new WebSocket(wsuri);
          window.websock.onopen = this.websocketonopen;
          window.websock.onerror = this.websocketonerror;
          window.websock.onmessage = this.websocketonmessage;
          window.websock.onclose = this.websocketclose;
        } else {
          console.log("当前浏览器 Not support websocket");
        } //连接成功建立的回调方法 websocket.onopen = function () { console.log("WebSocket连接成功")
      }
    },
    //WebSocket连接成功
    websocketonopen() {
      console.log("WebSocket连接成功");
      console.log("开始每隔30s发送信息询问");
      this.selfInterval = setInterval(this.websocketsend, 30000);
    },
    //WebSocket连接发生错误
    websocketonerror(e) {
      //错误
      console.log(e);
      console.log("WebSocket连接发生错误");
    },
    //数据接收，成功接收后就获取题库
    websocketonmessage(e) {
      //数据接收
      console.log(e);
      if (e) {
        const redata = JSON.parse(e.data);
        //注意：长连接我们是后台直接1秒推送一条数据，
        //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
        //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
        console.log(redata.retCode);
        if (redata.retCode == "N00000") {
          //记录开户结果状态，成功状态
            sessionStorage.setItem("registerOpenResult", '2');
            this.waiting = false;
            this.isSuccess = true;
            this.isTimeout = false;
            this.getQuestionList();//获取题库
        } else {
          //记录开户结果状态，失败状态
          sessionStorage.setItem("registerOpenResult", "3");
          this.waiting = false;
          this.isSuccess = false;
          this.isTimeout = false;
        }
        //获取到websocket结果之后，关闭websocket
        this.websocketclose();
        clearInterval(this.selfInterval);
      }
    },
    //websocket数据发送
    websocketsend() {
      //数据发送
      let dataContent = {
        msg: "等待新网结果"
      };
      console.log(dataContent);
      this.websock.send(JSON.stringify(dataContent));
    },
    //websocket关闭
    websocketclose(e) {
      //关闭
      console.log("连接关闭");
      clearTimeout(this.selfTimeout);
      clearInterval(this.selfInterval);
      // console.log("connection closed (" + e.code + ")");
    },
    //第四步完成时的去投资跳转至首页
    gotoPage(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        //跳转页面前需要把session相关信息给删掉
        sessionStorage.removeItem("registerActive");
        sessionStorage.removeItem("registerOpenResult");
        this.getUserInfo();
      }
    },
    //注册成功后获取用户信息，方便sessionStorage存相关数据
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
              // sessionStorage.setItem("userInfo",JSON.stringify(resData.body));
              // sessionStorage.setItem("isUserLogin",'true');
            }
            if (_this.activeStep == 3) {
              _this.sendSuccessRegisterSms();
              _this.$router.replace({
                name: "home"
              });
            }
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
    sendSuccessRegisterSms() {
      let _this = this;
      this.$axios
        .get("core-api/userSignIn/registerSms")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
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
    }
  },
  mounted() {
    // let step = this.$route.params.step;
    // if (step) {
    //   this.activeStep = Number(step);
    // } else {
    //   this.activeStep = 0;
    // }
  },
  created() {
    //注册后缀数
    let step = this.$route.params.step;
    if (step == 0) {
      //判断刷新后所在第几步
      let registerActive = sessionStorage.getItem("registerActive");
      console.log("第一步刷新的registerActive", registerActive);
      if (registerActive == 1) {
        //进行到第二步开通存管账户
        this.activeStep = 1;
        console.log("第一步刷新的activeStep", this.activeStep);
        let loginName = this.userInfo.loginName;
        if (loginName) {
          this.step1.mobileNumber = loginName;
        }
      } else if (registerActive == 2) {
        //进行到第三步风险测评
        this.activeStep = 2;
        console.log("第一步刷新的activeStep", this.activeStep);
        this.getQuestionList();
        let registerOpenResult = sessionStorage.getItem("registerOpenResult"); //1：等待，2：成功，3：失败，4：超时
        if (registerOpenResult == 1) {
          //等待
          this.waiting = true;
          this.isSuccess = true;
          this.isTimeout = false;
          //页面刚进入时开启长连接
          this.initWebSocket();
          this.selfTimeout = setTimeout(() => {
            this.websocketclose();
            this.waiting = false;
            this.isTimeout = true;
            //记录开户结果状态，失败状态
            sessionStorage.setItem("registerOpenResult", "4");
          }, this.$siteSet.callbackTimeout);
        } else if (registerOpenResult == 2) {
          //成功
          this.waiting = false;
          this.isSuccess = true;
          this.isTimeout = false;
        } else if (registerOpenResult == 3) {
          //失败
          this.waiting = false;
          this.isSuccess = false;
          this.isTimeout = false;
        } else if (registerOpenResult == 4) {
          //超时
          this.waiting = false;
          this.isSuccess = false;
          this.isTimeout = true;
        }
      } else if (registerActive == 3) {
        //进行到第四步完成
        this.activeStep = 3;
        console.log("第一步刷新的activeStep", this.activeStep);
      } else {
        if (window.sessionStorage.XAuthToken) {
          this.initGtCaptcha();
        } else {
          this.accquireToken();
        }
      }
      // this.initGtCaptcha();
    }
    if (step == 2) {
      //判断刷新后所在第几步
      let registerActive = sessionStorage.getItem("registerActive");
      console.log("第三步刷新的registerActive", registerActive);
      if (registerActive == 2) {
        //进行到第三步风险测评
        this.activeStep = 2;
        this.getQuestionList();
        let registerOpenResult = sessionStorage.getItem("registerOpenResult"); //1：等待，2：成功，3：失败，4：超时
        if (registerOpenResult == 1) {
          //等待
          this.waiting = true;
          this.isSuccess = true;
          this.isTimeout = false;
          //页面刚进入时开启长连接
          this.initWebSocket();
          this.selfTimeout = setTimeout(() => {
            this.websocketclose();
            this.waiting = false;
            this.isTimeout = true;
            //记录开户结果状态，失败状态
            sessionStorage.setItem("registerOpenResult", "4");
            clearInterval(this.selfInterval);
          }, this.$siteSet.callbackTimeout);
        } else if (registerOpenResult == 2) {
          //成功
          this.waiting = false;
          this.isSuccess = true;
          this.isTimeout = false;
        } else if (registerOpenResult == 3) {
          //失败
          this.waiting = false;
          this.isSuccess = false;
          this.isTimeout = false;
        } else if (registerOpenResult == 4) {
          //超时
          this.waiting = false;
          this.isSuccess = false;
          this.isTimeout = true;
        }
      } else if (registerActive == 3) {
        //进行到第四步完成
        this.activeStep = 3;
      } else {
        if (registerActive != 2) {
          this.activeStep = 2;
          //进入第三步
          sessionStorage.setItem("registerActive", "2");
          this.getQuestionList();
          // //页面刚进入时开启长连接
          this.initWebSocket();
          this.selfTimeout = setTimeout(() => {
            this.websocketclose();
            this.waiting = false;
            this.isTimeout = true;
            //记录开户结果状态，失败状态
            sessionStorage.setItem("registerOpenResult", "4");
            clearInterval(this.selfInterval);
          }, this.$siteSet.callbackTimeout);
        }
      }
    }
  },
  destroyed: function() {
    //页面销毁时关闭长连接
    this.websocketclose();
    clearTimeout(this.selfTimeout);
    clearInterval(this.selfInterval);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/pc/blendent.scss";
html,
body {
  width: 100%;
  height: 100%;
}
#register-c {
  width: 100%;
  height: 100%;
  min-width: 1250px;
  position: relative;
  top: 120px;
  overflow: hidden;
}
#nav {
  width: 100%;
  height: 100px;
  left: 0;
  position: absolute;
  z-index: 3;
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
.openAccount-con {
  height: auto;
}
.stepWrap {
  width: 900px;
  margin: 20px auto;
}
.openAccount-con .openAccount-form {
  padding-top: 20px;
  width: 405px;
  padding-bottom: 20px;
}
/*.openAccount-con input{*/
/*height: 32px !important;*/
/*margin-left: 0 !important;*/
/*margin-bottom: 0 !important;*/
/*}*/
.openAccount-con .codeImg {
  height: 42px;
  float: right;
  border-left: 1px solid #ececec;
  cursor: pointer;
}
.identifyCode {
  width: 98px;
  height: 42px;
  border-radius: 0;
  margin-left: 0;
  border-top: 0 !important;
  border-right: 0 !important;
  margin-bottom: 0;
  // background: rgb(240, 239, 239);
}
.openAccount-con .btn {
  width: 150px;
  height: 45px;
  border-radius: 5px;
  background: $second;
  color: white;
  border: none;
  cursor: pointer;
}
.name {
  height: 40px;
  margin-left: 99px;
}
.con-tips {
  font-size: 12px;
  color: #cccccc;
}
.tel {
  height: 40px;
  margin-left: 9px;
}
.smsCodeInput {
  width: 150px;
}
.question {
  border: 0;
  background: none;
}
.question .warn div {
  line-height: 1.5;
}
.question .warn p {
  margin-bottom: 20px;
}
.openAccount-con .btn {
  margin-top: 0;
}
.question .btn,
.finish .btn {
  width: 150px;
  border: 0;
  font-size: 18px;
  color: #fff;
  background: #ff5635;
  height: 45px;
  margin-bottom: 20px;
}
.finishTips {
  font-size: 26px;
  line-height: 3;
}
.buySuccess {
  width: auto !important;
  border: none;
}
.question .question-detail li {
  background: none;
}
.buySuccess .linkBtn {
  width: 156px;
}
.buySuccess .linkBtn a {
  width: 156px;
  float: none;
  display: inline-block;
}
.fail {
  width: 155px;
  text-align: right;
  height: 38px;
  margin: 0 auto;
  /* background: url(../../assets/img/rechargeFail.png) no-repeat left top; */
  /*padding-left: 25px;*/
  font-size: 24px;
  font-weight: bold;
  color: #ff5635;
  line-height: 38px;
  margin-top: 156px;
}
.buySuccess .success {
  width: 165px;
  text-align: right;
  height: 60px;
  margin: 0 auto;
  /* background: url(../../assets/img/rebind.png) no-repeat left center; */
  /*padding-left: 45px;*/
  font-size: 24px;
  font-weight: bold;
  color: #61bf5c;
  line-height: 60px;
  margin-top: 156px;
}
.buySuccess .success-msg {
  margin: 24px 0 36px 0;
}
.mask,
.question-result {
  /*width: 100%;*/
  /*height: 100%;*/
  /*background: rgba(36, 35, 35, 0.562);*/
  display: block;
  /*display: flex;*/
  /*align-items: center;*/
}
.mask {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.question-result {
  width: 528px;
  height: 424px;
  background: url(../../assets/images/resultBg.png) no-repeat center;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 600;
}
.question-result .result-title {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  margin: 28px 0 49px 0;
}
.question-result .score {
  height: 72px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 1px dashed #c3c3c3;
  margin: 0 27px;
}
.question-result .score-con {
  width: 217px;
  margin: 0 auto;
  height: 100%;
}
.question-result .score-con span {
  margin-top: 10px;
}
.question-result .score .sumNum {
  color: #fd544f;
  font-size: 60px;
  font-weight: bold;
  margin: 0 11px;
}
.question-result .grade-title {
  color: #808080;
  line-height: 14px;
  text-align: center;
  margin: 29px 0;
}
.question-result .grade {
  font-size: 28px;
  line-height: 28px;
  text-align: center;
}
.question-result .btn {
  display: block;
  width: 328px;
  height: 49px;
  margin: 0 auto;
  color: #fff;
  background: #ff5635;
  font-size: 18px;
  border: 0 !important;
  margin-top: 21px;
  margin-bottom: 16px;
}
.question-result .btn:hover {
  background: #e72500;
}
.question-result a {
  width: 100%;
  display: inline-block;
  text-align: center;
  color: #01c0ff;
  font-size: 16px;
}
.question-result a:hover {
  text-decoration: underline !important;
}
.skip {
  line-height: 45px;
  color: $white;
  background: $border;
  border-radius: 5px;
  margin-top: 10px;
  display: block;
  width: 150px;
  height: 45px;
  cursor: pointer;
}
</style>