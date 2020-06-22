<template>
  <div class="card-container" v-on:click="$emit('selected', card.recordid)">
    <div class="text-section">
      <p>{{ card.name }}</p>
      <p>{{ card.address }}</p>
    </div>

    <div class="extra-info-section">
      <div class="icon-section"></div>
      <p>{{ card.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    icons: Object,
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/colorVariables.scss";
@import "../assets/scss/fontsVariables.scss";

.card-container {
  display: flex;
  height: 160px;
  margin: 24px 0px;

  font-family: $font-card-info;
  font-size: 17px;

  border: 1px solid $monitos-card-border;
  background-color: #ffffff;
}

.icon-section {
  display: flex;
  justify-content: flex-end;
  height: 34.61px;
  width: 155.38px;
}

.text-section {
  width: 643px;
  padding-left: 40px;
  padding-right: 180px;

  p:first-child {
    font-weight: bold;
    font-size: 34px;
  }

  p:last-child {
    font-size: 22px;
    color: $monitos-card-typo;
  }
}

.extra-info-section {
  padding-top: 44.47px;
  p {
    padding-top: 14.92px;
    color: $monitos-card-typo;
  }
}
</style>
