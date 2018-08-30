let dataFormatter=function (params) {
  params.data.value =(params.data.value/1000>1)? ((params.data.value/1000)+'K'):params.data.value;
  return params.data.value+'\n'+"QTY"
};
var labelTop = {
  normal : {
    color:'#1DA1D3',
    label : {
      show : true,
      position : 'center',
      formatter : dataFormatter,
      textStyle: {
        baseline : 'bottom'
      }
    },
    labelLine : {
      show : false
    }
  }
};

var labelBottom = {
  normal : {
    color: '#2F323A',
    label : {
      show : false,
      position : 'center'
    },
    labelLine : {
      show : false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
var radius = [40, 50];
let ProdChartConfig ={
  htcConfig:{series : [
        {
          type : 'pie',
          center : ['10%', '50%'],
          radius : radius,
          x: '0%', // for funnel
          // itemStyle : labelFromatter,
          data : [
            {name:'other', value:550, itemStyle : labelBottom},
            {name:'HTC', value:450,itemStyle : labelTop}
          ]
        },

      ]},
  xiaomiConfig:{
    series : [
      {
        type : 'pie',
        center : ['15%', '50%'],
        radius : radius,
        x:'20%', // for funnel
        // itemStyle : labelFromatter,
        data : [
          {name:'other', value:320, itemStyle : labelBottom},
          {name:'小米', value:657,itemStyle : {
              normal : {
                color:'#0375D6',
                label : {
                  show : true,
                  position : 'center',
                  formatter : dataFormatter,
                  textStyle: {
                    baseline : 'bottom'
                  }
                },
                labelLine : {
                  show : false
                }
              }
            }}
        ]
      }

    ]
  },
  appleConfig:{
    series : [
      {
        type : 'pie',
        center : ['20%', '50%'],
        radius : radius,
        x:'40%', // for funnel
        // itemStyle : labelFromatter,
        data : [
          {name:'other', value:330, itemStyle : labelBottom},
          {name:'苹果', value:1200,itemStyle : {
              normal : {
                color:'#9981F4',
                label : {
                  show : true,
                  position : 'center',
                  formatter : dataFormatter,
                  textStyle: {
                    baseline : 'bottom'
                  }
                },
                labelLine : {
                  show : false
                }
              }
            }}
        ]
      },

    ]
  },
  samsungConfig:{
    series : [
      {
        type : 'pie',
        center : ['30%', '50%'],
        radius : radius,
        x:'60%', // for funnel
        // itemStyle : labelFromatter,
        data : [
          {name:'other', value:440, itemStyle : labelBottom},
          {name:'三星', value:1800,itemStyle : {
              normal : {
                color:'#5433DB',
                label : {
                  show : true,
                  position : 'center',
                  formatter : dataFormatter,
                  textStyle: {
                    baseline : 'bottom'
                  }
                },
                labelLine : {
                  show : false
                }
              }
            }}
        ]
      },

    ]
  },
  huaweiConfig:{
    series : [
      {
        type : 'pie',
        center : ['35%', '50%'],
        radius : radius,
        x:'80%', // for funnel
        // itemStyle : labelFromatter,
        data : [
          {name:'other', value:230, itemStyle : labelBottom},
          {name:'华为', value:2400,itemStyle : {
              normal : {
                color:'#0376D7',
                label : {
                  show : true,
                  position : 'center',
                  formatter : dataFormatter,
                  textStyle: {
                    baseline : 'bottom'
                  }
                },
                labelLine : {
                  show : false
                }
              }
            }}
        ]
      },

    ]
  }



    };




export default ProdChartConfig;
