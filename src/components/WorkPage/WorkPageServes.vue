<template>
  <article class="workPageServes__card">
    <img class="workPageServes__img" :src="workServesCard.img" alt="img" />
    <h6 class="workPageServes__title">{{ workServesCard.title }}</h6>
    <p class="workPageServes__text">{{ workServesCard.desk }}</p>
    <ui-button class="workPageServes__button" @click="Onclick" regular outlined>
      View Project
    </ui-button>
  </article>
</template>

<script>
import UiButton from '../common/uiButton.vue'
export default {
  name: 'WorkPageServes',
  components: { UiButton },
  props: {
    workServesCard: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    Onclick() {
      this.$router.push({ name: 'modernCottage' })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.workPageServes {
  &__title {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    text-align: center;
    padding: 16px 0 10px 0;
  }

  &__text {
    color: $gray-700;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    text-align: center;
    padding-bottom: 24px;
  }

  &__card {
    border-radius: 4px;
    background: $white;
    box-shadow:
      0 4px 4px -4px rgba(30, 33, 44, 0.03),
      0 12px 10px -6px rgba(154, 156, 165, 0.04),
      0 30px 24px -10px rgba(154, 156, 165, 0.05),
      0 80px 80px -20px rgba(154, 156, 165, 0.08);
    cursor: inherit;
    transition: 1s;
    max-height: 440px;

    &:hover .workPageServes__button {
      opacity: 1;
      transition: 0.3s opacity linear;
      font-size: 14px;
    }

    &:hover .workPageServes__img {
      height: 277px;
    }
  }

  &__img {
    width: 100%;
    height: 345px;
    object-fit: cover;
    transition: 0.5s height ease;
  }

  &__button {
    display: flex;
    position: relative;
    margin: 0 auto 24px auto;
    opacity: 0;
  }
}
</style>
