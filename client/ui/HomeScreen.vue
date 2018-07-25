<template lang="pug">
  .container
    .row
      .col-md-4
        clock
      .col-md-8
        iframe(id="forecast_embed" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=47.639469&amp;lon=-122.325989&amp;name=Seattle&amp;units=uk")
        
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
