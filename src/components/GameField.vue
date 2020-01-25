<template>
  <div id="game-field">
    <div class="row">
      <div class="col-md-5 pt-5">
        <div class="h2 text-center">Score: {{ gameData.human.score }}</div>
        <Human @humanChoosedHand="humanHand($event)"></Human>
      </div>
      <div class="col-md-2">
        <div class="h2 msg position-relative text-center" v-if="playMsg.show">{{ playMsg.msg }}</div>
      </div>
      <div class="col-md-5 pt-5">
        <div class="h2 text-center">Score: {{ gameData.computer.score }}</div>
        <Computer ref="computer" @computerChoosedHand="computerHand($event)"></Computer>
      </div>
    </div>
  </div>
</template>

<script>
import Human from './Human.vue'
import Computer from './Computer.vue'
export default {
  data: () => {
    return {
      playMsg: {
        msg: '',
        show: false
      },
      gameData: {
        human: {
          activeHand: '',
          score: 0
        },
        computer: {
          activeHand: '',
          score: 0
        }
      }
    }
  },
  components: {
    Human,
    Computer
  },
  methods: {
    humanHand (payload) {
      this.playMsg.show = true
      this.gameData.human.activeHand = payload
      this.$refs.computer.setRandomHand()
    },
    computerHand (payload) {
      this.gameData.computer.activeHand = payload
      this.winLogic(
        this.gameData.human.activeHand,
        this.gameData.computer.activeHand
      )
    },
    winLogic (humanHand, computerHand) {
      if (humanHand === computerHand) {
        this.winMsg('Draw!')
      } else if (humanHand === 'paper' && computerHand === 'rock') {
        this.winMsg('You Win!')
        this.gameData.human.score += 1
      } else if (humanHand === 'rock' && computerHand === 'scissor') {
        this.winMsg('You Win!')
        this.gameData.human.score += 1
      } else if (humanHand === 'scissor' && computerHand === 'paper') {
        this.winMsg('You Win!')
        this.gameData.human.score += 1
      } else if (humanHand === 'scissor' && computerHand === 'rock') {
        this.winMsg('You Lose!')
        this.gameData.computer.score += 1
      } else if (humanHand === 'rock' && computerHand === 'paper') {
        this.winMsg('You Lose!')
        this.gameData.computer.score += 1
      } else if (humanHand === 'paper' && computerHand === 'scissor') {
        this.winMsg('You Lose!')
        this.gameData.computer.score += 1
      }
    },
    winMsg (msg) {
      this.playMsg.msg = msg
    }
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
    .msg {
      top: 50%;
    }
    .select-hand {
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
}
</style>
