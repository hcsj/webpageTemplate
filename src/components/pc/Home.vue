<template>
  <div>
    <head-nav :class="headNavShow?'head-nav-show':''" ref="head-nav"></head-nav>
    <div class="notice-inform" v-if="NoticeList.length">
      <div class="notice">
        <i class="el-icon-s-flag"></i>
        <ul :style="`animation-duration: ${NoticeList.length*2}s;`">
          <li v-for="(i,index) in NoticeList" :key="index">
            <span class="title">{{i.title}}</span>
            <span class="time">{{i.time}}</span>
          </li>
          <li>
            <span class="title">{{NoticeList[0].title}}</span>
            <span class="time">{{NoticeList[0].time}}</span>
          </li>
        </ul>
        <span class="more">查看更多</span>
      </div>
    </div>
    <div id="banner" ref="go0">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in list" :key="index">
            <div class="bck">
              <span class="text">
                <span class="text-anime" v-for="(t,indexT) in textCut(i.text)" :key="indexT">{{t}}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-button-white"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <div id="module" ref="go1">
      <div class="module">
        <h2>行业优势</h2>
        <p class="English">Advantage</p>
        <div class="content-Advantage">
          <section class="block" v-for="(i,index) in AdvantageList" :key="index">
            <section class="icon" :style="` transition-delay: ${index/10}s`">
              <section class="icon-hover">
                <i :class="i.icon"></i>
              </section>
            </section>
            <h3 :style="` transition-delay: ${index/5}s`">{{i.title}}</h3>
            <p :style="` transition-delay: ${index/5}s`">{{i.text}}</p>
          </section>
        </div>
      </div>
    </div>
    <div id="module" ref="go2" style=" background: #f6f7f8;">
      <div class="module">
        <h2>交易服务</h2>
        <p class="English">Transaction Service</p>
        <div class="content-Transaction">
          <div class="top">
            <div class="block">
              <div class="content">
                <i class="el-icon-user"></i>
                <h3>入会指引</h3>
              </div>
            </div>
            <div class="block">
              <div class="content">
                <i class="el-icon-setting"></i>
                <h3>管理办法</h3>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="b-title">
              <span class="title-l"></span>
              <span class="title-msg">会员咨询</span>
            </div>
            <div class="content">
              <div
                class="con"
                v-for="(i,index) in 4"
                :key="index"
                :style="` transition-delay: ${index/5}s`"
              >
                <div class="con-hover">
                  <div class="con-img">IMG</div>
                  <div class="con-msg">新闻公告测试模板</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="module" ref="go3">
      <div class="module">
        <h2>业务介绍</h2>
        <p class="English">Business Introduction</p>
        <div class="content-Business">
          <div class="top">
            <div class="table">交易规则</div>
            <div class="table">政策法规</div>
          </div>
          <div class="content">
            <div
              class="tab-msg"
              :style="` transition-delay: ${index/10}s`"
              v-for="(i,index) in 5"
              :key="index"
            >
              <div class="tab-msg-hover">
                <div class="date">
                  <section>
                    <h3>01</h3>
                    <p>2018/12</p>
                  </section>
                </div>
                <div class="msg">
                  <span class="m">吉林东北亚创新金融资产交易中心有限公司《东金中心挂牌方管理办法》</span>
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="module" ref="go4" style=" background: #f6f7f8;">
      <div class="module">
        <h2>新闻资讯</h2>
        <p class="English">News</p>
        <div class="content-News">
          <div
            class="news"
            v-for="(i,index) in NewsList"
            :key="index"
            :style="` transition-delay: ${index/10}s`"
            @click="openNews(i)"
          >
            <div class="news-hover">
              <div class="news-noImg" v-if="!i.imgUrl">
                <p>{{i.noticeTitle}}</p>
                <span class="time">{{dateFormatting(i.createTime)}}</span>
              </div>
              <div v-else class="news-Img">
                <div class="text">
                  <p>{{i.noticeTitle}}</p>
                  <span class="time">{{dateFormatting(i.createTime)}}</span>
                </div>
                <div class="img">IMG</div>
              </div>
            </div>
          </div>
          <div class="more">
            <section @click="skip('News')">
              <span>查看更多</span>
              <i class="el-icon-arrow-right"></i>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div id="module" ref="go5">
      <div class="module">
        <h2>关于我们</h2>
        <p class="English">About Us</p>
        <div class="content-aboutUs">
          <div
            class="aboutUs"
            v-for="(i,index) in aboutUsList"
            :key="index"
            :style="` transition-delay: ${index/10}s`"
          >
            <div class="aboutUs-hover">
              <div class="msg">
                <div class="msg-t">{{i.content}}</div>
                <div class="more">
                  <section>
                    <span>查看更多</span>
                    <i class="el-icon-arrow-right"></i>
                  </section>
                </div>
              </div>
              <div class="img">
                <div class="bck1" :style="` animation-delay: ${-index}s`"></div>
                <div class="bck2" :style="` animation-delay: ${-index*2}s`"></div>
                <div class="img-url"></div>
                <h3>{{i.title}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
    <right-nav ref="right-nav" :class="rightNavShow?'right-nav-show':''"></right-nav>
    <view-article ref="viewArticle" :ArticleContent="Article" :ArticleTitle="Article_title"></view-article>
  </div>
</template>

<script>
import Swiper from "swiper";
import viewArticle from "./common/ViewArticle.vue";
import headNav from "./common/HeadNav.vue";
import footNav from "./common/FootNav.vue";
import rightNav from "./common/RightNav.vue";
export default {
  name: "Home",
  components: {
    "head-nav": headNav,
    "foot-nav": footNav,
    "right-nav": rightNav,
    "view-article": viewArticle
  },
  data() {
    return {
      realIndex: 0,
      headNavShow: false,
      rightNavShow: false,
      leftNavShow: false,
      items: [],
      Article: "",
      Article_title: "",
      list: [
        {
          text: "BANNER1"
        },
        {
          text: "BANNER2"
        },
        {
          text: "BANNER3"
        }
      ],
      windowH: window.innerHeight,
      NoticeList: [
        {
          title: "你好! 欢迎进入东北亚金融资产交易中心",
          time: "2019-11-15"
        },
        {
          title: "欢迎进入东北亚金融资产交易中心",
          time: "2019-11-02"
        },
        {
          title: "你好! 欢迎进入东北亚金融资产交易中心",
          time: "2019-11-05"
        },
        {
          title: "欢迎进入东北亚金融资产交易中心",
          time: "2019-11-04"
        },
        {
          title: "东北亚金融资产交易中心",
          time: "2019-11-01"
        }
      ],
      AdvantageList: [
        {
          icon: "el-icon-s-order",
          title: "牌照资质",
          text: "省政府批准设立省金融办监督"
        },
        {
          icon: "el-icon-s-platform",
          title: "牌照资质",
          text: "省政府批准设立省金融办监督"
        },
        {
          icon: "el-icon-s-marketing",
          title: "牌照资质",
          text: "省政府批准设立省金融办监督"
        },
        {
          icon: "el-icon-upload",
          title: "牌照资质",
          text: "省政府批准设立省金融办监督"
        }
      ],
      NewsList: [
        {
          date: "2019-10-20",
          title:
            "新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯",
          img: false
        },
        {
          date: "2019-10-20",
          title: "新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯",
          img: true
        },
        {
          date: "2019-10-20",
          title: "新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯",
          img: false
        },
        {
          date: "2019-10-20",
          title:
            "新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯",
          img: true
        },
        {
          date: "2019-10-20",
          title: "新闻资讯新闻资讯新闻资讯新闻资讯新闻资讯",
          img: false
        }
      ],
      aboutUsList: [
        {
          title: "中心介绍",
          content:
            '东北亚创新金融资产交易中心(以下简称 "东金中心" ) 是在吉林省人民政府的指导和大力支持下，于2014年11月7日省政府批准设立的综合性金融资产交易平台，是由长春市国资委下属长发金融控股有限公司、申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出'
        },
        {
          title: "法律申明",
          content:
            "本声明包含网络浏览及使用的有关条款。在您浏览及使用本网站及相关网页（以下简称“本网站”）前，请您务必仔细阅读并透彻理解本声明，您可以选择不浏览、不使用本网站及相关网页，如果您浏览及使用本网站及相关网页，您的行为均表示认可并接受本声明全部内容。一、本网站旨在向客户和其他公众介绍吉林东北亚创新金融资产交易中心有限公司（以下“简称东金中心”）提供的产品与服务，以及"
        },
        {
          title: "常见问题",
          content:
            "1、东北亚创新金融资产交易中心是一家怎样的公司？东北亚创新金融资产交易中心（以下简称东金中心），于2014年11月7日批准设立。在省金融办大力推动下设立，注册资本2亿元整。2、电子合同有效吗？根据我国合同法第十条“当事人订立合同，有书面形式,口头形式和其他形式。”第十一条“书面形式是指合同书，信件和数据电文（包括电报，电传，传真，电子数据交换和电子邮件）等可"
        }
      ]
    };
  },
  created() {
    this.getNewsPage();
  },
  mounted() {
    let _this = this;
    _this.items = document.querySelectorAll("#module");
    window.addEventListener("scroll", this.handleScroll);
    this.getBanner();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    skip(name) {
      this.$router.push({
        name: name
      });
    },
    //时间格式转换
    dateFormatting(val) {
      return this.$moment(val).format("YYYY-MM-DD");
    },
    //获取轮播图方法
    getBanner() {
      let _this = this;
      var banner = document.getElementById("banner");
      var bck = document.querySelectorAll(".bck");
      banner.style.height = _this.windowH + "px";
      var mySwiper = new Swiper(".swiper-container", {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        effect: "fade", //切换效果
        followFinger: false,
        speed: 800, //切换间隔时间
        autoplay: true, //开启自动播放
        //显示底部小圆点
        pagination: {
          el: ".swiper-pagination"
        },
        //显示左右切换
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 5000 //4秒切换一次
        },
        on: {
          //初始化
          init: function(swiper) {
            bck[0].classList.add("bck-end");
            let text = bck[0].querySelectorAll(".text-anime");
            for (let i = 0; i < text.length; i++) {
              _this.$anime({
                targets: text[i],
                delay: i * 100,
                translateY: [-100, 0]
              });
            }
          },
          //滑动前移除样式
          transitionStart: function() {
            bck[this.realIndex].classList.remove("bck-end");
          },
          //滑动结束后添加样式，执行动画
          transitionEnd: function() {
            bck[this.realIndex].classList.add("bck-end");
            let text = bck[this.realIndex].querySelectorAll(".text-anime");
            for (let i = 0; i < text.length; i++) {
              _this.$anime({
                targets: text[i],
                delay: i * 100,
                translateY: [-100, 0]
              });
            }
          }
        }
      });
    },
    //分割字符串加载动画
    textCut(str) {
      let strArr = str.split("");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^[\s]*$/)) {
          strArr[i] = null;
        }
      }
      return strArr;
    },
    //点击导航栏滚动到指定位置
    goAssignBlock(el, index) {
      let _this = this;
      _this.$refs["right-nav"].btnActive = false;
      let speed = 80;
      let windowH = window.innerHeight; //浏览器窗口高度
      let h = this.$refs[el].offsetHeight; //模块内容高度
      let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //滚动条距离顶部高度
      let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId;
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向下滚动
          currentTop += speed;
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向上滚动
          currentTop -= speed;
        }
      }
      window.requestAnimationFrame(step);
    },
    //判断 模块 是否达到可视范围
    isElementInViewport(el) {
      // getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
      // 注意：如果模块的整体宽或高 大于 浏览器可视窗口 的时候，此方法不可使用
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - window.innerHeight / 4 <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    },
    //监听滚轮方法
    handleScroll(val) {
      let _this = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > _this.windowH - 80) {
        _this.headNavShow = true;
        _this.leftNavShow = true;
      } else {
        _this.headNavShow = false;
        _this.leftNavShow = false;
      }
      if (scrollTop > _this.windowH / 3) {
        _this.rightNavShow = true;
      } else {
        _this.rightNavShow = false;
        _this.$refs["right-nav"].btnActive = false;
      }
      //每次滚轮滚动都会遍历 模块数组，从而添加样式
      for (let i = 0; i < _this.items.length; i++) {
        //如果 模块 达到可视范围，那么添加样式
        if (_this.isElementInViewport(_this.items[i])) {
          // //滚动时导航栏下标随之改变
          if (scrollTop < _this.windowH / 1.7) {
            _this.$refs["right-nav"].navActiveIndex =
              _this.$refs["right-nav"].tabList[0].title;
          } else {
            _this.$refs["right-nav"].navActiveIndex =
              _this.$refs["right-nav"].tabList[i].title;
          }
          _this.items[i].classList.add("in-view");
        } else {
          //每次滚动时都会出现过度效果
          //   _this.items[i].classList.remove("in-view");
        }
      }
    },
    //获取公司和行业新闻
    getNewsPage() {
      let _this = this;
      let params = {
        templateId: "",
        pageNumber: 0,
        pageSize: 5
      };
      this.$axios
        .post("website/website/getNewsList", params)
        .then(res => {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.NewsList = resData.body.content;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //首页打开新闻资讯
    openNews(row) {
      this.$refs.viewArticle.ViewArticleShow = true;
      this.Article = row.noticeText;
      this.Article_title = row.noticeTitle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px #5c5c5c;
}
.right-nav-show {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.notice-inform {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  // filter: drop-shadow(0px 2px 5px rgb(58, 58, 58));
  .notice {
    text-align: center;
    width: 50%;
    padding-right: 20px;
    padding-left: 10px;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.582);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
    color: #949494;
    transition: 0.5s;
    clip-path: polygon(
      0 50%,
      20px 0,
      calc(100% - 10px) 0,
      calc(100% - 25px) 15%,
      calc(100% - 0px) 30%,
      calc(100% - 20px) 45%,
      calc(100% - 5px) 60%,
      calc(100% - 30px) 75%,
      calc(100% - 0px) 100%,
      95% 100%,
      20px 100%
    );
    &:hover {
      background: rgba(255, 255, 255, 0.87);
    }
    i {
      font-size: 1rem;
      min-width: 50px;
      color: $base;
    }
    .more {
      cursor: pointer;
      font-size: 13px;
      min-width: 100px;
      &:hover {
        color: $base;
        text-decoration: underline;
      }
    }
    ul {
      align-self: flex-start;
      width: 100%;
      margin: 0 auto;
      list-style: none;
      animation: noticeMove linear infinite;
      animation-delay: 2s;
      &:hover {
        animation-play-state: paused;
      }
      li {
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        // &:hover {
        //   color: $base;
        //   text-decoration: underline;
        // }
        .title {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
        .time {
          min-width: 100px;
          font-size: 14px;
        }
      }
    }
    @keyframes noticeMove {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% + 40px));
      }
    }
  }
}
#banner {
  width: 100%;
  position: relative;
  .swiper-container {
    position: absolute;
    width: 100%;
    height: 100%;
    --swiper-theme-color: white;
    .swiper-slide {
      .bck {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: white;
        letter-spacing: 0.3rem;
        background: $base;
        .text-anime {
          transition: opacity 0s;
          display: inline-block;
          opacity: 0;
        }
      }
      .bck-end {
        .text-anime {
          transition: opacity 1s;
          opacity: 1;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    transform: scale(0.8);
    transition: 0.5s;
    // margin:0 1rem;
  }
  .swiper-container:hover .swiper-button-prev {
    opacity: 1;
    left: 40px;
  }
  .swiper-container:hover .swiper-button-next {
    opacity: 1;
    right: 40px;
  }
}
#module {
  text-align: center;
  width: 100%;
  padding: 80px 0;
  .module {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
  h2 {
    font-weight: 500;
    opacity: 0;
    transition: 0.5s;
  }
  .English {
    font-weight: bold;
    color: #a8a8a8;
    font-size: 14px;
    margin-top: 5px;
    letter-spacing: 0.1rem;
    opacity: 0;
    transition: 1s;
  }
  // 行业优势
  .content-Advantage {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .block {
      width: 200px;
      // background: red;
      .icon-hover {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $base;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          opacity: 0.8;
        }
      }
      .icon {
        transition: 0.5s;
        transform: scale(0.3);
        opacity: 0;
        i {
          font-size: 5rem;
          color: white;
        }
      }
      h3 {
        transition: 0.5s;
        transform: translateY(50px);
        opacity: 0;
        margin-top: 20px;
      }
      p {
        margin-top: 10px;
        transition: 1s;
        transform: translateY(50px);
        opacity: 0;
        font-size: 15px;
        color: #a8a8a8;
      }
    }
  }
  //交易服务
  .content-Transaction {
    margin-top: 50px;
    .top {
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: space-between;
      .block {
        width: 49%;
        height: 100%;
        background: $base;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0.5);
        opacity: 0;
        transition: 0.5s;
        .content {
          i {
            font-size: 4.5rem;
            color: white;
          }
          h3 {
            color: white;
            margin-top: 10px;
            font-size: 20px;
          }
        }
      }
    }
    .bottom {
      margin-top: 20px;
      .b-title {
        display: flex;
        span {
          display: inline-block;
        }
        .title-l {
          transition: 0.5s;
          width: 20px;
          height: 20px;
          background: $base;
          transform: translateX(-20px);
          opacity: 0;
          clip-path: polygon(0% 0%, 50% 50%, 0% 100%);
        }
        .title-msg {
          transition: 0.5s;
          font-weight: bold;
          font-size: 17px;
          transform: translateX(20px);
          opacity: 0;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        .con-hover {
          &:hover .con-img {
            background: $base;
          }
          &:hover .con-msg {
            color: $base;
          }
        }
        .con {
          margin-top: 20px;
          transition: 0.5s;
          transform: translateX(50px);
          opacity: 0;
          .con-img {
            transition: 0.5s;
            width: 200px;
            height: 200px;
            background: $base;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 2rem;
          }
          .con-msg {
            transition: 0.5s;
            margin-top: 10px;
          }
        }
      }
    }
  }
  //业务介绍
  .content-Business {
    margin-top: 50px;
    .top {
      height: 50px;
      display: flex;
      .table {
        transition: 0.5s;
        cursor: pointer;
        font-weight: bold;
        display: flex;
        color: #808080;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        flex-grow: 1;
        background: #ececec;
        transform: translateX(-50px);
        opacity: 0;
        clip-path: polygon(
          0 0,
          calc(100% - 25px) 0,
          100% 50%,
          calc(100% - 25px) 100%,
          0 100%,
          25px 50%
        );
        &:hover {
          background: $base;
          color: white;
        }
      }
    }
    .content {
      padding: 20px;
      .tab-msg-hover {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:hover {
          background: #f3f3f3;
        }
        &:hover .date {
          transform: translateX(5px);
          clip-path: polygon(
            0 100%,
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%
          );
        }
        &:hover .msg {
          transform: translateX(-5px);
        }
        &:hover i {
          transform: translateX(10px);
          color: $base;
        }
      }
      .tab-msg {
        transition: 0.5s;
        margin-bottom: 10px;
        transform: translateY(50px);
        opacity: 0;
        .date {
          transition: 0.5s;
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: $base;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(10px 0, 100% 0, 100% 100%, 0% 100%, 0 10px);
          section {
            transform: scale(0.85);
            p {
              font-size: 12px;
            }
          }
        }
        .msg {
          padding: 0 10px;
          transition: 0.5s;
          margin-left: 20px;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed #ccc;
          background-size: 100%;
          .m {
            font-weight: 200;
            transition: 0.5s;
            color: #808080;
          }
          i {
            transition: 0.5s;
          }
        }
      }
    }
  }
  //新闻资讯
  .content-News {
    margin: 0 auto;
    margin-top: 50px;
    max-width: 800px;
    .news-hover {
      position: relative;
      padding: 15px;
      transition: 0.5s;
      border: 2px dashed transparent;
      &:hover {
        background: white;
        box-shadow: 2px 2px 5px #ccc;
        border: 2px dashed $base;
      }
      &:hover::after {
        opacity: 1;
        transform: translateX(20px);
      }
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        clip-path: polygon(0% 0%, 50% 50%, 0% 100%);
        position: absolute;
        top: calc(50% - 10px);
        left: -50px;
        background: $base;
        transition: 0.5s;
        opacity: 0;
      }
    }
    .news {
      margin-bottom: 5px;
      transition: 0.5s;
      cursor: pointer;
      .news-noImg {
        transition: 0.5s;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        p {
          display: inline-block;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: left;
          word-break: break-all;
          color: #808080;
          font-size: 15px;
        }
        .time {
          min-width: 200px;
          font-size: 15px;
          color: #808080;
          text-align: right;
          font-weight: bold;
        }
      }
      .news-Img {
        transition: 0.5s;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 2;
        .img {
          margin-left: 20px;
          min-width: 200px;
          height: 100px;
          background: $base;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: white;
          font-size: 20px;
        }
        .text {
          min-width: 200px;
          position: relative;
          p {
            text-align: left;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 3;
            word-wrap: break-word;
            overflow: hidden;
            word-break: break-all;
            color: #808080;
            font-size: 15px;
          }
          .time {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 15px;
            color: #808080;
            font-weight: bold;
          }
        }
      }
    }
    .news:nth-child(2n) {
      opacity: 0;
      transform: translateX(50px);
    }
    .news:nth-child(2n + 1) {
      opacity: 0;
      transform: translateX(-50px);
    }
    .more {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      opacity: 0;
      transition: 0.5s;
      section {
        font-size: 14px;
        cursor: pointer;
        transition: 0.5s;
        color: #b6b6b6;
        i {
          transition: 0.5s;
        }
        &:hover {
          color: $base;
        }
        &:hover i {
          transform: translateX(10px);
        }
      }
    }
  }
  // 关于我们
  .content-aboutUs {
    margin: 0 auto;
    // max-width: 800px;
    margin-top: 50px;
    //  background: red;
    .aboutUs {
      transition: 0.5s;
      width: 100%;
      height: 200px;
      display: flex;
      margin-bottom: 10px;
      .aboutUs-hover {
        width: 100%;
        height: 200px;
        display: flex;
        border: 2px dashed transparent;
        transition: 0.5s;
        position: relative;
        &:hover {
          background: #f6f7f8;
          box-shadow: 2px 2px 5px #ccc;
          border: 2px dashed $base;
        }
        &:hover .img-url {
          opacity: 1;
        }
        &::after {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          top: calc(50% - 10px);
          // left: -50px;
          background: $base;
          transition: 0.5s;
          opacity: 0;
        }
      }
      .msg {
        padding: 20px;
        width: 50%;
        height: 100%;
        text-align: left;
        line-height: 1.5rem;
        color: #808080;
        font-size: 15px;
        cursor: default;
        position: relative;
        .msg-t {
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 5;
          word-wrap: break-word;
          overflow: hidden;
          word-break: break-all;
        }
        .more {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          transition: 0.5s;
          position: absolute;
          bottom: 20px;
          right: 20px;
          section {
            font-size: 14px;
            cursor: pointer;
            transition: 0.5s;
            color: #b6b6b6;
            i {
              transition: 0.5s;
            }
            &:hover {
              color: $base;
            }
            &:hover i {
              transform: translateX(10px);
            }
          }
        }
      }
      .img {
        overflow: hidden;
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        overflow: hidden;
        text-shadow: 0 0 5px #747474;
        h3 {
          position: relative;
          z-index: 5;
        }
        .bck1,
        .bck2,
        .img-url {
          transition: 0.5s;
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 25%, 60% 65%, 40% 65%);
        }
        //存放图片处
        .img-url {
          opacity: 0;
          background: $base;
          clip-path: none;
        }
        .bck1 {
          opacity: 0.8;
          background: $base;
          animation: zhuan 8s linear infinite;
        }
        .bck2 {
          background: $base;
          opacity: 0.5;
          animation: zhuan 10s linear infinite;
        }
      }
      @keyframes zhuan {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .aboutUs:nth-child(2) {
      .bck1 {
        background: orangered;
      }
      .bck2 {
        background: orangered;
      }
      .img-url {
        background: orangered;
      }
    }
    .aboutUs:nth-child(3) {
      .bck1 {
        background: #00ff80;
      }
      .bck2 {
        background: #00ff80;
      }
      .img-url {
        background: #00ff80;
      }
    }
    .aboutUs:nth-child(2n) .aboutUs-hover {
      &:hover::after {
        opacity: 1;
        transform: translateX(20px);
      }
    }
    .aboutUs:nth-child(2n + 1) .aboutUs-hover {
      flex-direction: row-reverse;
      &:hover::after {
        opacity: 1;
        transform: translateX(-20px);
      }
    }
    .aboutUs:nth-child(2n) .aboutUs-hover:after {
      clip-path: polygon(0% 0%, 50% 50%, 0% 100%);
      left: -50px;
    }
    .aboutUs:nth-child(2n + 1) .aboutUs-hover:after {
      clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
      right: -50px;
    }
    .aboutUs:nth-child(2n) {
      opacity: 0;
      transform: translateX(50px);
    }
    .aboutUs:nth-child(2n + 1) {
      opacity: 0;
      transform: translateX(-50px);
    }
  }
}

//可视范围动画过渡效果
.in-view {
  h2 {
    opacity: 1 !important;
  }
  .English {
    opacity: 1 !important;
  }
  .content-Advantage {
    .block {
      .icon {
        transform: scale(0.8) !important;
        opacity: 1 !important;
      }
      h3 {
        transform: translateY(0px) !important;
        opacity: 1 !important;
      }
      p {
        transform: translateY(0px) !important;
        opacity: 1 !important;
      }
    }
  }
  .content-Transaction {
    .top {
      .block {
        transform: scale(1) !important;
        opacity: 1 !important;
      }
    }
    .bottom {
      .b-title {
        span {
          display: inline-block;
        }
        .title-l {
          transform: translateX(0px) !important;
          opacity: 1 !important;
        }
        .title-msg {
          transform: translateX(0px) !important;
          opacity: 1 !important;
        }
      }
      .content {
        .con {
          transform: translateX(0px) !important;
          opacity: 1 !important;
        }
      }
    }
  }
  .content-Business {
    .top {
      .table {
        transform: translateX(0px) !important;
        opacity: 1 !important;
      }
    }
    .content {
      .tab-msg {
        transform: translateY(0px) !important;
        opacity: 1 !important;
      }
    }
  }
  .content-News {
    .news:nth-child(2n) {
      opacity: 1 !important;
      transform: translateX(0px) !important;
    }
    .news:nth-child(2n + 1) {
      opacity: 1 !important;
      transform: translateX(0px) !important;
    }
    .more {
      opacity: 1 !important;
    }
  }
  .content-aboutUs {
    .aboutUs:nth-child(2n) {
      opacity: 1 !important;
      transform: translateX(0px) !important;
    }
    .aboutUs:nth-child(2n + 1) {
      opacity: 1 !important;
      transform: translateX(0px) !important;
    }
  }
}
</style>
