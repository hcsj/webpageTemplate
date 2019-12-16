<template>
  <div id="nav">
    <!-- 导航栏头部通知部分 -->
    <div class="nav-t">
      <div class="nav-ts">
        <div class="nav-tl">
          <p>你好! 欢迎进入东北亚金融资产交易中心</p>
        </div>
        <div v-if="isUserLogin" class="nav-trr">
          <a>欢迎 / {{userInfo.loginName}}&nbsp;</a>
          <a href="javascript:;">
            <a @click="logout()" style="color:white">|&#x3000;退出</a>
          </a>
        </div>
        <div v-if="!isUserLogin" class="nav-trr">
          <router-link to="/login" style="color:white">登录/</router-link>
          <router-link to="/register/0" style="color:white">注册</router-link>
        </div>
        <div class="nav-tr">
          <p>客服电话 : {{$siteSet.servePhone}}&#x3000;工作日 : {{$siteSet.serveTime}}</p>
        </div>
      </div>
    </div>
    <nav>
      <div class="parcel">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt />
          </router-link>
        </div>
        <div class="nav">
          <li
            :class="{active:TabNav === nav.router}"
            v-for="(nav,index) in Nav"
            :key="index"
            @click="skip(index)"
          >{{nav.textLeft}}</li>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      //判断用户是否登录
      if (this.$store.state.user.isUserLogin) {
        //如果登录
        return this.$store.state.user.isUserLogin; //返回 isUserLogin为false 登录模块消失
      } else {
        //没有登录
        this.$store.commit("USER_INFO_COMMIT"); //调用方法
        return this.$store.state.user.isUserLogin; //返回 isUserLogin为ture 登录模块出现
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
    return {
      uid: this.$route.params.r,
      TabNav: this.$route.path,
      Nav: [
        { textLeft: "首页", router: "/" },
        // { textLeft: "交易服务", router: "/MemberServices",},
        { textLeft: "业务介绍", router: "/BusinessIntroduction" },
        { textLeft: "新闻资讯", router: "/PressRelease" },
        // { textLeft: "资产交易", router: "/PropertyDeal" },
        { textLeft: "关于我们", router: "/AboutUs" }
      ]
    };
  },
  methods: {
    skip(index) {
      this.$router.push({
        path: this.Nav[index].router
      });
      this.TabNav = this.Nav[index].router;
    },
    logout() {
      let _this = this;
      this.$axios
        .get("core-api/base/logout")
        .then(function(res) {
          // console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.$store.commit("USER_SIGNOUT");
            if (_this.$route.name == "home") {
              _this.$parent.accquireToken();
            } else {
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
    }
  },
  created() {
    // console.log(this.$route.path)
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/pc/blendent.scss";
#nav {
  width: 100%;
  height: 100px;
  left: 0;
  z-index: 8;
  min-width: 1200px;
  box-shadow: 2px 0px 3px #ccc;
  z-index: 99;
  position: relative;
}
.nav-ts {
  width: 100%;
  background: red;
  position: relative;
  max-width: $MaxWidth;
}
.nav-t {
  height: 35px;
  background: $header;
  position: relative;
  line-height: 35px;
  color: $white;
  font-size: 15px;
}
.nav-tl {
  width: 300px;
  height: 35px;
  overflow: hidden;
  position: absolute;
}
.nav-tl p {
  animation: move 10s linear infinite;
}
@keyframes move {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(-300px);
  }
}

.nav-tr {
  text-align: center;
  width: 350px;
  height: 35px;
  // position: absolute;
  // right: 0%;
  float: right;
  line-height: 35px;
}

nav {
  line-height: 65px;
  text-align: center;
  background: $white;
}
.parcel {
  max-width: 1250px;
  width: 100%;
  height: 65px;
  position: relative;
}
.logo {
  width: 150px;
  height: 60px;
  position: absolute;
  left: 3%;
  text-align: center;
}
.logo img {
  height: 100%;
}
.nav {
  width: 84%;
  height: 65px;
  position: absolute;
  right: 0;
  display: flex;
}
.nav li {
  overflow: hidden;
  text-align: center;
  flex-grow: 1;
  list-style: none;
  cursor: pointer;
  color: $theme;
  font-weight: 500;
  transition: 0.3s;
  position: relative;
}
.nav li:hover {
  // background: $shadow;
  background: $theme;
  color: $white;
}
.nav .active {
  color: $white;
  background: $theme;
}
.activel {
  background: $theme;
  transform: skewY(-3deg);
}
.activer {
  background: $themer;
  transform: skewY(3deg);
}
.nav-trr {
  float: right;
}
</style>
