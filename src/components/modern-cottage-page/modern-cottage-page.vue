<template>
  <modern-cottage-header></modern-cottage-header>
  <modern-cottage-banner></modern-cottage-banner>
  <project-goal></project-goal>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>

<script>
import ModernCottageHeader from './modern-cottage-header.vue'
import ModernCottageBanner from './modern-cottage-banner.vue'
import UiDetails from '../homepage/details/details.vue'
import UiFooter from '../common/footer/ui-footer.vue'
import ProjectGoal from './project-goal.vue'

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
