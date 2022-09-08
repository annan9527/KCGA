<template>
  <span class="box">
    <div class="heard">
      <div class="title">
        <span>{{ this.componentContent.txt[0].title }}</span>
      </div>
      <div
        class="more"
        style="width: 70px; height: 15px; color: rgba(153, 153, 153, 1)"
        >
        <span>查看更多</span>
        <img src="@/assets/img/two/查看更多 BT icon.png" alt="" />
      </div>
    </div>
    <div class="content">
      <p><a href="">● 施以打防治并举“组合拳”，浙江严打严治枪...</a></p>
      <p><a href="">● 党委理论学习中心组学习《反有组织犯罪法》...</a></p>
      <p><a href="">● 施以打防治并举“组合拳”，浙江严打严治枪爆...</a></p>
      <p><a href="">● 党委理论学习中心组学习《反有组织犯罪法》...</a></p>
      <p><a href="">● 施以打防治并举“组合拳”，浙江严打严治枪爆...</a></p>
      <p><a href="">● 党委理论学习中心组学习《反有组织犯罪法》...</a></p>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    componentContent: Object,
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 22px;
  margin-right: 10px;
  display: block;
  width: 240px;
  height: 200px;
  border-radius: 2px;
  overflow: hidden;
  background: linear-gradient(0deg, #eff5ff 0%, #ffffff 100%);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14);
  .heard {
    padding-left: 10px;
    width: 241px;
    height: 31px;
    font-size: 13px;
    font-family: SimSun;
    font-weight: 700;
    color: #0055d6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .heard::before {
    content: "";
    position: absolute;
    width: 97%;
    height: 1px;
    top: 15%;
    background-color: #ededed;
    margin-left: -13px;
  }
  .tile{
    margin-top: 5px;
  }
  .title::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 15px;
    // top: 50%;
    background-color: #103289;
    left: 0%;
  }
  .more span {
    margin-right: 5px;
  }
  .content {
    width: 241px;
    height: 169px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .content p {
    width: 240px;
    height: 13px;
    overflow: hidden;
    color: #a0a0a0;
  }
}
</style>