<template>
  <div class="bannerContent">
    <div class="bannerContent__wrap container">
      <h1 class="bannerContent__title">
        CREATE<span class="bannerContent__title_orange">X</span> CONSTRUCTION
      </h1>
      <p class="bannerContent__text">
        Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin
        ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
      </p>
      <div class="bannerContent__buttons">
        <uiButton outlined_transparent>Learn more about us</uiButton>
        <uiButton>Submit request</uiButton>
      </div>
    </div>
  </div>
</template>

<script>
import uiButton from '../../common/uiButton.vue'

export default {
  name: 'bannerContent',

  components: {
    uiButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/vars';

.bannerContent {
  &__wrap {
    position: absolute;
    left: 0;
    right: 0;
  }

  &__title {
    font-size: 72px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 1px;
    color: $white;
    max-width: 595px;
    padding: 220px 0 24px 0;
    margin: 0;

    &_orange {
      color: $orange;
    }
  }

  &__text {
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    color: $white;
    max-width: 595px;
    padding-bottom: 61px;
    margin: 0;
  }

  &__button-learn {
    border-radius: 4px;
    border: 1px solid $white;
    background-color: transparent;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.5px;
    color: $white;
    padding: 0 40px;
    cursor: pointer;
    text-transform: uppercase;
  }

  &__button-submit {
    background-color: $orange;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.5px;
    padding: 0 40px;
    color: $white;
    border-radius: 4px;
    cursor: pointer;
  }

  &__buttons {
    display: flex;
    grid-gap: 24px;
  }
}
</style>
