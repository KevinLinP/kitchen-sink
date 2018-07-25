<template lang="pug">
  .container
    .row
      .col-md-4
        clock
      .col-md-8
        weather
        
</template>

<script>
  import { Mongo } from 'meteor/mongo';

  export default {
    data: function() {
      return {
      };
    },
    meteor: {
      $subscribe: {
      },
    },
    methods: {
    }
  }
</script>
