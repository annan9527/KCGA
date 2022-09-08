/**
    为您服务
 */
<template>
  <div class="Tbox">
    <div class="title">
        <span>为您服务</span>
    </div>
    <div class="sixtools">
        <div>
            <img src="@/assets/img/two/其他_31.jpg" alt="">
            <p>部门电话</p>
        </div>
        <div>
            <img src="@/assets/img/two/其他_33.jpg" alt="">
            <p>考试抽签</p>
        </div>
        <div>
            <img src="@/assets/img/two/其他_35.jpg" alt="">
            <p>警用地理</p>
        </div>
        <div>
            <img src="@/assets/img/two/其他_37.jpg" alt="">
            <p>信息安全</p>
        </div>
        <div>
            <img src="@/assets/img/two/其他_39.jpg" alt="">
            <p>法律法规</p>
        </div>
        <div>
            <img src="@/assets/img/two/其他_41.jpg" alt="">
            <p>警辅工具</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Tbox {
  width: 1000px;
  height: 110px;
  background: url(../../../../../assets/img/two/为你服务BG.png) repeat;
  background-size: 100% 100%;
 
    .title{
        position: relative;
        font-size: .24rem;
        color: rgba(16, 50, 137, 1);
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .title::before{
        content: "";
        position: absolute;
        width: 100px;
        height: 1px;
        top: 50%;
        background-color: #ededed;
        left: 35%;
    }
    .title::after{
        content: "";
        position: absolute;
        width: 100px;
        height: 1px;
        top: 50%;
        background-color: #ededed;
        right: 35%;
    }
    .sixtools{
        width: 800px;
        // height: 40px;
        display: flex;
        justify-content: space-around;
        margin-left: 100px;

    }
    .sixtools div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .sixtools div img {
        width: 36px;
        height: 36px;
    }
    .sixtools div p{
        width: 50px;
        height: 20px;
        font-size: 4px;
        color: #2A313B;
        line-height: 21px;
    }
}
</style>