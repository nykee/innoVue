<template>
  <charts
    :options="mapConfig"
    ref="map"
    auto-resize
  />
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/map'
    export default {
    props:['mapConfig'],
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          charts: ECharts
        }
    }
</script>
<style>

</style>
