<template>
  <chart
    :options="DPieConfig"

    ref="DPie"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/pie';
    export default {
      props:['DPieConfig'],
        data() {
            return {

            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          chart: ECharts,
        }
    }
</script>
<style>

</style>
