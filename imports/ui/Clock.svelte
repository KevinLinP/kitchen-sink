<script>
  import moment from 'moment'
  import { onMount } from 'svelte';
  import ClockSunriseSunset from './ClockSunriseSunset.svelte'

  let time = moment()

  onMount(async () => {
    let offset = moment().add(1, 'm').startOf('minute').diff(moment());

    setTimeout(function() {
      time = moment();

      setInterval(function ticker() {
        time = moment();
      }, 60 * 1000);
    }, offset);
  })

  $: timeString = time.format('H:mm')
</script>
 
 
<div class="container">
  <h1 class="display-1">
    { timeString }
  </h1>

  <ClockSunriseSunset/>
</div>