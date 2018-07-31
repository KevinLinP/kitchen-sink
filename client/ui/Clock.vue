<template lang="pug">
  .outer-container
    .inner-container.text-center
      .time-string {{ timeString }}
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
  .outer-container {
  }
  .inner-container {
  }
  .time-string {
    font-size: 6rem;
    position: relative;
    font-weight: 300;
    line-height: 1.0;
  }
</style>
