<template lang="pug">
  .container
    .time-string.text-center {{ timeString }}
</template>

<script>
  import moment from 'moment';
  import SunCalc from 'suncalc';
  import _ from 'underscore';

  let timeString = function() {
    return moment().format('H:mm');
  };

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

    return data;
  };
  
  export default {
    data: function() {
      return {
        timeString: timeString(),
        nextEvent: nextEvent()
      };
    },
    mounted: function() {
      let component = this;
      let offset = moment().add(1, 'm').startOf('minute').diff(moment());

      // NOTE: look into reliability of initial offset
      setTimeout(function() {
        component.timeString = timeString();

        setInterval(function ticker() {
          component.timeString = timeString();
        }, 60 * 1000);
      }, offset);
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
  }
  .time-string {
    font-size: 6rem;
    position: relative;
    top: -40px;
  }
</style>
