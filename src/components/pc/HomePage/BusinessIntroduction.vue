<!-- 业务介绍组件 -->
<template>
  <div style="background:white">
    <div id="overall">
      <div class="TabNav-text">
        <div class="TabNav-title">业务介绍</div>
        <div class="TabNav-dot"></div>
        <p class="TabNav-p">Business Introduction</p>
      </div>
      <div id="business">
        <div class="business-nav">
          <ul>
            <li v-for="(bus,index) in Business" :key="index">
              <router-link :to="bus.router">
                <span @click="Actived(index)" :class="['tab-button',{active:currenTab === bus.router}]">{{bus.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 最多储存8条 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currenTab: "/",
      Business: [
        { title: "交易规则", router: "/" },
        // { title: "案例介绍", router: "case" },
        { title: "政策法规", router: "policy" },
        // { title: "下载专区", router: "download" }
      ]
    };
  },
  methods:{
    Actived(index){
       this.currenTab = this.Business[index].router;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/icon/pc/font-awesome/css/font-awesome.min.css";
//引入配色
@import "../../../assets/css/pc/blendent.scss";
//引入TabNav公共标题
@import "../../../assets/css/pc/tabnav_title.scss";
a{
  color: $white;
}
#overall {
  width: 80%;
  padding-bottom: 30px;
}
.business-nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  // background: $cover;
}
#business {
  width: $TabWidth;
  height: 500px;
  background: $themer;
  // margin-bottom: 20px;
  .business-nav {
    width: 100%;
    height: 70px;
    background: rgb(85, 135, 241);
    li {
      font-weight: 600;
      //   flex-grow: 1;
      // box-sizing: border-box;
      display: flex;
      align-items: center;
      overflow: hidden;
      color: $white;
      span {
        display: block;
        position: relative;
        cursor: pointer;
        padding-bottom: 2px;
        &:hover::before {
          left: 0;
        }
      }
      span::before {
        content: "";
        width: 100%;
        height: 3px;
        background: $second;
        position: absolute;
        bottom: -3px;
        left: -100%;
        transition: 0.3s;
      }
    }
  }
}
.tab-button.active {
  border-bottom: 4px solid $second;
}
</style>
