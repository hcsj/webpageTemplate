<template>
  <!-- 交易规则组件 -->
  <div>
    <el-breadcrumb class="press-tr">
      <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
      <el-breadcrumb-item>业务介绍</el-breadcrumb-item>
      <el-breadcrumb-item>交易规则</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="contents">
      <el-table
        style="width: 95%; cursor: pointer;margin-top:20px;"
        :data="Case.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        @row-click="open"
      >
        <el-table-column prop="day" label="日期" width="50" align="center"></el-table-column>
        <el-table-column prop="text" label="内容" width="600" align="left"></el-table-column>
        <!-- <el-table-column prop="data"  label="日期" align="right"  ></el-table-column> -->
        <el-table-column prop="data" label="时间" sortable column-key="data" align="right"></el-table-column>
        <el-table-column fixed="right" align="right" width="60" label="操作">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" type="text" size="small" class="view">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详细内容 -->
      <div class="details" v-if="details">
        <i class="fa fa-close fa-lg" @click="details=false"></i>
        <section class="message" v-html="message"></section>
      </div>
    </div>
    <div class="paging">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        prev-text="上一页"
        next-text="下一页"
        layout="  prev,  next"
        :total="Case.length"
      ></el-pagination>
    </div>
    <div class="coverLogin" v-if="cover">
      <div style class="login">
        <i class="el-icon-close" @click="cover=false"></i>
        <coverlogin></coverlogin>
      </div>
    </div>
  </div>
</template>

<script>
import coverlogin from "@/components/pc/common/login";
export default {
  components: {
    coverlogin
  },
  // 最多储存15条每页
  data() {
    return {
      cover: false,
      uid: this.$route.params.id,
      total: 50, //默认数据总数
      pagesize: 12, //每页的数据条数
      currentPage: 1, //默认开始页面
      details: false,
      message: "", //详细内容部分
      Case: [
        {
          data: "2019/11/28",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心交易登记业务管理办法》",
          url: "",
          toRouter: true
        },
        // {
        //   data: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心挂牌方管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC01%E5%8F%B7-%E6%8C%82%E7%89%8C%E6%96%B9%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        // {
        //   data: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心会员管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC02%E5%8F%B7-%E4%BC%9A%E5%91%98%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        // {
        //   data: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心投资者适当性管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC03%E5%8F%B7-%E6%8A%95%E8%B5%84%E8%80%85%E9%80%82%E5%BD%93%E6%80%A7%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        {
          data: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心定向融资计划业务管理办法》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC04%E5%8F%B7-%E5%AE%9A%E5%90%91%E8%9E%8D%E8%B5%84%E8%AE%A1%E5%88%92%E4%B8%9A%E5%8A%A1%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        },
        {
          data: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心金融资产交易业务管理办法》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC05%E5%8F%B7-%E9%87%91%E8%9E%8D%E8%B5%84%E4%BA%A7%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        },
        {
          data: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心信息发布业务规则》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC06%E5%8F%B7-%E4%BF%A1%E6%81%AF%E5%8F%91%E5%B8%83%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99.pdf"
        }
      ]
    };
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size; //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage; //点击第几页
    },
    //点击查看详细新闻方法
    open(row) {
      //判断是否是要跳转路由（打开交易登记业务）
      if (row.toRouter) {
        this.$router.push({
          name:'transactionRegistration'
        })
      } else {
        if (!this.$store.state.user.isUserLogin) {
          this.cover = true;
        } else {
          if (row.url) {
            // window.location.ref = row.url
            window.open(row.url, "_blank");
          } else {
            this.details = true;
            this.message = row.content;
          }
        }
      }

      // console.log(row.url);
    },
    //截取字符长度方法
    cutOut() {
      for (let i = 0; i < this.Case.length; i++) {
        if (this.Case[i].text.length > 45) {
          this.Case[i].text = this.Case[i].text.substring(0, 40) + "...";
        }
        this.Case[i].day = this.Case[i].data.substring(8, 10);
      }
    },
    //判断是否是从首页跳转过来
    pass() {
      if (this.uid + 1) {
        //判断路由穿的值是否为 true,点击查看更多时，因为未调用方法所以传的为 undfind，此处+1，是为防止为 0 时
        let uid = this.Case[this.uid];
        this.open(uid);
      }
    }
  },
  created() {
    this.cutOut();
  },
  mounted() {
    this.pass();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
@import "../../../assets/css/pc/home_business.scss";
.news-contents {
  animation: none;
}
.news-contentsl {
  background: $theme;
}
.news-contentsl h2 {
  color: $white;
}
.news-contents .news-p {
  color: $white;
}
.news-contentsr {
  color: $text;
  border-bottom: 1px dotted $shadow;
}
.news-contentsr i {
  color: $shadow;
}
.news-more:hover i:nth-of-type(2),
.news-contentsr:hover i:nth-of-type(2) {
  color: $shadow;
}
.contents {
  height: 800px;
}
// 分页样式
.paging {
  width: 100%;
  height: 100px;
  text-align: center;
  padding-top: 50px;
}
.coverLogin {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.412);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  .login {
    width: 400px;
    height: 420px;
    position: absolute;
    top: calc(50% - 210px);
    left: calc(50% - 200px);
    i {
      cursor: pointer;
      color: $themes;
      position: absolute;
      top: 5%;
      right: 5%;
      z-index: 2;
    }
  }
  // min-width: 1250px;
}
</style>
