<template lang="pug">
  .d-flex.flex-column
    a.d-block.p-3(:href='bookmark.url')
      .p-2
        img.img-fluid(:src='bookmark.iconUrl')
      .text-center.link-text
        | {{ bookmark.name }}
</template>

<script>
  export default {
    props: ['bookmark'],
  }
</script>

<style lang="scss" scoped>
  .link-text {
    font-weight: 300;
    font-size: 1.1rem;
    color: black;
  }
</style>
