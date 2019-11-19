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
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 2.5rem);
    opacity: 0.7;
    img{
        width: 100%;
    }
  }
}
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px black;
}
</style>