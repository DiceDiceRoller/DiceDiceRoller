import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isReady: false,
    playerName: 'alieourgh klseg',
    players: []
  },
  mutations: {
    setReady (state, value) {
      state.isReady = value
    },
    addPlayer (state, playerName) {
      state.playerName = playerName
    },
    allPlayers (state, players) {
      state.players = players
    }
  },
  actions: {
    setReady (context, value) {
      context.commit('setReady', value)
      console.log('udah ready bosku')
    }
  },
  modules: {
  }
})
