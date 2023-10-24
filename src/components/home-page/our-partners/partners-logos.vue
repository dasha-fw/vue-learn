<template>
  <div class="container">
    <p class="partner__title">Supported by 12+ partners</p>
    <div class="logos">
      <partners-logo
        v-for="(imgCard, index) in imgCards"
        :imgCard="imgCard"
        :key="index"
      ></partners-logo>
    </div>
  </div>
</template>

<script>
import forSaleLogo from '@/assets/forSale-logo.png'
import happyHomeLogo from '@/assets/happyHome-logo.png'
import higherFitLogo from '@/assets/higherFit-logo.png'
import InDepthConsultingLogo from '@/assets/InDepthConsulting-logo.png'
import sentinalConsultingLogo from '@/assets/sentinalConsulting-logo.png'
import sunsetRealtyLogo from '@/assets/sunsetRealty-logo.png'
import PartnersLogo from './partners-logo.vue'

export default {
  name: 'partnerLogos',

  components: {
    PartnersLogo
  },

  data() {
    return {
      imgCards: Object.freeze([
        {
          img: InDepthConsultingLogo
        },
        {
          img: higherFitLogo
        },
        {
          img: sentinalConsultingLogo
        },
        {
          img: happyHomeLogo
        },
        {
          img: forSaleLogo
        },
        {
          img: sunsetRealtyLogo
        }
      ])
    }
  }
}
</script>

<style lang="scss">
.logos {
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
}
</style>
