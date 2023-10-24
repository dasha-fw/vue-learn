<template>
  <div class="servesHeader">
    <main-header></main-header>
  </div>
</template>
<script>
import mainHeader from '../homepage/main-header.vue'

export default {
  name: 'ServesHeader',

  components: {
    mainHeader
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';
.servesHeader {
  background-color: $gray-200;
}
</style>
