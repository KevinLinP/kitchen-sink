<template lang="pug">
  .container.position-relative(v-if="hillChart")
    .div(v-for="hillChartItem in hillChartItems")
      hill-chart-item-form(:hill-chart='hillChart' :hill-chart-item='hillChartItem')
    hill-chart-item-form(:hill-chart='hillChart')
</template>

<script>
  import { Session } from 'meteor/session'
  import { HillCharts } from '/imports/api/hill-charts.js'
  import { HillChartItems } from '/imports/api/hill-chart-items.js'

  export default {
    meteor: {
      $subscribe: {
        'hillChart': function () {
          return [this.hillChartId]
        },
        'hillChartItems': function () {
          return [this.hillChartId]
        },
      },
      hillChart() {
        return HillCharts.findOne(this.hillChartId)
      },
      hillChartItems() {
        return HillChartItems.find({hillChartId: this.hillChartId})
      },
    },
    computed: {
      hillChartId() {
        return this.$route.params.id
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
</style>
