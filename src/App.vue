<template>
<main>
  <div id="app">
      <headers></headers>
      <router-view></router-view>
      <!-- SECTION -->
    </div>
    <my-footer></my-footer>
    </main>
</template>

<script>
import Headers from "./components/Hd.vue";
import MyFooter from "./components/Ft.vue";

export default {
  name: "App",
  components: { Headers, MyFooter },

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
