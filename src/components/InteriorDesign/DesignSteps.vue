<template>
  <article class="designStep">
    <div class="designStep__number">
      <div class="designStep__1"></div>
      <span class="designStep__stepnumber">{{ designStep.number }}</span>
      <div class="designStep__dashed"></div>
    </div>
    <div class="designStep__with-text">
      <p class="designStep__title">{{ designStep.title }}</p>
      <p class="designStep__text">{{ designStep.text }}</p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'DesignSteps',

  props: {
    designStep: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';
.designStep {
  max-width: 285px;
  min-height: 192px;
  position: relative;
  padding-bottom: 120px;

  &:hover .designStep__1 {
    opacity: 1;
    transition: 600ms;
  }

  &:hover .designStep__stepnumber {
    color: $orange;
    transition: 600ms;
  }

  &__number {
    color: $gray-400;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
  }

  &__dashed {
    width: 209px;
    border-bottom: 1px dashed $gray-400;
  }

  &__title {
    color: $gray-900;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    padding-bottom: 8px;
  }

  &__text {
    color: $gray-700;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin: 0;
  }

  &__number {
    display: flex;
    grid-gap: 23px;
    align-items: center;
    margin: 0;
    padding: 16px;
  }

  &__1 {
    opacity: 0;
    background-image: url(/src/assets/bg-circles.png);
    width: 116px;
    height: 116px;
    position: absolute;
    top: -13px;
    left: -15px;
    right: 0;
    bottom: 0;
  }
}
</style>
