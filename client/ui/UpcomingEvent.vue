<template lang="pug">
  .d-flex.justify-content-between
    .name {{name}}
    div
      span.days {{eventInDays}}
      |
      | days
    button.btn.btn-secondary.delete-button(v-if='isEditing' @click='deleteUpcomingEvent')
      | delete
</template>

<script>
  import moment from 'moment';
  import { Session } from 'meteor/session';
  import { UpcomingEvents } from '/imports/api/upcoming-events.js';

  export default {
    props: ['_id', 'name', 'eventAt'],
    meteor: {
      isEditing () {
        return Session.get('isEditingHomescreen');
      }
    },
    computed: {
      eventInDays: function() {
        return moment(this.eventAt).diff(moment(), 'd') + 1;
      }
    },
    methods: {
      deleteUpcomingEvent: function() {
        UpcomingEvents.remove(id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .name {
    font-weight: 500;
  }
  .days {
    font-size: 110%;
    font-weight: 500;
  }
</style>
