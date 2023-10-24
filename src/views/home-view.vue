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
import MainHeader from '../components/common/main-header.vue'
import bannerInfo from '../components/homepage/banner/banner-info.vue'
import Info from '../components/homepage/info/info.vue'
import Serves from '../components/homepage/services/serves.vue'
import Project from '../components/homepage/our-project/project.vue'
import Partners from '../components/homepage/our-partners/partners.vue'
import Facts from '../components/homepage/facts/facts.vue'
import News from '../components/homepage/recent-news/news.vue'
import UiDetails from '../components/homepage/details/details.vue'
import UiFooter from '../components/common/footer/ui-footer.vue'
import PartnerLogos from '../components/homepage/our-partners/partners-logos.vue'

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
