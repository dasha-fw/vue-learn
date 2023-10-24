<template>
  <div class="video container">
    <div class="video__with-text">
      <h2 class="video__title">We are Createx Construction Bureau</h2>
      <p class="video__text">
        We are rightfully considered to be the best construction company in the USA.
      </p>
    </div>
    <div>
      <video class="video__play" autoplay muted loop>
        <source src="../../../assets/video.mp4" />
      </video>
    </div>
  </div>

  <infoCards></infoCards>

  <askForm></askForm>
</template>

<script>
import infoCards from './info-cards.vue'
import askForm from './ask-form.vue'

export default {
  name: 'info',

  components: {
    infoCards,
    askForm
  }
}
</script>

<style lang="scss">
@import '../../../assets/vars';

.video {
  position: relative;

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
    padding: 120px 0 24px 0;
  }

  &__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: $gray-700;
    margin: 0;
    padding: 0 0 60px 0;
  }

  &__with-text {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__button-play {
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 25%;
  }

  &__play {
    width: 1230px;
    height: 500px;
  }
}
</style>
