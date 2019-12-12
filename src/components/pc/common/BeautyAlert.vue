<template>
  <div v-if="isShow">
    <div class="alertMask" ></div>
    <div class="alertBox" v-if="message.length <= 13">
      <div class="alertTop margin58">
        <div class="errorIcon"></div>
        <div class="messageCon margin29">{{message}}</div>
      </div>
      <input type="button" class="btn" value="确定" @click="callBackFunc()"/>
      <div class="closeIcon" onclick="closeDialogDiv()"></div>
    </div>
    <div class="alertBox" v-if="message.length <= 17 && message.length > 13">
      <div class="alertTop margin47">
        <div class="errorIcon"></div>
        <div class="messageCon margin17">
          <p>{{message.substring(0,7)}} </p>
          <p>{{message.substring(7)}}</p>
        </div>
        <input type="button" class="btn" value="确定" @click="callBackFunc()"/>
        <div class="closeIcon" @click="closeDialogDiv()"></div>
      </div>
    </div>
    <div class="alertBox" v-else>
      <div class="alertTop margin47">
        <div class="errorIcon"></div>
        <div class="messageCon margin17">
          <p>{{message.substring(0,8)}}</p>
          <p>{{message.substring(8)}}</p>
        </div>
        <input type="button" class="btn" value="确定" @click="callBackFunc()"/>
        <div class="closeIcon" @click="closeDialogDiv()"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "beauty-alert",
      props: {
        message:String,
        callBackFuncType:Number
      },
      data() {
        return {
          isShow:false
        }
      },
      methods:{
        closeDialogDiv(){
          this.isShow = false;
        },
        showDialogDiv(){
          this.isShow = true;
        },
        callBackFunc(){//调用父组件的定义的方法
          if(this.callBackFuncType){
            this.$parent.beautyAlertCallBack(this.callBackFuncType);
          }else{
            this.closeDialogDiv();
          }

        }
      }
    }
</script>

<style scoped>
  .alertMask{
    display: block;
  }
</style>
