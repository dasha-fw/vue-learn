<template>
  <div class="interiorDesignCards">
    <div class="interiorDesignCards__wrap container">
      <div class="interiorDesignCards__with-text">
        <h2 class="interiorDesignCards__title">Our benefits</h2>
        <p class="interiorDesignCards__text">
          Our mission is to set the highest standards for construction sphere.
        </p>
      </div>

      <div class="interiorDesignCards__cards">
        <interiorDesignCards
          v-for="(card, index) in cards"
          :card="card"
          :key="index"
        ></interiorDesignCards>
      </div>
      <ui-button class="interiorDesignCards__button" large>Discuss a project</ui-button>
    </div>
  </div>
</template>

<script>
import interiorDesignCards from './interiorDesignCard.vue'
import UiButton from '../common/uiButton.vue'

export default {
  name: 'interiorDesignCard',

  data: function () {
    return {
      cards: Object.freeze([
        {
          icon: 'contact',
          title: 'Fixed Terms & Cost',
          desk: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
        },
        {
          icon: 'helmet',
          title: 'Qualified Workers',
          desk: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
        },
        {
          icon: 'camera',
          title: 'Supervision & Control',
          desk: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
        }
      ])
    }
  },

  components: {
    UiButton,
    interiorDesignCards
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.interiorDesignCards {
  background-color: $gray-900;

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__title {
    color: white;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding: 80px 0 24px 0;
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

  &__button {
    margin-bottom: -26px;
  }
}
</style>
