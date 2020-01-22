<template>
  <div id="human">
    <div class="text-center">
      <div class="h2 mb-5">Human</div>
      <i class="play-hand far fa-hand-rock"></i>
      <div class="h3 mt-4">{{ activeHand }}</div>
      <div class="row select-hand mt-4">
        <div class="col-md-4">
          <i class="far fa-hand-rock" @click="setHand(hands[0].hand)"></i>
        </div>
        <div class="col-md-4">
          <i class="far fa-hand-paper" @click="setHand(hands[1].hand)"></i>
        </div>
        <div class="col-md-4">
          <i class="far fa-hand-scissors" @click="setHand(hands[2].hand)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeHand: 'Choose a Hand',
      hands: [
        {
          hand: 'Rock',
          strength: 'scissor',
          weakness: 'paper'
        },
        {
          hand: 'Paper',
          strength: 'rock',
          weakness: 'scissor'
        },
        {
          hand: 'Scissor',
          strength: 'paper',
          weakness: 'rock'
        }
      ]
    }
  },
  methods: {
    setHand (hand) {
      console.log(hand)
      this.activeHand = hand
    }
  }
}
</script>

<style lang="scss">
#human .far {
  transform: rotate(90deg);
}
</style>
