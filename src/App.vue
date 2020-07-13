<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Form</router-link>
      <router-link to="/data">Data</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

const responseStore = namespace('responses');

@Component
export default class extends Vue {
  @responseStore.Action fetchResponses!: () => void;
  created() {
    this.fetchResponses();
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: auto !important;
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
#nav {
  margin: 0 auto;
  padding: 30px;
  a {
    padding: 0 10px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #4caf50;
    }
  }
}
</style>
