<template lang="pug">
  div
    .row
      .col-3(v-for='bookmark in bookmarks')
        bookmark(:bookmark='bookmark' :key='bookmark.id')
    .row
      .col
        bookmark-form
</template>

<script>
  import { Bookmarks } from '/imports/api/bookmarks.js';

  export default {
    meteor: {
      $subscribe: {
        'bookmarks': []
      },
      bookmarks () {
        return Bookmarks.find({});
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
