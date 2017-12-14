<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h2>跳转页面</h2>
    <ul>
      <li><router-link to="/schedule">schedule</router-link></li>
      <li><router-link to="/classroom">classroom</router-link></li>
      <li><router-link to="/reset">reset</router-link></li>
      <li><router-link to="/">index</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
}
</script>

<style scoped lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
