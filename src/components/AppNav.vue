<template>
  <v-sheet class="py-3" elevation="2">
    <v-row justify="center">
      <v-col cols="auto" v-for="nav in navs">
        <router-link
          class="text-decoration-none"
          exact-active-class="font-weight-bold"
          :to="nav.path"
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