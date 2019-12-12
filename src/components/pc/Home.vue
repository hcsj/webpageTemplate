<template>
  <div>
    <beautyAlert
      ref="beautyAlert"
      :message="beautyAlertMsg"
      :callBackFuncType="beautyAlertFuncType"
    ></beautyAlert>
    <!-- 头部导航 -->
    <head-nav></head-nav>
    <div class="dealSearch" v-if="dealSearchShow"  @click="skip()">
      <div class="search">
        <i class="icon iconfont icon-xinxichaxun"></i>
      </div>交易确认查询
    </div>
    <!-- 轮播图 -->
    <div style="padding:3rem 0;" class="banner-bck">
      <div id="banner">
        <div id="banner-login" v-if="!isUserLogin">
          <!-- <div class="logo-t">
            <i class="icon iconfont icon-icon"></i>
          </div>
          <h3>hi，您好!</h3>
          <router-link to="/login">
            <div class="logo-up">会员登录</div>
          </router-link>
          <p>
            <router-link to="/register/0" style="color:#5c5a5a">
              还不是东金中心会员?
              <span style="color:orangered">立即注册</span>
            </router-link>
          </p> -->
          <div class="searchBox">
            <section>
              <!-- <img src="@/assets/images/5.png" alt> -->
              <div class="top" style="color:#004282;margin-top:50px">
                <div class="left">
                  <i class="icon iconfont icon-xinxichaxun"></i>
                </div>
                <div class="right" style="padding-top:20px">
                  <span >投资者交易</span>
                  <br>
                  <span>确认查询</span>
                </div>
              </div>
               <div class="btn" @click="skip()" style="border:2px solid #004282">立即查询>></div>
            </section>
            <section>
              <img src="@/assets/images/4.png" alt>
              <div class="top" style="margin-top:50px;">
                <div class="left">
                  <i class="icon iconfont icon-jigoufuwuchaxun"></i>
                </div>
                <div class="right" style="padding-top:20px;padding-right:10px;">
                  <span >广东天象股份<br>资产投资入口</span>
                </div>
              </div>
               <div class="btn-w"><a :href="$siteSet.unifyUrl" target="_blank">立即进入>></a></div>
            </section>
          </div>
        </div>
        <div id="banner-login" v-else>
          <!-- <div class="logo-t" style="margin-top:20px;">
            <i class="icon iconfont icon-icon"></i>
          </div>
          <p class="userName">{{userInfo.loginName | phoneHideMiddle}}</p>
          <p class="hint">hi，您好! 欢迎来到东金中心</p> -->
          <div class="searchBox">
            <section>
              <!-- <img src="@/assets/images/5.png" alt> -->
              <div class="top" style="color:#004282;margin-top:50px">
                <div class="left">
                  <i class="icon iconfont icon-xinxichaxun"></i>
                </div>
               <div class="right" style="padding-top:20px">
                  <span >投资者交易</span>
                  <br>
                  <span>确认查询</span>
                </div>
              </div>
                <div class="btn" @click="skip()" style="border:2px solid #004282">立即查询>></div>
            </section>
            <section>
              <img src="@/assets/images/4.png" alt>
              <div class="top" style="margin-top:50px;">
                <div class="left">
                  <i class="icon iconfont icon-jigoufuwuchaxun"></i>
                </div>
                <div class="right" style="padding-top:20px;padding-right:10px;">
                   <span >广东天象股份<br>资产投资入口</span>
                </div>
              </div>
               <div class="btn-w"><a :href="$siteSet.unifyUrl" target="_blank">立即进入>></a></div>
            </section>
          </div>
        </div>
        <ul class="box">
          <!-- 装图片的盒子 -->
          <el-carousel trigger="click" :class="'box'" height="500px" arrow="always">
            <el-carousel-item v-for="(ban,index) in banner" :key="index">
              <!-- <div class="title">
                <h2>{{ban.headline}}</h2>
                <p>{{ban.alias}}</p>
              </div>-->
              <img :src="ban.picUrl" height="100%">
              <!-- <img src="@/assets/images/banner1.jpg" height="100%"> -->
            </el-carousel-item>
          </el-carousel>
        </ul>
      </div>
    </div>
    <!-- 小喇叭,公告通知部分 -->
    <div id="home-notice">
      <div class="home-notice">
        <div class="not-l">
          <i class="icon iconfont icon-gonggaolaba"></i>
          <span>&nbsp;公告通知</span>
        </div>
        <div class="not-c">
          <!-- 通告部分最多有5个 -->
          <li v-for="(not,index) in HomeNotice" :key="index">
            <p class="not-cl">{{not.noticeTitle}}</p>
            <p class="not-cr">{{not.createTime}}</p>
          </li>
        </div>
        <div class="not-r">
          <div class="not-more">
            <router-link to="/PressRelease">
              <p>查看更多</p>
            </router-link>
            <i class="fa fa-angle-right"></i>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 我们的优势部分 -->
    <div id="advantage" style="background:white">
      <div class="advantage">
        <div class="ad-title">我们的优势</div>
        <div class="ad-dot"></div>
        <p class="ad-p">Advantage</p>
        <ul class="ad-ul">
          <li>
            <div class="ad-img">
              <div class="ad-imgs"></div>
              <router-link to="/licence" target="_blank">
                <div class="ad-logo">
                  <i :class="`icon iconfont icon-paizhaozizhiai`"></i>
                </div>
              </router-link>
              <h3>牌照资质</h3>
              <p>省政府批准设立省金融办监督</p>
            </div>
          </li>
          <li>
            <div class="ad-img">
              <div class="ad-imgs"></div>
              <router-link to="/perfect" target="_blank">
                <div class="ad-logo">
                  <i :class="`icon iconfont icon-fengkongwanshan`"></i>
                </div>
              </router-link>
              <h3>风控完善</h3>
              <p>银行级风控体系多样化风控措施</p>
            </div>
          </li>
          <li>
            <div class="ad-img">
              <div class="ad-imgs"></div>
              <a href="https://xwbank.com/#/depository" target="_blank">
                <div class="ad-logo">
                  <i :class="`icon iconfont icon-zijincunguan`"></i>
                </div>
              </a>
              <h3>资金存管</h3>
              <p>银行存管账户保障资金安全</p>
            </div>
          </li>
          <li>
            <div class="ad-img">
              <div class="ad-imgs"></div>
              <router-link to="/approve" target="_blank">
                <div class="ad-logo">
                  <i :class="`icon iconfont icon-huiyuanrenzheng`"></i>
                </div>
              </router-link>
              <h3>会员认证</h3>
              <p>会员管理机制完善会员信息严格保密</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新闻公告部分 -->
    <div id="TabNav">
      <div class="TabNav">
        <div class="tab-content">
          <div class="tab-nav">
            <li
              @click="changeNav(index)"
              v-for="(act,index) in TabNav"
              :key="index"
              :class="['tab-button',{active:currenTab === act.tab}]"
              :data-to="'go' + index"
            >{{act.nav}}</li>
          </div>
          <member-services id="go0"></member-services>
          <business-introduction id="go1"></business-introduction>
          <press-release id="go2"></press-release>
          <about-us id="go3"></about-us>
          <!-- <cooperative-partner id="go4"></cooperative-partner> -->
        </div>
      </div>
    </div>
    <!-- 页脚组件 -->
    <foot-nav></foot-nav>
    <!--弹出层公告-->
    <el-dialog :visible.sync="noticeDialogVisible" width="50%">
      <div v-html="alerMessage"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="noticeDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <div class="dialog-box" v-if="noticeDialogVisible" :style="scrollTop>1010?`top:0px;opacity:${1 - 1010*0.0005};`:`bottom:${100 + scrollTop*0.8}px; opacity:${1 - scrollTop*0.0005};`">
      <div class="header-top">通知 <i class="el-icon-close" @click="noticeDialogVisible = false"> </i></div>
     <div class="dialog-content">
        <div v-html="alerMessage"></div>
     </div>
    </div>-->
  </div>
