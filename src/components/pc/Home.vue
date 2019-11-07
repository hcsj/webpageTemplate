<template>
  <div>
    <div id="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in list" :key="index">
            <div class="bck">
              <span class="text">
                <span id="text-anime" v-for="(t,indexT) in textCut(i.text)" :key="indexT">{{t}}</span>
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
    var bck = document.querySelectorAll('.bck')
    console.log(bck)
    var bannerIndex = 0;
    banner.style.height = _this.windowH + "px";
    var mySwiper = new Swiper(".swiper-container", {
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      followFinger: false,
      loop: true,
      autoplay: true, //开启自动播放
      //显示底部小圆点
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 5000 //4秒切换一次
      },
      on: {
        slideChangeTransitionStart: function() {
         console.log(this.realIndex)
         _this.$anime({
           targets:`${bck[this.realIndex]}`,
           translateY:[-200,0]
         })
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
    background: #4070f1;
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
      }
      #text-anime {
        display: inline-block;
        transition: 0.5s;
        animation: move 0.5s linear both 1;
      }
      @keyframes move {
        0% {
          transform: translateY(-200px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
  }
}
</style>
