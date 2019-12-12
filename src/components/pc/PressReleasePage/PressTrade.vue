<!-- 行业新闻部分 -->
<template>
  <div>
      <el-breadcrumb  class="press-tr">
           <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
            <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item>行业资讯</el-breadcrumb-item>
          </el-breadcrumb>
    <div class="contents">
      <el-table
        style="width: 90%; cursor: pointer;margin-top:20px;"
        :data="tableDataEnd"
        @row-click="open"
      >
        <el-table-column prop="day" label="日期" width="50" align="center"></el-table-column>
        <el-table-column prop="noticeTitle" label="公告" width="600" align="left"></el-table-column>
        <!-- <el-table-column prop="data"  label="日期" align="right"  ></el-table-column> -->
        <el-table-column prop="createTime" label="时间" sortable column-key="data" align="right"></el-table-column>
        <el-table-column fixed="right" align="right" width="60" label="操作">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详细内容 -->
      <div class="details" v-if="details">
        <i class="el-icon-close" @click="details=false"></i>
        <div class="ql-container ql-snow"><section  class="ql-editor" v-html="message"></section></div>
      </div>
    </div>
    <div class="paging">
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="totalElements"
      ></el-pagination>-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        prev-text="上一页"
        next-text="下一页"
        layout="  prev,  next"
        :total="totalElements"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";
import request from "@/utils/request";
// import '@/utils/prohibit'
export default {
  // 最多储存15条每页
  data() {
    return {
      i: 0,
      uid: this.$route.params.id,
      details: false,
      message: "",
      total: 50, //默认数据总数
      pageSize: 0, //每页的数据条数
      currentPage: 1, //默认开始页面
      Case: [],
      tableDataEnd: [],
      totalElements: 0
    };
  },
  methods: {
    open(row) {
      this.details = true;
      this.message = row.noticeText;
    },
    //判断是否是从首页跳转过来
    pass() {
      if (this.uid + 1) {
        //判断路由穿的值是否为 true,点击查看更多时，因为未调用方法所以传的为 undfind，此处+1，是为防止为 0 时
        let uid = this.Case[this.uid];
        this.open(uid);
      }
    },
    //截取字符长度方法
    cutOut() {
      for (let i = 0; i < this.Case.length; i++) {
        if (this.Case[i].noticeTitle.length > 45) {
          this.Case[i].noticeTitle =
            this.Case[i].noticeTitle.substring(0, 40) + "...";
        }
        this.Case[i].createTime = this.Case[i].createTime.substring(0, 10);
        this.Case[i].day = this.Case[i].createTime.substring(8, 10);
      }
    },
    // 初始页currentPage、初始每页数据数pageSize和数据data
    handleSizeChange: function(val) {
      this.pageSize = val; //每页下拉显示数据
      this.handleCurrentChange(this.currentPage);
      this.getTrade();
    },
    handleCurrentChange: function(val) {
      this.currentPage = val; //点击第几页
      this.getTrade();
    },
    //组件自带监控当前页码
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    },
    //获取行业咨询的方法
    getTrade() {
      this.i++;
      request({
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
            version: "0.0.1",
           "x-auth-token": ''
        },
        url: "website/website/getNewsPage",
        method: "post",
        data: {
          templateId: "100000000000000000002",
          pageNumber: this.currentPage - 1,
          pageSize: 10
        }
      })
        .then(res => {
          this.Case = res.data.body.content;
          this.tableDataEnd = res.data.body.content;
          this.totalElements = res.data.body.totalElements;
          this.pageSize = res.data.body.pageable.pageSize;
          this.cutOut();
          if (this.i == 1) {
            this.pass();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {},
  mounted() {
    this.getTrade();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
@import "../../../assets/css/pc/home_business.scss";
.news-contentsl {
  background: $shadow;
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
  height: 700px;
}
.paging {
  width: 100%;
  height: 100px;
  text-align: center;
  padding-top: 50px;
}
</style>
