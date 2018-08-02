<template lang="pug">
  div
    .row.mt-3
      button.edit-toggle.btn.btn-secondary(@click='toggleIsEditing') toggle edit
    .row
      .col-3(v-for='bookmark in bookmarks')
        bookmark(:bookmark='bookmark' :key='bookmark.id')
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
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
</style>
