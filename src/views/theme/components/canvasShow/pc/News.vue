<template>
  <div>
    <div class="box">
      <div class="banner">
        <div class="top">
          <img src="@/assets/img/banner/banner.jpg" alt="" />
          <div class="text">
            习近平“典”赞英雄｜四万万人齐蹈厉，同心同德一戎衣...
          </div>
          <!-- <div class="more">
            <img src="@/assets/img/banner更多.png" alt="" />
          </div> -->
          <div class="left">
            <img src="@/assets/img/banner_left.png" alt="" />
          </div>
          <div class="rigth">
            <img src="@/assets/img/banner_right.png" alt="" />
          </div>
        </div>
        <div>
          <ul class="button">
            <li :class="{ active: 'true' }">
              <img src="@/assets/img/banner/2_标题红_07.jpg" alt="" />
            </li>
            <li><img src="@/assets/img/banner/2_标题红_09.jpg" alt="" /></li>
            <li><img src="@/assets/img/banner/2_标题红_11.jpg" alt="" /></li>
            <li><img src="@/assets/img/banner/2_标题红_13.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
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
              <a href="#"
                >公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a
              >
            </p>
            <span>2022-04-07</span>
          </div>
          <div>
            <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
            <span>2022-04-08</span>
          </div>
          <div>
            <p>
              <a href="#"
                >公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a
              >
            </p>
            <span>2022-04-07</span>
          </div>
          <div>
            <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
            <span>2022-04-08</span>
          </div>
          <div>
            <p>
              <a href="#"
                >公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a
              >
            </p>
            <span>2022-04-07</span>
          </div>
          <div>
            <p><a href="#">浙江衢州市浙江加快推进公安政务服务数字化改革…</a></p>
            <span>2022-04-08</span>
          </div>
          <div>
            <p>
              <a href="#"
                >公安部牵头成立打击拐卖妇女儿童犯罪专项行动领导小组…</a
              >
            </p>
            <span>2022-04-07</span>
          </div>
        </div>
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
.box {
  width: 1000px;
  margin-bottom: 22px;
  height: 400px;
  background: #ffffff;
  display: flex;
  .banner {
    flex: 1;
    margin-right: 13px;
    .top {
      height: 300px;
      margin-bottom: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .text {
        padding-left: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        bottom: 0px;
        position: absolute;
        height: 20px;
        width:100% ;
        font-size: 13px;
        font-family: SimSun;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }
      .more {
        width: 14px;
        height: 14px;

        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        right: 10px;
      }
      .left {
        position: absolute;
        left: 31px;
        top: 50%;
        transform: translateY(-50%);
      }
      .rigth {
        position: absolute;
        right: 31px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .button {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      li {
        margin-right: 5px;
        // border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
        }
        &.active {
          // border-radius: 5px;
          border: 2px solid rgb(47, 47, 125);
        }
      }
    }
  }
  .news {
    flex: 1;
    .topnews {
      height: 66px;
      background-color: rgb(255, 237, 224);
      position: relative;
      display: flex;
      justify-content: center;
      align-content: center;

      .title {
        background-image: url("../../../../../assets/img/要闻_标题.png");
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
        color: #fd1926;
      }
    }
    .newsText {
      padding-bottom: 20px;
      height: 334px;
      white-space: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        padding: 10px 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>