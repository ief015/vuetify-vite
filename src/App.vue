<template>
  <v-app :theme="config.theme">
    <app-nav />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppNav from '@/components/AppNav.vue';
import config from '@/config.json';
</script>