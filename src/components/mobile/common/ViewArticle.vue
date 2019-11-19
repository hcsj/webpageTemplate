<template>
  <div class="overall">
    <div class="Article-logo">
      <img src="@/assets/img/logo1.png" alt />
    </div>
    <head-nav :headerTitle="headerTitle" :class="'head-nav-show'" ref="head-nav"></head-nav>
    <div class="ViewArticle">
      <div class="content" v-html="ArticleContent"></div>
    </div>
  </div>
</template>

<script>
import headNav from "./HeadNav.vue";
export default {
  components: {
    "head-nav": headNav
  },
  data() {
    return {
      headerTitle: "",
      ArticleContent: ""
    };
  },
  created() {
    this.headerTitle = this.$route.params.title;
    this.ArticleContent = this.$route.params.content;
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  .Article-logo {
    width: 5rem;
    position: fixed;
    bottom: 1rem;
    left: calc(50% - 2.5rem);
    img{
        width: 100%;
    }
  }
}
</style>