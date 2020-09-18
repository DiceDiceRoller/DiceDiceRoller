<template>
  <div class="home">
    <Welcome></Welcome>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  },
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    addPlayer () {
      this.$store.commit('addPlayer', this.name)
      this.$socket.emit('addPlayer', this.name)
      this.$router.push('/lobby')
    }
  },
  sockets: {
    players (players) {
      console.log(this.$store.state.players)
      this.$store.commit('allPlayers', players)
    }
  }
}
</script>
