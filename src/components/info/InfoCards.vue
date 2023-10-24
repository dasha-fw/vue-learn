<template>
  <div class="infoCards container">
    <div class="infoCards__with-text">
      <h2 class="infoCards__title">Our core values</h2>
      <p class="infoCards__text">
        Our mission is to set the highest standards for construction sphere.
      </p>
    </div>

    <div class="infoCards__cards">
      <cards v-for="(card, index) in cards" :card="card" :key="index"></cards>
    </div>
  </div>
</template>

<script>
import cards from './Cards.vue'

export default {
  name: 'infoCards',

  data: function () {
    return {
      cards: Object.freeze([
        {
          icon: 'like',
          title: 'Quality',
          desk: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
        },
        {
          icon: 'ic-hand',
          title: 'Safety',
          desk: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
        },
        {
          icon: 'ic-slippers',
          title: 'Comfort',
          desk: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
        }
      ])
    }
  },

  components: {
    cards
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.infoCards {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding: 180px 0 24px 0;
  }

  &__text {
    color: $gray-700;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    padding-bottom: 60px;
  }

  &__cards {
    display: flex;
    grid-gap: 188px;
    padding-bottom: 120px;

    article:last-child {
      &:after {
        display: none;
      }
    }
  }
}
</style>
