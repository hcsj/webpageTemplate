<template>
  <div id="login-box">
    <span class="close" v-if="closeLogin">
      <i class="el-icon-close" @click="$parent.loginShow = false"></i>
    </span>
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
      <span class="to-register">免费注册</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeLogin: { default: true } //是否显示关闭 x 号
  },
  data() {
    return {
      mobileNumber: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#login-box {
  width: 400px;
  height: 420px;
  background: rgba(255, 255, 255, 0.856);
  position: relative;
  padding: 40px;
  transition: 0.5s;
  animation: loginBox 0.5s ease both 1;
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
  //   border-radius: 5px;
  .close {
    transition: 0.3s;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 5;
    font-size: 1.5rem;
    z-index: 88;
    font-weight: bold;
    color: #808080;
    cursor: pointer;
    i {
      font-weight: bold;
    }
    &:hover {
      color: #f55151;
    }
  }
  .title {
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
@keyframes loginBox {
  0% {
    opacity: 0;
    transform: scale(0.5);
    // filter: blur(5px)
  }
  100% {
    opacity: 1;
    transform: scale(1);
    // filter: blur(0)
  }
}
.input-box {
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;
  .line {
    transition: 0.5s;
    width: 5px;
    height: 5px;
    background: $base;
    opacity: 0.8;
    position: absolute;
    left: 0;
    opacity: 0;
    transform: translateX(-20px);
  }
  i {
    position: absolute;
    left: 5px;
    font-size: 1.5rem;
    color: #4b4b4b;
    transition: 0.5s;
  }
  input {
    color: #5c5c5c;
    display: inline-block;
    transition: 0.5s;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid rgb(238, 238, 238);
    padding-left: 50px;
    padding-right: 10px;
    font-size: 15px;
    outline: none;
    position: relative;
    &:focus ~ .line {
      transform: translateX(-10px);
      opacity: 1;
    }
  }
}
.input-box-focus {
  i {
    color: $base !important;
  }
  input {
    border-bottom: 1px solid #a0cfff !important;
  }
}
</style>