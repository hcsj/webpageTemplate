<template>
  <div>
    <div id="nav">
      <nav>
        <div class="parcel">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt>
          </div>
          <div class="nav">
            <!-- <h2>欢迎登录</h2> -->
            <router-link to="/">返回东金中心首页</router-link>
          </div>
        </div>
      </nav>
    </div>
    <form class="openAccount-con modifyPwd" style="height: 500px;">
      <div class="openAccount-title">修改登录密码</div>
      <div>
        <img src="@/assets/images/successImg.png" alt="" style="margin: 0 auto;margin-top: 250px;display:block"/>
        <div class="modify-success">密码修改成功，请用新密码进行登录</div>
        <div class="auto-skip"><span>3</span>秒后自动跳转</div>
      </div>
    </form>


    <!--底部-->
    <vFooter :class="'foot'"></vFooter>
  </div>
</template>

<script>
  import footer from '@/components/pc/common/FootNav'


  export default {
        name: "modify-success",
        data() {
          return {

          }
        },
        components : {
          vFooter:footer
        },
        created(){
          this.toLogin();
          // console.log(this.$route.name)
        },
        methods:{
          toLogin:function () {
            var timer = "";
            var seconds = 3;
            var _this = this
            // console.log(_this)
            timer = setInterval(function(){
              seconds--;
              $(".auto-skip span").html(seconds);
              if(seconds <= 1){
                clearInterval(timer);
                _this.$router.push({
                  name:'login'
                })
              }
            },1000)
          }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../assets/css/pc/blendent.scss";
#nav {
  width: 100%;
  height: 100px;
  left: 0;
  z-index: 9999;
  position: absolute;
  background: $white;
  min-width: 1250px;
}

nav {
  width: 100%;
  line-height: 65px;
  text-align: center;
  background: $white;
  a {
    color: $text;
    position: absolute;
    top: 20px;
    right: 50px;
  }
}
.parcel {
  width: 60%;
  height: 65px;
  position: relative;
}
.logo {
  width: 150px;
  height: 60px;
  position: absolute;
  left: 3%;
  top: 30%;
  text-align: center;
}
.logo img {
  height: 100%;
}
.nav {
  width: 80%;
  height: 65px;
  position: absolute;
  right: 0;
  h2 {
    font-weight: 200;
    text-align: left;
    font-size: 20px;
    line-height: 100px;
  }
}
#footer.foot {
  position: absolute;
  bottom: 0;
  min-width: 1250px;
}
.errorMsg{
  height: 20px;
  font-size: 13px;
  color: red;
  padding-left: 25px;
}

/*修改登录密码*/
.modifyPwd-con{
	width:300px;
	margin:0 auto;
  margin-top:61px;
}
.modifyPwd-con .phoneNum{
	font-size: 18px;
	margin-bottom: 2px;
	text-align: center;
}
.modifyPwd-con .inputBox{
	width: 301px;
	height: 41px;
	border:1px solid #e9e9e9;
	margin-top: 20px;
	padding-top: 0.5px;
	padding-right: 0.5px;
}
.modifyPwd-con .inputBox label{
	height: 38px;
	line-height: 38px;
	margin: 0;
	padding: 0 14px 0 11px;
	width:auto;
}
.modifyPwd-con .inputBox input,.modifyPwd-con .btn{
	border: 0!important;
	margin: 0!important;
	padding: 0;
}
.modifyPwd-con .inputBox .first-input{
	width: 134px;
	height: 38px;
	border-right: 1px solid #e4e4e4!important;
}
.modifyPwd-con .inputBox .second-input,.modifyPwd-con .inputBox .third-input,.modifyPwd-con .inputBox .phoneInput{
	width:231px;
	height: 38px;
}
.modifyPwd-con .inputBox .identifyCode{
	width: 97px;
	height: 38px;
	line-height: 38px;
	color: #01c0ff;
	text-align: center;
}
.modifyPwd-con .tip{
	color: #b0b0b0;
	line-height: 14px;
	margin:11px 0 22px 0;
}
.modifyPwd-con .btn{
	width: 301px;
}
.modify-success{
	color: #59b647;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	line-height: 20px;
	margin-bottom: 28px;
	margin-top: 25px;
}
.auto-skip{
	width: 226px;
	height: 50px;
	line-height: 50px;
	border: 1px solid #cecece;
	text-align: center;
	margin: 0 auto;
}
</style>
