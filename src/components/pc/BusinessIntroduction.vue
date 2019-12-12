<template>
  <div>
    <!-- 业务介绍父组件 -->
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
            <el-breadcrumb-item>业务介绍</el-breadcrumb-item>
            <el-breadcrumb-item ref="text">{{message}}</el-breadcrumb-item>
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
export default {
  components: {
    HeadNav,
    FootNav
  },
  data() {
    return {
      message:this.$route.params.message ||  "交易规则",
      currenTab: this.$route.path,
      TabNav: [
        { title: "交易规则", router: "/BusinessIntroduction" },
        // { title: "案例介绍", router: "/BusinessCase" },
        { title: "政策法规", router: "/BusinessPolicy" },
        // { title: "下载专区", router: "/BusinessDownload" }
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
    }
  },
  mounted() {
    this.BackTop()
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/pc/blendent.scss";
@import "../../assets/css/pc/press_tabnav.scss";
#PressRelease {
  width: 100%;
  // min-height: 1000px;
  // height: 1000px;
  max-width: $MaxWidth;
}
.PressRelease {
  width: 90%;
  height: 800px;
  position: relative;

  //中间内容部分
  .press-c {
    width: 100%;
    height: 100%;
    position: relative;
    .press-cr {
      width: 80%;
      height: 100%;
      background: $white;
      position: absolute;
      right: 0;
    }
  }
}
</style>
