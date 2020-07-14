<script>
  import Clock from './Clock.svelte'
  import ClockSunriseSunset from './ClockSunriseSunset.svelte'
</script>

<div class="container">
  <div class="row mt-5">
    <div class="col-4">
      <div class="d-flex justify-content-center">
        <div><Clock/></div>
      </div>

      <ClockSunriseSunset/>
    </div>
  </div>
</div>