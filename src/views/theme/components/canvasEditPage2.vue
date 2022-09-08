<template>
  <div class="layout hom-layout">
    <!-- 头部 -->
    <div class="heard">
      <div class="KCGA">
        <img
          src="@/assets/img/logo.png"
          alt=""
          style="
            width: 500px;
            height: 108px;
            position: absolute;
            top: 50%;
            left: 100px;
            transform: translateY(-50%);
          "
        />
      </div>
    </div>
    <div style="width: 1000px; margin: 0 auto">
      <draggable
        class="dragArea list-group"
        :list="componentsData"
        group="pageEdit"
        @change="pageChange"
      >
        <div
          class="list-group-item"
          v-for="(item, index) in componentsData"
          :key="index"
          :class="{ on: activeComponent == index }"
          @click="selectComponent(item, index)"
        >
          <component
            :is="componentMap[0].get(item.type)"
            :componentContent="item.componentContent"
            :terminal="terminal"
          ></component>
          <div class="btns">
            <span @click="delComponent(item, index)">
              <i class="iconfont icon-shanchu"></i>
            </span>
          </div>
        </div>
      </draggable>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div></div>
      <div class="heard">
        <div class="item">
          全国导航
          <span> <img src="@/assets/img/底部更多.png" alt="" /> </span>
        </div>
        <div class="item">
          省内导航
          <span> <img src="@/assets/img/底部更多.png" alt="" /> </span>
        </div>
        <div class="item">
          市内导航
          <span> <img src="@/assets/img/底部更多.png" alt="" /> </span>
        </div>
        <div class="item">
          科室导航
          <span> <img src="@/assets/img/底部更多.png" alt="" /> </span>
        </div>
      </div>
      <div class="main">
        <div class="box1">
          <span>今日访问量:</span>
          <span class="number"> 160 </span>
          <span>昨日访问量: </span>
          <span class="number">1379 </span>
          <span>总访问量: </span>
          <span class="number">5837604</span>
        </div>
        <div
          class="box2"
          style="margin-bottom: 0px font-size: 9px;
                              font-family: SimSun;
                             font-weight: 400;
                             color: #141516;"
        >
          <p>技术支持:柯城分局网警大队 地址:衢州市柯城区亭川东路398号</p>
        </div>
        <div
          class="box3"
          style="
            margin-bottom: 10px;
            font-size: 9px;
            font-family: SimSun;
            font-weight: 400;
            color: #141516;
          "
        >
          <span style="margin-right: 20px">电话:8017377 </span>
          <span> 传真:0570-8017377 </span>
        </div>
        <div class="box4">
          Copyright 2019-2022 www.kc.qzs.com All Rights Reserved
        </div>
        <div class="box4">衢州市公安局柯城分局-版权所有</div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import componentMap from "@/views/theme/components/canvasShow/componentMap.js";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "canvasEditPage",
  components: {
    draggable,
  },
  data() {
    return {
      activeComponent: -1,
      componentMap: componentMap,
      terminal: 5,
    };
  },
  computed: {
    ...mapGetters(["componentsData"]),
  },
  methods: {
    ...mapMutations({
      setActiveComponent: "SET_ACTIVECOMPONENT",
      setComponentsData: "SET_COMPONENTSDATA",
    }),
    pageChange(e) {
      if (e.added) {
        this.activeComponent = e.added.newIndex;
        e.added.element.index = e.added.newIndex;
        this.setActiveComponent(e.added.element);
      }
      if (e.moved) {
        this.activeComponent = e.moved.newIndex;
        e.moved.element.index = e.moved.newIndex;
        this.setActiveComponent(e.moved.element);
      }
    },
    selectComponent(item, index) {
      this.activeComponent = index;
      item.index = index;
      this.setActiveComponent(item);
    },
    delComponent(item, index) {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.activeComponent = -1;
          this.componentsData.splice(index, 1);
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.hom-layout {
  width: 1200px;
  margin-bottom: 22px;
  background: linear-gradient(0deg, #eff5ff 0%, #f5f7fd 100%);

  .heard {
    position: relative;
    // background-image: url(../../../assets/img/TOP_BG.png);
    background: linear-gradient(0deg, #eff5ff 0%, #f5f7fd 100%);
    background-size: 100% 100%;
    height: 188px;
  }
  >>> .sortable-chosen {
    .contentBox {
      display: none;
    }
    .cloneText {
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      text-align: center;
      background-color: orange;
      color: #fff;
    }
  }
  .list-group {
    min-height: calc(100vh - 50px);
  }
  .list-group-item {
    display: inline-block;
    position: relative;
    cursor: move;

    // display: inline-block;
    .btns {
      display: none;
    }
    &:hover {
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        // border:1px $mainColor dashed;
        z-index: 2;
      }
    }
    &.on {
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        // border:1px $mainColor solid;
        z-index: 2;
      }
      .btns {
        display: block;
        position: absolute;
        right: -13px;
        top: 50%;
        margin-top: -13px;
        z-index: 3;
        span {
          display: block;
          width: 26px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          color: #666;
          background-color: #fff;
          box-shadow: 0 0 2px rgba(51, 51, 51, 0.2);
          cursor: pointer;
        }
      }
    }
  }
}

.footer {
  margin-top: 50px;
  width: 1200px;
  height: 200px;
  .heard {
    width: 1200px;
    height: 31px;
    background: #103289;
    justify-content: center;
    display: flex;
    align-items: center;
    .item {
      padding-left: 5px;
      width: 113px;
      height: 19px;
      background: #ffffff;
      border-radius: 2px;
      line-height: 19px;
      margin-right: 50px;
      display: flex;
      justify-content: space-around;
      .img {
        margin-right: 5px;
        margin-top: 6px;
        float: right;
      }
    }
  }
  .main {
    text-align: center;
    padding-top: 19px;
    background: #0d2970;
    .box1 {
      height: 13px;
      font-size: 13px;
      font-family: SimSun;
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      margin-bottom: 10px;
      .number {
        color: #fd1926;
      }
    }
    .box2 {
      margin-bottom: 10px;
    }
    .box2 p {
      color: rgba(255, 255, 255, 1);
    }
    .box3 span {
      color: rgba(255, 255, 255, 1);
    }
    .box4 {
      height: 21px;
      font-size: 9px;
      font-family: SimSun;
      font-weight: 400;
      color: #999999;
      line-height: 13px;
    }
  }
}
</style>

<style lang="scss">
.warp {
  width: 1252px;
  margin: 0 auto;
  max-width: 96%;
}
.flex-box {
  display: flex;
}
</style>
