
 <!-- 案例介绍 子组件 -->
<template>
  <div>
    <div class="news-contents" v-for="(cas,index) in Case" :key="index" :style="{'animation-duration': + 0.5 + index/5 + 's'}" @click="chuan(index)">
      <div class="news-contentsl">
        <h2>13</h2>
        <p class="news-p">{{cas.data}}</p>
      </div>
      <div class="news-contentsr">
        <p>{{cas.text}}</p>
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
      Case: [
        {
          data: "2018/11",
          text: "吉林东北亚创新金融资产交易中心金融资产交易细则"
        }
      ]
    };
  },
   methods:{
    chuan(id,message){
      this.$router.push({
        name:'BusinessCase',
        params:{
          id:id,
          message:'案例介绍'
        }
      })
    },
    //截取7条信息放在首页当中
    cutOut(){
      this.Case = this.Case.splice(0,7)
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

