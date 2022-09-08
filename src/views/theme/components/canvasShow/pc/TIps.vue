<template>
  <div>
    <span class="box">
      <div class="heard">
        <img src="@/assets/img/two/UP标题 icon/温馨提示.png" alt="" />
        <p>温馨提示</p>
      </div>
      <div class="content">
        <p>关于我局民警、辅警意外伤害保险的通知</p>
        <p>（需要关注：全警）（2022-1-7）</p>
        <p>
          为落实民警、辅警购车优惠，经与浙江军悦实业集团有限公司协商，达成在该集团公司旗下各品牌4S店购买车辆协议、2022年1月7日至2022年4月7日期间……
        </p>
      </div>
      <div class="bottom">
        <p>查看更多</p>
        <img src="@/assets/img/two/more.png" alt="" />
      </div>
    </span>
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
  margin-top: 22px;
  margin-bottom: 22px;
  margin-right: 10px;
  display: block;
  width: 240px;
  height: 200px;
  border-radius: 2px;
  overflow: hidden;
  background: linear-gradient(0deg, #eff5ff 0%, #ffffff 100%);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 0px 0px #103289;
  .heard {
    width: 241px;
    height: 31px;
    background: linear-gradient(0deg, #e9f6ff 0%, #ffffff 100%);
    border-top: 2px solid #0055d6;
    font-size: 13px;
    font-family: SimSun;
    font-weight: 700;
    color: #0055d6;
    display: flex;
    align-items: center;
  }
  .heard img {
    margin-left: 90px;
    margin-right: 5px;
  }
  .content {
    width: 220px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 10px;
  }
  .content {
    color: rgba(16, 50, 137, 1);
  }

  .bottom {
    display: flex;
    width: 180px;
    height: 30px;
    background: #e8f0fc;
    border: 1px solid #deeafc;
    border-radius: 2px;
    align-items: center;
    margin-left: 30px;
  }

  .bottom img {
    width: 7px;
    height: 7px;
    margin-left: 10px;
  }

  .bottom p {
    margin-left: 70px;
  }
}
</style>