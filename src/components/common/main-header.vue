<template>
  <header class="header container">
    <a class="header__logo" href="/">
      <ui-icon name="logo"></ui-icon>
    </a>

    <main-navbar></main-navbar>

    <div class="header__connection">
      <div class="header__phone">
        <div class="header__icon">
          <ui-icon name="phone"></ui-icon>
        </div>
        <div class="header__phone-with-text">
          <p class="header__text">Call us</p>
          <p class="header__phone-number">(405) 555-0128</p>
        </div>
      </div>

      <div class="header__mail">
        <div class="header__icon"><ui-icon name="massage"></ui-icon></div>
        <div class="header__mail-with-text">
          <p class="header__text">Talk to us</p>
          <p class="header__mail-name">hello@createx.com</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MainNavbar from './main-navbar.vue'
import UiIcon from '../common/UiIcon.vue'

export default {
  name: 'MainHeader',

  components: {
    MainNavbar,
    UiIcon
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;

  &__logo {
    cursor: pointer;

    svg {
      width: 130px;
      height: 22px;
    }
  }

  &__connection {
    display: flex;
    grid-gap: 36px;
  }

  &__phone,
  &__mail {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    text-align: start;
  }

  &__icon {
    height: 40px;
    width: 40px;
  }

  &__text {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    color: #424551;
  }

  &__phone-number,
  &__mail-name {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
    color: $gray-800;
  }
}
</style>
