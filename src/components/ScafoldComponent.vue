<template>
  <div class="mega-contenedor">
    <div class="container">
      <div class="homeBackground">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
      <div class="headerBackground"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScafoldComponent",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/colorVariables.scss";
@import "../assets/scss/fontsVariables.scss";

.container {
  position: relative;
  height: 859px;
  position: relative;
  text-align: center;
}

.homeBackground {
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
  position: absolute;
  height: 5.6875rem;
  width: 100%;
  background-color: $monitos-red;
}
</style>
