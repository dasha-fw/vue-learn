<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    fixed-height="440px"
    :bullets="false"
  >
    <template #arrow-left>
      <i><ui-icon name="left"></ui-icon></i>
    </template>

    <template #arrow-right>
      <i><ui-icon name="right"></ui-icon></i>
    </template>

    <vueper-slide v-for="(slide, i) in slides" :key="i">
      <template #content>
        <article class="projectCards__card">
          <img class="projectCards__img" :src="slide.img" alt="img" />
          <h6 class="projectCards__title">{{ slide.title }}</h6>
          <p class="projectCards__text">{{ slide.desk }}</p>
          <ui-button class="projectCards__button" regular outlined> View Project </ui-button>
        </article>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import uiButton from '../common/uiButton.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import prodjestcard from '@/assets/InteriorDesignProjectCard.png'
import imgProject from '@/assets/InteriorDesignProjectCard-2.png'
import project from '@/assets/InteriorDesignProjectCard-3.png'
import uiIcon from '../common/UiIcon.vue'

export default {
  name: 'InteriorDesignProjectCard',
  components: {
    uiButton,
    VueperSlides,
    VueperSlide,
    uiIcon
  },
  data() {
    return {
      slides: [
        {
          img: project,
          title: 'Kids Bedroom With Decorations',
          desk: 'Apartments & flats'
        },
        {
          img: imgProject,
          title: 'Modern Double Bedroom',
          desk: 'Apartments & flats'
        },
        {
          img: prodjestcard,
          title: 'Scandinavian Style Interior',
          desk: 'Private houses'
        },
        {
          img: prodjestcard,
          title: 'Scandinavian Style Interior',
          desk: 'Private houses'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.projectCards {
  &__title {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    text-align: center;
    padding: 16px 0 10px 0;
  }

  &__text {
    color: $gray-700;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    text-align: center;
    padding-bottom: 24px;
  }

  &__card {
    border-radius: 4px;
    background: $white;
    box-shadow:
      0 4px 4px -4px rgba(30, 33, 44, 0.03),
      0 12px 10px -6px rgba(154, 156, 165, 0.04),
      0 30px 24px -10px rgba(154, 156, 165, 0.05),
      0 80px 80px -20px rgba(154, 156, 165, 0.08);
    cursor: inherit;
    transition: 1s;

    &:hover .projectCards__button {
      opacity: 1;
      transition: 0.3s opacity linear;
      font-size: 14px;
    }

    &:hover .projectCards__img {
      height: 277px;
    }
  }

  &__img {
    width: 100%;
    height: 345px;
    object-fit: cover;
    transition: 0.5s height ease;
  }

  &__button {
    display: flex;
    position: relative;
    margin: 0 auto 24px auto;
    opacity: 0;
  }
}
</style>
