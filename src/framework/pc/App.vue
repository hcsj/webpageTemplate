<template>
  <div id="app">
    <router-view />
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
    // window.addEventListener("beforeunload", this.toTop);
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
