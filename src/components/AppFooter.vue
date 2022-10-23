<template>
  <v-sheet class="pa-3" v-if="footer">
    <v-row class="justify-end text-grey text-caption">
      <v-col cols="auto" v-for="link in footer.links">
        <a :href="link.href" target="_blank">
          {{ link.text }}
        </a>
      </v-col>
      <v-divider vertical inset v-if="showDivider" />
      <v-col cols="auto" class="font-weight-bold">
        {{ footer.text }}
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import config from '@/config.json';

const footer = config['footer'];
const showDivider = computed(() => footer?.text && footer?.links);

</script>