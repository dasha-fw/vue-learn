<template>
  <div class="allServes container">
    <serves-card
      v-for="(servesCard, index) in servesCards"
      :servesCard="servesCard"
      :key="index"
    ></serves-card>
  </div>
</template>
<script>
import ServesCard from './serves-card.vue'
import construction from '@/assets/bg-construcrion.png'
import development from '@/assets/bg-development.png'
import desing from '@/assets/bg-desing.png'
import repairs from '@/assets/bg-repairs.png'

export default {
  name: 'AllServes',

  components: {
    ServesCard
  },

  data: function () {
    return {
      servesCards: Object.freeze([
        {
          img: construction,
          title: 'Construction',
          text: 'Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum.'
        },
        {
          class: 'revers',
          img: development,
          title: 'Project Development',
          text: 'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.'
        },
        {
          img: desing,
          title: 'Interior Design',
          text: 'Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.'
        },
        {
          class: 'revers',
          img: repairs,
          title: 'Repairs',
          text: 'Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna.'
        }
      ])
    }
  }
}
</script>

<style lang="scss">
.allServes {
  display: flex;
  flex-direction: column;
  grid-gap: 120px;
  padding: 120px 0 180px 0;
}

.revers {
  flex-direction: row-reverse;
}
</style>
