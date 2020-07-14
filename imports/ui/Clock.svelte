<script>
  import moment from 'moment'

  export let now

  $: timeString = now.format('H:mm')
</script>
 
 
<h1 class="display-1 my-0" style="line-height: 1;">
  { timeString }
</h1>