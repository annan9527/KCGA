<template>
  <div>
    <el-card class="box-card">
      <span slot="header"><h1>工作日历</h1></span>
      <el-row type="flex" justify="end">
        <!-- 年份选择 -->
        <el-select
          size="small"
          style="width: 120px"
          placeholder="请选择"
          v-model="y"
          @change="changedata"
        >
          <el-option
            v-for="(item, index) in yearlist"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>

        <el-select
          size="small"
          style="width: 120px; margin-bottom: 10px"
          placeholder="请选择"
          v-model="mouth"
          @change="changedata"
        >
          <!-- 循环月份 -->
          <el-option
            v-for="(item, index) in 12"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-row>
      <!-- 放置日历组件 -->
      <el-calendar v-model="selecttime">
        <!-- data:当前单元格日期 -->
        <template slot="dateCell" slot-scope="{ date, data }" class="content">
          <div class="date-content">
            <span class="text"> {{ data.day | getdata }}</span>
            <span v-if="isweek(date)" class="rest">休</span>
          </div>
        </template>
      </el-calendar>
    </el-card>
    <div>
      <h1>数据展示</h1>
    </div>
    <div class="card2">
      <div id="output_3DBarCharts"></div>
      <div class="item1">
        <Zero></Zero>
      </div>
      <div class="item2">
        <dv-scroll-board :config="config" style="width: 100%; height: 300px" />
      </div>
    </div>
  </div>
</template>

<script>
import { get3DOptions } from "./options";
import Zero from "./compontes/zero.vue";

export default {
  filters: {
    //    过滤器
    getdata(val) {
      const day = val.split("-")[2];
      //   字符串截取 判断他是不是0开头
      return day.startsWith("0") ? day.substr(1) : day;
    },
  },
  // 可以让用户传递进来数据 没有没有默认当前时间
  data() {
    return {
      //   选择的月份
      mouth: "",
      //   当前年份数组 等于当前年份的前五年加上后五年
      yearlist: [],
      y: "",
      //   选择的当前时间
      selecttime: "",
      options: {
        xData: ["一月", "二月", "三月", "四月", "五月", "六月"],
        data: [2528, 3018, 4928, 1858, 3002, 2695, 2528],
      },
      config: {
        header: ["标题", "内容", "时间"],

        data: [
          ["公安...", "行1列2", "2022/8/1"],
          ["昨日举行...", "行2列2", "2022/8/21"],
          ["检查组...", "行3列2", "2022/8/23"],
          ["公安...", "行4列2", "2022/8/29"],
          ["公安...", "行5列2", "2022/9/1"],
          ["公安...", "行6列2", "2022/9/1"],
          ["公安...", "行7列2", "2022/9/3"],
          ["公安...", "行8列2", "2022/9/5"],
          ["公安...", "行9列2", "2022/9/5"],
          ["公安...", "行10列2", "2022/9/6"],
        ],

        columnWidth: [90],
        align: ["center"],
        rowNum: 5,
        oddRowBGC: "",
        evenRowBGC: "",
        headerBGC: "#2c343c",
        columnWidth: [120, 280, 100],
      },
    };
  },
  methods: {
    changedata() {
      //  生成选择的时间
      this.selecttime = new Date(`${this.y}-${this.mouth}-1`);
    },
    isweek(val) {
      // 判断周六周日
      return val.getDay() === 6 || val.getDay() === 0;
    },
    // 柱状图
    init() {
      //日总产量
      let output_3DBarCharts = this.$echarts.init(
        document.getElementById("output_3DBarCharts")
      );
      let options = get3DOptions(this.options);
      output_3DBarCharts.setOption(options);
      window.addEventListener("resize", function () {
        output_3DBarCharts.resize();
      });
    },
  },
  created() {
    this.y = new Date().getFullYear();
    // 初始化
    this.mouth = new Date().getMonth() + 1;
    // 生成当年年份的前后五年
    this.yearlist = Array.from(Array(11), (v, i) => this.y + i - 5);
  },
  mounted() {
    this.init();
  },
  components: { Zero },
};
</script>


<style  scoped >
.box-card {
  width: 100%;
}
/deep/ .el-calendar-day {
  height: auto;
}
/deep/ .el-calendar-table__row td,
/deep/ .el-calendar-table tr td:first-child,
/deep/ .el-calendar-table__row td.prev {
  border: none;
}
.date-content {
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text {
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
/deep/ .el-calendar-table td.is-selected .text {
  background: #409eff;
  color: #fff;
  border-radius: 50%;
}
/deep/ .el-calendar__header {
  display: none;
}
#output_3DBarCharts {
  flex: 1;
  padding-bottom: 20px;
  width: 500px;
  height: 300px;
  background-color: #2c343c;
  margin-right: 10px;
  background-size: calc(100% - 60px) auto;
}
.card2 {
  margin-top: 20px;
  width: 100%;
  height: 320px;
  display: flex;
}
.item1 {
  margin-right: 10px;
  flex: 1;
  height: 320px;
}
.item2 {
  margin-right: 10px;
  flex: 1;
  height: 300px;
  background-color: #2c343c;
}
.card3 {
  width: 100%;
  height: 500px;
  background-color: #409eff;
}
</style>