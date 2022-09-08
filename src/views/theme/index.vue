<template>
  <div class="containerMall">
    <div class="topBox">
      <el-button class="btn-save1" type="primary" @click="changenum"
        >更换模板</el-button
      >
      <el-button class="btn-save" type="primary" @click="canvasSave"
        >保存画布</el-button
      >
    </div>
    <div class="bottomWarp">
      <div class="leftBox">
        <Panel></Panel>
      </div>
      <div class="mainContentWarp">
        <div class="mainContent" :class="'view-' + 4">
          <CanvasEditPage v-if="num === 1"></CanvasEditPage>
          <CanvasEditPage2 v-if="num === 2"></CanvasEditPage2>
        </div>
      </div>
      <div class="RightBox">
        <ToolPanel></ToolPanel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Panel from "./components/leftBar/panel.vue";
import ToolPanel from "./components/rootcompToolbar/toolPanel.vue";
import CanvasEditPage from "./components/canvasEditPage.vue";
import CanvasEditPage2 from "./components/canvasEditPage2.vue";

// import { getCanvasData, getProducts, saveCanvasData } from "@/api/canvasApi.js";
export default {
  data() {
    return {
      num: 1,
      deviceList: [
        {
          id: 4,
          name: "pc",
        },
      ],
      canvasId: null,
      terminal: 5,
    };
  },
  computed: {
    ...mapGetters(["componentsData"]),
  },
  methods: {
    ...mapMutations({
      setComponentsData: "SET_COMPONENTSDATA",
    }),
    changenum() {
      if (this.num === 1) {
        this.num = 2;
      } else {
        this.num = 1;
      }
    },
    // toggleDevice(id) {
    //   this.setTerminal(id);
    //   this.canvasGet();
    // },
    // 保存画布
    canvasSave() {
      // 删除非必要的字符
      let cloneComponentsData = JSON.parse(JSON.stringify(this.componentsData));
      let obj = { templete: this.num };
      cloneComponentsData.push(obj);
      for (let i = 0; i < cloneComponentsData.length; i++) {
        delete cloneComponentsData[i].icon;
        delete cloneComponentsData[i].iconH;
        if (cloneComponentsData[i].type === "productList") {
          cloneComponentsData[i].componentContent.imgTextData = [];
        }
      }
      console.log(cloneComponentsData);
      // saveCanvasData({
      //   terminal: this.terminal,
      //   json: JSON.stringify(cloneComponentsData),
      //   name: '1',
      //   canvasId: this.canvasId || ''
      // }).then(res => {
      //   if (res) {
      //     this.$message.success('保存成功！')
      //   }
      // })
    },
    // 读取画布
    // async canvasGet() {
    //   // var res = await getCanvasData({'terminal': 3})
    //   var res = await getCanvasData({ terminal: this.terminal });
    //   if (JSON.stringify(res) !== "{}") {
    //     this.canvasId = res.canvasId;
    //     var componentsData = JSON.parse(res.json);
    //     for (let i = 0; i < componentsData.length; i++) {
    //       if (componentsData[i].type === "productList") {
    //         if (componentsData[i].componentContent.categoryId) {
    //           getProducts({
    //             pageSize: 20,
    //             page: 1,
    //             classifyId: componentsData[i].componentContent.categoryId,
    //           }).then((res) => {
    //             componentsData[i].componentContent.imgTextData = res.list;
    //           });
    //         }
    //       }
    //     }
    //     this.setComponentsData(componentsData);
    //   } else {
    //     this.setComponentsData([]);
    //   }
    // },
  },
  created() {
    this.num = 1;
  },
  components: { Panel, Panel, ToolPanel, CanvasEditPage, CanvasEditPage2 },
};
</script>

<style lang="scss" scoped>
.containerMall {
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 84px);
  overflow: hidden;

  .topBox {
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #f0f3f4;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // .btn-black {
    //   position: absolute;
    //   left: 20px;
    //   top: 0;
    // }
    ul {
      margin: 0;
      padding: 0;
      height: 52px;
      display: flex;
      align-items: center;
    }
    li {
      width: 56px;
      height: 52px;
      cursor: pointer;
      text-align: center;
      display: inline-block;
      vertical-align: text-top;
      .iconfont {
        font-size: 24px;
        // line-height: 52px;
      }
      &:hover,
      &.on {
        background-color: #ff7800;
        color: #fff;
      }
    }
    .btn-save {
      position: absolute;
      right: 20px;
      top: 5px;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .btn-save1 {
      position: absolute;
      right: 180px;
      top: 5px;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  .bottomWarp {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .leftBox {
    height: 100%;
  }
  .mainContentWarp {
    background-color: #f0f3f4;
    overflow: auto;
    height: 100%;
    flex: 1;
    .mainContent {
      margin: 0 auto;
      max-width: 100%;
      width: 500px;
      &.view-4 {
        width: 1200px;
      }
    }
  }
  .RightBox {
    height: 100%;
    overflow: auto;
  }
}
</style>