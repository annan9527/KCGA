/**
    图片要闻 
*/
<template>
  <div class="box1">
    <div class="news">
      <div class="topnews">
        <div class="title"></div>
        <div class="text">
          <div style="margin-bottom: 5px; margin-top: 15px">
            深入贯彻习近平总书记关于党的自我革命的战略思想
          </div>
          <div style="padding-left: 40px">
            坚持不懈把全面从严管党治警向纵深推进...
          </div>
        </div>
      </div>
      <div class="newsText">
        <div>
          <p>
            <a href="#">公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a>
          </p>
          <span>2022-04-07</span>
        </div>
        <div>
          <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
          <span>2022-04-08</span>
        </div>
        <div>
          <p>
            <a href="#">公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a>
          </p>
          <span>2022-04-07</span>
        </div>
        <div>
          <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
          <span>2022-04-08</span>
        </div>
        <div>
          <p>
            <a href="#">公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a>
          </p>
          <span>2022-04-07</span>
        </div>
        <div>
          <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
          <span>2022-04-08</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <img src="@/assets/img/two/banner大图.jpg" alt="" />
        <div class="text">
          习近平“典”赞英雄｜四万万人齐蹈厉，同心同德一戎衣...
        </div>
        <!-- <div class="more">
          <img src="@/assets/img/two/1.jpg" alt="" />
        </div>
        <div class="lf">
          <img src="@/assets/img/two/2.jpg" alt="" />
        </div>
        <div class="rg">
          <img src="@/assets/img/two/3.jpg" alt="" />
        </div> -->
      </div>
      <div>
        <ul class="right">
          <li :class="{ active: 'true' }">
            <img src="@/assets/img/two/1.jpg" alt="" />
          </li>
          <li><img src="@/assets/img/two/2.jpg" alt="" /></li>
          <li><img src="@/assets/img/two/3.jpg" alt="" /></li>
          <li><img src="@/assets/img/two/4.jpg" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentContent: Object,
  },
};
</script>

<style lang="scss" scoped>
.box1 {
  margin-bottom: 22px;
  width: 1000px;
  height: 300px;
  background: rgba(255, 255, 255, 1);
  display: flex;
    .news {
    flex: 1;
    margin-right: 15px;
    .topnews {
      height: 66px;
      background-color: rgba(233, 246, 255, 1);
      position: relative;
      display: flex;
      justify-content: center;
      align-content: center;

      .title {
        // background-image: url("../../../../../assets/img/要闻_标题.png");
        position: absolute;
        top: 0;
        left: 0;
        width: 33px;
        height: 33px;
        background-size: 100% 100%;
      }
      .text {
        width: 383px;
        height: 33px;
        font-size: 16px;
        font-family: SimSun;
        font-weight: 400;
        color: rgba(16, 50, 137, 1);
      }
    }
    .newsText {
      padding-bottom: 102px;
      height: 334px;
      white-space: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: rgb(62, 62, 62);
      div {
        padding: 10px 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .banner {
    display: flex;
    flex: 1;
    // margin-left: 10px;
    .left {
      height: 300px;
      width: 400px;
      margin-bottom: 10px;
      position: relative;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
      .text {
        bottom: 20px;
        line-height: 20px;
        position: absolute;
        left: 10px;
        height: 20px;
        font-size: 13px;
        font-family: SimSun;
        font-weight: 400;
        color: #ffffff;
        line-height: 31px;
      }
      .more {
        width: 14px;
        height: 14px;

        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        right: 10px;
      }
      .lf {
        position: absolute;
        left: 31px;
        top: 50%;
        transform: translateY(-50%);
      }
      .rg {
        position: absolute;
        right: 31px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .right {
      height: 80px;
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
       
        // border-radius: 5px;
        img {
          width: 100%;
          height: 72px;
        }
        &.active {
          // border-radius: 5px;
          border: 2px solid rgb(47, 47, 125);
        }
      }
    }
  }
}
</style>