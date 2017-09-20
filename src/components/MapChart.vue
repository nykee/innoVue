<template>

   <div id="chart" style="height: 500px;width: 500px">
   </div>

</template>

<script>
  import  echarts from 'echarts'
  import chinaMap from '../../static/china.json';
  echarts.registerMap('china', chinaMap);
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
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:0.5,
                        areaStyle:{
                          color: '#1b1b1b'
                        }
                      }
                    },
                    data: [],
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
                          coord:[116.46, 39.92]

                        },
                        {
                          name: '上海',
                          coord:[121.4648, 31.2891]
                        },
                        {
                          name:'广州',
                          coord:[113.27, 23.13]
                        },
                        {
                          name:'合肥',
                          coord:[117.27,31.86]
                        },
                        {
                          name:'武汉',
                          coord:[114.31,30.52]
                        },
                        {
                          name:'长沙',
                          coord:[113.00,28.21]
                        },
                        {
                          name:'贵阳',
                          coord:[106.71,26.57]
                        },
                        {
                          name:'成都',
                          coord:[104.07,30.67]
                        },
                        {
                          name:'长春',
                          coord:[125.35,43.88]
                        },
                        {
                          name:'济南',
                          coord:[116.98,36.67]
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
