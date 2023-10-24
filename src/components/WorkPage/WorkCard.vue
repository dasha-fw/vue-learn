<template>
  <article class="workCard">
    <div class="workCard__card-wrap">
      <div class="workCard__img">
        <ui-icon :name="workCard.icon"></ui-icon>
      </div>
      <p class="workCard__card-text">{{ workCard.title }}</p>
    </div>
  </article>
</template>

<script>
import UiIcon from '../common/UiIcon.vue'

export default {
  name: 'WorkCard',

  components: {
    UiIcon
  },

  props: {
    workCard: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.workCard {
  width: 230px;
  height: 154px;

  &:hover .workCard__card-text {
    color: white;
  }

  &:hover .workCard__img {
    svg {
      color: white;
    }
  }

  &:hover .workCard__card-wrap {
    background-color: $orange;
  }

  &__card-text {
    color: $gray-600;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    min-width: 204px;
  }

  &__img {
    svg {
      width: 48px;
      height: 48px;
      color: $orange;
    }
  }

  &__card-wrap {
    background-color: $white;
    transition: 0.5s;
    padding: 32px 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow:
      0 4px 4px -4px rgba(30, 33, 44, 0.03),
      0 12px 10px -6px rgba(154, 156, 165, 0.04),
      0 30px 24px -10px rgba(154, 156, 165, 0.05),
      0 80px 80px -20px rgba(154, 156, 165, 0.08);
    border-radius: 4px;
    border: 1px solid $gray-300;
    grid-gap: 24px;
  }
}
</style>
