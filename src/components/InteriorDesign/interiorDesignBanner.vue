<template>
  <div class="interiorDesignBanner">
    <div class="interiorDesignBanner__wrap container">
      <div class="interiorDesignBanner__with-text">
        <ui-breadcrumbs></ui-breadcrumbs>
        <h1 class="interiorDesignBanner__title">INTERIOR DESIGN</h1>
        <p class="interiorDesignBanner__text">
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate
          elementum blandit amet.
        </p>
        <div class="interiorDesignBanner__img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UiBreadcrumbs from '../common/breadcrumbs.vue'
export default {
  name: 'interiorDesignBanner',
  components: { UiBreadcrumbs }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.interiorDesignBanner {
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
    background-image: url('../../assets/interiorDesignBanner.png');
    width: 50%;
    height: 600px;
    position: absolute;
    right: 0;
    top: 65px;
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
