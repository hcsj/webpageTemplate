<!-- 会员服务组件 -->
<template>
  <div style="background:#f6f7f8">
    <div id="overall">
      <div class="TabNav-text">
        <div class="TabNav-title">交易服务</div>
        <div class="TabNav-dot"></div>
        <p class="TabNav-p">Transaction Service</p>
      </div>
      <div id="member">
        <div class="member">
          <!-- <el-carousel :interval="4000" type="card" height="230px">
            <el-carousel-item>
              <a
                target="_blank"
                href="https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC02%E5%8F%B7-%E4%BC%9A%E5%91%98%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
              >
                <div class="member-tl">
                  <img src="@/assets/images/1.jpeg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-ruhuizhiyin"></i>
                    <h2>入会指引</h2>
                  </div>
                </div>
              </a>
            </el-carousel-item>
            <el-carousel-item>
              <a @click="chuan()">
                <div class="member-tl">
                  <img src="@/assets/images/2.jpeg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-guanlibanfa"></i>
                    <h2>管理办法</h2>
                  </div>
                </div>
              </a>
            </el-carousel-item>
            <el-carousel-item>
              <a @click="skip">
                <div class="member-tl">
                  <img src="@/assets/images/3.jpg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-xinxichaxun"></i>
                    <h2>交易信息查询</h2>
                  </div>
                </div>
              </a>
            </el-carousel-item>
            <el-carousel-item>
              <a @click="skip">
                <div class="member-tl">
                  <img src="@/assets/images/4.jpg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-jigoufuwuchaxun"></i>
                    <h2>机构服务查询</h2>
                  </div>
                </div>
              </a>
            </el-carousel-item>
          </el-carousel> -->
              <a
                target="_blank"
                href="https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC02%E5%8F%B7-%E4%BC%9A%E5%91%98%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
                style="float:left"
              >
                <div class="member-tl">
                  <img src="@/assets/images/1.jpeg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-ruhuizhiyin"></i>
                    <h2>入会指引</h2>
                  </div>
                </div>
              </a>
              <a @click="chuan()" style="float:right">
                <div class="member-tl">
                  <img src="@/assets/images/2.jpeg" alt>
                  <div class="member-tls">
                    <i class="icon iconfont icon-guanlibanfa"></i>
                    <h2>管理办法</h2>
                  </div>
                </div>
              </a>
        </div>

        <!-- 会员咨询部分 -->
        <div class="consult">
          <h4>会员资讯</h4>
          <div id="consult-content">
            <div
              class="consult-content"
              v-for="(con,index) in consult"
              :key="index"
              @click="consultSkip(con.id)"
            >
              <div class="consult-img">
                <img :src="con.imgUrl" alt="无图片">
                <!-- <img src="https://oss.neafex.com/gateway/2017/03/31/09-55-250747-649911561.jpg" alt=""> -->
              </div>
              <p>{{con.noticeTitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      consult: []
      // memberList:[
      //   {
      //     url:'',
      //     img:require(''),

      //   }
      // ]
    };
  },
  methods: {
    //会员咨询跳转方法
    consultSkip(id) {
      this.$router.push({
        name: "company",
        params: {
          consultId: id,
          message: "公司新闻"
        }
      });
      //  console.log(id)
    },
    chuan(r, message) {
      this.$router.push({
        // name: "management",
        name: "BusinessIntroduction",
        params: {
          // r: "/BusinessIntroduction",
          // message: "管理办法"
        }
      });
    },
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
    getServices() {
      request({
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
            version: "0.0.1",
           "x-auth-token": ''
        },
        url: "website/website/getNewsPage",
        method: "post",
        data: {
          templateId: "100000000000000000001",
          isTop: "1"
        }
      })
        .then(res => {
          // console.log(res.data.body.content)
          // let data = res.data.body.content
          this.consult = res.data.body.content;
          this.consult = this.consult.splice(0, 4);
          for (let i = 0; i < this.consult.length; i++) {
            this.consult[i].imgUrl = this.consult[i].imgUrl.slice(6);
          }
          // console.log(this.consult)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {},
  mounted() {
    this.getServices();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font_b29osxrako9/iconfont.css";
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
//引入TabNav公共标题
@import "../../../assets/css/pc/tabnav_title.scss";
#overall {
  width: 80%;
  margin-top: -200px;
  background: $base;
  padding-bottom: 30px;
}
#member {
  width: $TabWidth;
  height: 600px;
  position: relative;
}
.member {
  height: 250px;
  a {
    width: 49%;
    // width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }
}

.member h2 {
  font-size: 25px;
  font-weight: 500;
}
.member i {
  font-size: 6em;
}
.member-tl {
  width: 100%;
  height: 250px;
  // background: blue;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  &:hover img {
    transform: scale(1.2);
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0.3;
    transition: 0.5s;
  }
}
.member-tl::before,
.member-tr::before,
.member-trr::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
  transition: 0.5s;
}
.member-tls,
.member-trs,
.member-trrs {
  width: 150px;
  height: 130px;
  // background: red;
  color: $white;
  text-align: center;
  transition: 0.3s;
  transform: scale(1);
}
.member-tl {
  left: 0;
  background: $themer;
}
.member-tl:hover .member-tls,
.member-tr:hover .member-trs,
.member-trr:hover .member-trrs {
  transform: scale(1.2);
}
.member-tl:hover::before,
.member-tr:hover::before,
.member-trr:hover::before {
  opacity: 0;
}
.member-tr {
  right: 34%;
  background: #5191ce;
}
.member-trr {
  right: 0;
  background: #5191ce;
}

//会员咨询部分css样式-------------------------------
.consult {
  width: 100%;
  height: 300px;
  // background: yellow;
  margin-top: 20px;
  position: relative;
  h4 {
    display: block;
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
    color: $text;
    font-weight: 600;
    border-left: 5px solid $second;
  }
  p {
    //  display: inline-block;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    color: $text;
    transition: 0.3s;
    position: relative;
    &:hover {
      text-decoration: underline;
      color: $theme;
    }
  }
  p::before {
    content: "";
    width: 0px;
    height: 0px;
    border-left: 5px solid $second;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
    top: 5px;
    left: 0px;
    opacity: 0;
    transition: 0.3s;
  }
}

#consult-content {
  width: 100%;
  height: 250px;
  // background: green;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
.consult-content {
  width: 200px;
  height: 100%;
  // background: rgb(255, 72, 0);
  &:hover img {
    transform: scale(1.5);
  }
  &:hover p::before {
    left: -5%;
    opacity: 1;
  }
}
.consult-content:first-child {
  margin-left: 0;
}
.consult-content:last-child {
  margin-right: 0;
}
.consult-img {
  width: 200px;
  height: 200px;
  margin-bottom: 13px;
  overflow: hidden;
  img {
    height: 100%;
    position: relative;
    left: -50px;
    transform: scale(1);
    transition: 0.5s;
  }
}
</style>
