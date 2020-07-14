<script>
  import moment from 'moment'
  import { onMount } from 'svelte';

  import Clock from './Clock.svelte'
  import ClockSunriseSunset from './ClockSunriseSunset.svelte'
  import Weather from './Weather.svelte'

  // TODO: made non-static
  const location = {
    name: 'Washington, DC',
    lat: 38.9047,
    long: -77.0315,
  };
  let now = moment()

  onMount(async () => {
    let offset = moment().add(1, 'm').startOf('minute').diff(moment());

    setTimeout(function() {
      now = moment();

      setInterval(() => {
        time = moment();
      }, 60 * 1000);
    }, offset);
  })
</script>

<div class="container">
  <div class="row mt-3">
    <div class="col-4 pt-5">
      <div class="d-flex justify-content-center">
        <div><Clock {now}/></div>
      </div>

      <ClockSunriseSunset {now} {location}/>
    </div>
    
    <div class="col-8">
      <Weather {location}/>
    </div>
  </div>
</div>