<template>
  <div class="ask container">
    <div class="ask__wrap">
      <div class="ask__text">
        <h4 class="ask__title">Want to know more? Ask us a question:</h4>
      </div>
      <form @submit="onSubmit" class="ask__form">
        <div class="ask__item ask__item_name">
          <label class="ask__label">Name</label>
          <input v-model="form.name" class="ask__input" placeholder="Your name" />
          <div class="ask__error" v-if="errors.name.length">
            <p class="ask__error-text">{{ errors.name[0] }}</p>
          </div>
        </div>
        <div class="ask__item ask__item_phone">
          <label class="ask__label">Phone</label>
          <input
            v-model="form.phone"
            class="ask__input"
            placeholder="Your phone (+7911-222-33-44)"
          />
          <div class="ask__error" v-if="errors.phone.length">
            <p class="ask__error-text">{{ errors.phone[0] }}</p>
          </div>
        </div>
        <div class="ask__item ask__item_massage">
          <label class="ask__label">Massage</label>
          <input v-model="form.massage" class="ask__input" placeholder="Your massage" />
        </div>

        <ui-button class="ask__button" regular type="submit">Send</ui-button>
      </form>
    </div>
  </div>
</template>

<script>
import uiButton from '../../common/uiButton.vue'

export default {
  name: 'Ask-form',

  data() {
    return {
      form: {
        name: '',
        phone: '',
        massage: ''
      },
      errors: {
        name: [],
        phone: [],
        massage: []
      }
    }
  },

  methods: {
    onSubmit(e) {
      this.clearForm()
      e.preventDefault()
      if (!this.form.name) {
        this.errors.name.push('Поле обязательно')
      }
      if (!this.form.phone) {
        this.errors.phone.push('Поле обязательно')
      }
      if (this.form.phone.length < 15) {
        this.errors.phone.push('Некорректный ввод номера')
      }
    },

    clearForm() {
      this.errors = {
        name: [],
        phone: [],
        massage: []
      }
    }
  },

  components: {
    uiButton
  }
}
</script>

<style lang="scss">
@import '../../../assets/vars';

.ask {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrap {
    background-color: $white;
    box-shadow:
      0 4px 4px -4px rgba(30, 33, 44, 0.03),
      0 12px 10px -6px rgba(154, 156, 165, 0.04),
      0 30px 24px -10px rgba(154, 156, 165, 0.05),
      0 80px 80px -20px rgba(154, 156, 165, 0.08);
    padding: 60px 48px;
    width: 100%;
    margin-bottom: -60px;
    z-index: 1;
  }

  &__form {
    display: flex;
    grid-gap: 24px;
    align-items: flex-end;
  }

  &__item {
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
    max-height: 73px;

    &_name,
    &_phone {
      width: 25%;
    }

    &_massage {
      width: 40%;
    }
  }

  &__title {
    color: $gray-900;
    font-size: 28px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    margin: 0;
    padding: 0 0 32px 0;
  }

  &__label {
    color: $gray-800;
    font-size: 14px;
    line-height: 150%;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid $gray-400;
    background: $gray-200;
    padding: 11px 0 12px 16px;
  }

  &__button {
    width: 10%;
  }

  &__error-text {
    margin: 0;
    color: red;
  }
}
</style>
