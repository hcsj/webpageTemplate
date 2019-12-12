<template>
  <!-- 下载专区组件 -->
  <div>
       <el-breadcrumb  class="press-tr">
           <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
            <el-breadcrumb-item>业务介绍</el-breadcrumb-item>
            <el-breadcrumb-item>下载专区</el-breadcrumb-item>
          </el-breadcrumb>
    <div class="contents">
      <el-table
        style="width: 95%; cursor: pointer;margin-top:20px;"
        :data="Case.slice((currentPage-1)*pagesize,currentPage*pagesize)" @row-click="open"
      >
        <el-table-column prop="day" label="日期" width="50" align="center"></el-table-column>
        <el-table-column prop="text" label="内容" width="600" align="left"></el-table-column>
        <!-- <el-table-column prop="data"  label="日期" align="right"  ></el-table-column> -->
        <el-table-column prop="data" label="时间" sortable column-key="data" align="right"></el-table-column>
        <el-table-column fixed="right" align="right" width="60" label="操作">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" type="text" size="small" class="view">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详细内容 -->
      <!-- <div class="details" v-if="details">
        <i class="fa fa-close fa-lg" @click="details=false"></i>
        <section class="message" v-html="message"></section>
      </div>-->
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
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  // 最多储存15条每页
  data() {
    return {
      uid: this.$route.params.id,
      // details: false,
      message: "", //详细内容部分
      total: 50, //默认数据总数
      pagesize: 12, //每页的数据条数
      currentPage: 1, //默认开始页面
      Case: [
        // {
        //   data: "2017/02/23",
        //   text: "机构会员入会申请书"
        // }
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
        window.location.href = 'https://oss.neafex.com/gateway/2017/02/23/13-45-4506911171357645.docx'
      // this.details = true;
      // this.message = row.text;
      // console.log(row);
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
</style>
