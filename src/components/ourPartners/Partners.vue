<template>
  <div class="partner">
    <div class="partner__wrap container">
      <div class="partner__reviews">
        <div class="partner__review">
          <p class="partner__review-title">What our clients are saying</p>
          <reviews></reviews>
        </div>
        <div class="partner__img">
          <img src="../../assets/partners.png" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reviews from './ Reviews.vue'

export default {
  name: 'Partners',

  components: {
    Reviews
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.partner {
  background-color: $gray-200;
  padding-bottom: 150px;

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    margin: 0;
    padding: 80px 0 60px 0;
  }

  &__review-title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding-bottom: 60px;
  }

  &__reviews {
    display: flex;
    grid-gap: 135px;
    padding-top: 152px;
    margin-bottom: -180px;
  }

  &__buttons {
    padding-top: 24px;
  }

  &__button {
    background-color: transparent;
    border: none;
    padding: 12px;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: $orange;
      border-radius: 100%;
      color: $white;
    }
  }
}
</style>
