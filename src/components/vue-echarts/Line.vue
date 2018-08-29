<template>
  <chart
    :options="LineConfig"
    ref="line"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/line'
    export default {
    props:['LineConfig'],
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
