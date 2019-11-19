<template>
  <div id="mobile-headNav">
    <transition name="el-fade-in-linear">
      <div class="right-nav-close" v-show="rightNavShow" @click="rightNavShow = false"></div>
    </transition>
    <transition name="move">
      <right-nav ref="right-nav" v-show="rightNavShow"></right-nav>
    </transition>
    <div class="mobile-headNav">
      <span class="left-btn" v-if="back_btn" @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span class="title">{{headerTitle}}</span>
      <span class="right-btn">
        <i class="el-icon-menu" @click="openRightNav()"></i>
      </span>
    </div>
  </div>
</template>

<script>
import rightNav from "./RightNav";
export default {
  props: {
    back_btn: { default: true },
    headerTitle: String
  },
  components: {
    "right-nav": rightNav
  },
  data() {
    return {
      rightNavShow: false,
    };
  },
  methods: {
    openRightNav() {
      let _this = this;
      _this.rightNavShow = true;
      _this.$refs['right-nav'].nowRoute = _this.$route.name
      // console.log(_this.$route.name)
    },
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
#mobile-headNav {
  transition: 0.5s;
  width: 100%;
  //   background: rgba(0, 0, 0, 0.664);
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .title {
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
  .right-btn {
    position: absolute;
    right: 0;
    top: 0.8rem;
    padding: 0 1rem;
    i {
      user-select: none;
      font-size: 1.3rem;
      color: white;
      cursor: pointer;
    }
  }
  .left-btn {
    position: absolute;
    left: 0;
    top: 0.8rem;
    padding: 0 1rem;
    i {
      font-size: 1.3rem;
      color: white;
    }
  }
}
.right-nav-close {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.541);
  left: 0;
  top: 0;
  z-index: 99;
}

.move-enter-active {
  animation: move 0.3s;
}
.move-leave-active {
  animation: move 0.3s reverse;
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>