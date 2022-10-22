<template>
  <v-app :theme="config.theme">
    <AppNav />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import config from '@/config.json';
import AppFooter from '@/components/AppFooter.vue';
import AppNav from '@/components/AppNav.vue';
</script>