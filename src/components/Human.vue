<template>
  <div id="human">
    <div class="text-center">
      <div class="h2 mb-5">Human</div>
      <i class="far" :class="playIcon"></i>
      <div class="h3 mt-4">{{ activeHand }}</div>
      <div class="row select-hand position-relative mt-4">
        <div class="col-md-4">
          <i class="far fa-hand-rock" @click="setHand(hands[0])"></i>
        </div>
        <div class="col-md-4">
          <i class="far fa-hand-paper" @click="setHand(hands[1])"></i>
        </div>
        <div class="col-md-4">
          <i class="far fa-hand-scissors" @click="setHand(hands[2])"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['hands'])
  },
  data: () => {
    return {
      activeHand: 'Choose a Hand',
      playIcon: ''
    }
  },
  methods: {
    setHand (hand) {
      this.activeHand = hand.name
      this.playIcon = hand.icon
      this.$emit('humanChoosedHand', this.activeHand.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
#human .far {
  transform: rotate(90deg);
}
</style>
