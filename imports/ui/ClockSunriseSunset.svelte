<script>
  import _ from 'underscore'
  import moment from 'moment'
  import SunCalc from 'suncalc'

  // TODO: made non-static
  const location = {
    name: 'Washington, DC',
    lat: 38.9047,
    long: -77.0315,
  };
  let nextEvent = null
  let intervalId

  function setNextEvent() {
    let now = moment()
    let nextEvents = []

    for (let i = 0; i <= 1; i++) {
      let date = now.clone().add(i, 'd').toDate()
      let times = SunCalc.getTimes(date, location.lat, location.long)

      nextEvents.push({type: 'sunrise', time: moment(times.sunrise)})
      nextEvents.push({type: 'sunset', time: moment(times.sunset)})
    }

    nextEvent = _.find(nextEvents, (event) => {
      return event.time.isAfter(now)
    })

    // let offset = 
    // setTimeout() {

    // }
  }

  setNextEvent()
</script>

{#if nextEvent}

  {#if nextEvent.type === 'sunrise'}
  <div class="icomoon-sunrise"></div>
  {:else}
  <div class="icomoon-sunset"></div>
  {/if}

{/if}