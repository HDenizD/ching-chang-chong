<template>
  <div id="app">
    <!-- NAV -->
    <ul class="nav justify-content-center border-bottom">
      <li class="nav-item">
        <span class="nav-link">Select difficulty:</span>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Normal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Kidding</a>
      </li>
    </ul>
    <!-- /NAV -->
    <!-- GAMEFIELD -->
    <GameField></GameField>

    <!-- /GAMEFIELD -->
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
  height: 1200px;
  width: 100vw;
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
