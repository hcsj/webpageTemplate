<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <transition name="el-fade-in-linear">
      <loading v-if="loadingShow"></loading>
    </transition>
  </div>
</template>

<script>
import loading from "../common/Loading.vue";
export default {
  name: "App",
  components: {
    loading
  },
  data() {
    return {
      loadingShow: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadingShow = false;
    }, 1500);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
