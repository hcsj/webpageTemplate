<template>
  <div class="ViewArticle" v-if="ViewArticleShow">
    <!-- 查看文章组件 -->
    <div class="close" @click="ViewArticleShow = false"></div>
    <div id="Article" :style="ArticleTitle?'padding: 80px 0 50px 0':'padding: 50px 0'">
      <i class="el-icon-close" @click="ViewArticleShow = false"></i>
      <div class="Article-title" v-if="ArticleTitle">{{ArticleTitle}}</div>
      <div class="Article" v-html="ArticleContent"></div>
      <div class="bck"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ArticleContent: String,
    ArticleTitle:String
  },
  watch: {
    ViewArticleShow(newVal, oldVal) {
      if (newVal == true) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    }
  },
  data() {
    return {
      ViewArticleShow: false
    };
  }
};
</script>

<style lang="scss" >
.ViewArticle {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.726);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  .close {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  #Article {
    transform-style: preserve-3d;
    width: 40%;
    // height: 92%;
    min-height: 50%;
    max-height: 95%;
    max-width: 1200px;
    min-width: 500px;
    margin: 0 auto;
    position: relative;
    background: rgba(255, 255, 255, 0.808);
    box-shadow: 0px 0px 5px rgb(0, 0, 0);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    animation: zhuan 0.5s ease both 1;
    &:hover i {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    &:hover {
      box-shadow: 3px 3px 5px rgb(0, 0, 0);
    }
    &::after {
      content: "";
      width: 50px;
      height: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
      background: $base;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
      z-index: 8;
      opacity: 0.8;
    }
    &::before {
      content: "";
      width: 90px;
      height: 90px;
      position: absolute;
      left: -10px;
      top: -10px;
      background: $base;
      opacity: 0.8;
      clip-path: polygon(
        0 60%,
        0 100%,
        10px 100%,
        10px calc(100% - 10px),
        calc(100% - 10px) 10px,
        100% 10px,
        100% 0,
        60% 0
      );
      z-index: 10;
    }
    .Article-title{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        padding: 20px 40px;
        word-break: break-all;
        font-weight: bold;
        z-index: 9;
        font-size: 17px;
    }
    i {
      transition: 0.3s;
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 5;
      font-size: 1.5rem;
      z-index: 88;
      font-weight: bold;
      color: #808080;
      cursor: pointer;
      opacity: 0;
      transform: scale(0) translateY(-100px);
      &:hover {
        color: #f55151;
      }
    }
    .Article {
      padding: 0px 70px;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
      z-index: 5;
      word-break: break-all;
      &::-webkit-scrollbar {
        opacity: 0;
        background: transparent !important;
        width: 3px; //y轴滚轮的宽
        height: 3px; //x轴滚轮的高
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #dddddd;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        // border-radius: 10px;
        background: transparent;
        //  -webkit-scrollBar-track-color:black;
      }
      img {
        width: 100% !important;
      }
    }
    .bck{
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0.8;
      top: 0;
      transform: rotate(2deg);
      &::after{
        content: '';
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.5;
        position: absolute;
        transform: rotate(-4deg);
        left: 0;
        top: 0;
      }
    }
  }
  @keyframes zhuan {
    0% {
      opacity: 0;
      transform: rotateY(-30deg) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: rotateY(0deg) rotateX(0deg) scale(1);
    }
  }
}
</style>