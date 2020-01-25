<template>
  <div id="app">
    <GameField></GameField>
  </div>
</template>

<script>
import GameField from './components/GameField.vue'
export default {
  components: {
    GameField
  }
}
</script>

<style lang="scss">
#app {
  background-color: $dark;
  padding: 0 25%;
  height: 100vh;
  // width: 100%;
  color: $white;
  a {
    color: $white;
  }
  a:hover {
    color: $orange;
  }
  li {
    cursor: pointer;
  }
  .border-bottom {
    border-color: $black !important;
  }
}
</style>
