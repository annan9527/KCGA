<template>
  <div>
    <div ref="chart4" style="width: 100%; height: 500px"></div>
  </div>
</template>
    
    <script>
        
import * as echarts from "echarts";

export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        backgroundColor: "#2c343c",
        geo: { 
          map: require('../resourse/city.json'), //这里的名称需要和shandong.js: echarts.registerMap('shandong',{})中的名称一致
          label: { show: true }, //显示地点
          roam: true, //缩放
        },
        series: [],
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
    });
  },
};
</script>
    
    <style lang="scss" scoped>
</style>