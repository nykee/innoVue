<template>
  <div>
    <ProductsName :pName="pName"></ProductsName>
    <div style="height:20rem;width: 20rem">
      <Pie :pieOptions="chartConfig"></Pie>
    </div>

  </div>
</template>

<script>
  // import  ProductsChart from './ProductsChart'
  import  ProductsName from './ProductsName'
  import Pie from '../../../vue-echarts/Pie'
    export default {
    props:['pName','chartConfig'],
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          // ProductsChart,
          ProductsName,Pie
        }
    }
</script>
<style>

</style>
