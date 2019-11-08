<template>
  <div>
    <div id="banner">
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
      </div>
    </div>
    <div id="module">
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
    <div id="module" style=" background: #f6f7f8;">
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
    <div id="module">
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
    <div id="module" style=" background: #f6f7f8;">
      <div class="module">
        <h2>新闻资讯</h2>
        <p class="English">News</p>
        <div class="content-News">
          <div
            class="news"
            v-for="(i,index) in NewsList"
            :key="index"
            :style="` transition-delay: ${index/10}s`"
          >
            <div class="news-hover">
              <div class="news-noImg" v-if="!i.img">
                <p>{{i.title}}</p>
                <span class="time">{{i.date}}</span>
              </div>
              <div v-else class="news-Img">
                <div class="text">
                  <p>{{i.title}}</p>
                  <span class="time">{{i.date}}</span>
                </div>
                <div class="img">IMG</div>
              </div>
            </div>
          </div>
          <div class="more">
            <section>
              <span>查看更多</span>
              <i class="el-icon-arrow-right"></i>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Home",
  data() {
    return {
      realIndex: 0,
      items: [],
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
      ]
    };
  },
  mounted() {
    let _this = this;
    _this.items = document.querySelectorAll("#module");
    console.log(_this.items);
    window.addEventListener("scroll", this.handleScroll);
    this.getBanner();
  },
  methods: {
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
      //每次滚轮滚动都会遍历 模块数组，从而添加样式
      for (let i = 0; i < _this.items.length; i++) {
        //如果 模块 达到可视范围，那么添加样式
        if (_this.isElementInViewport(_this.items[i])) {
          _this.items[i].classList.add("in-view");
        } else {
          //每次滚动时都会出现过度效果
          //   _this.items[i].classList.remove("in-view");
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
}
#module {
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
        transition:0.5s;
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
            background: #6a90f8;
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
          background: #6a90f8;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: white;
          font-size: 20px;
        }
        .text {
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
            color: #424242;
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
        font-size: 15px;
        cursor: pointer;
        transition: 0.5s;
        color: #808080;
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
}
</style>
