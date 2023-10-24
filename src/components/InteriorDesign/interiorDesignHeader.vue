<template>
  <div class="interiorDesignHeader">
    <main-header></main-header>
  </div>
</template>
<script>
import MainHeader from '../homepage/MainHeader.vue'
export default {
  name: 'interiorDesignHeader',
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.interiorDesignHeader {
  background-color: $gray-200;
}
</style>
