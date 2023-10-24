<template>
  <article class="servesCard" :style="{ backgroundImage: `url(${servesCard.img})` }">
    <div class="servesCard__card-wrap">
      <div class="servesCard__img">
        <ui-icon :name="servesCard.icon"></ui-icon>
      </div>
      <p class="servesCard__card-text">{{ servesCard.title }}</p>
    </div>
  </article>
</template>
<script>
import UiIcon from '../../common/UiIcon.vue'

export default {
  name: 'ServesCards',

  components: {
    UiIcon
  },

  props: {
    servesCard: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/vars';

.servesCard {
  display: flex;
  grid-gap: 20px;
  border-radius: 4px;
  margin: 60px 0 85px 0;

  &__card-text {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    min-width: 204px;
  }

  &__img {
    svg {
      width: 52px;
      height: 52px;
      color: $orange;
    }
  }

  &__card-wrap {
    background-color: $white;
    transition: 0.5s;
    padding: 89px 80px 90px 80px;
    width: 125px;
    height: 106px;
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

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);

      .servesCard__card-text {
        color: #fff;
      }

      svg {
        color: white;
      }
    }
  }
}
</style>
