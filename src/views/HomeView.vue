<template>
  <main-header></main-header>
  <banner-info></banner-info>
  <info></info>
  <serves></serves>
  <project></project>
  <partner-logos></partner-logos>
  <partners></partners>
  <facts></facts>
  <news></news>
  <ui-details></ui-details>
  <ui-footer></ui-footer>
</template>

<script>
import MainHeader from '../components/homepage/MainHeader.vue'
import bannerInfo from '../components/homepage/banner/BannerInfo.vue'
import Info from '../components/info/Info.vue'
import Serves from '../components/services/Serves.vue'
import Project from '../components/ourProject/Project.vue'
import Partners from '../components/ourPartners/Partners.vue'
import Facts from '../components/facts/Facts.vue'
import News from '../components/recentNews/News.vue'
import UiDetails from '../components/Details/Details.vue'
import UiFooter from '../components/footer/UiFooter.vue'
import PartnerLogos from '../components/ourPartners/PartnersLogos.vue'

export default {
  name: 'HomePage',

  components: {
    PartnerLogos,
    MainHeader,
    bannerInfo,
    Info,
    Serves,
    Project,
    Partners,
    Facts,
    News,
    UiDetails,
    UiFooter
  }
}
</script>
