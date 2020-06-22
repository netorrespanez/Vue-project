<template>
  <div>
    <h1>{{ content.name }}</h1>
    <p>{{ content.address }}</p>
    <p>{{ content.email }}</p>
  </div>
</template>

<script>
export default {
  name: "WindowItem",
  props: {
    content: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
