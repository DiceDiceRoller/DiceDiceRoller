<template>
  <div class="home">
        <b-form>
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" @click.prevent="addPlayer">Submit</b-button>
    </b-form>
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
      this.$router.push('/about')
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
