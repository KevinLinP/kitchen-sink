<template lang="pug">
  div.position-relative
    button.edit-toggle.btn.btn-secondary(@click='toggleIsEditing' :class='{editing: isEditing}')
      | edit bookmarks
    .row
      .col-3(v-for='bookmark in bookmarks')
        bookmark(:bookmark='bookmark' :key='bookmark.id')
      .col-3.d-flex.justify-content-center.align-items-center
    .row.mt-3(v-if='isEditing')
      .col
        bookmark-form
</template>

<script>
  import { Bookmarks } from '/imports/api/bookmarks.js';
  import { Session } from 'meteor/session'

  export default {
    data: function() {
      return {
        isEditingSessionVar: 'bookmarksIsEditing'
      };
    },
    meteor: {
      $subscribe: {
        'bookmarks': []
      },
      bookmarks () {
        return Bookmarks.find({});
      },
      isEditing () {
        return Session.get(this.isEditingSessionVar);
      }
    },
    mounted: function() {
      Session.setDefault(this.isEditingSessionVar, false);
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
    position: absolute;
    top: -20px;
    right: 0;

    opacity: 0;
    &:hover, &.editing {
      opacity: 1;
    }
  }
</style>
