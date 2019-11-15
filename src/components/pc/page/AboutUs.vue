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
        <div
          class="article-content"
          v-for="(i,index) in AboutUsList"
          :key="index"
          v-show="activeIndex == i.title"
        >
          <div class="img">{{i.img}}</div>
          <div class="msg" v-html="i.msg"></div>
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
      activeIndex: "中心介绍",
      windowH: window.innerHeight,
      navShow: false,
      AboutUsList: [
        {
          title: "中心介绍",
          img: "img1",
          msg: `<div class=WordSection1 style='layout-grid:15.6pt'>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan;
background:white'><span style='font-size:18.0pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;mso-font-kerning:0pt'>中心介绍</span><span lang=EN-US
style='font-size:18.0pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan'><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#999999;
mso-font-kerning:0pt'>发布时间：</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#999999;mso-font-kerning:0pt'>2017-02-16<o:p></o:p></span></p><br><br><br>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>&nbsp; &nbsp; &nbsp;</span><span style='font-size:13.5pt;font-family:宋体;
mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>东北亚创新金融资产交易中心（以下简称</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'>“</span><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
letter-spacing:.6pt;mso-font-kerning:0pt'>东金中心</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>”</span><span style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'>）是在吉林省人民政府的指导和大力支持下，于</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>2014</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>年</span><span lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>11</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>月</span><span lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>7</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>日省政府批准设立的综合性金融资产交易平台。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>&nbsp; &nbsp; &nbsp;</span><span style='font-size:13.5pt;font-family:宋体;
mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>东金中心</span><span lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>“</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>立足吉林，面向全国</span><span lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>”</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>，坚持政府指导、市场化运作，在资产证券化、利率市场化浪潮下，为各类金融资产提供公开、公正、公平的交易平台，实现资金需求方、供给方的自由撮合交易，促进金融资产流转和产品创新，打造专业化、规范化、标准化的全国性金融资产和金融产品交易平台。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>&nbsp;<o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>&nbsp;<o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:18.0pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#333333;letter-spacing:.6pt;
mso-font-kerning:0pt'>中心文化</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>“</span><span style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'>笃信、互通、增益、明远</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>”</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>作为公司的企业文化，告诉每个员工予人方便才能自己方便，我们所做的就是让我们的合作伙伴真正受益。所以，每一个东金人都坚定地相信，合作伙伴的认可才是我们继续向前的动力，只有解决了客户痛点，努力才没有白费。在此基础上，我们的企业文化应运而生</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'>——“</span><span style='font-size:13.5pt;font-family:
宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:"microsoft yahei";
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>笃信、互通、增益、明远</span><span lang=EN-US style='font-size:13.5pt;font-family:
"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'>”</span><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
letter-spacing:.6pt;mso-font-kerning:0pt'>。</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:18.0pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#333333;letter-spacing:.6pt;
mso-font-kerning:0pt'>主要功能</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:13.5pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;
mso-font-kerning:0pt'>汇聚金融信息资源</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'> &nbsp;&nbsp;</span><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
letter-spacing:.6pt;mso-font-kerning:0pt'>优化金融资源配置</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:13.5pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;
mso-font-kerning:0pt'>规范金融资产交易</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'> &nbsp;&nbsp;</span><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
letter-spacing:.6pt;mso-font-kerning:0pt'>加速金融助力企业</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>&nbsp;<o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:18.0pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#333333;letter-spacing:.6pt;
mso-font-kerning:0pt'>战略定位</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:13.5pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;
mso-font-kerning:0pt'>类金融产业创新引导者</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'> &nbsp; </span><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
letter-spacing:.6pt;mso-font-kerning:0pt'>类金融风险管理实践者</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'> &nbsp; </span><span style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'>类金融资源配置服务商</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei","serif";
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'>&nbsp;<o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:18.0pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#333333;letter-spacing:.6pt;
mso-font-kerning:0pt'></span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:13.5pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;
mso-font-kerning:0pt'></span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:13.5pt;
font-family:宋体;mso-ascii-font-family:"microsoft yahei";mso-hansi-font-family:
"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;
mso-font-kerning:0pt'></span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei","serif";mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>

</div>`
        },
        {
          title: "法律声明",
          img: "img2",
          msg: "msg2"
        },
        {
          title: "常见问题",
          img: "img3",
          msg: "msg3"
        }
      ]
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
// 头部导航栏样式
.head-nav-show {
  background: $headNav_bck;
  box-shadow: 0 0 5px black;
  position: absolute !important;
}
</style>