</template>

<script>
// import "@/utils/banner";
// import { banner } from "@/utils/banner";
import HeadNav from "./common/HeadNav";
import FootNav from "./common/FootNav";
import PressRelease from "./HomePage/PressRelease";
import MemberServices from "./HomePage/MemberServices";
import BusinessIntroduction from "./HomePage/BusinessIntroduction";
import AboutUs from "./HomePage/AboutUs";
import CooperativePartner from "./HomePage/CooperativePartner";
import beautyAlert from "@/components/pc/common/BeautyAlert";

import request from "@/utils/request";
export default {
  name: "home",
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
  components: {
    HeadNav,
    FootNav,
    PressRelease,
    MemberServices,
    BusinessIntroduction,
    AboutUs,
    CooperativePartner,
    beautyAlert
  },
  data() {
    return {
      scrollTop: 0,
      dealSearchShow: false,
      beautyAlertMsg: "",
      noticeDialogVisible: false,
      alerMessage: "",
      beautyAlertFuncType: null,
      // 主页通知部分
      HomeNotice: [],
      //轮播图部分
      banner: [],
      // 切换导航栏
      currenTab: "",
      TabNav: [
        { tab: "MemberServices", nav: "交易服务" },
        { tab: "BusinessIntroduction", nav: "业务介绍" },
        { tab: "PressRelease", nav: "新闻资讯" },
        { tab: "AboutUs", nav: "关于我们" }
        // { tab: "CooperativePartner", nav: "合作伙伴" }
      ]
    };
  },
  methods: {
    //交易订单查询判断方法
    skip() {
      //  console.log(window.sessionStorage.XAuthToken) //获取token值

      // console.log(this.$store.state.user.userInfo.loginName) //获取用户是否登陆
      if (this.$store.state.user.userInfo.loginName) {
        this.$router.push({
          name: "order"
        });
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    //点击侧边栏跳转方法
    changeNav(index) {
      this.currenTab = this.TabNav[index].tab;
    },
    //根据滚轮变化改变侧边栏效果方法
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (scrollTop > 580) {
        this.dealSearchShow = true;
      } else {
        this.dealSearchShow = false;
      }
      if (scrollTop > 250 && scrollTop <= 1700) {
        $(".tab-button:nth-child(1)").addClass("actived");
      } else {
        $(".tab-button:nth-child(1)").removeClass("actived");
      }
      if (scrollTop > 1700 && scrollTop <= 2400) {
        $(".tab-button:nth-child(2)").addClass("actived");
      } else {
        $(".tab-button:nth-child(2)").removeClass("actived");
      }
      if (scrollTop > 2400 && scrollTop <= 3100) {
        $(".tab-button:nth-child(3)").addClass("actived");
      } else {
        $(".tab-button:nth-child(3)").removeClass("actived");
      }
      if (scrollTop > 3100 && scrollTop <= 3500) {
        $(".tab-button:nth-child(4)").addClass("actived");
      } else {
        $(".tab-button:nth-child(4)").removeClass("actived");
      }
      if (scrollTop > 3500) {
        $(".tab-button:nth-child(5)").addClass("actived");
      } else {
        $(".tab-button:nth-child(5)").removeClass("actived");
      }
    },
    // 获取公告方法
    gainNotice() {
      request({
        url: "website/website/getNoticePage",
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "channel-code": "AXXXXXXXXX",
          "client-type": "PCH5",
          version: "0.0.1",
          "x-auth-token": window.sessionStorage.XAuthToken
        },
        data: {}
      })
        .then(res => {
          this.HomeNotice = res.data.body.content.splice(0, 6); //截取公告的前6条
          //  console.log(this.HomeNotice);
          for (let i = 0; i < 4 || i < 6; i++) {
            this.HomeNotice[i].createTime = this.HomeNotice[
              i
            ].createTime.substring(0, 10);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取弹出层公告
    getAlertNotice() {
      request({
        url: "message-api/message/alertNotice/queryAllAlertNotice",
        method: "post",
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
           version: "0.0.1",
          "x-auth-token": ''
        }
      })
        .then(res => {
          if (res.data.body.length == 0) {
            this.noticeDialogVisible = false;
          } else {
            if (res.data.body[0].noticeStatus == "Y") {
              this.noticeDialogVisible = true;
              this.alerMessage = res.data.body[0].noticeText;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取轮播图方法
    getBanner() {
      request({
        url: "message-api/message/channelPicInfo/queryAllChannelPicInfo",
        method: "post",
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
            version: "0.0.1",
           "x-auth-token": ''
        }
      })
        .then(res => {
          // console.log(res)
          this.banner = res.data.body;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // console.log(this.$store.state.user.userInfo)
    //定义一个滚轮监听
    window.addEventListener("scroll", this.handleScroll);
    //点击侧边栏跳转到当前模块的方法
    $(".tab-nav").on("click", "li", function(e) {
      var target = e.target;
      var id = $(target).data("to");
      $("html").animate({ scrollTop: $("#" + id).offset().top }, 400);
    });
    this.gainNotice();
  },
  created() {
    this.getAlertNotice();
    this.getBanner();
    //  console.log(window.sessionStorage.XAuthToken)
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/pc/blendent.scss";
@import "../../assets/css/pc/banner.scss";
@import "../../assets/icon/pc/font_b29osxrako9/iconfont.css";
@import "../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
// 我们的优势css部分-----------------------------------------
#advantage {
  width: 100%;
}
.advantage {
  width: 70%;
  max-width: 1025px;
  padding-top: 20px;
  height: 390px;
  background: $white;
  position: relative;
  z-index: 2;
}
.advantage .ad-p {
  text-align: center;
  color: $shadow;
  padding-top: 5px;
  font-size: 14px;
}
.ad-title {
  width: 100%;
  height: 60px;
  // background: red;
  line-height: 60px;
  font-weight: 500;
  text-align: center;
  color: $title;
  font-size: 27px;
}
.ad-dot {
  width: 15px;
  height: 15px;
  // border-radius: 50%;
  background: $title;
  position: relative;
}
.ad-dot::before,
.ad-dot::after {
  content: "";
  width: 150px;
  height: 2px;
  position: absolute;
  top: 7px;
  transition: 1s;
}
#advantage:hover .ad-dot::after {
  right: -60px;
}
#advantage:hover .ad-dot::before {
  left: -60px;
}
.ad-dot::before {
  // background: linear-gradient(to right,white,#d6d4d4 80%,$text);
  background: $title;
  left: -150px;
}
.ad-dot::after {
  // background: linear-gradient(to left,white,#d6d4d4 80%,$text);
  background: $title;
  right: -150px;
}
.ad-ul {
  width: 100%;
  height: 270px;
  position: absolute;
  bottom: 0;
  display: flex;
  overflow: hidden;
}
.ad-ul li {
  // cursor: pointer;
}
.ad-img {
  width: 150px;
  height: 150px;
  position: relative;
  text-align: center;
}
.ad-imgs {
  width: 100%;
  height: 100%;
  border-radius: 0%;
  transform: rotate(45deg) scale(0.1);
  background: $theme;
  opacity: 0;
  transition: 0.3s;
}
.ad-logo i {
  font-size: 7em;
}
.ad-logo {
  width: 100%;
  height: 100%;
  transform: scale(0.8);
  position: absolute;
  top: 0;
  transition: 0.5s;
  line-height: 150px;
  color: $theme;
}
.advantage h3 {
  transition: 0.5s;
  font-weight: 500;
  padding: 20px 0px 10px 0px;
  color: $text;
}
.advantage p {
  display: block;
  width: 70%;
  font-size: 13px;
  opacity: 0.5;
}

.advantage li:hover .ad-imgs {
  opacity: 1;
  border-radius: 50%;
  transform: rotate(225deg) scale(0.9);
}
.advantage li:hover .ad-logo {
  color: white;
  transform: scale(0.7);
}
.advantage li:hover h3 {
  color: $theme;
}
//小喇叭,公告通知部分------------------------------------
#home-notice {
  width: 100%;
  height: 40px;
  background: $white;
  font-size: 14px;
  padding-top: 10px;
}

.home-notice {
  max-width: 1025px;
  min-width: 800px;
  transition: 0.3s;
  width: 70%;
  height: 100%;
  // background: yellow;
  // background: $base;
  background: linear-gradient(to left, $white 20%, $base 40%, $white 100%);
  position: relative;
  overflow: hidden;
  color: $text;
  cursor: pointer;
  .not-r {
    width: 100px;
    height: 100%;
    position: absolute;
    // background: pink;
    top: 0;
    right: 0;
    .not-more {
      line-height: 40px;
      // background: red;
      position: relative;

      p {
        position: absolute;
        left: 0;
        color: $text;
      }
      i {
        position: absolute;
        top: 12px;
        transition: 0.3s;
      }
      i:nth-child(3) {
        right: 10px;
      }
      i:nth-child(2) {
        right: 15px;
      }
    }
  }

  .not-l {
    width: 100px;
    height: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    line-height: 40px;
    color: $second;
    span {
      position: relative;
      top: -5px;
    }
  }
  .not-l i {
    font-size: 28px;
  }
  .not-l::before {
    content: "";
    width: 1px;
    height: 50%;
    position: absolute;
    background: #ccc;
    right: -10px;
    top: 11px;
  }
  .not-c {
    width: 60%;
    // background: green;
    position: relative;
    top: 50px;
    animation: toTop 10s linear infinite;

    // overflow: hidden;
    .not-cl {
      position: absolute;
      left: 0;
      text-align: left;
    }
    .not-cr {
      text-align: right;
    }
    li {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 40px;
    }
  }
  @keyframes toTop {
    100% {
      top: -200px;
    }
  }
}
.home-notice:hover {
  box-shadow: 0 0 2px $shadow;
}
.home-notice:hover .not-more i:nth-child(2) {
  right: 10px;
}
.home-notice:hover .not-c {
  animation-play-state: paused;
}
.img0 {
  position: relative;
  top: -15%;
}
//切换导航栏css部分-----------------------------------------
#TabNav {
  // max-width: $MaxWidth;
  width: 100%;
  height: 3130px;
  position: relative;
  // background: red;
}
.TabNav {
  width: 100%;
  background: red;
  position: absolute;
}

// .tab-nav::before{
//   content: '';
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-top: 5px solid transparent;
//   border-right: 5px solid $base;
//   border-bottom: 5px solid $base;
//   position: absolute;
//   z-index: 2;
//   right: 0;
//   bottom: 0;
// }
.tab-nav li {
  display: block;
  width: 70px;
  height: 55px;
  background: $theme;
  opacity: 0.9;
  line-height: 55px;
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 12px;
  overflow: hidden;
  position: relative;
}
// .tab-nav li::after{
//   content: '';
//   width: 80%;
//   height: 1px;
//   // background: #dfdddd;
//   position: absolute;
//   left: 10%;
//   bottom: 0px;
//   z-index: -2;
// }
.tab-nav li:last-child::after {
  height: 0px;
}
.tab-nav li::before {
  content: "";
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: $second;
  z-index: -1;
  position: absolute;
  top: 10px;
  left: 0;
  transform: scale(0);
  opacity: 0;
  transition: 0.5s;
}
.tab-nav li:hover::before {
  opacity: 1;
  transform: scale(2);
}
.tab-content {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;

  // display: flex;
}
.tab-nav {
  width: 70px;
  z-index: 2;
  position: sticky;
  top: 150px;
  margin-left: 9%;
  overflow: hidden;
}
.tab-nav li:last-child {
  border-bottom-right-radius: 20px;
}

.tab-button.actived {
  opacity: 1;
  background: $second;
}
.dealSearch {
  cursor: pointer;
  font-size: 14px;
  line-height: 50px;
  padding-left: 15px;
  box-sizing: border-box;
  color: white;
  width: 160px;
  height: 50px;
  position: fixed;
  z-index: 99;
  bottom: 50%;
  right: 1%;
  background: #19437e;
  box-shadow: 0 0 3px $shadow;
  border-bottom-right-radius: 10px;
  transition: 0.5s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    box-shadow: 1px 1px 3px $shadow;
  }
  .search {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    background: $themes;
    text-align: center;
    border-bottom-right-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    i {
      transition: 0.3s;
      color: white;
      font-size: 35px;
    }
  }
}
.dialog-box {
  width: 400px;
  height: 200px;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  right: 0px;
  box-shadow: 0 0 3px #ccc;
  animation: move 1s 1s ease both 1;
  &:hover {
    opacity: 1 !important;
  }
  &::-webkit-scrollbar {
    background: transparent !important;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #fd8570;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // border-radius: 10px;
    background: #e9e7e7;
    //  -webkit-scrollBar-track-color:black;
  }
  @keyframes move {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .header-top {
    font-size: 20px;
    color: rgb(122, 122, 122);
    line-height: 30px;
    letter-spacing: 0.2rem;
    padding-left: 30px;
    box-sizing: border-box;
    height: 30px;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(
      125deg,
      white 0%,
      white 40%,
      $themer 40%,
      $themer 100%
    );
    animation: bckMove 1s linear infinite alternate-reverse;
    i {
      color: white;
      float: right;
      margin-top: 5px;
      cursor: pointer;
    }
  }
  @keyframes bckMove {
    0% {
      background-size: 100%;
    }
    100% {
      background-size: 120%;
    }
  }
  .dialog-content {
    padding: 10px 20px;
    background: #f1f1f1;
    color: rgb(121, 120, 120);
  }
}
.banner-bck{
  background-image: url('../../assets/images/banner-bck.png');
  background-size: 100%;
}
</style>
