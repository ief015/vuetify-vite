<template>
  <v-btn @click="onClick">{{counter.count}}</v-btn>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/CounterStore';

const counter = useCounterStore();

const onClick = () => {
  counter.increment();
};
</script>