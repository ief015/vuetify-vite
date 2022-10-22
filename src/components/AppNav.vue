<template>
  <v-sheet class="py-3" elevation="2">
    <v-row justify="center">
      <v-col cols="auto pa-0" v-for="nav in navs">
        <router-link
          class="nav-link text-decoration-none pa-3 d-block"
          exact-active-class="font-weight-bold"
          :to="nav.path"
          v-ripple
        >
          {{ nav.text }}
        </router-link>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
type NavRoute = {
  text: string;
  path: string;
};
const navs: NavRoute[] = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
];
</script>

<style scoped>
.nav-link:hover {
  background-color: #333 !important;
  transition: 0.2s;
}
</style>