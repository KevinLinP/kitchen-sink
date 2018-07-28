<template lang="pug">
  .container
    .time-string.text-center {{ timeString }}
    clock-astro-event
</template>

<script>
  import moment from 'moment';

  export default {
    data: function() {
      return {
        now: moment(),
      };
    },
    computed: {
      timeString: function() {
        return this.now.format('H:mm');
      }
    },
    mounted: function() {
      let component = this;
      let offset = moment().add(1, 'm').startOf('minute').diff(moment());

      // NOTE: look into reliability of initial offset
      setTimeout(function() {
        component.now = moment();

        setInterval(function ticker() {
          component.now = moment();
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
    font-weight: 300;
  }
</style>
