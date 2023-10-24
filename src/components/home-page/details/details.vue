<template>
  <div class="details">
    <div class="details__wrap container">
      <details-form></details-form>
    </div>
  </div>
</template>
<script>
import DetailsForm from './details-form.vue'

export default {
  name: 'UiDetails',

  components: {
    DetailsForm
  }
}
</script>

<style lang="scss">
@import '../../../assets/vars';

.details {
  background-image: url('../../../assets/bg-form.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 826px;

  &__wrap {
    display: flex;
    justify-content: end;
    padding: 80px 0;
  }
}
</style>
