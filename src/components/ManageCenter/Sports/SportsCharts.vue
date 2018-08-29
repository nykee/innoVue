<template>
  <div>
    <div id="menu">
      <!--<h3>运动学图表分析</h3>-->
      <CommonHeader title="运动学图表分析" iconName="fa fa-magic fa-2x"/>
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



    </div>


  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader'
    export default {
        data() {
            return {
              chartType:'pie',
              dime:'age',
              ageArray:[],
              ageArrayVal:[],
              typeArray:[],
              typeArrayVal:[]



            }
        },
        methods: {
          showChart(){

          },
          fetchDimeData(){


          }
        },
        created: function () {

        },
      mounted(){


      },
        components: {
          CommonHeader
        }
    }
</script>
<style>

</style>
