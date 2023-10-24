<template>
  <footer class="footer">
    <div class="footer__wrap container">
      <div class="footer__social">
        <div class="footer__social-wrap">
          <div class="footer__social-icons">
            <div class="footer__logo">
              <a>
                <ui-icon class="footer__logo-icon" name="logo-white"></ui-icon>
              </a>
            </div>
            <social-icons></social-icons>
          </div>
          <p class="footer__social-text">
            Createx Construction Bureau has been successfully operating in the USA construction
            market since 2000. We are proud to offer you quality construction and exemplary service.
            Our mission is to set the highest standards for construction sphere.
          </p>
        </div>
        <div class="footer__stay">
          <p class="footer__stay-text">Let’s stay in touch</p>
          <form class="footer__uiInput">
            <input class="footer__input" type="text" placeholder="Your email address " />
            <ui-button class="footer__button" regular>subscribe</ui-button>
          </form>
          <p class="footer__input-text">
            *Subscribe to our newsletter to receive communications and early updates from Createx
            Construction Bureau.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import uiIcon from '../../components/common/UiIcon.vue'
import uiButton from '../common/uiButton.vue'
import socialIcons from './social-icons.vue'

export default {
  name: 'UiFooter',

  components: {
    uiIcon,
    uiButton,
    socialIcons
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.footer {
  background-color: $gray-900;
  padding: 80px 0;

  &__social {
    display: flex;
    justify-content: space-between;
  }

  &__logo-icon {
    width: 142px;
    height: 24px;
  }

  &__social-text {
    color: $white;
    font-size: 14px;
    line-height: 150%;
    opacity: 0.6;
    width: 493px;
    margin: 0;
  }

  &__social-icon {
  }

  &__input-text {
    color: $white;
    font-size: 12px;
    line-height: 150%;
    opacity: 0.6;
    max-width: 495px;
    margin: 0;
    padding-top: 16px;
  }

  &__social-icons {
    display: flex;
    grid-gap: 60px;
  }

  &__social-wrap {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }

  &__stay-text {
    color: $white;
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    padding-bottom: 24px;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.12);
    padding: 16px 0 12px 16px;
    width: 100%;
    outline: none;
  }

  &__uiInput {
    position: relative;
  }

  &__button {
    position: absolute;
    top: 0;
    right: -20px;
  }
}
</style>
