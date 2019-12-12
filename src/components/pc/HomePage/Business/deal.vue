
 <!-- 交易规则 子组件 -->
<template>
  <div>
    <div class="news-contents" v-for="(dea,index) in Deal" :key="index" :style="{'animation-duration': + 0.5 + index/5 + 's'}"  @click="chuan(index)">
      <div class="news-contentsl">
        <h2>{{dea.day}}</h2>
        <p class="news-p">{{dea.data}}</p>
      </div>
      <div class="news-contentsr">
        <p>{{dea.text}}</p>
        <i class="fa fa-angle-right"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Deal: [
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
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心投资者适当性管理办法 》",
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
  methods:{
    chuan(id,message){
      this.$router.push({
        name:'BusinessIntroduction',
        params:{
          id:id,
          message:'交易规则'
        }
      })
    },
    //截取7条信息放在首页当中
    cutOut(){
      this.Deal = this.Deal.splice(0,7)
      for (let i = 0; i < this.Deal.length; i++) {
       this.Deal[i].day=this.Deal[i].data.substring(8,10)
        this.Deal[i].data = this.Deal[i].data.substring(0,7)
      }
    }
  },
  created(){
    this.cutOut()
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../../assets/css/pc/blendent.scss";
@import "../../../../assets/css/pc/home_business.scss";
</style>

