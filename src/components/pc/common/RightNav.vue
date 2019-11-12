<template>
  <div class="rightNav">
    <section class="tab-box">
      <div class="btn active" @click="btnActive = !btnActive">
        <span class="text">{{navActiveIndex}}</span>
      </div>
      <div
        class="btn no-active"
        :class="btnActive?'active-a':''"
        :style="`  transition-delay: ${index/10}s;transform: rotate(${index*45 - 30}deg) scale(0.9);`"
        v-for="(i,index) in tabList"
        :key="index"
        v-show="navActiveIndex != i.title"
        @click="$parent.goAssignBlock('go'+(index+1))"
      >
        <span
          class="text"
          :style="`transform: rotate(${-index*45 + 30}deg) scale(0.9);`"
        >{{i.title}}</span>
      </div>
    </section>
    <div class="btn" style="opacity:0;  cursor: default;"></div>
    <div class="btn" style="background:#4070f1;">
      <div class="btn-hint">交易查询</div>
      <i class="el-icon-search" style="color:white"></i>
    </div>
    <div class="btn" @click="backTop()">
      <i class="el-icon-top"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActiveIndex: "",
      tabList: [
        { title: "行业优势" },
        { title: "交易服务" },
        { title: "业务介绍" },
        { title: "新闻资讯" },
        { title: "关于我们" }
      ],
      btnActive: false
    };
  },
  methods: {
    //返回顶部方法
    backTop() {
      $("html").animate({ scrollTop: 0 }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.rightNav {
  position: fixed;
  right: 5%;
  bottom: 5%;
  width: 50px;
  //   background: red;
  opacity: 0;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 88;
  transform: translateY(400px);
  .btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    box-shadow: 2px 2px 5px #a1a1a1;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    &:hover i {
      transform: scale(0.8);
    }
    &:hover .btn-hint {
      display: block;
      opacity: 1;
    }
    .btn-hint {
      transition: 0.5s;
      background: white;
      padding: 6px;
      font-size: 12px;
      position: absolute;
      border-radius: 3px;
      left: -80px;
      filter: drop-shadow(2px 2px 5px #ccc);
      opacity: 0;
      display: none;
      &::before {
        content: "";
        width: 0px;
        height: 0px;
        border: 6px solid transparent;
        border-left: 6px solid white;
        position: absolute;
        right: -12px;
      }
    }
    i {
      transition: 0.5s;
      font-size: 1.5rem;
    }
  }
  .tab-box {
    user-select: none;
    position: relative;
    .text {
      display: inline-block;
      width: 30px;
      font-size: 12px;
    }
    .btn.active {
      position: relative;
      z-index: 5;
      font-weight: bold;
    }
    .btn.no-active {
      color: #808080;
      transition: 0.5s;
      transform-origin: 50% 50%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      box-shadow: 0 0 5px #ccc;
    }
  }
}
.btn.no-active.active-a {
  transform-origin: 100px 50% !important;
  left: -80px !important;
  opacity: 1 !important;
  &:hover {
    background: $base;
    color: white;
  }
}
</style>