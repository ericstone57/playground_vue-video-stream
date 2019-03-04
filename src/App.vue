<template>
  <div id="app">
    <nav>
      <router-link to='/videoswiper'>video+swiper</router-link>
      <router-link to='/video10/5'>video10</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  text-align: center;
}

a:nth-child(2){
  margin-left: 20px;
}
</style>
