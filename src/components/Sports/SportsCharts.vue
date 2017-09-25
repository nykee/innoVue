<template>
  <div>
    <div id="menu">
      <h3>运动学图表分析</h3>
      <label for="g">请选择统计维度</label>
      <select name="g" id="g" v-model="dime">
        <option value="age">年龄</option>
        <option value="month">月份</option>
        <option value="dType">病种</option>
      </select>
      <label for="chartType">请选择图表类型</label>
      <select name="chartType" id="chartType" v-model="chartType">
        <option value="pie" selected="selected">饼图</option>
        <option value="line">折线图</option>
        <option value="bar">柱状图</option>
      </select>
      <el-button type="primary" id="submitBtn" @click="showChart">点击查看</el-button>
    </div>
    <div id="chart" style="height: 600px;width: 600px" >
      <!--<PieChart v-if="pieShow" :child-msg="msg"></PieChart>-->

      <CommonChart ref ="commonchart" :chart-type="chartType"></CommonChart>
    </div>


  </div>
</template>

<script>
  /*import PieChart from '../charts/PieChart.vue';
  import BarChart from '../charts/BarChart.vue';
  import LineChart from '../charts/LineChart.vue';*/
  import  CommonChart from '../charts/CommonChart.vue'
    export default {
        data() {
            return {
              chartType:'pie',
              dime:'age',
              chartOption:{

              }


            }
        },
        methods: {
          showChart(){
            let chartType =String(this.chartType) ;
            if(chartType ==="pie"){
             require('echarts/chart/pie.js')
            }
            else if(chartType ==="bar"){
              require('echarts/chart/bar.js')
            }
            else {
              require('echarts/chart/line.js')
            }
            /*父组件通过$refs调用子组件的方法和属性*/
            this.$refs.commonchart.drawChart();
          }
        },
        created: function () {

        },
        components: {
          /*PieChart,BarChart,LineChart*/
          CommonChart
        }
    }
</script>
<style>

</style>
