<template>
  <form @submit="onSubmit" class="detailsInputs">
    <div class="detailsInputs__item">
      <label class="detailsInputs__input-label">Name*</label>
      <input v-model="form.name" class="detailsInputs__input" placeholder="Your name" />
      <div class="ask__error" v-if="errors.name.length">
        <p class="ask__error-text">{{ errors.name[0] }}</p>
      </div>
    </div>
    <div class="detailsInputs__item">
      <label class="detailsInputs__input-label">Phone*</label>
      <input v-model="form.phone" class="detailsInputs__input" placeholder="Your phone number" />
      <div class="ask__error" v-if="errors.phone.length">
        <p class="ask__error-text">{{ errors.phone[0] }}</p>
      </div>
    </div>
    <div class="detailsInputs__item">
      <label class="detailsInputs__input-label">Email</label>
      <input
        v-model="form.email"
        class="detailsInputs__input"
        type="email"
        placeholder="Your working email"
      />
      <div class="ask__error" v-if="errors.email.length">
        <p class="ask__error-text">{{ errors.email[0] }}</p>
      </div>
    </div>
    <div class="detailsInputs__item">
      <label class="form__input-label">Message*</label>
      <input
        v-model="form.massage"
        class="detailsInputs__input detailsInputs__input_message"
        placeholder="Your message"
      />
      <div class="ask__error" v-if="errors.massage.length">
        <p class="ask__error-text">{{ errors.massage[0] }}</p>
      </div>
    </div>
    <label class="detailsInputs__agree">
      <input v-model="form.radio" class="detailsInputs__checkbox" type="checkbox" />
      <span class="detailsInputs__checkbox-orange"></span>
      <p class="detailsInputs__agree-text">
        I agree to receive communications from Createx Construction Bureau.
      </p>
    </label>
    <div class="ask__error" v-if="errors.radio.length">
      <p class="ask__error-text">{{ errors.radio[0] }}</p>
    </div>
    <ui-button class="detailsInputs__button" type="submit" regular>send request</ui-button>
  </form>
</template>
<script>
import uiButton from '../../common/uiButton.vue'

export default {
  name: 'detailsInputs',

  components: {
    uiButton
  },

  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        massage: '',
        radio: ''
      },
      errors: {
        name: [],
        phone: [],
        email: [],
        massage: [],
        radio: []
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
      if (!this.form.massage) {
        this.errors.massage.push('Поле обязательно')
      }
      if (!this.form.radio) {
        this.errors.radio.push('Необходимо согласие')
      }
    },

    clearForm() {
      this.errors = {
        name: [],
        phone: [],
        email: [],
        massage: [],
        radio: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/vars';

.detailsInputs {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;

  &__input-label {
    color: $gray-800;
    font-size: 14px;
    line-height: 150%;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid $gray-400;
    background: $gray-200;
    padding: 11px 0 12px 16px;
    color: $gray-900;
    max-height: 73px;

    &_message {
      padding: 11px 0 34px 16px;
      max-height: 95px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }

  &__button {
    width: fit-content;
    margin: 0 auto;
  }

  &__agree {
    display: flex;
    grid-gap: 12px;
    text-align: end;
    width: 100%;
  }

  &__agree-text {
    max-width: 387px;
    color: $gray-800;
    font-size: 14px;
    line-height: 150%;
    margin: 0;
    text-align: start;
  }

  &__checkbox {
    display: none;
  }

  &__checkbox-orange {
    height: 12px;
    width: 12px;
    border: 1px solid gray;
    background-color: #fff;
    border-radius: 4px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__checkbox:checked + span {
    background-color: $orange;
    border: 1px solid $orange;

    &:before {
      content: '\2713';
      font-size: 15px;
      color: white;
    }
  }
}
</style>
