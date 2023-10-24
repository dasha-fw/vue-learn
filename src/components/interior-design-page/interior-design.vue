<template>
  <interior-design-header></interior-design-header>
  <interior-design-banner></interior-design-banner>
  <interior-design-offer></interior-design-offer>
  <interior-design-steps></interior-design-steps>
  <interior-design-card></interior-design-card>
  <interior-design-project></interior-design-project>
  <partner-logos></partner-logos>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>
<script>
import InteriorDesignHeader from './interior-design-header.vue'
import InteriorDesignBanner from './interior-design-banner.vue'
import interiorDesignOffer from './interior-design-offer.vue'
import InteriorDesignSteps from './interior-design-steps.vue'
import UiDetails from '../homepage/details/details.vue'
import UiFooter from '../common/footer/ui-footer.vue'
import InteriorDesignCard from './interior-design-cards.vue'
import InteriorDesignProject from './Interior-design-project.vue'
import PartnerLogos from '../homepage/our-partners/partners-logos.vue'

export default {
  name: 'interiorDesign',

  components: {
    PartnerLogos,
    InteriorDesignProject,
    InteriorDesignCard,
    UiFooter,
    UiDetails,
    InteriorDesignSteps,
    InteriorDesignBanner,
    InteriorDesignHeader,
    interiorDesignOffer
  }
}
</script>
