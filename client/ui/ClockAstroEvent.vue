<template lang="pug">
  .astro-event(v-if="nextEvent")
    span(v-bind:class="[nextEvent.type]") {{ nextEvent.type }}
    |
    | in
    |
    | {{ nextEventInString }}
</template>

<script>
  import moment from 'moment';
  import SunCalc from 'suncalc';
  import _ from 'underscore';

  let nextEvent = function() {
    var data = [];
    let today = moment().startOf('day');

    _.each([0, 1], function(i, e) {
      let date = today.add(i, 'd').toDate();
      let times = SunCalc.getTimes(date, 47.6338217, -122.3215448);
      // NOTE: this assumes sunrise is always before sunset in a given day 😂
      data.push({type: 'sunrise', time: moment(times.sunrise)});
      data.push({type: 'sunset', time: moment(times.sunset)});
    });

    let now = moment();
    data = _.select(data, function(e, i) {
      return (e.time.isAfter(now));
    });

    return data[0];
  };

  export default {
    data: function() {
      return {
        nextEvent: nextEvent(),
        now: moment()
      };
    },
    mounted: function() {
      let component = this;
      setInterval(function ticker() {
        component.now = moment();
      }, 60 * 1000);
    },
    computed: {
      nextEventInString: function() {
        let then = moment(this.nextEvent.time);
        let hours = then.diff(this.now, 'hours');
        let minutes = then.diff(this.now, 'minutes') % 60;

        return `${hours}h ${minutes}m`;
      }
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
