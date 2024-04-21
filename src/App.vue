<template>
  <div class="2xl:ml-36 2xl:mr-36" id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a.router-link-exact-active {
  color: orangered;
  -webkit-text-stroke: 0.1px;
  -webkit-text-stroke-color: black;
}
</style>
