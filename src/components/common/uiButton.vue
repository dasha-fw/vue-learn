<template>
  <button class="btn" :disabled="disabled" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'uiButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    outlined: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    },

    regular: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    outlined_transparent: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        btn: true,
        [`btn_outlined`]: this.outlined,
        [`btn_regular`]: this.regular,
        [`btn_small`]: this.small,
        [`btn_outlined_transparent`]: this.outlined_transparent,
        [`btn_large`]: this.large
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.btn {
  padding: 0 40px;
  background-color: $orange;
  color: $white;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: $orange-active;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  &_outlined_transparent {
    color: $white;
    border-radius: 4px;
    border: 1px solid $white;
    background-color: transparent;

    &:hover {
      border: 1px solid $orange;
    }
  }

  &_outlined {
    color: $orange;
    border-radius: 4px;
    border: 1px solid $orange;
    background-color: transparent;

    &:hover {
      color: $white;
    }
  }

  &_regular {
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    line-height: 44px;
  }

  &_small {
    padding: 0 24px;
    font-size: 12px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.5px;
  }

  &_large {
    padding: 0 112px;
    font-size: 16px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0.5px;
  }
}
</style>
