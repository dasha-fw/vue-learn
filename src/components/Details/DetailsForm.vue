<template>
  <div class="form">
    <h3 class="form__title">A quick way to discuss details</h3>
    <details-inputs></details-inputs>
  </div>
</template>
<script>
import UiButton from '../common/uiButton.vue'
import detailsInputs from './DetailsInputs.vue'

export default {
  name: 'DetailsForm',

  components: {
    UiButton,
    detailsInputs
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.form {
  background-color: $white;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 24px;
  border-radius: 4px;
  border: 1px solid $gray-300;
  box-shadow:
    0 4px 4px -4px rgba(30, 33, 44, 0.05),
    0 12px 10px -6px rgba(30, 33, 44, 0.08),
    0 26px 24px -10px rgba(30, 33, 44, 0.1),
    0 60px 80px -20px rgba(30, 33, 44, 0.16);

  &__title {
    color: $gray-900;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }
}
</style>
