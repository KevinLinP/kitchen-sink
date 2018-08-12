<template lang="pug">
  .d-flex.flex-column.position-relative
    a.d-block.p-3(:href='bookmark.url')
      .p-2
        img.img-fluid(:src='bookmark.iconUrl')
      .text-center.link-text
        | {{ bookmark.name }}
    button.btn.btn-secondary.delete-button(v-if='isEditing' @click='deleteBookmark')
      | delete
</template>

<script>
  import { Session } from 'meteor/session';
  import { Bookmarks } from '/imports/api/bookmarks';

  export default {
    props: ['bookmark'],
    meteor: {
      isEditing: function() {
        return Session.get('isEditingHomescreen');
      }
    },
    methods: {
      deleteBookmark: function() {
        Bookmarks.remove(this.bookmark._id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .link-text {
    font-weight: 300;
    font-size: 1.1rem;
    color: black;
  }
  .delete-button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
