<template>
  <v-app theme="dark">
    <AppNav />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppNav from '@/components/AppNav.vue';
</script>