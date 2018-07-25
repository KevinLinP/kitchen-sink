<template lang="pug">
  .time-string.text-center {{ timeString }}
</template>

<script>
  import moment from 'moment';

  export default {
    data: function() {
      return {
        now: new Date()
      };
    },
    computed: {
      timeString: function() {
        return moment(this.now).format('H:mm');
      }
    },
    methods: {
      createListItem: function(evt) {
        evt.preventDefault();
        Meteor.call('listitems.insert', {
          text: this.text
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .time-string {
    font-size: 5rem;
  }
</style>
