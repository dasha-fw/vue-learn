<template>
  <article class="card">
    <div class="card__icon">
      <ui-icon :name="card.icon"></ui-icon>
    </div>
    <h6 class="card__title">{{ card.title }}</h6>
    <p class="card__text">
      {{ card.desk }}
    </p>
  </article>
</template>

<script>
import UiIcon from '../common/UiIcon.vue'

export default {
  name: 'interiorDesignCards',

  props: {
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    UiIcon
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-gap: 24px;
  max-width: 285px;
  min-height: 188px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    padding: 1px;
    background-image: url('../../assets/divider.png');
    opacity: 0.4;
    background-repeat: no-repeat;
    right: -(calc(184px / 2));
  }

  &__title {
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }

  &__text {
    color: $gray-700;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 0;
  }

  &__icon {
    height: 48px;
    width: 48px;
  }
}
</style>
