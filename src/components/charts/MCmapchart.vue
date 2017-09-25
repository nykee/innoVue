<template>
  <div id="chart" style="height: 600px;width: 600px">
  </div>
</template>

<script>
  import  echarts from 'echarts'
  require('echarts/chart/map');
  export default {
    data() {
      return {
        mapOption:{
          /*地图用到的数据，Object形式*/
          series: [
            {
              name: '逸动多中心分布',
              type: 'map',
              mapType: 'china',
              hoverable:false,//鼠标经过高亮
              mapLocation: {
                x: 'center',
                y: 'center',
                // height: 600
              },

              selectedMode: false,
              itemStyle:{
                normal:{
                  color: '#003156',
                  label: {
                    show: false
                  }
                }
              },
              data: [
                {
                  name: '广东',
                  itemStyle: {
                    normal: {
                      color: '#2F99E5',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff',
                          fontSize: 15
                        }
                      }
                    },
                    emphasis: { // 选中样式
                      borderWidth: 2,
                      borderColor: '#fff',
                      color: '#32cd32',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff'
                        }
                      }
                    }
                  }
                },
                {
                  name: '上海',
                  itemStyle: {
                    normal: {
                      color: '#2F99E5',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff',
                          fontSize: 12
                        }
                      }
                    },
                    emphasis: { // 选中样式
                      borderWidth: 2,
                      borderColor: '#fff',
                      color: '#32cd32',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff'
                        }
                      }
                    }
                  }
                },
                {
                  name: '北京',
                  itemStyle: {
                    normal: {
                      color: '#2F99E5',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff',
                          fontSize: 12
                        }
                      }
                    },
                    emphasis: { // 也是选中样式
                      borderWidth: 2,
                      borderColor: '#fff',
                      color: '#32cd32',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#fff'
                        }
                      }
                    }
                  }
                },
              ],
              /*地图标注点*/
              markPoint: {
//                symbol:'emptyCircle',

                show: true,
                itemStyle: {
                  normal: {
                    color: '#00c1de'
                  }
                },
                effect:{
                  show: true,
                  type: 'scale',
                  loop: true,
                  period: 15,
                  scaleSize : 2,
                  bounceDistance: 10,
                  color : null,
                  shadowColor : null,
                  shadowBlur : 0

                },
                data: [
                  {
                    name: '北京',
                    value: 1,
                    geoCoord:[116.46, 39.92],

                  },
                  {
                    name: '上海',
                    value: 2,
                    geoCoord:[121.4648, 31.2891],


                  },
                  {
                    name:'广州',
                    value: 3,
                    geoCoord:[113.27, 23.13]
                  },
                  {
                    name:'合肥',
                    value: 4,
                    geoCoord:[117.27,31.86]
                  },
                  {
                    name:'武汉',
                    value: 5,
                    geoCoord:[114.31,30.52]
                  },
                  {
                    name:'长沙',
                    value: 6,
                    geoCoord:[113.00,28.21]
                  },
                  {
                    name:'贵阳',
                    value: 7,
                    geoCoord:[106.71,26.57]
                  },
                  {
                    name:'成都',
                    value: 8,
                    geoCoord:[104.07,30.67]
                  },
                  {
                    name:'长春',
                    value: 9,
                    geoCoord:[125.35,43.88]
                  },
                  {
                    name:'济南',
                    value: 10,
                    geoCoord:[116.98,36.67]
                  }
                ],
              },
            }
          ]


        }
      }
    },
    methods: {},
    created: function () {

    },
    components: {

    },
    mounted(){
      let chart =  echarts.init(document.getElementById('chart'));
      chart.setOption(this.mapOption);
    }
  }
</script>
<style>

</style>
