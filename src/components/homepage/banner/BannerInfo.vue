<template>
  <vueper-slides fade :touchable="false" fixed-height="988px" :arrows="false" autoplay="500ms">
    <vueper-slide v-for="(slideBanner, i) in slidesBanner" :key="i" :image="slideBanner.image">
      <template #content>
        <banner-content></banner-content>
      </template>
    </vueper-slide>
    <template #bullets="{ bulletIndexes, goToSlide, previous, next, currentSlide }">
      <div class="bullet container">
        <button
          v-for="(slideIndex, i) in bulletIndexes"
          :key="i"
          :class="{ active: currentSlide === slideIndex }"
          role="tab"
          :aria-label="`Slide ${i + 1}`"
          @click="goToSlide(slideIndex)"
          @keyup.left="previous()"
          @keyup.right="next()"
        >
          <i class="icon">{{ '0' + (i + 1) }}</i>
        </button>
      </div>
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import bannerBg from '@/assets/bg-image.png'
import bannerImg from '@/assets/bannerImg.jpg'
import banner from '@/assets/banner.jpg'
import bannerImage from '@/assets/bannerImage.jpg'
import bannerContent from './BannerContent.vue'

export default {
  name: 'bannerInfo',

  components: {
    VueperSlides,
    VueperSlide,
    bannerContent
  },

  data() {
    return {
      slidesBanner: [
        {
          image: bannerBg
        },
        {
          image: bannerImg
        },
        {
          image: banner
        },
        {
          image: bannerImage
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.vueperslides__bullets {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 120px;
  left: 0;
  right: 0;
}

.vueperslides__bullets button,
.vueperslides__bullet {
  width: 178px;
  height: 54px;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 28px;
  font-weight: 700;
  line-height: 150%;
  justify-content: flex-start;

  i {
    font-style: normal !important;
    font-family: Ubuntu, sans-serif !important;
  }
}

button.active {
  color: white;
  border-bottom: 2px solid white;
}

.bullet {
  display: flex;
  grid-gap: 4px;
  padding-bottom: 120px;
}
</style>
