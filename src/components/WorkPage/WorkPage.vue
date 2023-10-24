<template>
  <work-page-header></work-page-header>
  <work-page-banner></work-page-banner>
  <work-project></work-project>
  <partners></partners>
  <partner-logos></partner-logos>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>
<script>
import WorkPageHeader from './WorkPageHeader.vue'
import WorkPageBanner from './WorkPageBanner.vue'
import WorkProject from './WorkProject.vue'
import Partners from '../ourPartners/Partners.vue'
import PartnerLogos from '../ourPartners/PartnersLogos.vue'
import UiDetails from '../Details/Details.vue'
import UiFooter from '../footer/UiFooter.vue'
export default {
  name: 'WorkPage',

  components: {
    UiFooter,
    UiDetails,
    PartnerLogos,
    Partners,
    WorkProject,
    WorkPageBanner,
    WorkPageHeader
  }
}
</script>
