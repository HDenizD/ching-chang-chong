<template>
  <div id="game-field">
    <button class="btn btn-primary">Start</button>
    <div class="row">
      <div class="col-md-6 pt-5">
        <div class="human text-center">
          <div class="h1">
            <u>Human</u>
          </div>
          <i class="far fa-hand-rock"></i>
          <div class="hand h3 mt-4">Paper</div>
        </div>
      </div>

      <div class="col-md-6 pt-5">
        <div class="computer text-center">
          <div class="h1">
            <u>Computer</u>
          </div>
          <i class="far fa-hand-paper"></i>
          <div class="hand h3 mt-4">Paper</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#game-field {
  i {
    font-size: 300px;
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
