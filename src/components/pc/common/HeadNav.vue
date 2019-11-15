<template>
  <div class="head-nav">
    <div class="nav">
      <div class="logo">
        <i class="el-icon-knife-fork"></i>
        <!-- <img src="@/assets/img/logo1.png" alt=""> -->
      </div>
      <div class="nav-tab">
        <span
          class="tab"
          :class="$route.name == i.name?'tab-active':''"
          v-for="(i,index) in navList"
          :key="index"
          @click="skip(i.name)"
        >{{i.title}}</span>
        <div id="user" v-if="head_loginShow">
          <div class="user-img">
            <i class="el-icon-user"></i>
          </div>
          <span @click="loginShow = true" class="login-text">登录</span>
        </div>
      </div>
    </div>
    <div class="login-alert" v-if="loginShow">
      <login-box></login-box>
    </div>
  </div>
</template>

<script>
import LoginBox from "../common/LoginBox.vue";
export default {
  props:{
     head_loginShow:{default:true} //是否显示头部栏上的登录
  },
  components: {
    "login-box": LoginBox
  },
  data() {
    return {
      loginShow: false,
      navList: [
        {
          title: "首页",
          name: "home"
        },
        {
          title: "业务介绍",
          name: "BusinessIntroduction"
        },
        {
          title: "新闻资讯",
          name: "News"
        },
        {
          title: "关于我们",
          name: "AboutUs"
        }
      ]
    };
  },
  methods: {
    skip(name) {
      window.scrollTo(0, 0);
      if (name == this.$route.name) {
        return;
      }
      this.$router.push({
        name: name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.head-nav {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  transition: 0.5s;
  color: white;
  min-width: 1200px;
  .nav {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    // background: blue;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 200px;
      min-width: 200px;
      //   background: red;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 3rem;
        color: white;
      }
      img{
        width: 100%;
        transform: scale(0.6)
      }
    }
    .nav-tab {
      width: 100%;
      //   background: orangered;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px;
      .tab {
        margin: 0 20px;
        font-weight: bold;
        font-size: 17px;
        cursor: pointer;
        position: relative;
        padding: 10px;
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background: white;
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0;
          transition: 0.5s;
          //   transform: scaleX(0);
          //   transform-origin: right;
          border-radius: 3px;
        }
        &:hover::after {
          opacity: 1;
          //   transition: transform 0.5s;
          //   transform: scaleX(1);
          //   transform-origin: left;
        }
      }
      #user {
        margin-left: 50px;
        display: flex;
        align-items: center;
        .user-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 1.5rem;
          }
        }
        .login-text {
          cursor: pointer;
          margin-left: 5px;
          font-size: 13px;
        }
      }
    }
  }
}
.tab-active {
  &::after {
    opacity: 1 !important;
    // transform: scaleX(1) !important;
    // transform-origin: left !important;
  }
}

.login-alert {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.575);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>