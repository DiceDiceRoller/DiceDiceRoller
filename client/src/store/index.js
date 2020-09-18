import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isReady: false
  },
  mutations: {
    setReady (state, value) {
      state.isReady = value
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
