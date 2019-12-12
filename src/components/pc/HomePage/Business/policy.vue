
<template>
 <!-- 政策法规 子组件 -->
  <div>
    <div class="news-contents" v-for="(pol,index) in Policy" :key="index" :style="{'animation-duration': + 0.5 + index/5 + 's'}" @click="chuan(index)">
      <div class="news-contentsl">
        <h2>{{pol.day}}</h2>
        <p class="news-p">{{pol.data}}</p>
      </div>
      <div class="news-contentsr">
        <p>{{pol.text}}</p>
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
      Policy: [
        {
           data: "2017/02/22",
          text: "中国人民银行关于促进互联网金融健康发展的指导意见",
        },
        {
          data: "2017/02/22",
          text: "中国银监会关于2015年小微企业金融服务工作的指导意见",
        },
        {
         data: "2017/02/22",
          text: "银监会进一步规范银行业金融机构信贷资产转让业务的通知",
        }
      ]
    };
  },
  methods:{
    chuan(id,message){
      this.$router.push({
        name:'BusinessPolicy',
        params:{
          id:id,
          message:'政策法规'
        }
      })
    },
    //截取7条信息放在首页当中
    cutOut(){
      this.Policy = this.Policy.splice(0,7)
       for (let i = 0; i < this.Policy.length; i++) {
       this.Policy[i].day=this.Policy[i].data.substring(8,10)
        this.Policy[i].data = this.Policy[i].data.substring(0,7)
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

