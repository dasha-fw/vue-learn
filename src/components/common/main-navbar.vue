<template>
  <div class="nav">
    <nav class="nav__wrap">
      <ul class="nav__list">
        <li class="nav__item" v-for="(item, index) in tabs" :key="index">
          <router-link
            :to="item.path"
            custom
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <a
              class="nav__link"
              :href="href"
              @click="navigate"
              :class="{ 'router-link-active': isExactActive || isActive }"
              >{{ item.name }}</a
            >
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar',

  props: {
    item: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      tabs: [
        {
          name: 'About Us',
          path: '/aboutUs'
        },
        {
          name: 'Serves',
          path: '/serves'
        },
        {
          name: 'Work',
          path: '/work'
        },
        {
          name: 'News',
          path: '/news'
        },
        {
          name: 'Contacts',
          path: '/contacts'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/vars';

.nav {
  &__list {
    display: flex;
    grid-gap: 40px;
    list-style: none;
    padding: 0;
  }

  &__link {
    color: $gray-800;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    cursor: pointer;
    transition: 300ms;
    text-decoration: none;

    &:hover {
      color: $orange;
    }
  }
}

.router-link-active,
.router-link-exact-active {
  color: $orange;
}
</style>
