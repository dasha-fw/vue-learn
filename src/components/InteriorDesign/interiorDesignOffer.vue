<template>
  <div class="interiorDesignOffer container">
    <img src="../../assets/interiorDesignOffer.jpg" alt="img" />
    <div class="interiorDesignOffer__with-text">
      <h2 class="interiorDesignOffer__title">We offer</h2>
      <div class="interiorDesignOffer__advantages">
        <div class="interiorDesignOffer__icons">
          <ui-icon class="interiorDesignOffer__icon" name="minus"></ui-icon>
          <ui-icon class="interiorDesignOffer__icon" name="plus"></ui-icon>
        </div>
        <div class="interiorDesignOffer__advantages-text">
          <p class="interiorDesignOffer__subtitle">Interior design of apartments</p>
          <p class="interiorDesignOffer__text">
            Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
            dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac
            facilisis.
          </p>
          <p class="interiorDesignOffer__subtitle">Interior design of private houses</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UiIcon from '../common/UiIcon.vue'
export default {
  name: 'interiorDesignOffer',

  components: {
    UiIcon
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.interiorDesignOffer {
  display: flex;
  grid-gap: 105px;
  padding: 120px 0 180px 0;

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 900;
    line-height: 130%;
    margin: 0;
    padding-bottom: 60px;
  }

  &__subtitle {
    color: $gray-900;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    padding-bottom: 12px;
    margin: 0;
  }

  &__text {
    color: $gray-700;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 0;
    padding-bottom: 24px;
  }

  &__with-text {
    max-width: 376px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    transition: 500ms;

    &:hover {
      transform: scale(1.5);
    }
  }

  &__advantages {
    display: flex;
    grid-gap: 20px;
    align-items: baseline;
  }

  &__icons {
    display: flex;
    grid-gap: 200px;
    flex-direction: column;
  }
}
</style>
