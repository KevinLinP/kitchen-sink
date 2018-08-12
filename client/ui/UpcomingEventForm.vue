<template lang="pug">
  form(@submit.prevent='submit')
    .form-row.mb-2
      .col
        input.form-control(type='text' v-model='name' placeholder='name')
      .col
        input.form-control(type='text' v-model='eventAt' placeholder='eventAt')
      .col-auto
        input.form-control(type='submit' value='Save')
</template>

<script>
  import { UpcomingEvents } from '/imports/api/upcoming-events.js';

  export default {
    data: function() {
      return {
        name: '',
        eventAt: '',
      };
    },
    methods: {
      submit: function(e) {
        UpcomingEvents.insert({
          name: this.name,
          eventAt: this.eventAt,
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
