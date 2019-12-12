<template>
  <div>
    <!-- 头部导航 -->
    <head-nav></head-nav>
    <!-- 中间内容部分 -->
    <!-- <content-portion :TabNav="TabNav" :currenTab ="currenTab"  ></content-portion> -->
    <div id="PressRelease">
      <div class="PressRelease">
        <!-- 面包屑部分 -->
        <div class="press-t">
          <!-- <span>您当前的位置是:</span>
          <el-breadcrumb separator="/" class="press-tr">
            <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item>{{message}}</el-breadcrumb-item>
          </el-breadcrumb> -->
        </div>
        <div class="press-c">
          <!-- 侧边栏部分 -->
          <div class="press-cl">
            <li v-for="(pre,index) in TabNav" :key="index">
              <router-link :to="pre.router" class="press-cls">
                <span
                  @click="Actived(index)"
                  :class="['tab-button',{active:currenTab === pre.router}]"
                >{{pre.title}}</span>
              </router-link>
            </li>
          </div>
          <div class="press-cr">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚组件 -->
    <!-- <foot-nav></foot-nav> -->
  </div>
</template>

<script>
import HeadNav from "./common/HeadNav";
import FootNav from "./common/FootNav";
import request from "@/utils/request";
// import '@/utils/prohibit'
export default {
  components: {
    HeadNav,
    FootNav
  },
  data() {
    return {
      messaged:'',
      message: this.$route.params.message || "公告通知",
      currenTab: this.$route.path,
      TabNav: [
        { title: "公告通知", router: "/PressRelease" },
        { title: "公司新闻", router: "/company" },
        { title: "行业资讯", router: "/Trade" }
      ]
    };
  },
  methods: {
    Actived(index) {
      this.currenTab = this.TabNav[index].router;
      this.message = this.TabNav[index].title;
    },
    //返回顶部方法
    BackTop() {
      $("html").animate({ scrollTop: 0 }, 0);
    },
    
  },
  mounted() {
    this.BackTop();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/pc/blendent.scss";
@import "../../assets/css/pc/press_tabnav.scss";
#PressRelease {
  width: 100%;
  height: 1000px;
  max-width: $MaxWidth;
}
.PressRelease {
  width: 90%;
  height: 700px;
  position: relative;
  //中间内容部分
  .press-c {
    width: 100%;
    height: 100%;
    position: relative;
    .press-cr {
      min-width:900px;
      width: 80%;
      height: 100%;
      background: $white;
      position: absolute;
      right: 0;
    }
  }
}
</style>
