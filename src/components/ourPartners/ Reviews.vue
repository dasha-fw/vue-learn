<template>
  <vueper-slides
    class="no-shadow"
    :infinite="false"
    :bullets="false"
    fixed-height="300px"
    arrows-outside
    bullets-outside
    transition-speed="250"
  >
    <template #arrow-left>
      <i><ui-icon name="left"></ui-icon></i>
    </template>

    <template #arrow-right>
      <i><ui-icon name="right"></ui-icon></i>
    </template>

    <vueper-slide v-for="(slide, i) in slides" :key="i">
      <template #content>
        <div class="reviewsCard">
          <div class="reviewsCard__img">
            <img :src="slide.img" alt="img" />
          </div>
          <div class="reviewsCard__review">
            {{ slide.review }}
          </div>
          <div class="reviewsCard__name">
            {{ slide.name }}
          </div>
          <div class="reviewsCard__companyName">
            {{ slide.companyName }}
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import profileMan from '@/assets/profile.png'
import profileWoman from '@/assets/lady-6.png'
import profileWomanTwo from '@/assets/lady-3.png'
import uiIcon from '../common/UiIcon.vue'

export default {
  name: 'Reviews',

  components: {
    VueperSlides,
    VueperSlide,
    uiIcon
  },

  data: () => ({
    slides: [
      {
        img: profileMan,
        review:
          'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.',
        name: 'Shawn Edwards',
        companyName: 'Position, Company name'
      },
      {
        img: profileWoman,
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor egestas ex, in fermentum leo fermentum non. Phasellus nec sagittis ligula, tincidunt aliquam sem. Maecenas nec suscipit elit. Ut quis nisi congue, pellentesque ante ut, posuere enim.',
        name: 'Aria Stark',
        companyName: 'Position, Company name'
      },
      {
        img: profileWomanTwo,
        review:
          'Sed ultrices dui ac posuere bibendum. Pellentesque sed lectus mauris. Morbi feugiat tellus at ante imperdiet, in sodales lectus feugiat.',
        name: 'Maria Lancaster',
        companyName: 'Position, Company name'
      }
    ]
  })
}
</script>
<style lang="scss">
@import '../../assets/vars';

.reviewsCard {
  &__review {
    color: $gray-800;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 0;
    padding: 24px 0;
  }

  &__name {
    color: $gray-900;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    margin: 0;
  }

  &__companyName {
    color: $gray-700;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
  }

  &__img img {
    width: 72px;
    height: 72px;
  }
}

.vueperslides__arrow {
  width: 23px;
  height: 23px;
  position: inherit;

  &:hover {
    color: $orange;
  }
}

.vueperslides__arrows--outside {
  color: currentColor;
  display: flex;
  grid-gap: 24px;
  justify-content: end;
}
</style>
