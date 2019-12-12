
<template>
  <!-- 下载专区 子组件 -->
  <div>
    <p class="isData" v-if="isDataShow">暂无数据</p>
    <div  class="news-contents" v-for="(dow,index) in Download" :key="index" :style="{'animation-duration': + 0.5 + index/5 + 's'}" @click="chuan(index)">
  
      <div class="news-contentsl">
        <h2>23</h2>
        <p class="news-p">{{dow.data}}</p>
      </div>
      <div class="news-contentsr">
        <p>{{dow.text}}</p>
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
      Download: [
        // {
        //   data: "2017/02",
        //   text: "机构会员入会申请书"
        // }
      ],
      isDataShow:false
    };
  },
  methods:{
    chuan(id,message){
      this.$router.push({
        name:'BusinessDownload',
        params:{
          id:id,
          message:'下载专区'
        }
      })
    },
    //截取7条信息放在首页当中
    cutOut(){
      this.Download = this.Download.splice(0,7)
    },
    //判断是否有数据
    isData(){
      if (this.Download.length) {
         console.log(111)
      }else{
        
      //  document.querySelector('.news-contents').innerHTML = "暂无数据"
     this.isDataShow = true
      
      }
    }
  },
  created(){
    this.cutOut()
  },
  mounted(){
    this.isData()
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../../assets/css/pc/blendent.scss";
@import "../../../../assets/css/pc/home_business.scss";
.isData{
  text-align: center;
  color: white;
  padding-top: 30px;
}
</style>
