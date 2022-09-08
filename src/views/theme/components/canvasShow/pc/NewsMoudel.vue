<template>
  <div>
    <span class="box">
      <div class="heard">
        <span>{{ this.componentContent.txtRoute[0].title }}</span>
        <!-- <span style="display: flex; width: 60px; height: 16px">
          <span style="width: 41px ">更多</span>
          <img src="@/assets/img/more.png" alt="" style=""
        /></span> -->
        <span class="rigth">  
          <a href="#">查看更多</a>
           <a href="" style=" color: #0055d6;"> > </a>
        </span>
      </div>
      <div class="content">
        <div class="item">
          <span class="i"></span>
          <span><a href="">钱伟刚检查网吧禁烟工作...</a></span>
        </div>
        <div class="item">
          <span class="i"></span>
          <span>市局组织开展“融警务”建设项目...</span>
        </div>
        <div class="item">
          <span class="i"></span>
          <span>施以打防治并举“组合拳”...</span>
        </div>
        <div class="item">
          <span class="i"></span>
          <span>党委理论学习中心组学习《反有组...</span>
        </div>
        <div class="item">
          <span class="i"></span>
          <span>施以打防治并举“组合拳”，浙江严打严...</span>
        </div>

        <div class="item">
          <span class="i"></span>
          <span> 党委理论学习中心组学习《反有组织犯...</span>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentContent: {
        txtRoute: [
          {
            title: "通知通告",
            des: "通知通告", // 展示内容
            linkTo: "",
            pic: "",
            notice: 0,
            editors: [
              {
                editorTitle: "通知通告",
                editorDes: "", // 编辑内容
                editorUrl: "",
                editorPic: "",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-left: 5px;
  margin-bottom: 22px;
  margin-right: 5px;
  display: block;
  width: 240px;
  height: 200px;
  border-radius: 2px;
  overflow: hidden;
  .heard {
    padding-right: 10px;
    padding-left: 10px;
    width: 240px;
    height: 31px;
    background: linear-gradient(0deg, #e9f6ff 0%, #ffffff 100%);
    border-top: 2px solid #0055d6;
    font-size: 8px;
    font-family: SimSun;
    font-weight: 700;
    color: #0055d6;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rigth {
      line-height: 16px;
      width: 60px;
      height: 16px;
      font-size: 8px;
      font-family: SimSun;
      font-weight: 400;
      color: #999999;
      img {

      }
    }
  }
  .content {
   
    padding-left: 10px;
    padding-top: 10px;
    width: 241px;
    height: 169px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .item {
     
      width: 300px;
      margin-bottom: 10px;
      height: 20px;
    
      color: #141516;
      display: flex;
      .i {
        margin-right: 5px;
        margin-top: 5px;
        display: block;
        width: 6px;
        height: 6px;
        background: #0055d6;
        border-radius: 50%;
      }
      .text {
        width: 300px;
      }
    }
  }
}
</style>