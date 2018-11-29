<template>
  <div class="manage-page-subview-container">
    <div id="menu">
      <CommonHeader title="运动学图表分析" iconName="fa fa-magic fa-2x"/>
      <label >请选择统计维度</label>

      <Select v-model="selected" style="width:200px" @on-change="handleSelectChange" >
        <Option v-for="opt in selectOptions" :value="opt.value" :key="opt.value">{{ opt.label }}</Option>
      </Select>
      <Button type="primary" id="submitBtn" @click="showChart">点击查看</Button>
    </div>
    <Row >
      <i-col span="12">
        <div id="chart-pie"   style="width: 400px;height: 400px"></div>
      </i-col>
      <i-col span="12">
        <div id="chart-bar"   style="width: 400px;height: 400px"></div>
      </i-col>
      <i-col span="12">
        <div id="chart-dpie"   style="width: 400px;height: 400px"></div>
      </i-col>
      <i-col span="12">
        <div id="chart-line"   style="width: 400px;height: 400px"></div>
      </i-col>
    </Row>


  </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/chart/pie');
  require('echarts/chart/bar');
  require('echarts/chart/line');
  // require('echarts/chart/d');
  import CommonHeader from '../CommonHeader'
    export default {
        data() {
            return {
              ageData:[],
              genderData:[],
              monthData:[],
              dTypeData:[],
              ageDataKV:[],
              dTypeDataKV:[],
              monthDataKV:[],
              genderDataKV:[],
              selected:"",
              selectOptions:[
                {value:'age',label:'年龄'},
                {value:'month',label:'月份'},
                {value:'gender',label:'性别'},
                {value:'dType',label:'病种'},
              ],

              barOption:{
                title: {
                  text: '按病种查看'
                },
                // color: ['#3398DB'],
                tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
                toolbox: {
                  show: true,
                  backgroundColor: 'rgba(0,0,0,0)',
                  color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
                  feature: {
                    dataView: {show: true, readOnly: false},
                    /* restore: {show: true},*/
                    saveAsImage: {show: true},

                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '12%',
                  containLabel: true
                },
                calculable : true,
                xAxis : [
                  {
                    type : 'category',
                    data : [],
                    axisTick: {
                      alignWithLabel: true
                    },
                    axisLabel: {
                      interval:0,
                      rotate:40
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
                    barWidth: '70%',
                    data:[],
                    itemStyle:{
                      normal: {
                        color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                            '#C1232B','#334B5C','#6AB0B8','#E98F6F','#9FDABF',
                            '#749F83','#DE9325','#CFB2A9','#797B7F','#5C6F7B',
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                          ];
                          return colorList[params.dataIndex]
                        },
                        label: {
                          show: true,
                          position: 'top',
                          formatter: '{c}'
                        }
                      }

                    }
                  }



                ],
                loadingOption:{
                  text:'数据读取中...',
                  effect:'spin'

                },
                noDataLoadingOption:{
                  text:'暂无数据'
                }
              },
              pieOption:{
                title : {
                  text: '按病种查看',
                  x:'left'
                },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                  show: true,
                  feature: {
                    dataView: {show: true, readOnly: false},
                    saveAsImage: {show: true}
                  }
                },
                legend: {
                  orient: 'horizontal',
                  x:'center',
                  y:'bottom',
                  itemWidth:25,
                  itemHeight:14,
                  padding:3,
                  data:[],
                },
                series : [
                  {
                    name: '按病种查看',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [],
                    stillShowZeroSum: false,
                    selectedOffset: 50,
                    legendHoverLink: true,
                    /* selectedMode:'single',*/
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                      },
                      normal:{
                        color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                            '#C1232B','#334B5C','#6AB0B8','#E98F6F','#9FDABF',
                            '#749F83','#DE9325','#CFB2A9','#797B7F','#5C6F7B',
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                          ];
                          return colorList[params.dataIndex]
                        },
                        label:{
                          show: true,
                        },
                        labelLine :{show:true}
                      }
                    },
                  }

                ]
              },
              dPieOption:{
                title: {
                  text: '按病种查看'
                },
                /*tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },*/
                toolbox: {
                  show: true,
                  feature: {
                    dataView: {show: true, readOnly: false},
                    saveAsImage: {show: true}
                  }
                },
                legend: {
                  orient: 'horizontal',
                  x:'center',
                  y:'bottom',
                  data:[]
                },
                series: [
                  {
                    name:'',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    /* selectedMode:'single',*/
                    itemStyle: {
                      normal:{
                        color: this.colorOption,
                      }
                    },
                    label: {
                      normal: {


                        show: false,
                        position: 'center'
                      },
                      emphasis: {
                        show: true,
                        textStyle: {
                          fontSize: '26',
                          fontWeight: 'bold'
                        },
                        formatter:'{b}\n' +
                        '{c}' +'例'+
                        '\n' +
                        '{d}%'
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data:[

                    ]
                  }
                ]
              },
              lineOption:{
                title: {
                  text: '按病种查看'
                },
                tooltip: {
                  trigger: 'axis'
                },
                color:['#C1484E'],
                grid: {
                  left: '4%',
                  right: '4%',
                  bottom: '12%',
                  containLabel: true
                },
                toolbox: {
                  show: true,
                  feature: {
                    dataView: {show: true, readOnly: false},
                    saveAsImage: {show: true}
                  }
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: [],
                  axisLabel: {
                    interval:0,
                    rotate:40,
                    textStyle:{
                      fontSize:12
                    }
                  }
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    name:'按病种查看',
                    type:'line',
                    stack: '总量',
                    data:[],
                    itemStyle:{
                      normal: {
                        label: {
                          show: true,
                          position: 'topRight',
                          formatter: '{c}'
                        }
                      }

                    }
                  },

                ]
              },
              barChart:null,
              pieChart:null,
              dPieChart:null,
              lineChart:null








            }
        },
        methods: {
          showChart(){
           /* let barChart = echarts.init(document.getElementById('chart-bar'));
            let pieChart = echarts.init(document.getElementById('chart-pie'));
            let dPieChart = echarts.init(document.getElementById('chart-dPie'));
            let lineChart = echarts.init(document.getElementById('chart-line'));
            barChart.setOption(this.barOption,true);
            pieChart.setOption(this.pieOption,true);
            dPieChart.setOption(this.dPieOption,true);
            lineChart.setOption(this.lineOption,true);*/
          },
          handleSelectChange(selected){
            let  ageLabel =['10-20岁','21-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-90岁','91-100岁'];
            let typeLabel = ['健康','韧带断裂','关节炎','半月板损伤','骨质增生','滑膜炎','韧带重建','全膝置换','其他','臀肌挛缩','股骨头坏死','髋关节撞击','髌骨半脱位','踝关节距下关节炎','脑卒中'];
            let sexLabel =["男","女"];
            let monthLabel = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

            switch (String(selected)){
              case "age":
                this.$http.get("/user/fetchAgeData",{params:{username:"inno"}})
                  .then((data)=>{
                    // console.log(data.data.extendInfo.ageData);
                    this.pieOption.title.text =
                      this.barOption.title.text =
                        this.dPieOption.title.text =
                          this.lineOption.title.text = "按年龄查看";
                    this.pieOption.series[0].name=
                    this.barOption.series[0].name=
                    this.dPieOption.series[0].name=
                    this.lineOption.series[0].name= "按年龄查看";
                    let ageData=JSON.parse(data.data.extendInfo.ageData);
                    // console.log(ageData);
                 this.ageData = [ageData.S1,ageData.S2,ageData.S3,ageData.S4,ageData.S5,ageData.S6,ageData.S7,ageData.S8,ageData.S9]
                    this.ageDataKV = [
                      {value:ageData.S1, name:'10-20岁'},
                      {value:ageData.S2, name:'21-30岁'},
                      {value:ageData.S3, name:'31-40岁'},
                      {value:ageData.S4, name:'41-50岁'},
                      {value:ageData.S5, name:'51-60岁'},
                      {value:ageData.S6, name:'61-70岁'},
                      {value:ageData.S7, name:'71-80岁'},
                      {value:ageData.S8, name:'81-90岁'},
                      {value:ageData.S9, name:'91-100岁'}
                    ];
                    this.pieOption.series[0].data = this.ageDataKV;
                    this.dPieOption.series[0].data = this.ageDataKV;
                    this.barOption.series[0].data = this.ageData;
                    this.lineOption.series[0].data = this.ageData;

                    // console.log(this.ageData);
                    // console.log(this.ageDataKV);
                    // this.ageData = data.data.extendInfo.ageData;
                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                    break;
              case "dType":
                this.$http.get("/user/fetchTypeData",{params:{username:"inno"}})
                  .then((data)=>{
                    console.log(data.data.extendInfo.dTypeData);
                    this.pieOption.title.text =
                      this.barOption.title.text =
                        this.dPieOption.title.text =
                          this.lineOption.title.text = "按病种查看";
                    this.pieOption.series[0].name=
                      this.barOption.series[0].name=
                        this.dPieOption.series[0].name=
                          this.lineOption.series[0].name= "按病种查看";

                    let dTypeData=JSON.parse(data.data.extendInfo.dTypeData);
                    // console.log(ageData);
                    this.dTypeData = [
                      dTypeData.T1,
                      dTypeData.T2,
                      dTypeData.T3,
                      dTypeData.T4,
                      dTypeData.T5,
                      dTypeData.T6,
                      dTypeData.T7,
                      dTypeData.T8,
                      dTypeData.T9,
                      dTypeData.T11,
                      dTypeData.T12,
                      dTypeData.T13,
                      dTypeData.T14,
                      dTypeData.T15,
                      dTypeData.T16,
                    ];
                    this.dTypeDataKV = [
                      {value:dTypeData.T1, name:'健康'},
                      {value:dTypeData.T2, name:'韧带断裂'},
                      {value:dTypeData.T3, name:'关节炎'},
                      {value:dTypeData.T4, name:'半月板损伤'},
                      {value:dTypeData.T5, name:'骨质增生'},
                      {value:dTypeData.T6, name:'滑膜炎'},
                      {value:dTypeData.T7, name:'韧带重建'},
                      {value:dTypeData.T8, name:'全膝置换'},
                      {value:dTypeData.T9, name:'其他'},
                      {value:dTypeData.T11, name:'臀肌挛缩'},
                      {value:dTypeData.T12, name:'股骨头坏死'},
                      {value:dTypeData.T13, name:'髋关节撞击'},
                      {value:dTypeData.T14, name:'髌骨半脱位'},
                      {value:dTypeData.T15, name:'踝关节距下关节炎'},
                      {value:dTypeData.T16, name:'脑卒中'},
                    ];
                    console.log(this.dTypeDataKV );
                    console.log(this.dTypeData );
                    this.pieOption.series[0].data = this.dTypeDataKV;
                    this.dPieOption.series[0].data = this.dTypeDataKV;
                    this.barOption.series[0].data = this.dTypeData;
                    this.lineOption.series[0].data = this.dTypeData;
                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                break;
              case "month":
                this.$http.get("/user/fetchMonthData2016",{params:{username:"inno"}})
                  .then((data)=>{
                    // console.log(data.data.extendInfo.MonthData2016);
                    this.pieOption.title.text =
                      this.barOption.title.text =
                        this.dPieOption.title.text =
                          this.lineOption.title.text = "按月份查看";
                    this.pieOption.series[0].name=
                      this.barOption.series[0].name=
                        this.dPieOption.series[0].name=
                          this.lineOption.series[0].name= "按月份查看";
                    // this.monthData = data.data.extendInfo.MonthData2016; let dTypeData=JSON.parse(data.data.extendInfo.dTypeData);
                    let monthData=JSON.parse(data.data.extendInfo.MonthData2016);
                    this.monthData = [
                      monthData.A1,
                      monthData.A2,
                      monthData.A3,
                      monthData.A4,
                      monthData.A5,
                      monthData.A6,
                      monthData.A7,
                      monthData.A8,
                      monthData.A9,
                      monthData.A10,
                      monthData.A11,
                      monthData.A12,
                    ];
                    this.monthDataKV = [
                      {value:monthData.A1, name:'1月'},
                      {value:monthData.A2, name:'2月'},
                      {value:monthData.A3, name:'3月'},
                      {value:monthData.A4, name:'4月'},
                      {value:monthData.A5, name:'5月'},
                      {value:monthData.A6, name:'6月'},
                      {value:monthData.A7, name:'7月'},
                      {value:monthData.A8, name:'8月'},
                      {value:monthData.A9, name:'9月'},
                      {value:monthData.A10, name:'10月'},
                      {value:monthData.A11, name:'11月'},
                      {value:monthData.A12, name:'12月'},
                    ];
                    this.pieOption.series[0].data = this.monthDataKV;
                    this.dPieOption.series[0].data = this.monthDataKV;
                    this.barOption.series[0].data = this.monthData;
                    this.lineOption.series[0].data = this.monthData;

                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                break;
              case "gender":
                this.$http.get("/user/fetchGenderData",{params:{username:"inno"}})
                  .then((data)=>{
                    console.log(data.data.extendInfo.genderData);
                    this.pieOption.title.text =
                      this.barOption.title.text =
                        this.dPieOption.title.text =
                          this.lineOption.title.text = "按性别查看";
                    this.pieOption.series[0].name=
                      this.barOption.series[0].name=
                        this.dPieOption.series[0].name=
                          this.lineOption.series[0].name= "按性别查看";
                    // this.genderData = data.data.extendInfo.genderData;
                    let genderData=JSON.parse(data.data.extendInfo.genderData);
                    this.genderData = [
                      genderData.male,
                      genderData.female,
                    ];
                    this.genderDataKV = [
                      {value:genderData.male, name:'男'},
                      {value:genderData.female, name:'女'},
                    ];
                    this.pieOption.series[0].data = this.genderDataKV;
                    this.dPieOption.series[0].data = this.genderDataKV;
                    this.barOption.series[0].data = this.genderData;
                    this.lineOption.series[0].data = this.genderData;
                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                break;
              default:
                // this.$http.get("/user/fetchAgeData",{params:{username:"inno"}})
                //   .then((data)=>{
                //     console.log(data.data.extendInfo);
                //   })
                //   .catch((err)=>{
                //     console.log(err);
                //   });
                break;


            }
          }
        },
        created: function () {

        },
      mounted(){
         let barChart = echarts.init(document.getElementById('chart-bar'));
             let pieChart = echarts.init(document.getElementById('chart-pie'));
             let dPieChart = echarts.init(document.getElementById('chart-dPie'));
             let lineChart = echarts.init(document.getElementById('chart-line'));
             barChart.setOption(this.barOption,true);
             pieChart.setOption(this.pieOption,true);
             dPieChart.setOption(this.dPieOption,true);
             lineChart.setOption(this.lineOption,true);
      },
      computed:{
        colorOption :function(params) {
          // build a color map as your need.
          let  colorList = [
            '#C1232B','#334B5C','#6AB0B8','#E98F6F','#9FDABF',
            '#749F83','#DE9325','#CFB2A9','#797B7F','#5C6F7B',
            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
          ];
          return colorList[params.dataIndex]
        }
      },
        components: {
          CommonHeader
        }
    }
</script>
<style>

</style>
