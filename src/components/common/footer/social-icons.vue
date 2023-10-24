<template>
  <div class="socialIcon">
    <a>
      <ui-icon class="socialIcon__massage socialIcon__whatsapp" name="whatsapp"></ui-icon>
    </a>
    <a>
      <ui-icon class="socialIcon__massage socialIcon__messanger" name="messanger"></ui-icon>
    </a>
    <a>
      <ui-icon class="socialIcon__massage socialIcon__facebook" name="facebook"></ui-icon>
    </a>
    <a>
      <ui-icon class="socialIcon__massage socialIcon__twitter" name="twitter"></ui-icon>
    </a>
    <a>
      <ui-icon class="socialIcon__massage socialIcon__youtube" name="youTube"></ui-icon>
    </a>
  </div>
</template>
<script>
import uiIcon from '../common/UiIcon.vue'

export default {
  name: 'socialIcons',

  components: {
    uiIcon
  }
}
</script>
<style lang="scss">
.socialIcon {
  display: flex;
  grid-gap: 16px;

  &__massage {
    width: 24px;
    height: 24px;
    color: white;
    cursor: pointer;
    transition: 300ms;
  }

  &__whatsapp {
    &:hover {
      color: #25d366;
    }
  }

  &__messanger {
    &:hover {
      color: #00b2ff;
    }
  }

  &__facebook {
    &:hover {
      color: #4267b2;
    }
  }

  &__twitter {
    &:hover {
      color: #1da1f2;
    }
  }
  &__youtube {
    &:hover {
      color: #ff0000;
    }
  }
}
</style>
