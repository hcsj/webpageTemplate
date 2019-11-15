<template>
  <div>
    <head-nav :class="'head-nav-show'" :head_loginShow="false"></head-nav>
    <div class="login-webpage">
      <div class="bck">
        <img src="@/assets/img/logo1.png" alt />
      </div>
      <login-box :closeLogin="false"></login-box>
    </div>
    <foot-nav :waveBck="'#ececec'"></foot-nav>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
import LoginBox from "../common/LoginBox.vue";
import footNav from "../common/FootNav.vue";
export default {
  components: {
    "login-box": LoginBox,
    "foot-nav": footNav,
    "head-nav": headNav
  }
};
</script>

<style lang="scss" scoped>
// 头部导航栏样式
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px black;
  position: absolute !important;
}
.login-webpage {
  //   position: absolute;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  min-height: 700px;
  background: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .bck {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    img {
      display: block;
      width: 200px;
      height: 50px;
      transform: scale(0.5);
      margin-bottom: 50px;
    }
  }
}
</style>