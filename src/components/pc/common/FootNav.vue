<template>
  <div class="footNav">
    <div id="wave" :style="`height:${waveAllHeight}px;background:${waveBck}`">
      <div class="wave-box">
        <canvas id="wave1"></canvas>
        <canvas id="wave2"></canvas>
        <canvas id="wave3"></canvas>
      </div>
    </div>
    <div class="content">
      <div class="c-t">
        <div class="c-t-l">
          <section class="nav">
            <span>交易规则</span> |
            <span>政策法则</span> |
            <span>常见问题</span> |
            <span>关于我们</span>
          </section>
          <p>客服电话: 0439-6660660</p>
          <p>工作日: 9:00 - 18:00</p>
        </div>
        <div class="c-t-r">
          <section>
            <div class="QRCode">img</div>
            <p>下载安卓APP</p>
          </section>
          <section>
            <div class="QRCode">img</div>
            <p>下载苹果APP</p>
          </section>
          <section>
            <div class="QRCode">img</div>
            <p>微信公众号</p>
          </section>
        </div>
      </div>
      <div class="c-b">
        <section>
          <p>吉林省白山市浑江大街213号经济开发区管委会202室 | 电话: 0439-6660660 | 传真: 0439-6666525 | 邮箱: djzx@neafex.com</p>
          <p>Copyright@ 2017 吉林东北亚创新金融资产交易中心有限公司 版权所有 备案/许可证号: 吉ICP备15007119号</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
  waveBck:{default:'white'}
  },
  data() {
    return {
      waveAllHeight: 400, //波浪的整体高度
      waveCount: 4, //波浪个数
      waveHeight: 15 //波浪起伏高度
    };
  },
  mounted() {
    this.wavePlay("wave1", 140, "hsl(200, 97%, 61%, 0.6)", 1500);
    this.wavePlay("wave2", 140, "hsl(180, 97%, 61%, 0.6)", 3000);
    this.wavePlay("wave3", 140, "hsl(177, 67%, 44%, 0.6)", 2500);
  },
  methods: {
    //  * 底部波浪
    //  * @param $canvasID     canvasID
    //  * @param $progress     波浪位置的高度
    //  * @param $maveColor    波浪颜色
    //  * @param $time         运动周期
    //
    //波浪运动动画
    wavePlay($canvasID, $progress, $maveColor, $time) {
      let _this = this;
      let waveWidth = 3300, //波浪长度
        offset = 0,
        waveHeight = _this.waveHeight, //波浪起伏高度
        waveCount = _this.waveCount, //波浪个数
        startX = -1000,
        startY = 212, //canvas 高度
        progress = $progress, //波浪位置高度
        d2 = waveWidth / waveCount, //单个波浪的宽度
        d = d2 / 2,
        hd = d / 2,
        c = document.getElementById($canvasID),
        ctx = c.getContext("2d");
      c.width = 3920; //画布宽度
      c.height = _this.waveAllHeight; //画布高度
      function move() {
        offset -= 5;
        if (-1 * offset === d2) {
          offset = 0;
        }
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle = $maveColor; //画布填充色
        ctx.beginPath();
        let offsetY = startY - progress;
        //绘制贝塞尔曲线
        ctx.moveTo(startX - offset, offsetY); //开始点
        for (let i = 0; i < waveCount; i++) {
          let dx = i * d2;
          let offsetX = dx + startX - offset;
          //   quadraticCurveTo(1,1,2,2) 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。(1,1控制点，2,2结束点)
          ctx.quadraticCurveTo(
            offsetX + hd,
            offsetY + waveHeight,
            offsetX + d,
            offsetY
          );
          ctx.quadraticCurveTo(
            offsetX + hd + d,
            offsetY - waveHeight,
            offsetX + d2,
            offsetY
          );
        }
        ctx.lineTo(startX + waveWidth, 3000);
        ctx.lineTo(startX, 3000);
        ctx.fill();
        setTimeout(move, $time / 60); //速度
      }

      move();
    }
  }
};
</script>

<style lang="scss" scoped>
.footNav {
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
#wave {
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  // background: transparent;
  h1 {
    text-align: center;
    color: white;
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase; //转大写
    line-height: 330px;
  }
}
.wave-box {
  //   transform: scaleY(-1); //翻转波浪位置
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: -1;
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.content {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  //   background: red;
  .c-t {
    height: 180px;
    // background: blue;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: white;
    padding: 20px 0;
    border-bottom: 2px dashed rgba(255, 255, 255, 0.671);
    .c-t-l {
      text-align: left;
      padding: 10px 0;
      .nav {
        margin-top: 10px;
        cursor: default;
        span {
          display: inline-block;
          padding: 5px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      p {
        margin: 10px 5px;
      }
    }
    .c-t-r {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: white;
      cursor: default;
      &:hover section {
        opacity: 0.2;
      }
      section {
        transition: 0.5s;
        border: 2px dashed transparent;
        margin-left: 10px;
        padding: 10px;
        &:hover {
          opacity: 1 !important;
          border: 2px dashed white;
        }
      }
      .QRCode {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        background: rgb(41, 230, 243);
      }
      p {
        text-align: center;
        padding-top: 5px;
      }
    }
  }
  .c-b {
    height: 100px;
    color: white;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      padding: 5px;
    }
  }
}
</style>