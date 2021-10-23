<template>
  <multiplier :currentNumber="$route.params.id" />
</template>
<script setup>
import Multiplier from '@/components/Multiplier.vue';
</script>
