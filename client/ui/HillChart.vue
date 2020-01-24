<template lang="pug">
  .container.position-relative
    .row.justify-content-center
      .col-md-4.d-flex.justify-content-center.align-items-center
        clock
      .col-md-8
        weather
    .row
      .col-md-4
        upcoming-events
      .col-md-8
        bookmarks
    button.edit-toggle.btn.btn-secondary(@click='toggleIsEditing' :class='{editing: isEditing}')
      | edit
</template>

<script>
  import { Session } from 'meteor/session'

  export default {
    meteor: {
      isEditing () {
        return Session.get('isEditingHomescreen');
      }
    },
    mounted: function() {
      Session.setDefault('isEditingHomescreen', false);
    },
    methods: {
      toggleIsEditing: function() {
        let prevValue = Session.get('isEditingHomescreen');
        Session.set('isEditingHomescreen', !prevValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-toggle {
    position: absolute;
    top: 0.5rem;
    left: 0;

    opacity: 0;
    &:hover, &.editing {
      opacity: 1;
    }
  }
</style>
