<template>
  <chart
    :options="lineOptions"
    :init-options="initOptions"
    ref="line"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/line'
    export default {
        data() {
            return {
              lineOptions:{

              }
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
