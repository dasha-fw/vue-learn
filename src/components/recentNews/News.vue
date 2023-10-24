<template>
  <div class="news container">
    <h2 class="news__title">Recent news</h2>
    <div class="news__cards">
      <news-card v-for="(newsCard, index) in newsCards" :newsCard="newsCard" :key="index">
      </news-card>
    </div>
    <div class="news__morePost">
      <p class="news__morePost-text">Explore all our news posts</p>
      <ui-button>View all news</ui-button>
    </div>
  </div>
</template>
<script>
import newsCard from './NewsCard.vue'
import NewsMan from '@/assets/News/newsMan.png'
import NewsHelp from '@/assets/News/NewsHelp.png'
import NewsTypes from '@/assets/News/NewsTypes.png'
import uiButton from '../common/uiButton.vue'

export default {
  name: 'News',

  data() {
    return {
      newsCards: Object.freeze([
        {
          img: NewsTypes,
          title: 'How to Build Climate Change-Resilient Infrastructure',
          date: 'Industry | News June 24, 2020 | 4 comments',
          text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...',
          class: 'newsCard__one'
        },
        {
          img: NewsHelp,
          title: 'How Construction Can Help Itself',
          date: 'Innovation | June 12, 2020 | No comments'
        },
        {
          img: NewsMan,
          title: 'Types of Flooring Materials',
          date: 'Company | News December 1, 2019 | No comments'
        }
      ])
    }
  },

  components: {
    newsCard,
    uiButton
  }
}
</script>
<style lang="scss">
@import '../../assets/vars';

.news {
  padding-bottom: 125px;

  &__title {
    color: $gray-900;
    text-align: center;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding-bottom: 60px;
  }

  &__cards {
    display: grid;

    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    gap: 30px;
    height: 100%;
  }

  &__morePost-text {
    color: $gray-900;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
  }

  &__morePost {
    display: flex;
    justify-content: center;
    grid-gap: 40px;
    align-items: center;
    padding-top: 85px;
  }
}
</style>
