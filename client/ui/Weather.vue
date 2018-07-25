<template lang="pug">
  div
    iframe.current-widget(id="forecast_embed" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=47.639469&lon=-122.325989&name=Eastlake,%20Seattle&units=uk")
    #customize-script-container.bar-widget
</template>

<script>
  import $ from "jquery";

  // NOTE: this code is so bad you should feel bad just for reading it
  export default {
    mounted: function() {
      // TODO: make better
      $.getScript('https://darksky.net/widget/graph-bar/47.6338217,-122.3215448/uk212/en.js?width=100%&height=400&title=Full Forecast&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=uk2&timeColor=333333&tempColor=333333&currentDetailsOption=false');
    }
  }
</script>

<style lang="scss" scoped>
  .current-widget {
    margin-top: -30px;
    position: relative;
    z-index: 2;
    background: white;
    height: 220px;
  }
  .bar-widget {
    margin-top: -210px;
    position: relative;
    z-index: 1;
  }
</style>
