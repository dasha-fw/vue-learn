<template>
  <modern-cottage-header></modern-cottage-header>
  <modern-cottage-banner></modern-cottage-banner>
  <project-goal></project-goal>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>

<script>
import ModernCottageHeader from './modernCottageHeader.vue'
import ModernCottageBanner from './modernCottageBanner.vue'
import UiDetails from '../Details/Details.vue'
import UiFooter from '../footer/UiFooter.vue'
import ProjectGoal from './ProjectGoal.vue'

export default {
  name: 'modernCottage',
  components: {
    ProjectGoal,
    UiFooter,
    UiDetails,
    ModernCottageBanner,
    ModernCottageHeader
  }
}
</script>
