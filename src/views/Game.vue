<template>
  <h1>Rechenspiel</h1>
  <h2>Dein Highscore:</h2>
  <p>{{ store.state.calculated }} Aufgaben</p>
  <p>{{ store.state.correct }} Richtig</p>
  <p>{{ store.state.wrong }} falsch</p>
  <component v-for="(component, index) in components" :is="component" :key="index" @keyup.enter="addComponentHandler" />
</template>
<script setup>
import { shallowReactive } from 'vue';
import { useStore } from 'vuex';
import TheGame from '@/components/TheGame.vue';

const store = useStore();
const components = shallowReactive([TheGame]);
const addComponentHandler = () => {
  components.push(TheGame);
  const el = document.querySelector('main');
  el.scrollIntoView({ block: 'end', behavior: 'smooth' });
};
</script>
