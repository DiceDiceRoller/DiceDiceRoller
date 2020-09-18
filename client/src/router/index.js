import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Lobby from '../views/Lobby.vue'
import Game from '../views/Game.vue'
import Win from '../views/Win.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welocome',
    component: Welcome
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/game',
    name: 'Gameboard',
    component: Game
  },
  {
    path: '/win',
    name: 'win',
    component: Win
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
