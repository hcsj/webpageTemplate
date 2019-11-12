<template>
  <div class="head-nav">
    <div class="nav">
      <div class="logo">
        <i class="el-icon-knife-fork"></i>
      </div>
      <div class="nav-tab">
        <span
          class="tab"
          :class="$route.name == i.name?'tab-active':''"
          v-for="(i,index) in navList"
          :key="index"
          @click="skip(i.name)"
        >{{i.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $router() {}
  },
  data() {
    return {
      navList: [
        {
          title: "首页",
          name: "Home"
        },
        {
          title: "业务介绍",
          name: "BusinessIntroduction"
        },
        {
          title: "新闻资讯",
          name: "Home"
        },
        {
          title: "关于我们",
          name: "AboutUs"
        }
      ]
    };
  },
  methods:{
    skip(name){
      if (name == this.$route.name) {
        return
      }
      this.$router.push({
        name:name
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.head-nav {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  transition: 0.5s;
  color: white;
  .nav {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    // background: blue;
    display: flex;
    justify-content: space-between;
    .logo {
      min-width: 200px;
      //   background: red;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 3rem;
        color: white;
      }
    }
    .nav-tab {
      width: 100%;
      //   background: orangered;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px;
      .tab {
        margin: 0 20px;
        font-weight: bold;
        font-size: 17px;
        cursor: pointer;
        position: relative;
        padding: 10px;
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background: white;
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0;
          transition: 0.5s;
          //   transform: scaleX(0);
          //   transform-origin: right;
          border-radius: 3px;
        }
        &:hover::after {
          opacity: 1;
          //   transition: transform 0.5s;
          //   transform: scaleX(1);
          //   transform-origin: left;
        }
      }
    }
  }
}
.tab-active {
  &::after {
    opacity: 1 !important;
    // transform: scaleX(1) !important;
    // transform-origin: left !important;
  }
}
</style>