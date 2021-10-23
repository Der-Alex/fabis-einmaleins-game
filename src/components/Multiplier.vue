<template>
  <h1>Das 1 x 1 der {{ props.currentNumber }}</h1>

  <ul class="numbers">
    <li class="number" v-for="num in numbers" :key="num">
      <span class="calc tr">{{ num }} x {{ props.currentNumber }}</span> <span> = </span>
      <span class="res tr">{{ num * props.currentNumber }}</span>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import numbers from '@/helper/numbers.js';

const props = defineProps({
  currentNumber: {
    type: Number,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.numbers {
  margin: 0;
  padding: 0;
  list-style: none;
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  padding: 0 0.25rem;
}
.calc {
  width: 4rem;
}
.res {
  width: 1.75rem;
}
.tr {
  text-align: right;
}
</style>
