<template>
  <div id="computer">
    <div class="text-center">
      <div class="h2 mb-5">Computer</div>
      <i class="far" :class="playIcon"></i>
      <div class="hand h3 mt-4">{{ activeHand }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeHand: 'Ready when you are...',
      playIcon: '',
      hands: [
        {
          name: 'Rock',
          icon: 'fa-hand-rock'
        },
        {
          name: 'Paper',
          icon: 'fa-hand-paper'
        },
        {
          name: 'Scissor',
          icon: 'fa-hand-scissors'
        }
      ]
    }
  },
  methods: {
    setRandomHand () {
      let choosedHand = Math.round(Math.random() * 2)
      this.activeHand = this.hands[choosedHand].name
      this.playIcon = this.hands[choosedHand].icon
      this.$emit('computerChoosedHand', this.activeHand.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
#computer .far {
  transform: rotate(-90deg);
}
</style>
