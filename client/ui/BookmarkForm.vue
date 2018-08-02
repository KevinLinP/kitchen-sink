<template lang="pug">
  form(@submit='submit')
    .form-row.mb-2
      .col
        input.form-control(type='text' v-model='name' placeholder='name')
      .col
        input.form-control(type='text' v-model='url' placeholder='url')
    .form-row
      .col
        input.form-control(type='text' v-model='iconUrl' placeholder='iconUrl')
      .col-auto
        input.form-control(type='submit' value='Save')
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
    },
    methods: {
      submit: function(e) {
        e.preventDefault();

        Meteor.call('bookmarks.insert', {
          name: this.name,
          url: this.url,
          iconUrl: this.iconUrl
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
