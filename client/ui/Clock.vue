<template lang="pug">
  .container
    .time-string.text-center {{ timeString }}
    clock-astro-event
</template>

<script>
  import moment from 'moment';

  let timeString = function() {
    return moment().format('H:mm');
  };

  export default {
    data: function() {
      return {
        timeString: timeString(),
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
