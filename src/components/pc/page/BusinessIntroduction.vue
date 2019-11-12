<template>
  <div>
    <head-nav class="head-nav-show"></head-nav>
    <div id="article-box">
      <div id="article-tab" :class="navShow?'article-tab-active':''">
        <div class="article-tab">
          <span
            @click="changeActiveIndex(i.title)"
            class="tab"
            :class="activeIndex == i.title?'tab-active':''"
            v-for="(i,index) in AboutUsList"
            :key="index"
          >{{i.title}}</span>
        </div>
      </div>

      <div class="article-box">
        <div class="article-content">
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
import footNav from "../common/FootNav.vue";
export default {
  name: "AboutUs",
  components: {
    "head-nav": headNav,
    "foot-nav": footNav
  },
  data() {
    return {
      activeIndex: "交易规则",
      windowH: window.innerHeight,
      navShow: false,
      AboutUsList: [
        {
          title: "交易规则",
          msg: `msg1`
        },
        {
          title: "政策法规",
          msg: "msg2"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      list:[]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeActiveIndex(index) {
      window.scrollTo(0, 0);
      if (index == '政策法规') {
          this.list = []
      }else{
         this.list = this.tableData
      }
      this.activeIndex = index;
    },
    //监听滚轮方法
    handleScroll(val) {
      let _this = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        _this.navShow = true;
      } else {
        _this.navShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>