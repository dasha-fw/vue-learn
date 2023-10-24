<template>
  <div class="workPage">
    <main-header></main-header>
  </div>
</template>
<script>
import MainHeader from '../homepage/MainHeader.vue'
export default {
  name: 'WorkPageHeader',
  components: { MainHeader }
}
</script>

<style lang="scss">
@import '../../assets/vars';
.workPage {
  background-color: $gray-200;
}
</style>
