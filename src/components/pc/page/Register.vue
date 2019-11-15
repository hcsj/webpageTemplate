<template>
  <div>
    <head-nav :class="'head-nav-show'"></head-nav>
    <div class="register-webpage">
      <div class="bck">
        <img src="@/assets/img/logo1.png" alt />
      </div>
      <div class="register">
        <div class="register-title">会员注册</div>
        <!-- 步骤条盒子 -->
        <div class="steps-box">
          <!-- 步骤条 -->
          <div class="Article-steps" :class="stepList.length <= activeIndex ? 'step-over':''">
            <!-- 步骤条背景进度条 -->
            <div class="plan-line">
              <span
                class="plan"
                :style="`width:${activeIndex*(100/(stepList.length - 1)) - (100/(stepList.length - 1)/2)}%`"
              ></span>
            </div>
            <!-- 每步部分 -->
            <span
              class="step"
              v-for="(i,index) in stepList"
              :key="index"
              :class="activeIndex == i.stepIndex || i.stepIndex<=activeIndex ? 'step-active':''"
            >
              <span class="step-num">
                <span class="num">{{i.stepIndex}}</span>
              </span>
              <p class="title">{{i.title}}</p>
            </span>
          </div>
          <!-- 步骤条对应内容 -->
          <div class="Article-content">
            <div class="content" v-if="activeIndex == 1">
              <div class="input-box" :class="form1.mobileNumber?'input-box-focus':''">
                <input type="text" maxlength="11" v-model="form1.mobileNumber" placeholder="请输入手机号" />
                <span class="line"></span>
                <i class="el-icon-mobile-phone"></i>
              </div>
              <div class="input-box" :class="form1.smsCode?'input-box-focus':''">
                <input type="text" maxlength="6" v-model="form1.smsCode" placeholder="请输入短信验证码" />
                <span class="line"></span>
                <i class="el-icon-c-scale-to-original"></i>
                <section class="verification-code">
                  <input type="button" value="获取验证码" />
                </section>
              </div>
              <div class="input-box" :class="form1.password?'input-box-focus':''">
                <input type="text" maxlength="11" v-model="form1.password" placeholder="请设置登录密码" />
                <span class="line"></span>
                <i class="el-icon-key"></i>
              </div>
              <div class="input-box" :class="form1.confirmPassword?'input-box-focus':''">
                <input
                  type="text"
                  maxlength="11"
                  v-model="form1.confirmPassword"
                  placeholder="请再次确认登录密码"
                />
                <span class="line"></span>
                <i class="el-icon-key"></i>
              </div>
              <div class="input-box" :class="form1.recomMobileNumber?'input-box-focus':''">
                <input
                  type="text"
                  maxlength="11"
                  v-model="form1.recomMobileNumber"
                  placeholder="请输入推荐人手机号(选填)"
                />
                <span class="line"></span>
                <i class="el-icon-user"></i>
              </div>
              <span class="btn" @click="nextStep()">立即注册</span>
            </div>
            <div class="content" v-if="activeIndex == stepList.length">
              <h3 class="register-success">恭喜您已注册成功!</h3>
              <span class="btn" @click="toHome()">完成</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot-nav :waveBck="'#ececec'"></foot-nav>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
import LoginBox from "../common/LoginBox.vue";
import footNav from "../common/FootNav.vue";
export default {
  components: {
    "login-box": LoginBox,
    "foot-nav": footNav,
    "head-nav": headNav
  },
  data() {
    return {
      //当前位置
      activeIndex: 1,
      //步骤条步数
      stepList: [
        {
          stepIndex: 1,
          title: "注册"
        },
        {
          stepIndex: 2,
          title: "完成"
        }
      ],
      form1: {
        mobileNumber: "",
        smsCode: "",
        password: "",
        confirmPassword: "",
        recomMobileNumber: "" //邀请人手机号
      }
    };
  },
  methods: {
    //点击下一步
    nextStep() {
      this.activeIndex += 1;
    },
    //点击上一步
    lastStep() {
      this.activeIndex -= 1;
    },
    toHome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// 头部导航栏样式
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px black;
  position: absolute !important;
}
.register-webpage {
  //   position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  min-height: 700px;
  background: #ececec;
  display: flex;
  justify-content: center;
  position: relative;
  .register {
    width: 100%;
    max-width: 600px;
    .register-title {
      margin: 30px 0;
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
  }
  .register-success {
    color: #4b4b4b;
    margin-top: 100px;
  }
  .bck {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    img {
      display: block;
      width: 200px;
      height: 50px;
      transform: scale(0.5);
    }
  }
}

//步骤条样式
.steps-box {
  padding-bottom: 50px;
  user-select: none;
  width: 100%;
  position: relative;
  // <!-- 步骤条背景进度条 -->
  .plan-line {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 24px;
    left: 2.5%;
    background: #ccc;
    width: 95%;
    height: 2px;
    overflow: hidden;
    .plan {
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      transition: 0.5s;
      background: $base;
      opacity: 0.5;
    }
  }
  .Article-steps {
    display: flex;
    justify-content: space-between;
    .step {
      .title {
        font-size: 15px;
        font-weight: 200;
        color: #808080;
        margin-top: 5px;
      }
      .step-num {
        width: 50px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        background: #c0c0c0;
        clip-path: polygon(50% 0, 100% 85%, 0 85%);
        color: white;
        font-weight: bold;
        transition: 0.5s;
        .num {
          transition: 0.5s;
          display: inline-block;
        }
      }
    }
  }

  //当前所在位置样式
  .step-active {
    .step-num {
      background: $base !important;
      transform: rotate(90deg);
      .num {
        transform: rotate(-90deg);
      }
    }
    .title {
      color: $base !important;
    }
  }

  //全部完成样式
  .step-over {
    .plan {
      background: #91f062 !important;
    }
    .step-num {
      background: #67c23a !important;
    }
    .title {
      color: #67c23a !important;
    }
  }
  //对应内容
  .Article-content {
    padding: 20px;
    .btn {
      width: 250px;
      display: block;
      margin: 0px auto;
      margin-top: 50px;
      background: $base;
      color: white;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background: $base;
        box-shadow: 0 2px 5px $base;
      }
    }
    .content {
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
      // background: gold;
    }
  }
}
</style>