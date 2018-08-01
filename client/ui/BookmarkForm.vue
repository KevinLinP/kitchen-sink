<template lang="pug">
  form
    input.form-control(type='text' v-model='name' placeholder='name')
    input.form-control(type='text' v-model='url' placeholder='url')
    input.form-control(type='text' v-model='iconUrl' placeholder='iconUrl')
</template>

<script>
  import { Bookmarks } from '/imports/api/bookmarks.js';

  export default {
    data: function() {
      return {
        name: 'Reddit',
        url: 'https://www.reddit.com',
        iconUrl: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png'
      };
    }
  }
</script>

<style lang="scss" scoped>
</style>
