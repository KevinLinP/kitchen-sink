<script>
  export let location

  let iframeUrl = `//forecast.io/embed/#name=${location.name}&lat=${location.lat}&lon=${location.long}&units=uk`;
</script>

<div>
  <iframe id='forecast_embed' frameborder='0' height='245' width='100%' src={iframeUrl}>
  </iframe>
</div>