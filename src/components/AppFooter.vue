<template>
  <v-sheet class="pa-3">
    <v-row class="justify-end text-grey text-caption">
      <v-col cols="auto">
        <a :href="config.footerHref" target="_blank">
          {{ config.footer }}
        </a>
      </v-col>
      <v-divider vertical inset />
      <v-col cols="auto" class="font-weight-bold">
        {{ config.footerInfo }}
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import config from '@/config.json'
</script>