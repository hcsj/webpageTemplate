<template>
  <div id="footer">
    <div class="footer">
      <div class="footer-t1">
        <div class="img">
          <section>
            <img :src="$siteSet.qr1Url" alt>
            <p>下载安卓App</p>
          </section>
          <section>
            <img :src="$siteSet.qr3Url" alt>
            <p>下载苹果App</p>
          </section>
          <section>
            <img :src="$siteSet.qr2Url" alt>
            <p>微信公众号</p>
          </section>
        </div>
        <!-- <span>
          <a @click="$router.push({name:'memberServices'})">入会指引</a>
        </span>-->
        <span style=" padding-left: 0;">
          <a @click="$router.push({name:'BusinessIntroduction'})">交易规则</a>
        </span>
        <span>
          <a @click="chuan1()">政策法则</a>
        </span>
        <span>
          <a @click="chuan2()">常见问题</a>
        </span>
        <span>
          <a @click="$router.push({name:'AboutUs'})">关于我们</a>
        </span>
      </div>
      <!-- <div class="footer-t2">
            <label for="">友情链接&nbsp;</label>
            <select name="friendship" id="">
                <option value="">北大科技园</option>
                <option value="">北大科技园</option>
                <option value="">北大科技园</option>
                <option value="">北大科技园</option>
            </select>
      </div>-->
      <div class="footer-t3">
        <p>客服电话: 0439-6660660</p>
        <p>工作日: 9:00 - 18:00</p>
      </div>
      <div class="footer-b">
        <p>吉林省白山市浑江大街213号经济开发区管委会202室 | 电话: 0439-6660660 | 传真: 0439-6666525 | 邮箱: djzx@neafex.com</p>
        <p>Copyright@ 2017 吉林东北亚创新金融资产交易中心有限公司 版权所有 备案/许可证号: 吉ICP备15007119号</p>
      </div>
      <!-- 返回顶部 -->
      <div class="back-top" @click="BackTop">
        <div class="back-topl">返回顶部</div>
        <div class="back-topr">
          <i class="fa fa-angle-double-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //返回顶部方法
    BackTop() {
      $("html").animate({ scrollTop: 0 }, 500);
    },
    //滚轮监听方法
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 110) {
        $(".back-top").fadeIn(500);
      } else {
        $(".back-top").fadeOut(500);
      }
    },
    chuan1(message) {
      this.$router.push({
        name: "BusinessPolicy",
        params: {
          message: "政策法规"
        }
      });
    },
    chuan2(message) {
      this.$router.push({
        name: "problem",
        params: {
          message: "常见问题"
        }
      });
    }
  },
  //定义一个监听属性
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
//引入TabNav公共标题
@import "../../../assets/css/pc/tabnav_title.scss";
#footer {
  width: 100%;
  //   min-width: 1200px;
  background: $themer;
  position: relative;
  z-index: 5;
}
.footer {
  width: 55%;
  height: 250px;
  //   background: red;
  color: $white;
  font-weight: 500;
  position: relative;
  font-size: 13px;
  .img {
       display: flex;
    position: absolute;
    top: 20px;
    right: 35px;
    &:hover section{
      opacity: 0.1;
    }
   section{
     transition: 0.3s;
      text-align: center;
      padding:0 15px;
      &:hover{
        opacity: 1 !important;
      }
   }
    img {
      height: 80px;
    }
  }
  .footer-t1 {
    width: 100%;
    height: 30px;
    //   background: yellow;
    padding-top: 40px;
    color: $white;
    span {
      float: left;
      padding: 0px 10px;
      //   background: blue;
      border-right: 1px solid $border;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    span:first-child {
    }
    span:last-child {
      border-right: 0px solid $white;
    }
  }
}
.footer-t2,
.footer-t3 {
  height: 50px;
  line-height: 30px;
  // background: blue;
  select {
    position: relative;
    top: 1px;
    border: 0px solid transparent;
    font-size: 13px;
    padding: 1px;
    // padding-right: 30px;
  }
}
.footer-b {
  border-top: 1px solid $border;
  margin-top: 20px;
  p {
    text-align: center;
    padding-top: 15px;
  }
}
.back-top {
  opacity: 0.5;
  display: none;
  box-shadow: 0 0 1px $shadow;
  width: 80px;
  height: 20px;
  line-height: 20px;
  position: fixed;
  right: 1%;
  bottom: 50px;
  background: $white;
  color: $theme;
  padding: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
  .back-topr {
    width: 25px;
    height: 100%;
    background: $base;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 27px;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
