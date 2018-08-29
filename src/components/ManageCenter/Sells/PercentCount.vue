<template>
  <DPie :chartConfig="chartConfig"></DPie>
</template>

<script>
  import DPie from '../../vue-echarts/D-Pie'
    export default {

        data() {
          let colorOption =function(params) {
            // build a color map as your need.
            var colorList = ['#9F86FF','#1CA8DD','#007AE1',];
            return colorList[params.dataIndex]
          };
            return {
              chartConfig:{
                legend: {
                  show:false,
                  orient: 'horizontal',
                  x:'center',
                  y:'bottom',
                  itemWidth:18,
                  itemHeight:14,
                  padding:0,
                  textStyle:{
                    color:'#8E95A4',
                    fontSize:14,
                    textAlign:'left'
                  },
                  align:'left',
                  data:[
                    {name:'New Customers',icon:'bar'},
                    '',
                    {name:'Sales',icon:'bar'},
                    '',
                    {name:'Refound',icon:'bar'}
                  ],
                  formatter:function (name) {
                    let data=[
                      {value:'15', name:'New Customers'},
                      {value:'20', name:'Sales'},
                      {value:'35', name:'Refound'},
                    ];
                    let res ='';
                    console.log(data.length);
                    // console.log(seriesData.length);
                    for(let i =0;i<data.length;i++){
                      console.log(data[i].value);
                      res = name+"                   "+data[i].value+'%'
                      // console.log(res);

                    }
                    return res;
                    // console.log(params);
                    // console.log(res);

                  },

                },
                calculable : false,
                series : [
                  {
                    name:'',
                    type:'pie',
                    avoidLabelOverlap: false,
                    radius : ['50%', '70%'],
                    itemStyle : {
                      normal : {
                        color: colorOption,
                        label : {
                          show : false

                        },
                        labelLine : {
                          show : false
                        }
                      },
                      emphasis : {

                        label : {
                          show : true,
                          position : 'center',
                          textStyle : {
                            fontSize : '24',
                            fontWeight : 'bold'
                          },
                          /*formatter:
                              '{c}' +'%'+'\n'+'Avg'*/
                          formatter:function (params,ticket,callback) {
                            let res='';
                            // console.log(params);
                            // console.log(params.data.name);
                            if(params.data.name ==='New Customers'){
                              res +='+'+params.data.value+'%'+'\n'+'Avg'

                            }
                            else {
                              res +='-'+params.data.value+'%'+'\n'+'Avg'
                            }
                            // console.log(res);
                            //callback貌似undefined，直接return res即可
                            // console.log(callback);
                            return res
                          }


                        }
                      }
                    },
                    data:[
                      {value:'15', name:'New Customers'},
                      {value:'20', name:'Sales'},
                      {value:'35', name:'Refound'},
                    ]
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
        components: {DPie}
    }
</script>
<style>

</style>
