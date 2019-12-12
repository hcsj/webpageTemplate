<!-- 新闻资讯组件 -->
<template>
  <div style="background:#f6f7f8">
    <div id="overall">
      <div class="TabNav-text">
        <div class="TabNav-title">新闻资讯</div>
        <div class="TabNav-dot"></div>
        <p class="TabNav-p">News</p>
      </div>
      <!-- 公司新闻部分 -->
      <div class="news">
        <div class="news-title" :class="'bck0'">
          <img src="@/assets/images/news_1.jpg" alt>
          <p>公司新闻</p>
        </div>
        <div class="news-content">
          <div v-for="(not,i) in Company" :key="i" class="news-contents" @click="chuanCompany(i)">
            <div class="news-contentsl" :class="'bck0'">
              <h2>{{not.day}}</h2>
              <p class="news-p">{{not.createTime}}</p>
            </div>
            <div class="news-contentsr">
              <p>{{not.noticeTitle}}</p>
              <i class="fa fa-angle-right"></i>
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
          <div class="news-more">
            <a @click="chuanMoreC()" style="color:#a09f9f">
              <p>查看更多</p>
            </a>
            <i class="fa fa-angle-right"></i>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="news-r" @click="chuanCompany(3)">
          <img src="@/assets/images/Company.jpg" alt>
          <p class="news-rp">{{CompanyNews4}}</p>
        </div>
      </div>
      <!-- 行业咨询部分 -->
      <div class="news">
        <div class="news-title" :class="'bck1'">
          <img src="@/assets/images/news_2.jpg" alt>
          <p>行业资讯</p>
        </div>
        <div class="news-content">
          <div v-for="(not,i) in Trade" :key="i" @click="chuanTrade(i)" class="news-contents">
            <div class="news-contentsl" :class="'bck1'">
              <h2>{{not.day}}</h2>
              <p class="news-p">{{not.createTime}}</p>
            </div>
            <div class="news-contentsr">
              <p>{{not.noticeTitle}}</p>
              <i class="fa fa-angle-right"></i>
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
          <div class="news-more">
            <a @click="chuanMoreT()" style="color:#a09f9f">
              <p>查看更多</p>
            </a>
            <i class="fa fa-angle-right"></i>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="news-r" @click="chuanTrade(3)">
          <img src="@/assets/images/Trade.jpg" alt>
          <p class="news-rp">{{TradeNews4}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      //新闻通告小标题部分
      News: [
        {
          title: "公司新闻",
          img: require("@/assets/images/news_1.jpg"),
          route: "/company"
        },
        {
          title: "行业咨询",
          img: require("@/assets/images/news_2.jpg"),
          route: "/Trade"
        }
      ],
      //新闻资讯右侧内容部分
      NewsRight: [
        {
          img: require("@/assets/images/banner2.jpg"),
          text:
            '东北亚创新金融资产交易中心(以下简称 "东金中心" ) 是在吉林省人民政府的指导和大力支持下，于2014年11月7日省政府批准设立的综合性金融资产交易平台，是由长春市国资委下属长发金融控股有限公司、申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。'
        },
        {
          img: require("@/assets/images/banner1.jpg"),
          text:
            '东北亚创新金融资产交易中心(以下简称 "东金中心" ) 是在吉林省人民政府的指导和大力支持下，于2014年11月7日省政府批准设立的综合性金融资产交易平台，是由长春市国资委下属长发金融控股有限公司、申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。'
        }
      ],
      //公司新闻部分
      Company: [],
      //行业咨询部分
      Trade: [],
      //公司新闻右边的 第四条新闻（带图）
      CompanyNews4: "",
      //行业咨询右边的 第四条新闻（带图）
      TradeNews4: ""
    };
  },
  methods: {
    // 公司新闻路由跳转传值
    chuanCompany(id, message) {
      this.$router.push({
        name: "company",
        params: {
          id: id,
          message: "公司新闻"
        }
      });
    },
    // 行业资讯路由跳转传值
    chuanTrade(id, message) {
      this.$router.push({
        name: "Trade",
        params: {
          id: id,
          message: "行业资讯"
        }
      });
    },
    // 公司新闻查看更多的路由传值
    chuanMoreC(message) {
      this.$router.push({
        name: "company",
        params: {
          message: "公司新闻"
        }
      });
    },
    // 行业资讯查看更多的路由传值
    chuanMoreT(message) {
      this.$router.push({
        name: "Trade",
        params: {
          message: "行业资讯"
        }
      });
    },
    //字符串截取方法
    cutOut() {
      
     
    
    },
    //字符串截取新闻资讯右侧边的新闻文字
    cutOut1() {
      $(".news-rp").each(function() {
        var len = $(this).text().length; //当前HTML对象text的长度
        if (len > 45) {
          var str = "";
          str =
            $(this)
              .text()
              .substring(0, 45) + "...."; //使用字符串截取，获取前30个字符，多余的字符使用“......”代替
          $(this).html(str); //将替换的值赋值给当前对象
        }
      });
    },
    //公司新闻接口
    getNewsPage() {
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
           templateId: "100000000000000000001"
        }
      }).then(res => {
        // console.log(res);
        this.Company = res.data.body.content;
        this.CompanyNews4 =
          this.Company[3].noticeTitle.substring(0, 40) + "...";
          this.Company = this.Company.splice(0, 3);
      for (let i = 0; i < this.Company.length; i++) {
        this.Company[i].noticeTitle =
          this.Company[i].noticeTitle.substring(0, 20) + "...";
        this.Company[i].day = this.Company[i].createTime.substring(8, 10);
        this.Company[i].createTime = this.Company[i].createTime
          .substring(0, 7)
          .replace("-", "/");
      }
      });
    },
    //行业资讯接口
    getTrade() {
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
          templateId: "100000000000000000002"
        }
      }).then(res => {
        // console.log(res);
        this.Trade = res.data.body.content;
         this.Trade = this.Trade.splice(0, 3);
      for (let i = 0; i < this.Trade.length; i++) {
        this.Trade[i].noticeTitle =
          this.Trade[i].noticeTitle.substring(0, 20) + "...";
        this.Trade[i].day = this.Trade[i].createTime.substring(8, 10);
        this.Trade[i].createTime = this.Trade[i].createTime
          .substring(0, 7)
          .replace("-", "/");
      }
         this.TradeNews4 = this.Trade[3].noticeTitle.substring(0, 40) + "...";
      });
    }
  },
  created() {
    this.getNewsPage();
    this.getTrade();
  },
  mounted() {
    // this.cutOut();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
//引入TabNav公共标题
@import "../../../assets/css/pc/tabnav_title.scss";
#overall {
  width: 80%;
  padding-bottom: 30px;
}
.news {
  width: $TabWidth;
  height: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 2px solid $white;
  transition: 0.3s;
  position: relative;
  background: $white;
  overflow: hidden;
}
.news-rp {
  display: block;
  width: 100%;
}
.news:hover {
  border: 0px solid $white;
  box-shadow: 0 0 5px $shadow;
}
.news-title {
  width: 110px;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  left: 0;
  color: $white;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  img {
    height: 100%;
    position: absolute;
    top: 0;
    left: -90%;
    opacity: 0.4;
  }
  p {
    display: block;
    width: 50px;
    margin-top: 45%;
    position: relative;
    z-index: 9;
  }
}
// 根据下标定义不同的背景颜色
.bck0 {
  background: $themer;
}
.bck1 {
  background: $second;
}
.news-content {
  width: 60%;
  height: 100%;
  position: absolute;
  left: 15%;
}
.news-contents {
  width: 100%;
  height: 40px;
  //   background: red;
  cursor: pointer;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
}

