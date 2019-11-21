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
      <div id="notice-search" v-if="activeIndex == '公告通知'">
        <div class="notice-search">
          <input
            type="text"
            placeholder="请输入搜索内容"
            v-model="searchMsg"
            :style="searchMsg?' border-bottom: 2px solid #a0cfff;':''"
            :class="navShow?'input-search-active':''"
            @keyup.enter="toSearch()"
          />
          <div class="btn-search" @click="toSearch()">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
      <div class="article-box">
        <div class="article-content">
          <el-table
            :data="list"
            style="width: 100%"
            @row-click="handleClick"
            :row-style="{ cursor: 'pointer'}"
          >
            <el-table-column prop="createTime" label="日期" width="100">
              <template slot-scope="scope">
                <div class="date">
                  <section>
                    <h3>{{dateFormatting(scope.row.createTime)}}</h3>
                  </section>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="noticeTitle" label="内容">
              <template slot-scope="scope">
                <span class="noticeTitle">{{scope.row.noticeTitle}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="时间" width="180"></el-table-column>
            <el-table-column label="操作" width="50">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block" v-if="list.length">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage + 1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next"
            :total="totalElements"
          ></el-pagination>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
    <view-article ref="viewArticle" :ArticleContent="Article" :ArticleTitle="Article_title"></view-article>
  </div>
</template>

<script>
import viewArticle from "../common/ViewArticle.vue";
import headNav from "../common/HeadNav.vue";
import footNav from "../common/FootNav.vue";
export default {
  name: "AboutUs",
  components: {
    "head-nav": headNav,
    "foot-nav": footNav,
    "view-article": viewArticle
  },
  data() {
    return {
      activeIndex: "公告通知",
      searchMsg: "", //公告搜索内容
      windowH: window.innerHeight,
      navShow: false,
      Article: "",
      Article_title: "",
      AboutUsList: [
        {
          title: "公告通知",
          msg: `msg1`
        },
        {
          title: "公司新闻",
          msg: "msg2"
        },
        {
          title: "行业资讯",
          msg: "msg3"
        }
      ],
      list: [],
      totalElements: 0, //总条数
      totalPages: 0, //总页数
      currentPage: 0, //当前页
      pageSize: 10 //每页查询条数
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getNoticeInquire();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeActiveIndex(index) {
      window.scrollTo(0, 0);
      this.totalElements = 0;
      this.totalPages = 0;
      this.currentPage = 0;
      this.pageSize = 10;
      this.list = [];
      if (index == "公告通知") {
        this.getNoticeInquire();
      } else if (index == "公司新闻") {
        this.getNewsPage("100000000000000000001");
      } else if (index == "行业资讯") {
        this.getNewsPage("100000000000000000002");
      }
      this.activeIndex = index;
    },
    //时间格式转换
    dateFormatting(val) {
      return this.$moment(val).format("DD");
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
    },
    //查看详情
    handleClick(row) {
      this.$refs.viewArticle.ViewArticleShow = true;
      this.Article = row.noticeText;
      this.Article_title = row.noticeTitle;
    },
    //获取公告通知
    getNoticeInquire() {
      let _this = this;
      let params = {
        noticeTitle: _this.searchMsg,
        pageNumber: _this.currentPage,
        pageSize: _this.pageSize
      };
      this.$axios
        .post("website/website/getNoticePage", params)
        .then(res => {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.list = resData.body.content;
            _this.totalPages = resData.body.totalPages;
            _this.totalElements = resData.body.totalElements;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //搜索方法
    toSearch() {
      let _this = this;
      _this.currentPage = 0;
      _this.pageSize = 10;
      _this.getNoticeInquire();
    },
    //获取公司和行业新闻 100000000000000000001（公司）  100000000000000000002（行业）
    getNewsPage(templateId) {
      let _this = this;
      let params = {
        templateId: templateId,
        pageNumber: _this.currentPage,
        pageSize: _this.pageSize
      };
      this.$axios
        .post("website/website/getNewsPage", params)
        .then(res => {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.list = resData.body.content;
            _this.totalPages = resData.body.totalPages;
            _this.totalElements = resData.body.totalElements;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      //   console.log(val);
      this.currentPage = val - 1;
      if (this.activeIndex == "公告通知") {
        this.getNoticeInquire();
      } else if (this.activeIndex == "公司新闻") {
        this.getNewsPage("100000000000000000001");
      } else if (this.activeIndex == "行业资讯") {
        this.getNewsPage("100000000000000000002");
      }
    },
    handleSizeChange(val) {
      this.currentPage = 0;
      this.pageSize = val;
      if (this.activeIndex == "公告通知") {
        this.getNoticeInquire();
      } else if (this.activeIndex == "公司新闻") {
        this.getNewsPage("100000000000000000001");
      } else if (this.activeIndex == "行业资讯") {
        this.getNewsPage("100000000000000000002");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// 头部导航栏样式
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px #5c5c5c;
  position: absolute !important;
}

.date {
  width: 40px;
  height: 40px;
  background: #ebebeb;
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(10px 0, 100% 0, 100% 100%, 0% 100%, 0 10px);
  text-align: center;
}
#notice-search {
  width: 100%;
  position: sticky;
  top: 90px;
  z-index: 88;
  .notice-search {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    input {
      // transition: 0.3s;
      outline: none;
      height: 40px;
      display: inline-block;
      width: 33%;
      border: 2px dashed transparent;
      border-bottom: 2px solid #e7e7e7;
      color: #808080;
      font-size: 15px;
      // background: transparent;
      background: rgba(255, 255, 255, 0.726);
      // border-top: none !important;
      padding: 0 10px;
      padding-right: 70px;
    }
    .btn-search {
      opacity: 0.9;
      user-select: none;
      position: absolute;
      right: 0;
      font-size: 15px;
      // background: $base;
      width: 50px;
      height: 40px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        color: $base;
        font-size: 1.5rem;
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
  .input-search-active {
    border: 2px dashed $base !important;
    border-top: 2px solid white !important;
  }
}
</style>