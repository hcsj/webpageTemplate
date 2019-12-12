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
            <el-breadcrumb-item>关于我们</el-breadcrumb-item>
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

      message:this.$route.params.message || '中心介绍',
      currenTab: this.$route.path,
      TabNav: [
        { title: "中心介绍", router: "/AboutUs" },
        { title: "法律申明", router: "/law" },
        { title: "常见问题", router: "/problem"}
      ]
    }
  },
  methods: {
    Actived(index) {
      this.currenTab = this.TabNav[index].router;
      this.message = this.TabNav[index].title
    },
     //返回顶部方法
    BackTop() {
      $("html").animate({ scrollTop: 0 }, 0);
    },
  },
  mounted(){
    this.BackTop()
  }
 
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/pc/blendent.scss";
@import '../../assets/css/pc/press_tabnav.scss';
#PressRelease {
  width: 100%;
  height:1600px;
  max-width: $MaxWidth;
}
.PressRelease {
  width: 90%;
   height: 100%;
  position: relative;
 
  //中间内容部分
  .press-c {
    width: 100%;
    height: 100%;
    position: relative;
    .press-cr {
      width: 80%;
      height: 95%;
      background: $white;
      position: absolute;
      right: 0;
      // overflow-y: auto; 
    }
  }
}

</style>
