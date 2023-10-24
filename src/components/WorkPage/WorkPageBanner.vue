<template>
  <div class="workPageBanner">
    <div class="workPageBanner__wrap container">
      <div class="workPageBanner__with-text">
        <ui-breadcrumbs></ui-breadcrumbs>
        <h1 class="workPageBanner__title">OUR WORK</h1>
        <p class="workPageBanner__text">
          Our portfolio represents 20 years of construction experience backed by a passion for
          perfect client service, quality and innovations in consctuction industry.
        </p>
        <div class="workPageBanner__img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UiBreadcrumbs from '../common/breadcrumbs.vue'
export default {
  name: 'WorkPageBanner',
  components: { UiBreadcrumbs }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.workPageBanner {
  background-color: $gray-200;
  padding-bottom: 135px;

  &__wrap {
    display: flex;
  }

  &__title {
    color: $gray-900;
    font-size: 72px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 1px;
    margin: 0;
  }

  &__img {
    background-image: url('../../assets/workPageBanner.png');
    width: 50%;
    height: 600px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    background-repeat: no-repeat;
  }

  &__text {
    color: $gray-700;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    max-width: 600px;
  }

  &__with-text {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    width: 50%;
  }
}
</style>
