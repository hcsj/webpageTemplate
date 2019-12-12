<template>
  <div>
      <head-nav class="head-nav-show" :headerTitle="stepList[activeIndex - 1].title"></head-nav>
    <div class="register-webpage">
      <div class="register">
        <!-- 步骤条盒子 -->
        <div class="steps-box">
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
                <input type="password" v-model="form1.password" placeholder="请设置登录密码" />
                <span class="line"></span>
                <i class="el-icon-key"></i>
              </div>
              <div class="input-box" :class="form1.confirmPassword?'input-box-focus':''">
                <input type="password" v-model="form1.confirmPassword" placeholder="请再次确认登录密码" />
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
      <div class="bck">
        <!-- <img src="@/assets/img/logo1.png" alt /> -->
      </div>
    </div>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
export default {
  components: {
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
  box-shadow: 0 0 5px #5c5c5c;
  position: absolute !important;
}
.register-webpage {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  position: absolute;
  min-height: 500px;
  .register {
    text-align: center;
    width: 100%;
    padding-top: 3rem;
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
    bottom: 0;
    img {
      opacity: 0.8;
      display: block;
      width: 70px;
      margin-bottom: 2rem;
    }
  }
}

//步骤条样式
.steps-box {
  user-select: none;
  width: 100%;
  position: relative;
  z-index: 5;
  //对应内容
  .Article-content {
    padding: 20px;
    .btn {
      text-align: center;
      width: 100%;
      display: block;
      margin: 0px auto;
      margin-top: 2rem;
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