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
      windowH: window.innerHeight,
      navShow: false,
      Article: "",
      Article_title:'',
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
      this.Article_title = row.noticeTitle
    },
    //获取公告通知
    getNoticeInquire() {
      let _this = this;
      let params = {
        noticeTitle: "",
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
  background: rgba(0, 0, 0, 0.753);
  box-shadow: 0 0 5px black;
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
</style>