/**
    第二块导航条
*/
<template>
  <div class="canvasNavPersona1">
    <div class="canvasNavPersona2">
      <div>
        <div
          class="content"
          v-for="(item, index) in componentContent.txtRoute"
          :key="item.des"
        >
          <div class="personalText" v-if="item.des != ''">
            {{ item.des }}
          </div>
          <!-- 竖线 -->
          <div
            class="container"
            v-if="index != componentContent.txtRoute.length - 1"
          >
            |
          </div>
        </div>
        <!-- 搜索框部分 -->
        <div class="search">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-search">
          </el-input>
        </div>
      </div>
    </div>


    <div class="nav1">
      <div class="MSg1">
        <img src="@/assets/img/zhiban.png" />
        今日值班：
        <div></div><p>局领导：程科、杜尚龙</p>
        <div></div><p>大堂：叶建明</p>
        <div></div><p>办公室：陈金龙</p>
        <div></div><p>法制大队：蔡振华</p>
        <div></div><p>情报中心：杨学东、胡健</p>
      </div>
      <div class="Msg2">
        <p>当前日期:2022-08-01 1710 星期一&nbsp;&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPersonalNav",
  props: {
    componentContent: Object,
  },
 
};
</script>

<style lang="scss" scoped>
.canvasNavPersona1 {
  width: 1000px;
  margin-bottom: 22px;
  height: 100px;
  background: #103289;
  // border-radius: 3px 3px 0px 0px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 50px;
  padding-right: 20px;
  padding-left: 20px;

  .content {
    flex: 1;
    float: left;

    .personalText {
      width: 50px;
      font-size: 10px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      display: inline-block;
    }

    .container {
      margin: 0 10px;
      margin-left: 2px;
      width: 2px;
      height: 40px;
      color: #353955;
      display: inline-block;
    }
  }

  .search {
    float: right;
    width: 200px;
    // opacity: .2;
  }

  // .canvasNavPersona3 {
  // width: 980px;
  // height: 40px;
  // background: #3b6ecc 100%;
  // //   box-shadow: 0px 1px 1px 0px rgba(255,255,255,0.7);
  // font-size: 7px;
  // font-family: Microsoft YaHei;
  // //   font-weight: 400;
  // color: #ffffff;
  // line-height: 60px;

  // .content2 {
  //   // flex: 1;
  //   float: left;

  //   .persona2Text2 {
  //     //   margin: 0 10px;
  //     margin-left: 2px;
  //     width: 2px;
  //     height: 40px;
  //     color: #101436;
  //     display: inline-block;
  //   }

  //   .container2 {
  //     float: left;
  //     width: 200px;
  //   }
  // }
  // }
  .nav1 {
    display: flex;
    height: 40px;
    width: 100%;
    border: 1px solid #486eb5;
    box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.7);
    opacity: 0.8;
    background: rgb(58, 103, 185);
    align-items: center;
    justify-content: space-between;
  }

  .MSg1 {
    display: flex;
    width: 700px;
    height: 40px;
    line-height: 40px;

  }

  .MSg1 img {
    width: 20px;
    height: 18px;
    margin-top: 12px;
    margin-right: 5px;
    margin-left: 10px;
  }

  .MSg1 div{
    width: 2px;
    height: 15px;
    background: rgba(46, 204, 219, 1);
    margin-top: 13px;
    margin-right: 5px;
    margin-left: 10px;
  }

  .Msg2{
    width: 200px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
