<template>
<main>
  <div id="app">
<headers/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<router-view />
  </div>
<footers/>
</main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Headers from './components/Hd.vue'
import Footers from './components/Ft.vue
export default {
  name: 'App',
  components: {
    HelloWorld,
Headers,
Footers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
