<template>
  <div id="app">
    <div class="container">
      <div class="homeBackground">
        <h1>
          Explore swiss railway stations
        </h1>
        <p>
          An interactive map that let you explore the dense network of railway
          stations in Switzerland
        </p>
      </div>
      <div class="headerBackground"></div>
    </div>

    <MapItem class="prueba" />
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
@import "./assets/scss/fontsVariables.scss";

body {
  margin: 0;
  background-color: $monitos-light-grey;
}

#app {
  position: absolute;
  //position: relative;
  max-width: 1920px;
  max-height: 1080px;
}

.container {
  text-align: center;
}

.homeBackground {
  position: relative;
  height: 768px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  background-image: url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/01/16/swiss-federal-railways.jpg?w968);

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(51, 51, 51, 0.87);

    content: "";
  }

  h1 {
    position: absolute;
    top: 7.5rem;
    left: 50%;
    height: 9.375rem;
    width: 40rem;

    color: #ffffff;
    transform: translate(-50%, -50%);

    font-family: "Raleway", sans-serif;
    font-size: 4rem;
    text-align: center;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
  }

  p {
    position: absolute;
    top: 19.125rem;
    left: 50%;
    width: 46.125rem;
    height: 3.4375rem;
    font-weight: bolder;

    font-family: $font-subtitle;
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 0.075rem;
    text-transform: uppercase;

    color: #ffffff;
    transform: translate(-50%, -50%);
  }
}

.headerBackground {
  height: 5.6875rem;
  width: 100%;
  background-color: $monitos-red;
}

.prueba {
  position: relative;
  margin: 0 100px;
}
</style>
