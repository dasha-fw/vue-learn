<template>
  <div class="project container">
    <div class="project__head">
      <h2 class="project__title">Browse our selected projects and learn more about our work</h2>
    </div>
    <div class="project__cards">
      <project-card></project-card>
    </div>
    <div class="project__explore">
      <p class="project__explore-text">Explore all our works</p>
      <uiButton>View portfolio</uiButton>
    </div>
  </div>
</template>

<script>
import uiButton from '../common/uiButton.vue'
import ProjectCard from './ProjectCards.vue'
import uiIcon from '../common/UiIcon.vue'

export default {
  name: 'project',

  components: {
    uiButton,
    ProjectCard,
    uiIcon
  }
}
</script>
<style lang="scss">
@import '../../assets/vars';

.project {
  padding: 120px 0 125px 0;

  &__explore-text {
    color: $gray-900;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }

  &__explore {
    display: flex;
    align-items: center;
    grid-gap: 40px;
    justify-content: center;
    padding-top: 85px;
  }

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    padding-bottom: 60px;
    margin: 0;
    width: 60%;
  }

  &__head {
    display: flex;
    justify-content: space-between;
  }

  &__buttons {
    display: flex;
    grid-gap: 24px;
  }
}
</style>
