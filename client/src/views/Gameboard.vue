<template>
<div>
  {{players}}
  <b-button variant="success" type="button" @click="start">Start</b-button>
  <h3>Now playing: {{active}}</h3>
  <div v-if="active == this.$store.state.playerName">
    <b-button variant="success" type="button" @click="roll">Roll</b-button>
    <p>first dice: {{ data.firstDice }}</p>
    <p>second dice: {{ data.secondDice}}</p>
    <p>pointBuffer: {{data.pointBuffer}}</p>
    <b-button variant="success" type="button" @click="accept">accept</b-button>
  </div>
    <p>totalPoint: {{playerPoints}}</p>
  <b-button variant="success" type="button" @click="nextTurn">next turn</b-button>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      players: this.$store.state.players,
      active: '',
      playerPoints: {},
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
    players (players) {
      this.players = players
    },
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
    // active (newVal, oldVal) {
    //   console.log(newVal)
    // },
    // playerPoints (newVal, oldVal) {
    // }
  }
}
</script>

<style>

</style>
