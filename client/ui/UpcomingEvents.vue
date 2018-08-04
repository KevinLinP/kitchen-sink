<template lang="pug">
  div
    ul.list-unstyled(v-for='upcomingEvent in upcomingEvents')
      li
        upcoming-event(v-bind='upcomingEvent')
    upcoming-event-form(v-if='isEditing')
</template>

<script>
  import { UpcomingEvents } from '/imports/api/upcoming-events.js';
  import { Session } from 'meteor/session'

  export default {
    meteor: {
      $subscribe: {
        'upcomingEvents': []
      },
      upcomingEvents() {
        return UpcomingEvents.find({});
      },
      isEditing () {
        return Session.get('isEditingHomescreen');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .edit-toggle {
  }
</style>
