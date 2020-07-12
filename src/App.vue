<template>
  <v-app id="app">
    <div id="nav"></div>
    <router-view />
  </v-app>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
