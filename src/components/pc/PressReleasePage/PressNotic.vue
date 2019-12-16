<template>
  <!-- 公告通知组件 -->
  <div>
    <el-breadcrumb class="press-tr">
      <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
      <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
      <el-breadcrumb-item>公告通知</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="contents">
      <!-- 搜索功能 -->
      <div id="search">
        <el-input
          v-model="tableDataName"
          @input="input()"
          @keyup.enter.native="search()"
          placeholder="请输入内容"
          ref="input1"
        ></el-input>
        <div @click="search()" class="btn">搜索</div>
        <div class="search" v-if="tableDataBegin.length && tableDataName">
          <p
            v-for="(i,index) in tableDataBegin"
            :key="index"
            @click="open(i);tableDataBegin=[]"
          ><el-tooltip class="item" effect="dark" :content="i.noticeTitle" placement="left">
     <span>{{i.noticeTitle}}</span>
    </el-tooltip></p>
        </div>
        <!-- <el-table
          style="width: 250px; cursor: pointer;margin-top:20px;"
          :show-header="false"
          :border="true"
          :data="tableTitle"
          :class="'search'"
          v-if="Input"
          @row-click="open1"
        >
          <el-table-column prop="noticeTitle" label="公告" width="246"></el-table-column>
        </el-table>-->
      </div>

      <el-table
        style="width: 90%; cursor: pointer;margin-top:20px;"
        :data="tableDataEnd"
        @row-click="open"
      >
        <el-table-column prop="day" label="日期" width="50" align="center"></el-table-column>
        <el-table-column prop="noticeTitle" label="公告" width="600"></el-table-column>
        <!-- <el-table-column prop="noticeStatus" label="状态" align="right"></el-table-column> -->
        <el-table-column prop="createTime" label="时间" sortable column-key="data" align="right"></el-table-column>
        <el-table-column fixed="right" align="right" width="60" label="操作">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" type="text" size="small" class="view">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详细内容 -->
      <div class="details" v-if="details">
        <i class="el-icon-close" @click="details=false,Input=false"></i>
        <div class="title" v-html="title"></div>
        <div class="ql-container ql-snow">
          <section class="ql-editor" v-html="message"></section>
        </div>
      </div>
    </div>
    <div class="paging">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        prev-text="上一页"
        next-text="下一页"
        layout="  prev,  next"
        :total="totalItems"
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
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";
import request from "@/utils/request";
import coverlogin from "@/components/pc/common/login";
// import '@/utils/prohibit'
export default {
  components: {
    coverlogin
  },
  // 最多储存12条每页
  data() {
    return {
      cover: false,
      Input: false,
      // search: "",
      pageSize: 0, //每页的数据条数
      totalItems: 0,
      currentPage: 1,
      tableDataName: "",
      tableDataNameS:'',
      tableDataEnd: [],
      filterTableDataEnd: [],
      flag: false,
      tableDataBegin: [],
      noticeTitle: [],
      details: false,
      message: "", //详细内容部分
      title: "",
      tableTitle: [],
    };
  },
  methods: {
    search() {
      this.tableDataEnd = [];
       this.currentPage = 1;
       this.totalItems = 0;
      this.tableDataBegin = [];
      this.tableDataNameS = this.tableDataName
      this.noticeInquire();
    },
    //监听搜索框输入方法
    input() {
      // this.tableDataEnd = [];
      //  this.currentPage = 1;
      //  this.totalItems = 0;
      this.tableDataBegin = [];
      this.noticeInquireSearch();
    },
    //点击查看的方法
    open(row) {
      if (row.noticeStatus == 0) {
        if (!this.$store.state.user.isUserLogin) {
          //  alert('请先登录')
          this.cover = true;
        } else {
          this.details = true;
          this.title = row.noticeTitle;
          this.message = row.noticeText;
        }
      } else {
        this.details = true;
        this.title = row.noticeTitle;
        this.message = row.noticeText;
      }
    },
    //点击搜索查看的方法
    open1(row) {
      this.tableDataName = row.noticeTitle;
      this.title = row.noticeTitle;
      this.details = true;
      this.message = row.noticeText;
    },
    // 点击跳转页方法
    handleCurrentChange: function(val) {
      this.currentPage = val; //点击第几页
      this.noticeInquire();
    },
    //截取字符长度方法
    cutOut() {
      for (let i = 0; i < this.tableDataBegin.length; i++) {
        if (this.tableDataBegin[i].noticeTitle.length > 45) {
          this.tableDataBegin[i].noticeTitle =
            this.tableDataBegin[i].noticeTitle.substring(0, 40) + "...";
        }
        this.tableDataBegin[i].createTime = this.tableDataBegin[
          i
        ].createTime.substring(0, 10);
        this.tableDataBegin[i].day = this.tableDataBegin[
          i
        ].createTime.substring(8, 10);
      }
      for (let i = 0; i < this.tableDataEnd.length; i++) {
        if (this.tableDataEnd[i].noticeTitle.length > 45) {
          this.tableDataEnd[i].noticeTitle =
            this.tableDataEnd[i].noticeTitle.substring(0, 40) + "...";
        }
        this.tableDataEnd[i].createTime = this.tableDataEnd[
          i
        ].createTime.substring(0, 10);
        this.tableDataEnd[i].day = this.tableDataEnd[i].createTime.substring(
          8,
          10
        );
      }
    },
    // 公告信息查询接口(官网)
    noticeInquire() {
      request({
        url: "website/website/getNoticePage",
        method: "post",
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
          version: "0.0.1",
          "x-auth-token": window.sessionStorage.XAuthToken
        },
        data: {
          noticeTitle: this.tableDataNameS,
          pageNumber: this.currentPage - 1,
          pageSize: 10
        }
      })
        .then(res => {
          let data = res.data.body.content;
          console.log(data);
          // this.tableDataBegin = data;
          this.tableDataEnd = data;
          //获取总页数
          this.totalItems = res.data.body.totalElements;
          this.pageSize = res.data.body.pageable.pageSize;
          this.cutOut();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 公告信息查询接口(搜索)
    noticeInquireSearch() {
      request({
        url: "website/website/getNoticePage",
        method: "post",
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
          version: "0.0.1",
          "x-auth-token": window.sessionStorage.XAuthToken
        },
        data: {
          noticeTitle: this.tableDataName,
          pageNumber: 0,
          pageSize: 20
        }
      })
        .then(res => {
          let data = res.data.body.content;
          console.log(data);
          // this.tableDataBegin = data;
          this.tableDataBegin = data;
          this.cutOut();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.noticeInquire();
  },
  mounted() {}
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
  height: 700px;
  background: $white;
  overflow-y: auto;
}
// 分页样式
.paging {
  width: 100%;
  height: 100px;
  text-align: center;
  padding-top: 50px;
}
#search {
  width: 250px;
  position: absolute;
  z-index: 9;
  right: 0;
  top: -40px;
}
.search {
  padding: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  width: 248px;
  height: 270px;
  overflow-y: auto;
  position: absolute;
  top: 30px;
  background: white;
  box-shadow: 2px 2px 10px rgb(236, 235, 235);
}
.search p {
  display: inline-block;
  overflow: hidden;
  line-height: 30px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  color: #6d6c6c;
  font-size: 14px;
}
.search p:hover {
  background: #f1f0f0;
}
.btn {
  width: 50px;
  height: 30px;
  background: rgb(101, 162, 243);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 25px;
  line-height: 80px;
  color: rgb(28, 73, 196);
}
.press-tr {
  position: absolute;
  left: -25%;
  top: -30px;
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
// /deep/.el-table__row{
//   width: 100%;
//   height: 40px;
//    position: relative;
// }
// /deep/.el-table td.is-left{

//   background: red;
//   font-size: 12px;
//   padding: 0;
// }
// /deep/[data-v-683fb066].el-table td.is-left{
//     width: 40px;
//   height: 40px;
//   font-size: 16px;
//   font-weight: bold;
//   padding-top: 3px;
//   border-bottom-right-radius: 10px;
//   margin-top: 5px;
//   z-index: 2;
// }
// /deep/.el-table td.is-center{
//   width: 40px;
//   height: 40px;
//   background: yellow;
//   font-size: 10px;
//   position: absolute;
//   left: 0;
// }
// /deep/.el-table td.is-right{
//   display: block;
// width: 650px;
// height: 40px;
// background: orange;
// position: absolute;
// left: 0;
// }
</style>
