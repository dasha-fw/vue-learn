<template>
  <article class="newsCard" :class="newsCard.class">
    <img :src="newsCard.img" alt="img" />
    <p class="newsCard__title">{{ newsCard.title }}</p>
    <p class="newsCard__date">{{ newsCard.date }}</p>
    <p class="newsCard__text">{{ newsCard.text }}</p>
  </article>
</template>
<script>
export default {
  name: 'newsCard',

  props: {
    newsCard: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/vars';

.newsCard {
  background-color: $white;
  border-radius: 4px;
  box-shadow:
    0 4px 4px -4px rgba(30, 33, 44, 0.03),
    0 12px 10px -6px rgba(154, 156, 165, 0.04),
    0 30px 24px -10px rgba(154, 156, 165, 0.05),
    0 80px 80px -20px rgba(154, 156, 165, 0.08);

  &__one {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 2;
  }

  &__title {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    cursor: pointer;
    padding: 24px 24px 12px 24px;
    margin: 0;

    &:hover {
      color: $orange;
    }
  }

  &__text {
    color: $gray-800;
    font-size: 16px;
    line-height: 160%;
    margin: 0;
    padding-left: 24px;
  }

  &__date {
    color: $gray-700;
    font-size: 14px;
    line-height: 150%;
    padding-left: 24px;
    margin: 0;
    padding-bottom: 16px;
  }
}
</style>
