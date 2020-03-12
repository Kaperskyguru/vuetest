<template>
  <div>
    <div id="app">
      <headers></headers>
      <router-view></router-view>
      <!-- SECTION -->
    </div>
    <footers></footers>
  </div>
</template>


<script>
import Headers from "./components/Hd.vue";
import Footers from "./components/Ft.vue";
export default {
  name: "App",
  components: { Hd, Ft },

};
</script>

<style>
</style>
