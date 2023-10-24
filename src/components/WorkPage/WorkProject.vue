<template>
  <div class="workProject container">
    <div class="workProject__card" id="workCard">
      <work-card
        v-for="(workCard, index) in workCards"
        :workCard="workCard"
        :key="index"
      ></work-card>
    </div>
    <div class="workProject__projects">
      <work-page-serves
        v-for="(workServesCard, index) in workServesCards"
        :workServesCard="workServesCard"
        :key="index"
      ></work-page-serves>
    </div>
    <button class="workProject__button">
      <ui-icon class="workProject__icon" name="convert"></ui-icon>
      Load more
    </button>
  </div>
</template>

<script>
import WorkCard from './WorkCard.vue'
import WorkPageServes from './WorkPageServes.vue'
import fingerBuilding from '@/assets/bg-card-3.png'
import cubesBuilding from '@/assets/bg-card-2.png'
import scandinavian from '@/assets/InteriorDesignProjectCard.png'
import modernDoubleBedroom from '@/assets/InteriorDesignProjectCard-2.png'
import kidsBedroom from '@/assets/InteriorDesignProjectCard-3.png'
import privateHouses from '@/assets/wokrimg.png'
import pencilImg from '@/assets/bg-card-1.png'
import modernCottage from '@/assets/work-house.png'
import luxuryBeachHouse from '@/assets/work-img.png'
import UiIcon from '../common/UiIcon.vue'

export default {
  name: 'WorkProject',
  components: { UiIcon, WorkPageServes, WorkCard },

  data: function () {
    return {
      workCards: Object.freeze([
        {
          icon: 'ic-house',
          title: 'All Projects'
        },
        {
          icon: 'ic-construction-work',
          title: 'Construction'
        },
        {
          icon: 'ic-plan-work',
          title: 'Project Development'
        },
        {
          icon: 'ic-pantone-work',
          title: 'Interior Design'
        },
        {
          icon: 'ic-painting-work',
          title: 'Repairs'
        }
      ]),
      workServesCards: [
        {
          img: cubesBuilding,
          title: 'Cubes Building',
          desk: 'Business Centers'
        },
        {
          img: modernCottage,
          title: 'Modern Cottage',
          desk: 'Private houses'
        },
        {
          img: luxuryBeachHouse,
          title: 'Luxury Beach House',
          desk: 'Private houses'
        },
        {
          img: modernDoubleBedroom,
          title: 'Modern Double Bedroom',
          desk: 'Apartments & flats'
        },
        {
          img: kidsBedroom,
          title: 'Kids Bedroom With Decorations',
          desk: 'Apartments & flats'
        },
        {
          img: pencilImg,
          title: 'The Pencil Building',
          desk: 'Stores & Malls'
        },
        {
          img: fingerBuilding,
          title: 'Red Finger Building',
          desk: 'Business Centers'
        },
        {
          img: scandinavian,
          title: 'Scandinavian Style Interior',
          desk: 'Private houses'
        },
        {
          img: privateHouses,
          title: 'Brown and Gray Painted House',
          desk: 'Private houses'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.workProject {
  &__projects {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    height: 100%;
  }

  &__card {
    display: flex;
    grid-gap: 20px;
    margin: -85px 0 120px 0;
    position: relative;
  }

  &__button {
    border: none;
    background-color: transparent;
    margin: 60px auto 120px auto;
    color: $gray-800;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    display: flex;
    grid-gap: 16px;
    cursor: pointer;

    &:hover .workProject__icon {
      transition: 1s;
      transform: rotate(-360deg);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
