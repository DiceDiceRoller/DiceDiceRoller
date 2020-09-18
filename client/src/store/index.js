import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerName: 'alieourgh klseg',
    players: []
  },
  mutations: {
    addPlayer (state, playerName) {
      state.playerName = playerName
    },
    allPlayers (state, players) {
      state.players = players
      console.log(state.players)
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
