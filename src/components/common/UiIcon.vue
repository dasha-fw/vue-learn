<template>
  <svg>
    <use :xlink:href="iconPath"></use>
  </svg>
</template>

<script>
import sprite from '@/assets/Icons/sprite.svg'
export default {
  name: 'UiIcon',

  props: {
    name: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: ''
    },

    size: {
      type: Number,
      default: 12
    }
  },

  computed: {
    iconPath() {
      return `${sprite}#${this.name}`
    }
  }
}
</script>
