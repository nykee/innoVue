<template>
  <div>
    <div id="menu">
      <h3>运动学图表分析</h3>
      <label for="g">请选择统计维度</label>
      <select name="g" id="g" v-model="dime" ref="dimeSelect" v-on:change="fetchDimeData">
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
  import  CommonChart from '../charts/CommonChart.vue';
  import axios from 'axios'
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
          },
          fetchDimeData(){
            let dime =this.dime;
            if(dime ==='type'){
              axios.get('/user/fetchTypeData')
                .then(function (data) {
                    if(data.code===100){
                      let typeDataObj = JSON.parse(data.extendInfo.typeData);
                      this.typeArray = [
                        {value:typeDataObj.T1, name:'健康'},
                        {value:typeDataObj.T2, name:'韧带断裂'},
                        {value:typeDataObj.T3, name:'关节炎'},
                        {value:typeDataObj.T4, name:'半月板损伤'},
                        {value:typeDataObj.T5, name:'骨质增生'},
                        {value:typeDataObj.T6, name:'滑膜炎'},
                        {value:typeDataObj.T7, name:'韧带重建'},
                        {value:typeDataObj.T8, name:'全膝置换'},
                        {value:typeDataObj.T9, name:'其他'},
                      ];
                      this.typeArrayVal =[typeDataObj.T1,typeDataObj.T2,typeDataObj.T3,typeDataObj.T4,typeDataObj.T5,
                        typeDataObj.T6,typeDataObj.T7,typeDataObj.T8,typeDataObj.T9]

                    }
                    else if(data.code===200){
                        console.log('err');
                    }

                }

                ).catch(
                  console.log('err')

              )
            }
          }
        },
        created: function () {

        },
      mounted(){
        axios.get('/user/fetchAgeData')
          .then(
            function (data) {
              if(data.code ===100){
                let ageDataObj =JSON.parse(data.extendInfo.ageData);
                this.ageArray= [
                  {value:ageDataObj.S1, name:'10-20岁'},
                  {value:ageDataObj.S2, name:'21-30岁'},
                  {value:ageDataObj.S3, name:'31-40岁'},
                  {value:ageDataObj.S4, name:'41-50岁'},
                  {value:ageDataObj.S5, name:'51-60岁'},
                  {value:ageDataObj.S6, name:'61-70岁'},
                  {value:ageDataObj.S7, name:'71-80岁'},
                  {value:ageDataObj.S8, name:'81-90岁'},
                  {value:ageDataObj.S9, name:'91-100岁'}
                ];
                this.ageArrayVal =[ageDataObj.S1,ageDataObj.S2,ageDataObj.S3,ageDataObj.S4,ageDataObj.S5,ageDataObj.S6,
                  ageDataObj.S7,ageDataObj.S8,ageDataObj.S9];

              }else if(data.code ===200){
                console.log('err');
              }

            }
          ).catch(
          console.log('err')
        );

      },
        components: {
          /*PieChart,BarChart,LineChart*/
          CommonChart
        }
    }
</script>
<style>

</style>
