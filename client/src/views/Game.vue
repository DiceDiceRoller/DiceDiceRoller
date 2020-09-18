<template>
   <div class="about">
    <Banner></Banner>
    <Player
      :players="players"
      :playerPoints="playerPoints"
    ></Player>
    <CurrentScore></CurrentScore>
    <div class="container">
    <DiceContainer></DiceContainer>
    <ChatBox></ChatBox>
    </div>
  </div>
</template>

<script>
import Banner from '../components/diceBanner'
import Player from '../components/playerCards'
import DiceContainer from '../components/diceContainer'
import CurrentScore from '../components/CurrentScore'
import ChatBox from '../components/chatBox'
export default {
  name: 'DiceGamble',
  components: {
    Banner,
    Player,
    DiceContainer,
    CurrentScore,
    ChatBox
  },
  data: function () {
    return {
      active: '',
      playerPoints: {
        qwe: 33
      },
      data: {
        rollCounter: 0,
        firstDice: 0,
        secondDice: 0,
        pointBuffer: 0
      }
    }
  },
  methods: {
    roll () {
      this.$socket.emit('roll')
    },
    start () {
      this.$socket.emit('start')
    },
    nextTurn () {
      this.$socket.emit('nextTurn')
    },
    accept () {
      this.$socket.emit('accept', { player: this.active, point: this.data.pointBuffer })
      this.data.pointBuffer = 0
    }
  },
  sockets: {
    roll (data) {
      this.data = data
    },
    setActive (name) {
      this.active = name
    },
    setPoint (points) {
      this.playerPoints = points
    }
  },
  watch: {
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style>

</style>
