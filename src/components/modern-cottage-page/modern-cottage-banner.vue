<template>
  <div class="modernCottageBanner container">
    <ui-breadcrumbs></ui-breadcrumbs>
    <p class="modernCottageBanner__title">Modern Cottage</p>
    <vueper-slides
      ref="vueperslides1"
      :touchable="false"
      fade
      :autoplay="false"
      :bullets="false"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
      fixed-height="500px"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"> </vueper-slide>
    </vueper-slides>

    <vueper-slides
      class="no-shadow thumbnails"
      ref="vueperslides2"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
      :visible-slides="slides.length"
      fixed-height="100px"
      :bullets="false"
      :touchable="false"
      :gap="2.5"
      :arrows="false"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import qw from '@/assets/qw.jpg'
import qww from '@/assets/qwe.jpg'
import qwe from '@/assets/qwer.jpg'
import qwr from '@/assets/qweery.jpg'
import qwf from '@/assets/qwert.jpg'
import qwfs from '@/assets/modern.jpg'
import UiBreadcrumbs from '../common/breadcrumbs.vue'

export default {
  name: 'modernCottageBanner',

  components: {
    UiBreadcrumbs,
    VueperSlides,
    VueperSlide
  },

  data: () => ({
    slides: [
      { image: qw },
      { image: qww },
      { image: qwe },
      { image: qwr },
      { image: qwf },
      { image: qwfs }
    ]
  })
}
</script>

<style lang="scss">
@import '../../assets/vars';

.thumbnails {
  margin-top: 20px;
  max-width: 700px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  border-radius: 4px;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
}

.modernCottageBanner {
  &__title {
    color: $gray-900;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 1px;
  }
}
</style>
