<template lang="pug">
  form(@submit='submit')
    .form-row.mb-2
      .col
        input.form-control(type='text' v-model='name' placeholder='name')
      .col
        input.form-control(type='text' v-model='eventAt' placeholder='eventAt')
      .col
        input.btn.btn-secondary(type='submit' value='Save')
</template>

<script>
  import { UpcomingEvents } from '/imports/api/upcoming-events.js';

  export default {
    data: function() {
      return {
        name: 'Reddit',
        eventAt: 'August 23',
      };
    },
    methods: {
      submit: function(e) {
        e.preventDefault();

        Meteor.call('upcomingEvents.insert', {
          name: this.name,
          eventAt: this.eventAt,
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
