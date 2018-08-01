<template lang="pug">
  div
    div(v-for='bookmark in bookmarks')
      a(:href='bookmark.url') {{ bookmark.name }}
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
    data: function() {
      return {};
    },
  }
</script>

<style lang="scss" scoped>
</style>
