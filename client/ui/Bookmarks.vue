<template lang="pug">
  div
    .row
      .col-3.d-flex.flex-column(v-for='bookmark in bookmarks')
        img.img-fluid(:src='bookmark.iconUrl')
        .text-center.mt-3
          a(:href='bookmark.url') {{ bookmark.name }}
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
    data: function() {
      return {};
    },
  }
</script>

<style lang="scss" scoped>
</style>