.news-contentsl {
  width: 40px;
  height: 100%;
  //   background: $theme;
  position: absolute;
  left: 0;
  text-align: center;
  border-bottom-right-radius: 10px;
}
.news-contentsl h2 {
  color: $white;
  font-size: 17px;
  line-height: 30px;
}
.news .news-p {
  display: block;
  color: $white;
  width: 100%;
  height: 15px;
  // background: blue;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  margin-top: 0;
  transform: scale(0.7);
}
.news-contentsr {
  width: 88%;
  height: 100%;
  //   background: pink;
  color: $text;
  position: absolute;
  right: 0;
  line-height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid $border;
}
.news-more {
  width: 80px;
  //   height: 40px;
  //   background: blue;
  position: absolute;
  right: 0;
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  color: $text;
}
.news-more p {
  transition: 0.5s;
}
.news-more:hover p {
  color: $theme;
  text-decoration: underline;
}
.news-more i {
  position: absolute;
  top: 2px;
  color: $shadow;
  transition: 0.5s;
}
.news-r {
  width: 200px;
  height: 100%;
  position: absolute;
  right: 0;
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    transform: scale(1.3);
  }
  p {
    height: 60px;
    overflow: hidden;
    font-size: 12px;
    padding: 10px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.466);
    position: absolute;
    z-index: 2;
    color: $white;
    bottom: 0;
    text-indent: 2em;
  }
}
.news-r img {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
}
.news-contentsr i {
  position: absolute;
  top: 10px;
  color: $shadow;
  transition: 0.5s;
}
.news-more i:nth-of-type(1),
.news-contentsr i:nth-of-type(1) {
  right: 0;
}
.news-more i:nth-of-type(2),
.news-contentsr i:nth-of-type(2) {
  right: 5px;
}
.news-more:hover i:nth-of-type(2),
.news-contentsr:hover i:nth-of-type(2) {
  color: $theme;
  right: 0;
}
</style>
