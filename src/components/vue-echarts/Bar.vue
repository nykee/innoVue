<template>
  <chart
    :options="barOptions"

    ref="bar"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/bar'
    export default {
        data() {
            return {
              barOptions:{
                grid: {
                  borderWidth: 0,
                  x:30,
                  y:30,
                  x2:25,
                  y2:25,
                },

                xAxis: [
                  {
                    type: 'category',
                    splitLine:{show: false},//去除网格线
                    show: true,
                    axisLabel: {textStyle: {
                        color:'#A6AEBF'
                      }},
                    axisLine:{
                      lineStyle:{
                        color:'transparent'
                      },
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  }
                ],
                yAxis: [
                  {
                    type: 'value',
                    splitLine:{show: false},//去除网格线
                    axisLabel: {textStyle: {
                        color:'#A6AEBF',
                        /*formatter:function (v) {
                            console.log("Yaxis formatter");
                            console.log(v);
                        }*/
                      },
                      formatter:function (v) {
                        v/1000>=1? v=(v/1000)+'k':'';
                        // console.log(v);
                        return '$ '+v
                      }},
                    axisLine:{
                      lineStyle:{
                        color:'transparent'
                      },
                    },
                    show: true
                  }
                ],
                series: [
                  {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                      normal: {
                        color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                            '#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF',
                          ];
                          return colorList[params.dataIndex]
                        },
                        label: {
                          show: false,
                          position: 'top',
                          formatter: '{b}\n{c}'
                        }
                      }
                    },
                    data: [1200,857,3300,720,3900,1221,590],
                    // data: this.state.SData
                  }
                ]
              }
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          chart: ECharts
        }
    }
</script>
<style>

</style>
