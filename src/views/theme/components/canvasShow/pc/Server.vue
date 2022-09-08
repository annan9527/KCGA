<template>
  <div class="box1">
    <div class="title">
      <div class="tex">为您服务</div>
    </div>
    <div class="mian">
      <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_32.jpg" alt=""></img>
       </div>
        <div class="text">
           部门电话
        </div>
      </div>
     <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_34.jpg" alt=""></img>
       </div>
        <div class="text">
           考试抽签
        </div>
      </div>
      <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_36.jpg" alt=""></img>
       </div>
        <div class="text">
         信息安全
        </div>
      </div>
      <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_38.jpg" alt=""></img>
       </div>
        <div class="text">
           信息安全
        </div>
      </div>
      <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_40.jpg" alt=""></img>
       </div>
        <div class="text">
           法律法规
        </div>
      </div>
      <div class="one">
       <div class="pic">
         <img src="@/assets/img/2_标题红_42.jpg" alt=""></img>
       </div>
        <div class="text">
           警辅工具
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box1 {
  margin-bottom: 22px;
  width: 1000px;
  height: 136pxpx;
  background: #ffffff;
  .title {
    background: linear-gradient(0deg, #e9f6ff 0%, #ffffff 100%);
    box-shadow: 0px -2px 0px 0px #0055d6;
    height: 36px;
    width: 100%;
    line-height: 36px;
    padding-left: 20px;
    .tex {
      font-size: 5px;
      font-family: SimSun;
      font-weight: 400;
      color: #0055d6;
    }
  }
  // 内容
  .mian {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
   
    .one {
      width: 130px;
      height: 56px;
      background: #e9f6ff;
      border-radius: 5px;
      text-align: center;
      line-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      .pic {
        line-height: 36px;
        height: 36px;
        width: 36px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        line-height: 36px;
        height: 36px;
        font-size: 8px;
        font-family: SimSun;
        font-weight: 400;
        color: #0a5880;
      }
    }
  }
}
</style>