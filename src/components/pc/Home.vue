<template>
  <div>
    <div id="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in list" :key="index">
            <div class="bck">
              <span class="text">
                <span class="text-anime"  v-for="(t,indexT) in textCut(i.text)" :key="indexT">{{t}}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
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
      windowH: window.innerHeight
    };
  },
  mounted() {
    let _this = this;
    var banner = document.getElementById("banner");
    var bck = document.querySelectorAll(".bck");
    // var text = document.querySelectorAll(".text-anime");
    var slide;
    var bannerIndex = 0;
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
          console.log(this.realIndex);
          bck[this.realIndex].classList.add("bck-end");
          let text = bck[this.realIndex].querySelectorAll(".text-anime");
          for (let i = 0; i < text.length; i++) {
            _this.$anime({
              targets: text[i],
              delay: i * 100,
              translateY: [-100, 0],
            });
          }
        }
      }
    });
  },
  methods: {
    //分割字符串加载动画
    textCut(str) {
      let strArr = str.split("");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^[\s]*$/)) {
          strArr[i] = null;
        }
      }
      return strArr;
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
        background: #4070f1;
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
</style>
