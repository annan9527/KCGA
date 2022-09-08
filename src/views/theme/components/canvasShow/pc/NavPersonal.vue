/**
    顶部个人中心组件
*/
<template>
  <div>
    <div class="canvasNavPersonal">
    <div
      class="content"
      v-for="(item, index) in componentContent.txtRoute"
      :key="index"
    >
      <div class="personalText" v-if="item.des != ''">
        {{ item.des }}
      </div>
      <!-- 虚线 -->
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
</template>

<script>
// import Badge from "@/views/theme/components/canvasShow/pc/components/Badge.vue";
export default {
  // components: { Badge },u
  name: "TopPersonalNav",
  props: {
    componentContent: Object,
  },
};
</script>

<style lang="scss" scoped>
.canvasNavPersonal {
  
  width: 1000px;
  margin-bottom: 22px;
  height: 60px;
  background: linear-gradient(0deg, #3671cf 0%, #3c7ee8 100%);
  // border-radius: 3px 3px 0px 0px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 60px;
  padding-right: 20px;
  padding-left: 20px;
  .content {
    flex: 1;
    float: left;
    
    .personalText {
      height: 20px;
      // font-size: 10px;
      // font-family: Microsoft YaHei;
      // font-weight: 400;
      display: inline-block;
    }
    .container {
      margin: 0 10px;
      width: 2px;
      height: 40px;
      color: #273077;
      display: inline-block;
    }
  }
  .search {
    float: right;
    width: 200px;
    // opacity: .2;
  }
}
</style>
