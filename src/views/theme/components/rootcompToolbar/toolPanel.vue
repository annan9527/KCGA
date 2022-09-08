<template>
  <div class="toolWarp">
    <!-------------------------PC---------------------------------->
    <!-- 个人中心导航 -->
    <div class="toolPanel" v-if="activeComponent.type == 'NavPersonal'">
      <NavPersonal />
    </div>
    <!-- 分类导航 -->
    <!-- 轮播图 -->
    <div class="toolPanel" v-if="activeComponent.type == 'Banner'">
      <Banner />
    </div>
    <div class="toolPanel" v-if="activeComponent.type == 'Banner2'">
      <Banner1 />
    </div>
    <div class="toolPanel" v-if="activeComponent.type == 'Banner3'">
      <Banner2 />
    </div>
    <div class="toolPanel" v-if="activeComponent.type == 'Banner4'">
      <Banner3 />
    </div>
    <!-- 底部版权相关 -->
    <div class="toolPanel" v-if="activeComponent.type == 'Footer'">
      <PcFooter />
    </div>
    <!-- 新品首发 -->
    <div class="toolPanel" v-if="activeComponent.type == 'ProductNew'">
      <News />
    </div>
    <!-- 新闻模块 -->
    <div class="toolPanel" v-if="activeComponent.type == 'NewsMoudel'">
      <NewsMoudel />
    </div>
    <!-- 图片跳转 -->
    <div class="toolPanel" v-if="activeComponent.type == 'Img'">
      <Img></Img>
    </div>
  </div>
</template>

<script>
// pc 21.4月单商户改版
import NavPersonal from "@/views/theme/components/rootcompToolbar/pc/NavPersonal";
import Banner from "@/views/theme/components/rootcompToolbar/pc/Banner";
import Banner1 from "@/views/theme/components/rootcompToolbar/pc/Banner1";
import Banner2 from "@/views/theme/components/rootcompToolbar/pc/Banner2";
import Banner3 from "@/views/theme/components/rootcompToolbar/pc/Banner3";
import PcFooter from "@/views/theme/components/rootcompToolbar/pc/Footer";
import News from "@/views/theme/components/rootcompToolbar/pc/News";
import NewsMoudel from "@/views/theme/components/rootcompToolbar/pc/NewsMoudel.vue";
import Img from "@/views/theme/components/rootcompToolbar/pc/Img.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    NavPersonal,
    Banner,
    Banner1,
    Banner2,
    Banner3,
    PcFooter,
    News,
    NewsMoudel,
    Img, //图片跳转
  },
  computed: {
    ...mapGetters(["activeComponent"]),
  },
};
</script>

<style lang="scss" scoped>
.toolWarp {
  width: 320px;
}
.toolPanel {
  width: 320px;
}
.toolPanel::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}

.toolPanel::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 5px rgba(156, 148, 148, 0.2);
  background: #cdcdcd;
}
.toolPanel::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(158, 150, 150, 0.2);
  border-radius: 4px;
  background: #ededed;
}
</style>
