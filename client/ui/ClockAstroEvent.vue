<template lang="pug">
  .astro-event(v-if="nextEvent")
    span(v-bind:class="[nextEvent.type]") {{ nextEvent.type }}
    |
    | in
    |
    | {{ nextEvent.time }}
</template>

<script>
  import moment from 'moment';
  import SunCalc from 'suncalc';
  import _ from 'underscore';

  let nextEvent = function() {
    var data = [];
    let today = moment();

    _.each([0, 1], function(i, e) {
      let date = today.add(i, 'd').toDate();
      let times = SunCalc.getTimes(date, 47.6338217, -122.3215448);
      // NOTE: this assumes sunrise is always before sunset in a given day 😂
      data.push({type: 'sunrise', time: times.sunrise});
      data.push({type: 'sunset', time: times.sunset});
    });

    let now = new Date();
    data = _.select(data, function(e, i) {
      return (e.time > now.getTime());
    });

    return data[0];
  };
  
  export default {
    data: function() {
      return {
        nextEvent: nextEvent()
      };
    },
    mounted: function() {
    },
  }
</script>

<style lang="scss" scoped>
  .astro-event {
    font-weight: 500;
  }

  .sunrise {
    color: orange;
  }
  .sunset {
    color: blue;
  }
</style>
