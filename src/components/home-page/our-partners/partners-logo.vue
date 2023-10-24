<template>
  <img :src="imgCard.img" alt="img" />
</template>

<script>
export default {
  name: 'PartnersLogo',

  props: {
    imgCard: {
      type: Object,
      required: true
    }
  }
}
</script>
