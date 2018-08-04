<template lang="pug">
  div
    ul(v-for='upcomingEvent in upcomingEvents')
      li {{upcomingEvent.name}} {{upcomingEvent.eventAt}}
    upcoming-event-form
</template>

<script>
  import { UpcomingEvents } from '/imports/api/upcoming-events.js';
  import { Session } from 'meteor/session'

  export default {
    data: function() {
      return {
        isEditingSessionVar: 'upcomingEventsIsEditing'
      };
    },
    meteor: {
      $subscribe: {
        'upcomingEvents': []
      },
      upcomingEvents() {
        return UpcomingEvents.find({});
      },
      isEditing () {
        return Session.get(this.isEditingSessionVar);
      }
    },
    mounted: function() {
      Session.setDefault(this.isEditingSessionVar, true); // TODO: set to false
    },
    methods: {
      toggleIsEditing: function() {
        let prevValue = Session.get(this.isEditingSessionVar);
        Session.set(this.isEditingSessionVar, !prevValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-toggle {
  }
</style>
