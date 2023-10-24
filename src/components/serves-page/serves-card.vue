<template>
  <article class="servesCards" :class="`${servesCard.class}`">
    <div class="servesCards__img">
      <img :src="servesCard.img" alt="img" />
    </div>
    <div class="servesCards__with-text">
      <h2 class="servesCards__title">{{ servesCard.title }}</h2>
      <p class="servesCards__text">{{ servesCard.text }}</p>
      <ui-button regular outlined @click="navigate">Learn more</ui-button>
    </div>
  </article>
</template>
<script>
import UiButton from '../common/uiButton.vue'
export default {
  name: 'ServesCard',

  components: {
    UiButton
  },

  props: {
    servesCard: {
      type: Object,
      required: true
    }
  },

  methods: {
    navigate() {
      this.$router.push({ name: 'interiorDesign' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.servesCards {
  display: flex;
  grid-gap: 80px;
  align-items: center;

  &__title {
    color: $gray-900;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }

  &__text {
    color: $gray-700;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    max-width: 575px;
    margin: 0;
    padding: 24px 0 48px 0;
  }
}
</style>
