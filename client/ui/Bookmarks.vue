<template lang="pug">
  div
    .row
      .col-3(v-for='bookmark in bookmarks')
        bookmark(:bookmark='bookmark' :key='bookmark.id')
</template>

<script>
//https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png
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
