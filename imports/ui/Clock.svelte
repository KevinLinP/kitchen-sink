<script>
  import moment from 'moment'

  export let now

  $: timeString = now.format('H:mm')
</script>
 
 
<h1 class="display-1">
  { timeString }
</h1>