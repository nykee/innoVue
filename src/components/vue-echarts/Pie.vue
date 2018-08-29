<template>
  <chart
    :options="pieOptions"
    ref="pie"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/pie'
    export default {
    props:['pieOptions'],
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
          chart: ECharts
        }
    }
</script>
<style>

</style>
