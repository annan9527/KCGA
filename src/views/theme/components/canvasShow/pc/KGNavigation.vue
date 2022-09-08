/**
    柯公导航 
*/
<template>
  <div class="BlueMsg">
    <!-- 左侧 -->
    <div class="left">
      <div>
        <img src="@/assets/img/two/卡通.png" alt="" />
      </div>
      <div>
        <el-input
          prefix-icon="el-icon-user"
          placeholder="用户"
          autocomplete="off"
          style="width: 130px; margin: 5px;margin-right: 10px;"
        />
        <el-input
          prefix-icon="el-icon-unlock"
          placeholder="密码"
          autocomplete="off"
          style="width: 130px;  margin-right: 10px;"
        />
        <el-button
          type="primary"
          style="
            width: 60px;
            height: 40px;
            background: #2363fc;
            box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.2);
          "
          >
          登录 >
          </el-button
        >
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
            <div>
                <p>柯城公安</p>
                <p>警 情 通</p>
            </div>
            <div>
                <p>公安业务</p>
                <p>导        航</p>
            </div>
            <div>
                <p>信息资源</p>
                <p>应用平台</p>
            </div>
            <div>
                <p>浙江公安合</p>
                <p>成作战平台</p>
            </div>
            <div>
                <p>派 出 所</p>
                <p>门户平台</p>
            </div>
            <div>
                <p>公安业务</p>
                <p>应用平台</p>
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
.BlueMsg {
  margin-bottom: 22px;
  width: 1000px;
  height: 70px;
  background: url(../../../../../assets/img/two/导航bg.jpg) no-repeat;
  background-position: center;
  // background: linear-gradient(0deg, #3F85FF 0%, #4DA9F4 100%);
  display: flex;
  .left img {
    height: 53px;
    width: 56px;
    margin: 7px 10px 5px 18px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    height: 40px;
    width: 500px;
    margin: 12px 20px 20px 50px;
    align-items: center;
  }
    .right div {
        flex: 1;
        // margin-right: 20px;
        color: #ffffff;
        text-align: center;
    }
    .right div p {
        margin-top: 10px;
    }
}
</style>