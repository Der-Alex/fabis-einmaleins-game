<template>
  <div id="nav">
    <span>Die 1x1 Reihen: </span>
    <router-link v-for="num in numbers" :key="num" :to="'/' + num">
      {{ num }}
    </router-link>
  </div>
  <router-link to="/rechenspiel">Rechenspiel</router-link>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import numbers from '@/helper/numbers.js';
</script>

<style lang="scss">
body {
  font-size: 150%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0.5rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main {
  padding-bottom: 10rem;
}
</style>
