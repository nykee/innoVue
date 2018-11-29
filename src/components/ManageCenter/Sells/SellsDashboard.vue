<!--
<template>
  <div class="sells-dash-container manage-page-subview-container">
    <CommonHeader title="销售监控dashboard" iconName="fa fa-magic fa-2x" style="color:#fff"/>
    <Row>
      <i-col :lg="16">
        <MonthlySummary/>
      </i-col>
      <i-col :lg="8">
        <PercentCount/>
      </i-col>
    </Row>
    <Row>
      <i-col :lg="16">
        <OrderLists></OrderLists>
      </i-col>
      <i-col :lg="8">
        amountCount
      </i-col>
    </Row>
    <Row>
      <i-col :lg="16">
        <Row :gutter="1">
          <i-col  :lg={span:4,offset:prod.offset} v-for="prod in productLists" :key="prod.id">
            <Products :pName='prod.name' :chartConfig="prod.chartConfig"/>
          </i-col>
        </Row>
      </i-col>
      <i-col :lg="8">
        sellersCount
      </i-col>
    </Row>



  </div>


</template>

<script>
  import CommonHeader from '../CommonHeader'
  import PercentCount from './PercentCount'
  import MonthlySummary from './MonthlySummary'
  import Products from './Products/Products'
  import ProdChartConfig from '../../../store/ProdChartConfig'
  import OrderLists from './OrderLists';
    export default {
        data() {

            return {
              productLists:[
                {
                  id:1,name:'HTC',amount:450,offset:1,chartConfig:ProdChartConfig.htcConfig
                },
                {
                  id:2,name:'XIAOMI',amount:657, offset:1,chartConfig:ProdChartConfig.xiaomiConfig
                },
                {
                  id:3,name:'APPLE',amount:1200, offset:1,chartConfig:ProdChartConfig.appleConfig
                },
                {
                  id:4,name:'SAMSUNG',amount:130, offset:1,chartConfig:ProdChartConfig.samsungConfig
                },
                {
                  id:5,name:'HUAWEI',amount:1428, offset:0,chartConfig:ProdChartConfig.huaweiConfig
                }

                ]
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          CommonHeader,
          PercentCount,
          MonthlySummary,
          Products,
          OrderLists
        }
    }
</script>
<style>
  .sells-dash-container{
    background: #2F323A;
  }
</style>
-->
