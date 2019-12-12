<template>
  <div class="overall" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <head-nav class="head-nav-show" :headerTitle="headerTitle"></head-nav>
    <div class="BusinessIntroduction-content">
      <div class="tab-msg" v-for="(i,index) in list" :key="index" @click="handleClick(i)">
        <div class="tab-msg-hover">
          <div class="date">
            <section>
              <h3>{{dateFormatting_day(i.createTime)}}</h3>
              <p>{{dateFormatting(i.createTime)}}</p>
            </section>
          </div>
          <div class="msg">
            <span class="m">{{i.noticeTitle}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
export default {
  components: {
    "head-nav": headNav
  },
  watch: {
    $route(newVal, oldVal) {
      let _this = this;
      _this.headerTitle = _this.$route.query.title;
      _this.currentPage = 0;
      _this.totalPages = 0;
      _this.totalElements = 0;
      if (_this.headerTitle == "公告通知") {
        _this.getNoticeInquire();
      } else if (_this.headerTitle == "公司新闻") {
        _this.getNewsPage("100000000000000000001");
      } else if (_this.headerTitle == "行业资讯") {
        _this.getNewsPage("100000000000000000002");
      }
    }
  },
  computed: {
    noMore() {
      return this.currentPage >= this.totalPages - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  data() {
    return {
      headerTitle: "",
      currentPage: 0,
      loading: false,
      totalPages: 0,
      pageSize: 20,
      continueLoad: false, //增加一个变量，防止在加载中用户返回出现的bug
      list: [],
      totalElements: 0
    };
  },
  activated() {
    let _this = this;
    _this.headerTitle = _this.$route.query.title;
    console.log( _this.headerTitle)
    if (_this.headerTitle == "公告通知") {
      _this.getNoticeInquire();
    } else if (_this.headerTitle == "公司新闻") {
      _this.getNewsPage("100000000000000000001");
    } else if (_this.headerTitle == "行业资讯") {
      _this.getNewsPage("100000000000000000002");
    }
  },
  methods: {
    load() {
      if (this.continueLoad) {
        this.loading = true;
        setTimeout(() => {
          this.currentPage += 1;
          this.getNewsPage();
        }, 1000);
      }
    },
    //时间格式转换
    dateFormatting_day(val) {
      return this.$moment(val).format("DD");
    },
    dateFormatting(val) {
      return this.$moment(val).format("YYYY-MM");
    },
    //查看详情
    handleClick(row) {
      this.$router.push({
        path: "/ViewArticle",
        query: {
          title: row.noticeTitle,
          content: row.noticeText
        }
      });
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
        .post("website/website/website/getNewsPage", params)
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
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>