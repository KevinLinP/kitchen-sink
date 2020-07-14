<script>
  import _ from 'underscore'
  import moment from 'moment'
  import SunCalc from 'suncalc'
  import { onMount } from 'svelte';

  export let now
  export let location

  let nextEvent = null
  let nextEventTimeString = null
  let nextEventOffsetString = null

  function setNextEvent() {
    let nextEvents = []

    for (let i = 0; i <= 1; i++) {
      let date = now.clone().add(i, 'd').toDate()
      let times = SunCalc.getTimes(date, location.lat, location.long)

      nextEvents.push({type: 'sunrise', time: times.sunrise})
      nextEvents.push({type: 'sunset', time: times.sunset})
    }

    nextEvent = _.find(nextEvents, (event) => {
      return moment(event.time).isAfter(now)
    })
  }

  setNextEvent()

  $: {
    let then = moment(nextEvent.time)
    let hours = then.diff(now, 'hours')
    let minutes = then.diff(now, 'minutes') % 60

    nextEventOffsetString = `${hours}h ${minutes}m`
  }

  $: nextEventTimeString = moment(nextEvent.time).format('H:mm')

  $: {
    if (now.isAfter(moment(nextEvent.time))) {
      setNextEvent()
    }
  }
</script>

{#if nextEvent}
<div class="d-flex w-100 justify-content-center">
  <div>{ nextEventTimeString }</div>

  <div class="mx-3">
    {#if nextEvent.type === 'sunrise'}
    <span class="icomoon-sunrise sunrise"></span>
    {:else}
    <span class="icomoon-sunset sunset"></span>
    {/if}
  </div>

  <div>{ nextEventOffsetString }</div>
</div>
{/if}

<style lang="scss" scoped>
  .sunrise {
    color: orangered;
  }
  .sunset {
    color: midnightblue;
  }
</style>
