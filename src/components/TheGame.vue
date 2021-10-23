<template>
  <div class="game">
    <span class="num num1">{{ num1 }}</span>
    <span class="sign">x</span>
    <span class="num num2">{{ num2 }}</span>
    <span class="sign">=</span>
    <input
      class="res"
      type="text"
      ref="input"
      pattern="[0-9]+"
      v-model="res"
      @keyup.enter="checkCalcHandler"
      v-if="check === null"
    />
    <span class="res" v-else>{{ res }}</span>
    <span class="num success" v-if="check">✓</span>
    <span class="num error" v-if="check === false">⨯ ({{ num1 + ' x ' + num2 + ' = ' + num1 * num2 }})</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const newNumber = () => Math.floor(Math.random() * 10) + 1;
const store = useStore();
let check = ref(null);
let res = ref('');
let input = ref(null);

const checkCalcHandler = () => {
  store.dispatch('updateCalculated');
  console.log('checking', num1, num2, res.value, check.value);
  check.value = num1 * num2 === parseInt(res.value);
  if (check.value === true) {
    store.dispatch('updateCorrect');
  }
  if (check.value === false) {
    store.dispatch('updateWrong');
  }
};

let num1 = newNumber();
let num2 = newNumber();

onMounted(() => {
  input.value.focus();
});
</script>
<style lang="scss" scoped>
.num {
  padding: 0 0.25rem;
}
.res {
  width: 2rem;
  margin-left: 0.25rem;
}
.success {
  color: #0c4;
}
.error {
  color: #c00;
}
</style>
