<template lang="pug">
  div.position-relative
    draggable(v-model='bookmarks' class='row' :move='isEditingFunc' @update='sortableUpdate')
      .col-3(v-for='bookmark in bookmarks')
        bookmark(:bookmark='bookmark' :key='bookmark.id')
    .row.mt-3(v-if='isEditing')
      .col
        bookmark-form
</template>

<script>
  import { Bookmarks } from '/imports/api/bookmarks.js';
  import { Session } from 'meteor/session';
  import _ from 'underscore';
  import draggable from 'vuedraggable';

  export default {
    components: {
      draggable
    },
    meteor: {
      $subscribe: {
        'bookmarks': []
      },
      bookmarks () {
        return Bookmarks.find({}, {sort: {position: 1}});
      },
      isEditing () {
        return Session.get('isEditingHomescreen');
      }
    },
    methods: {
      // TODO: think of a better style
      isEditingFunc: function() {
        return this.isEditing;
      },
      sortableUpdate: function(e) {
        _.each(this.bookmarks, function(bookmark, i) {
          Bookmarks.update(bookmark._id, {$set: {position: i}});
        });
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