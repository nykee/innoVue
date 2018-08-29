<template>
  <chart
    :options="pieOptions"
    :init-options="initOptions"
    ref="pie"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/pie.js'
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
