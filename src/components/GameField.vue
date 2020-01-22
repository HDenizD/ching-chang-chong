<template>
  <div id="game-field">
    <button class="btn btn-primary">Start</button>

    <div class="row">
      <div class="col-md-6 pt-5">
        <Human></Human>
      </div>
      <div class="col-md-6 pt-5">
        <Computer></Computer>
      </div>
    </div>
  </div>
</template>

<script>
import Human from './Human.vue'
import Computer from './Computer.vue'
export default {
  components: {
    Human,
    Computer
  },
  props: {
    difficulty: String
  }
}
</script>

<style lang="scss">
#game-field {
  .far {
    cursor: pointer;
    font-size: 300px;
    width: 350px;
    height: 350px;
  }

  .row {
    margin: 0 0 0 0;

    .select-hand {
      position: relative;
      left: 60px;
      .far {
        font-size: 80px;
        height: 0;
        width: 0;
      }
      .far:hover {
        color: $orange;
      }
    }
  }

  .btn-primary {
    background-color: $orange;
    border-color: $orange;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
  }
  .btn-primary:focus {
    background-color: $orange;
    border-color: $black !important;
    box-shadow: 0 0 0 0.2rem rgba(255, 51, 0, 0.644);
  }
}
</style>
