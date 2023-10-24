<template>
  <div class="servesBanner">
    <div class="servesBanner__wrap container">
      <div class="servesBanner__with-text">
        <ui-breadcrumbs></ui-breadcrumbs>
        <h1 class="servesBanner__title">SERVICES</h1>
        <p class="servesBanner__text">
          If you are looking for a full-service construction company, look to Createx Construction
          Bureau. We are doing our best to be a partner for all of your construction needs.
        </p>
        <div class="servesBanner__img"></div>
      </div>
    </div>
  </div>
</template>
<script>
import UiBreadcrumbs from '../common/breadcrumbs.vue'
export default {
  name: 'ServesBanner',
  components: { UiBreadcrumbs }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.servesBanner {
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
    background-image: url('../../assets/bannerBg.png');
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
