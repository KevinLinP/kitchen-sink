<script>
  import moment from 'moment'
  import { onMount } from 'svelte';

  import Clock from './Clock.svelte'
  import ClockSunriseSunset from './ClockSunriseSunset.svelte'

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
  <div class="row mt-5">
    <div class="col-4">
      <div class="d-flex justify-content-center">
        <div><Clock {now} /></div>
      </div>

      <ClockSunriseSunset {now} />
    </div>
  </div>
</div>