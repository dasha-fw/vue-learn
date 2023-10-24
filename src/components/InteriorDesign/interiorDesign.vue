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
import InteriorDesignHeader from './interiorDesignHeader.vue'
import InteriorDesignBanner from './interiorDesignBanner.vue'
import interiorDesignOffer from './interiorDesignOffer.vue'
import InteriorDesignSteps from './interiorDesignSteps.vue'
import UiDetails from '../Details/Details.vue'
import UiFooter from '../footer/UiFooter.vue'
import InteriorDesignCard from './interiorDesignCards.vue'
import InteriorDesignProject from './InteriorDesignProject.vue'
import PartnerLogos from '../ourPartners/PartnersLogos.vue'

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
