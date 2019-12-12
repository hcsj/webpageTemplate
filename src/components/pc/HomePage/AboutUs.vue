<!-- 关于我们组件 -->
<template>
<div style="background:white">
  <div id="overall">
    <div class="TabNav-text">
      <div class="TabNav-title">关于我们</div>
      <div class="TabNav-dot"></div>
      <p class="TabNav-p">About Us</p>
    </div>
    <div class="about" v-for="(abo,index) in About" :key="index">
      <div class="about-l">
        <img :src="abo.img" alt>
        <div class="about-ls">{{abo.title}}</div>
      </div>
      <div class="about-r">
        <div class="about-rs">
            <p class="about-content">{{abo.content}}</p>
        </div>
        <div class="about-more">
          <a  style="color:#5c5a5a" @click="$router.push({name:abo.router,params:{message:abo.title}})"><p>查看更多</p></a>
          <i class="fa fa-angle-right"></i>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            About:[
                {router:'AboutUs',title:'中心介绍',img:require('@/assets/images/about_1.jpg'),content:'东北亚创新金融资产交易中心(以下简称 "东金中心" ) 是在吉林省人民政府的指导和大力支持下，于2014年11月7日省政府批准设立的综合性金融资产交易平台，是由长春市国资委下属长发金融控股有限公司、申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。申夏资产共同出资组建的综合性金融资产交易平台，申夏资产共同出资组建的综合性金融资产交易平台，归属地方金融工作办公室监管。归属地方金融工作办公室监管。'},
                {router:'law',title:'法律申明',img:require('@/assets/images/about_2.jpg'),content:'本声明包含网络浏览及使用的有关条款。在您浏览及使用本网站及相关网页（以下简称“本网站”）前，请您务必仔细阅读并透彻理解本声明，您可以选择不浏览、不使用本网站及相关网页，如果您浏览及使用本网站及相关网页，您的行为均表示认可并接受本声明全部内容。一、本网站旨在向客户和其他公众介绍吉林东北亚创新金融资产交易中心有限公司（以下“简称东金中心”）提供的产品与服务，以及与行业相关的其他信息。二、本网站关于东金中心会员或其发布的相关金融产品（包括但不限于公司的基本资料、联系人及联络信息，金融产品或金融服务的描述和说明等相关图片、视讯及文件等）的信息均由会员自行提供，会员依法应对其提供的任何信息承担全部责任。三、任何单位或个人认为本网站网页内容（包括但不限于东金中心会员发布的金融商品信息或金融服务信息）可能涉嫌侵犯其合法权益，应该及时向东金中心提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。东金中心在收到上述法律文件后，经过核实将会依法尽快移除相关涉嫌侵权的内容。'},
                {router:'problem',title:'常见问题',img:require('@/assets/images/about_3.jpg'),content:'1、东北亚创新金融资产交易中心是一家怎样的公司？东北亚创新金融资产交易中心（以下简称东金中心），于2014年11月7日批准设立。在省金融办大力推动下设立，注册资本2亿元整。2、电子合同有效吗？根据我国合同法第十条“当事人订立合同，有书面形式,口头形式和其他形式。”第十一条“书面形式是指合同书，信件和数据电文（包括电报，电传，传真，电子数据交换和电子邮件）等可以有形地表现所载内容的形式。'}
            ]
        }
    },
    mounted(){
      $(".about-content").each(function(){
       var len=$(this).text().length;   //当前HTML对象text的长度
       if(len>180){
           var str="";
           str=$(this).text().substring(0,180)+"....";  //使用字符串截取，获取前30个字符，多余的字符使用“......”代替
           $(this).html(str);                   //将替换的值赋值给当前对象
       }
    })
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
.about .about-r::before,.about .about-r::after{
  content: '';
  position: absolute;
  transition: 0.3s;
   background: $second;
}

//线条选中特效
.about:nth-of-type(2):hover .about-r::before{
    width: 20%;
}
.about:nth-of-type(2):hover .about-r::after{
    height: 40%;
}
.about:nth-of-type(2) .about-r::before{
    width: 0%;
    height: 2px;
    right: -20px;
}
.about:nth-of-type(2) .about-r::after{
    width: 2px;
    height: 0%;
    top: -20px;
    right: 0;
}

.about:nth-of-type(3):hover .about-r::before{
    height: 60%;
}
.about:nth-of-type(3):hover .about-r::after{
    height: 60%;
}
.about:nth-of-type(3) .about-r::before{
    width: 2px;
    height: 0%;
    left:0px;
    bottom: 70px;
}
.about:nth-of-type(3) .about-r::after{
    width:2px;
    height: 0%;
    top: 70px;
    left: 0;
}

.about:nth-of-type(4):hover .about-r::before{
    width: 20%;
}
.about:nth-of-type(4):hover .about-r::after{
    height: 40%;
}
.about:nth-of-type(4) .about-r::before{
    width: 0%;
    height: 2px;
    bottom: 0px;
    right: -20px;
}
.about:nth-of-type(4) .about-r::after{
    width: 2px;
    height: 0%;
    bottom: -20px;
    right: 0;
}

//使第二块标题，内容交换位置
.about:nth-of-type(3) {
  .about-l {
    position: absolute;
    right: 0;
  }
  .about-r {
    position: absolute;
    left: 0;
  }
}
.about {
  width: $TabWidth;
  height: 250px;
//   background: yellow;
  display: flex;
  position: relative;
   &:hover img {
      transform: scale(1.5);
      filter: blur(3px);
    }
  .about-l {
    width: 50%;
    height: 100%;
    // background: blue;
    overflow: hidden;
    position: relative;
    cursor: default;
    img {
      width: 110%;
      transition: 0.5s;
    }
    .about-ls {
      width: 100%;
      height: 100%;
      background: $cover;
      position: absolute;
      top: 0;
      line-height: 250px;
      text-align: center;
      font-size: 25px;
      font-weight: 500;
      color: $white;
    }
  }
  .about-r {
    width: 50%;
    height: 100%;
    position: relative;
    .about-rs {
      width: 100%;
      height: 200px;
      p{
          padding: 10px 20px;
          font-size: 15px;
          line-height: 25px;
          text-indent: 2em;
          letter-spacing: 0.1em;
          color:$text;
      }
    }
    .about-more {
      width: 80px;
      margin-top: 20px;
      font-size: 14px;
      position: absolute;
      right: 20px;
      cursor: pointer;
      color: $text;
      p {
        transition: 0.5s;
      }
      &:hover p {
        color: $theme;
        text-decoration: underline;
      }
      &:hover i:nth-of-type(2){
          color: $theme;
          right: 0;
      }
      i {
        position: absolute;
        top: 2px;
        color: $shadow;
        transition: 0.5s;
      }
      i:nth-of-type(1) {
        right: 0;
      }
      i:nth-of-type(2) {
        right: 5px;
      }
    }
  }
}
</style>
