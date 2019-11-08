<template>
  <div class="overall">
    <div class="logo-box">
      <img src="@/assets/img/logo.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.overall {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.logo-box {
  width: 153px;
  height: 78px;
  position: relative;
  &::before {
    content: "";
    width: 20px;
    height: 78px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: -10%;
    transform: skewX(-30deg);
    background: white;
    opacity: 0.5;
    animation: move 0.8s ease infinite;
  }
  @keyframes move {
    100% {
      left: 100%;
    }
  }
  // background: red;
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>