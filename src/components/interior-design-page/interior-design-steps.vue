<template>
  <div class="container">
    <p class="designSteps__title">That’s how we do it</p>
    <div class="designSteps container">
      <design-steps
        v-for="(designStep, index) in DesignSteps"
        :designStep="designStep"
        :key="index"
      ></design-steps>
    </div>
  </div>
</template>
<script>
import DesignSteps from './design-steps.vue'

export default {
  name: 'interiorDesignSteps',

  components: {
    DesignSteps
  },

  data: function () {
    return {
      DesignSteps: Object.freeze([
        {
          number: '01',
          title: 'Work Estimate',
          text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit.'
        },
        {
          number: '02',
          title: 'Contract',
          text: 'Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.'
        },
        {
          number: '03',
          title: 'Mobilization ',
          text: 'Odio massa scelerisque purus arcu sed velit eleifend cursus leo.'
        },
        {
          number: '04',
          title: 'Construction Work',
          text: 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.'
        }
      ])
    }
  }
}
</script>

<style lang="scss">
.designSteps {
  display: flex;
  grid-gap: 30px;

  &__title {
    color: #1e212c;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    padding-bottom: 60px;
    margin: 0;
  }
}
</style>
