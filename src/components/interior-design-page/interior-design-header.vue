<template>
  <div class="interiorDesignHeader">
    <main-header></main-header>
  </div>
</template>
<script>
import MainHeader from '../common/main-header.vue'
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
