<template>
  <div id="app">
    <MapItem />
  </div>
</template>

<script>
import MapItem from "./components/MapItem.vue";

export default {
  name: "App",
  components: {
    MapItem
  }
};
</script>

<style lang="scss">
@import "./assets/scss/colorVariables.scss";

body {
  margin: 0;
  background-color: $monitos-light-grey;
}

#app {
  position: relative;
  max-width: 1920px;
  max-height: 1080px;
}
</style>
