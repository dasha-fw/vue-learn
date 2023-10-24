<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item" v-for="(item, index) in breadcrumbs" :key="index">
        <router-link class="breadcrumbs__link" :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ui-breadcrumbs',
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumbs
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars';

.breadcrumbs {
  &__list {
    display: flex;
    grid-gap: 8px;
    list-style: none;
    padding: 80px 0 40px 0;
    margin: 0;
  }

  &__link {
    text-decoration: none;
    color: $gray-900;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
}
.breadcrumbs__item:not(:first-child)::before {
  content: '/';
  padding-right: 8px;
  color: $gray-600;
}

.router-link-active {
  color: $gray-600;
}
</style>
