<template>
  <div id="chart" style="height: 400px;width: 400px"></div>
</template>

<script>
  import  echarts from 'echarts'
    export default {
        data() {
            return {
              pieoption:{
                title : {
                  text: 'piechart',
                  // subtext: '',
                  x:'left'
                },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  left: 'center',
                  data: [10,20,30.40]
                },
                series : [
                  {
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[10,20,30.40],
                    selectedOffset:50,
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    },

                  }
                ]
              },

              lineoption:{
                title: {
                  text: 'linechart'
                },
                tooltip: {
                  trigger: 'axis'
                },
                /*legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },*/
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ["小米","华为",'苹果']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    name:'',
                    type:'line',
                    stack: '总量',
                    data:[10,20,30.40]
                  },

                ]
              },


              baroption:{
                title: {
                  text: 'barchart'
                },
                // color: ['#3398DB'],
                tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis : [
                  {
                    type : 'category',
                    data : [10,20,30.40],
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                ],
                yAxis : [
                  {
                    type : 'value'
                  }
                ],
                series : [
                  {
                    name:'按病种查看',
                    type:'bar',
                    barWidth: '80%',
                    data:[10,20,20,20,20]
                  }
                ]
              }


            }

        },
        /*父组件传递charType给子组件*/
        props:["chartType"],
        methods: {
          drawChart(){
            let chart =  echarts.init(document.getElementById('chart'));
            if(this.chartType ==="pie"){chart.setOption(this.pieoption,true);}
            else if(this.chartType ==="bar"){chart.setOption(this.baroption,true);}
            else {chart.setOption(this.lineoption,true);}

          }
        },
        created: function () {

        },
        mounted() {


        },
        components: {}
    }
</script>
<style>

</style>
