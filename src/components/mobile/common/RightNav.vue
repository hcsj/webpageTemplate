<template>
  <div class="rightNav">
    <div class="rightNav-logo">
      <!-- <img src="@/assets/img/logo1.png" alt /> -->
    </div>
    <!-- 右侧隐藏蓝 -->
    <div class="user">
      <div class="user-msg">
        <div class="user-img">
          <i class="el-icon-user" v-if="!isUserLogin"></i>
          <img v-else :src="userInfo.userAvatar" alt />
        </div>
        <p class="user-name" v-if="!isUserLogin"></p>
        <p class="user-name" v-else>{{userInfo.loginName | phoneHideMiddle}}</p>
      </div>
    </div>
    <ul class="tab-nav">
      <li v-for="(i,index) in navList" :key="index">
        <div class="right-nav" @click="openNav(index,i.list.length,i)">
          <i class="el-icon-s-home"></i>
          <span :class="nowRoute == i.name ? 'right-nav-title':''">{{i.title}}</span>
          <i v-if="i.list.length" id="right-btn" class="el-icon-arrow-right"></i>
        </div>
        <div class="nav-n-box" ref="nav-n-box">
          <div
            class="nav-n"
            v-for="(n,index) in i.list"
            @click="openNav_n(i,n)"
            :key="index"
          >{{n.title}}</div>
        </div>
      </li>
      <!-- right-nav-n 重新定义一个class 防止打开折叠栏出现问题 -->
      <li v-for="(i,index) in noLogin" :key="index + 'n'" v-show="!isUserLogin">
        <div class="right-nav-n" @click="openNav(index,i.list.length,i)">
          <i class="el-icon-s-home"></i>
          <span>{{i.title}}</span>
        </div>
      </li>
      <li v-show="isUserLogin">
        <div class="right-nav-n" @click="logout()">
          <i class="el-icon-s-home"></i>
          <span>退出登录</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    return {
      nowRoute: "home",
      navList: [
        {
          title: "首页",
          name: "home",
          list: []
        },
        {
          title: "业务介绍",
          name: "BusinessIntroduction",
          list: [
            {
              title: "交易规则",
              name: "BusinessIntroduction"
            },
            {
              title: "政策法规",
              name: "BusinessIntroduction"
            }
          ]
        },
        {
          title: "新闻资讯",
          name: "News",
          list: [
            {
              title: "公告通知",
              name: "BusinessIntroduction"
            },
            {
              title: "公司新闻",
              name: "BusinessIntroduction"
            },
            {
              title: "行业资讯",
              name: "BusinessIntroduction"
            }
          ]
        },
        {
          title: "关于我们",
          name: "AboutUs",
          list: [
            {
              title: "中心介绍",
              name: "BusinessIntroduction"
            },
            {
              title: "法律申明",
              name: "BusinessIntroduction"
            },
            {
              title: "常见问题",
              name: "BusinessIntroduction"
            }
          ]
        }
      ],
      noLogin: [
        {
          title: "登录",
          name: "login",
          list: []
        },
        {
          title: "注册",
          name: "register",
          list: []
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 打开父级菜单栏
    openNav(index, num, val) {
      let _this = this;
      let nav = document.querySelectorAll(".right-nav"); //获取父级菜单栏，以便添加选中样式
      let items = document.querySelectorAll(".nav-n-box"); //获取容纳子级菜单栏的容器，以便动态设置高度，实现下拉效果
      //-----------------可注释部分开始------注释后则不是手风琴效果------------------
      // 遍历菜单栏，移除所有选中后的样式   添加此段可实现手风琴效果，注释则实现多展示效果
      for (let i = 0; i < nav.length; i++) {
        // nav[index].classList.contains("nav-n-box-active") 判断标签内是否含有该class属性，以布尔值类型返回
        if (
          items[i].style.height == "" ||
          items[i].style.height == "0rem" ||
          nav[index].classList.contains("nav-n-box-active")
        ) {
          let height = items[index].style.height;
          items[index].style.height = height;
        } else {
          items[i].style.height = "0rem";
        }
        nav[i].classList.remove("nav-n-box-active");
      }
      //-----------------可注释部分结束------------------------

      //根据子菜单栏的高度判断，是否展开菜单栏，若有进行遍历操作，那么每次点击某个菜单栏的时候 height 都为 0
      if (
        items[index].style.height == "" ||
        items[index].style.height == "0rem"
      ) {
        //num 为子菜单栏的个数，根据子菜单栏确定容器的高度
        items[index].style.height = num * 2 + "rem";
        //添加右箭头旋转样式
        nav[index].classList.add("nav-n-box-active");
      } else {
        items[index].style.height = "0rem";
        //移除右箭头旋转样式
        nav[index].classList.remove("nav-n-box-active");
      }
      //------------------------------------------

      if (num == 0 && _this.$route.name != val.name) {
        _this.$router.push({
          name: val.name
        });
        window.scrollTo(0, 0);
        return;
      }
    },
    //打开子级菜单栏
    openNav_n(val, va) {
      let _this = this;
      _this.$parent.rightNavShow = false;
      _this.$router.push({
        path: `/${val.name}`,
        query: {
          title: va.title
        }
      });
      window.scrollTo(0, 0);
    },
    //退出登录
    logout() {
      let _this = this;
      _this.$parent.rightNavShow = false;
      this.$axios
        .get("core-api/base/logout")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.$store.commit("USER_SIGNOUT");
            // if (_this.$route.name == "home") {
            //   window.location.reload(); //解决token与极验信息不匹配，页面强制刷新
            // } else {
              _this.$router.push({
                name: "home"
              });
            // }
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
.rightNav {
  position: fixed;
  width: 65%;
  height: 100%;
  top: 0;
  right: 0;
  background: white;
  z-index: 100;
  box-shadow: -2px 0 5px rgb(54, 54, 54);
  .rightNav-logo {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    img {
      margin: 0 auto;
      opacity: 0.8;
      display: block;
      width: 70px;
      margin-bottom: 2rem;
    }
  }
  .user {
    height: 12rem;
    background: $base;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    .user-msg {
      text-align: center;
      .user-img {
        margin: 0 auto;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        i {
          font-size: 2rem;
          color: #808080;
        }
        img {
          width: 100%;
        }
      }
      .user-name {
        margin: 1rem 0;
        font-weight: bold;
        color: white;
      }
    }
  }
  .tab-nav {
    padding: 1rem;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .right-nav,
      .right-nav-n {
        padding: 1rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          transition: 0.3s;
          color: $base;
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: left;
          color: #808080;
          font-size: 0.88rem;
          margin-left: 1rem;
        }
      }
      .nav-n-box {
        transition: 0.3s;
        width: 100%;
        height: 0;
        overflow: hidden;
        .nav-n {
          width: 100%;
          font-size: 0.88rem;
          color: #808080;
          height: 2rem;
          text-align: left;
          padding-left: 2rem;
          line-height: 2rem;
          &:active {
            background: $base;
            color: white;
            opacity: 0.5;
          }
        }
      }
    }
  }
}
.nav-n-box-active {
  #right-btn {
    transform: rotate(90deg) !important;
  }
}
.right-nav-title {
  color: $base !important;
}
</style>