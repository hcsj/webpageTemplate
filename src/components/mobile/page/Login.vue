<template>
  <div>
    <div class="login-webpage">
      <div class="bck">
        <img src="@/assets/img/logo1.png" alt />
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
        </div>
        <div class="button-login">登录</div>
        <div class="bottom-msg">
          <span>忘记密码?</span>
          <span class="to-register" @click="skip('register')">免费注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNumber: "",
      password: ""
    };
  },
  methods: {
    skip(name) {
      this.$router.push({
        name: name
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
  overflow: hidden;
  text-align: center;
  width: 400px;
  height: 420px;
  position: relative;
  top: -2rem;
  padding: 40px;
  transition: 0.5s;
  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    transition: 0.5s;
  }
  &::after {
    opacity: 0.7;
    transform: rotate(0deg);
    animation: boxChangeA 0.5s 0.5s ease both 1;
  }
  &::before {
    opacity: 0.4;
    transform: rotate(0deg);
    animation: boxChangeB 0.5s 0.7s ease both 1;
  }
  @keyframes boxChangeB {
    100% {
      transform: rotate(-4deg);
    }
  }
  @keyframes boxChangeA {
    100% {
      transform: rotate(4deg);
    }
  }
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