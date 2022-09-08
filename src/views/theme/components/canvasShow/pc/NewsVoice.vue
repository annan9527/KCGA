/**
    新闻声音 
*/
<template>
  <div class="OuterBox">
    <div class="Box1">
      <div class="top">
        <div class="leftnews">
          <img src="@/assets/img/two/UP标题 icon/焦点新闻.png" alt="" />
          <strong>&nbsp; 焦点新闻</strong>
        </div>
        <div class="sound"><p>查看更多 ></p></div>
      </div>

      <div class="botton">
        <div class="left">
          <img src="@/assets/img/two/底部 (1).jpg" alt="" />
          <div>
            ●为切实做好安全防范教育，提高广大群众安全防范意识，民警深入田间地头开展安全防范宣传活动...
          </div>
        </div>
        <div class="right">
          <div class="rightTop">
            <div class="smallbox">
              <img src="@/assets/img/two/底部 (2).jpg" alt="" />
              <p>衢州市公安局禁毒大队女民警深入小学，开展以“珍爱生命...</p>
            </div>
            <div class="smallbox">
              <img src="@/assets/img/two/底部 (3).jpg" alt="" />
              <p>衢州市公安局禁毒大队女民警深入小学，开展以“珍爱生命...</p>
            </div>
          </div>
          <div class="rightBotton">
            <p>●省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            <p>●省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            <p>●省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
          </div>
        </div>
      </div>
    </div>

    <div class="Box2">
      <div class="top">
        <div class="leftnews">
          <img src="@/assets/img/two/UP标题 icon/媒体声音.png" alt="" />
          <strong>&nbsp; 媒体声音</strong>
        </div>
        <div class="sound"><p>查看更多 ></p></div>
      </div>

      <div class="botton">
        <div class="left">
          <img src="@/assets/img/two/底部 (5).jpg" alt="" />
          <div>
            ●为切实做好安全防范教育，提高广大群众安全防范意识，民警深入田间地头开展安全防范宣传活动...
          </div>
        </div>
        <div class="right2">
          <div class="rightText2">
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
            <div class="text">
              <img src="@/assets/img/two/播放.png" alt="" />
              <p>省公安厅召开全省公安机关视省公安厅召开全省公安机关视频...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Box3">
      <div class="worktop">
        <img src="@/assets/img/two/工作专栏/工作专栏.png" alt="">
        <strong>工作专栏</strong>
      </div>
      <div class="pic">
      <img src="@/assets/img/two/工作专栏/XX_03.png" alt="" />
      <img src="@/assets/img/two/工作专栏/XX_06.png" alt="" />
      <img src="@/assets/img/two/工作专栏/XX_08.png" alt="" />
      <img src="@/assets/img/two/工作专栏/XX_10.png" alt="" />
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.OuterBox {
  margin-bottom: 22px;
  margin-top: 22px;
  width: 1000px;
  height: 208px;
  display: flex;
  .Box1 {
    width: 350px;
    height: 208px;
    background: linear-gradient(0deg, #eff5ff 0%, #ffffff 100%);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14);
    margin-right: 15px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px -1px 0px 0px #e8e8e8;
    border-radius: 2px 2px 0px 0px;
    height: 30px;
    width: 100%;
    // margin-top: 10px;
    margin-left: 10px;
  }
  .top .leftnews {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .leftnews {
    color: #103289;
  }
  .sound {
    color: rgba(153, 153, 153, 1);
    margin-right: 20px;
  }
  .botton {
    display: flex;
  }
  .botton .left div {
    width: 120px;
    height: 87px;
    font-size: 3px;
    overflow: hidden;
    color: #b3b3b3;
    line-height: 13px;
    padding: 10px 5px;
  }
  .botton .left img {
    width: 120px;
    height: 80px;
    border-radius: 2px 2px 0px 0px;
  }
  .botton .left {
    display: flex;
    width: 130px;
    height: 170px;
    flex-direction: column;
    margin-left: 10px;
    background: #ffffff;
  }
  .right {
    margin-left: 20px;
  }

  .rightTop {
    display: flex;
    width: 190px;
    height: 100px;
    justify-content: space-between;
  }
  .rightTop .smallbox {
    width: 100px;
    height: 100px;
    background: #ffffff;
    border-radius: 2px;
  }
  .rightTop .smallbox img {
    width: 80px;
    height: 50px;
  }
  .smallbox p {
    width: 80px;
    height: 60px;
    font-size: 2px;
    color: #141516;
  }
  .rightBotton {
    width: 190px;
    height: 50px;
    margin-top: 20px;
  }
  .rightBotton p {
    width: 190px;
    height: 13px;
    font-size: 2px;
    overflow: hidden;
    margin-top: 5px;
  }

  .Box2 {
    width: 350px;
    height: 208px;
    background: linear-gradient(0deg, #eff5ff 0%, #ffffff 100%);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14);
    margin-right: 15px;
  }
  .right2 {
    height: 170px;
    width: 190px;
    margin-left: 10px;
  }
  .rightText2 {
    width: 180px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .rightText2 .text {
    display: flex;
    width: 180px;
    height: 13px;
    overflow: hidden;
  }
  .rightText2 .text img {
    margin-right: 8px;
  }
  .rightText2 .text p {
    margin-bottom: 20px;
  }

.Box3{
  width: 280px;
  height: 208px;
  background: url(../../../../../assets/img/two/工作专栏.png);
}
.Box3 .worktop {
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 100px;
  justify-content: space-between;
}
.Box3 .worktop strong{
  font-size: 14px;
  color: rgba(16, 50, 137, 1);
}
.Box3 .worktop .pic {
  width: 100px;
  height: 170;
}
.Box3 .pic img {
  height: 35px;
  width: 240px;
  margin-left: 18px;
  margin-bottom: 5px;

}

}
</style>