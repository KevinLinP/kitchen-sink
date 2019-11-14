<template lang="pug">
  div
    iframe.current-widget(id='forecast_embed' frameborder='0' height='245' width='100%' :src='iframeUrl')
</template>

<script>
  export default {
    data() {
      return {
        location: {
          name: 'Washington, DC',
          lat: 38.9047,
          long: -77.0315,
        }
      };
    },
    computed: {
      iframeUrl() {
        return `//forecast.io/embed/#name=${this.location.name}&lat=${this.location.lat}&lon=${this.location.long}&units=uk`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*
  .bar-widget {
    margin-top: -210px;
    overflow: hidden;
    height: 320px;
    position: relative;
    z-index: 1;
  }
  */
</style>
