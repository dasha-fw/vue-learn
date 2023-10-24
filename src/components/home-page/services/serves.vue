<template>
  <div class="services">
    <div class="services__content container">
      <div class="services__wrap">
        <div class="services__with-text">
          <h2 class="services__title">Our services</h2>
          <p class="services__text">
            Createx Construction Bureau is a construction giant with a full range of construction
            services.
          </p>
        </div>

        <div class="servesCard" id="servesCard">
          <serves-cards
            v-for="(servesCard, index) in servesCards"
            :servesCard="servesCard"
            :key="index"
          ></serves-cards>
        </div>
        <div class="services__bottom">
          <p class="services__bottom-text">Learn more about our services</p>
          <ui-button>View services</ui-button>
        </div>
      </div>
    </div>

    <div class="services__bg"></div>
  </div>
</template>

<script>
import uiButton from '../../common/uiButton.vue'
import ServesCards from './serves-cards.vue'
import construction from '@/assets/bg-construcrion.png'
import development from '@/assets/bg-development.png'
import design from '@/assets/bg-desing.png'
import repairs from '@/assets/bg-repairs.png'

export default {
  name: 'Serves',

  data: function () {
    return {
      servesCards: Object.freeze([
        {
          icon: 'ic-construction',
          title: 'Construction',
          img: construction
        },
        {
          icon: 'ic-plan',
          title: 'Project Development',
          img: development
        },
        {
          icon: 'ic-pantone',
          title: 'Interior Design',
          img: design
        },
        {
          icon: 'ic-painting',
          title: 'Repairs',
          img: repairs
        }
      ])
    }
  },

  components: {
    uiButton,
    ServesCards
  }
}
</script>

<style lang="scss">
@import '../../../assets/vars';

.services {
  position: relative;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
  }

  &__bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url('../../../assets/bg-cards.png');
    background-size: cover;
    background-position: center center;
    filter: brightness(0.8);
  }

  &__title {
    color: #1e212c;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding-top: 120px;
  }

  &__text {
    color: $gray-700;
    font-size: 18px;
    line-height: 150%;
    margin: 0;
  }

  &__with-text {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    text-align: center;
  }

  &__bottom-text {
    color: #1e212c;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }

  &__button {
    color: $white;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-radius: 4px;
    background: $orange;
    padding: 0 40px;
    border: none;
  }

  &__bottom {
    display: flex;
    grid-gap: 40px;
    align-items: center;
    justify-content: center;
    padding-bottom: 85px;
  }
}
</style>
