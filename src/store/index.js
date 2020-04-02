import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
