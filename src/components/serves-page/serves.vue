<template>
  <serves-header></serves-header>
  <serves-banner></serves-banner>
  <all-serves></all-serves>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>
<script>
import ServesHeader from './serves-header.vue'
import ServesBanner from './serves-banner.vue'
import AllServes from './all-serves.vue'
import UiFooter from '../footer/UiFooter.vue'
import UiDetails from '../Details/Details.vue'

export default {
  name: 'Serves',

  components: {
    UiDetails,
    UiFooter,
    ServesHeader,
    ServesBanner,
    AllServes
  }
}
</script>
<style scoped></style>
