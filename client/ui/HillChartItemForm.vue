<template lang="pug">
  .div
    input(type='text' v-model='name')
    input(type='number' v-model='xPos')
    .div(v-if="item")
      button(@click="update") Update
    .div(v-else)
      button(@click="insert") Create
</template>

<script>
  import { Session } from 'meteor/session'
  import { HillChartItems } from '/imports/api/hill-chart-items.js'

  export default {
    props: ['hillChart', 'hillChartItem'],
    data() {
      return {
        name: '',
        xPos: ''
      }
    },
    mounted() {
      if (this.item) {
        this.name = this.item.name
        this.xPos = this.item.xPos
      }
    },
    computed: {
      item() {
        return this.hillChartItem
      },
    },
    methods: {
      insert() {
        HillChartItems.insert({
          hillChartId: this.hillChart._id,
          name: this.name,
          xPos: this.xPos
        })
      },
      update() {
        HillChartItems.update(this.item._id, {
          name: {$set: this.name},
          xPos: {$set: this.xPos}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
