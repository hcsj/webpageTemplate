<template>
  <div>
    <head-nav
      :back_btn="false"
      :headerTitle="headerTitle"
      :class="headNavShow?'head-nav-show':''"
      ref="head-nav"
    ></head-nav>
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
      </div>
    </div>
    <div id="module" ref="go1">
      <div class="module">
        <h2>行业优势</h2>
        <p class="English">Advantage</p>
        <div class="content-Advantage">
          <section id="block" class="block" v-for="(i,index) in AdvantageList" :key="index">
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
     <foot-nav></foot-nav>
  </div>
</template>

<script>
import Swiper from "swiper";
import footNav from "./common/FootNav.vue";
import headNav from "./common/HeadNav.vue";
export default {
  name: "Home",
  components: {
    "head-nav": headNav,
    "foot-nav": footNav,
  },
  data() {
    return {
      headerTitle: "",
      windowH: window.innerHeight,
      headNavShow: false,
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
      ]
    };
  },
  mounted() {
    let _this = this;
    _this.items = document.querySelectorAll("#block");
    this.getBanner();
    window.addEventListener("scroll", this.handleScroll);
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
        rect.bottom <=
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
      } else {
        _this.headNavShow = false;
      }
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

<style lang="scss" scoped>
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px black;
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
  width: 100%;
  padding: 1rem 0;
  .module {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
  h2 {
    font-weight: 500;
    // opacity: 0;
    // transition: 0.5s;
  }
  .English {
    font-weight: bold;
    color: #a8a8a8;
    font-size: 14px;
    margin-top: 5px;
    letter-spacing: 0.1rem;
    // opacity: 0;
    transition: 1s;
  }
  // 行业优势
  .content-Advantage {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .block {
      transition: 0.5s;
      width: 100%;
      margin: 1rem 0;
      opacity: 0;
      transform: translateY(3rem) scale(0.5);
      .icon-hover {
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
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
        // transform: scale(0.3);
        // opacity: 0;
        i {
          font-size: 5rem;
          color: white;
        }
      }
      h3 {
        transition: 0.5s;
        // transform: translateY(50px);
        // opacity: 0;
        margin-top: 10px;
        font-size: 1rem;
      }
      p {
        margin-top: 10px;
        transition: 1s;
        // transform: translateY(50px);
        // opacity: 0;
        font-size: 0.88rem;
        color: #a8a8a8;
      }
    }
  }
}
.in-view {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}
</style>