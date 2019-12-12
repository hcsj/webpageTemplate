<template>
<div style="background:#f6f7f8">
  <div id="overall">
    <div class="TabNav-text">
      <div class="TabNav-title">合作伙伴</div>
      <div class="TabNav-dot"></div>
      <p class="TabNav-p">Cooperative Partner</p>
    </div>
    <div id="partner">
      <div class="partners">
      <li class="partner" v-for="(par,index) in Partner" :key="index">
        <img :src="par.img" alt>
      </li>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Partner: [
        { img: require("@/assets/images/partner_1.png") },
        { img: require("@/assets/images/partner_2.png") },
        { img: require("@/assets/images/partner_3.png") },
        { img: require("@/assets/images/partner_4.png") },
        { img: require("@/assets/images/partner_5.png") },
        { img: require("@/assets/images/partner_6.png") },
        { img: require("@/assets/images/partner_7.png") },
        { img: require("@/assets/images/partner_8.png") },
        { img: require("@/assets/images/partner_9.png") },
        { img: require("@/assets/images/partner_10.png") },
        { img: require("@/assets/images/partner_11.png") },
        { img: require("@/assets/images/partner_12.png") },
        { img: require("@/assets/images/partner_13.png") },
        { img: require("@/assets/images/partner_14.png") },
        { img: require("@/assets/images/partner_15.png") },
        { img: require("@/assets/images/partner_16.png") },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//引入配色
@import "../../../assets/css/pc/blendent.scss";
//引入TabNav公共标题
@import "../../../assets/css/pc/tabnav_title.scss";
#overall {
   width: 80%;
  padding-bottom: 60px;
  #partner {
    width: $TabWidth;
    height: 105px;
    overflow: hidden;
    .partners{
      width:300%;
      height: 100%;
      // background: yellow;
      display: flex;
      animation: move 30s linear   infinite  alternate;
      &:hover{
        animation-play-state: paused;
      }
    }@keyframes move {
      0%{
        transform: translateX(0%)
      }
      100%{
        transform: translateX(-78%)
      }
    }
    .partner {
      width: 100%;
      height: 100px;
      margin: 0 5px;
      border: 1px solid #ccc;
      img {
          height: 100%;
        transform: scale(1);
      }
    }
  }
}
</style>
