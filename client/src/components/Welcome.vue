<template>
<div class="welcome-container mx-auto">
  <div class="mx-auto ">
    <a class="btn mt-3 mb-2 start-game" @click="moveInside"> START GAME </a>
  </div>
  <div class="animation row">
  <lottie-player class="mx-auto" src="https://assets7.lottiefiles.com/packages/lf20_5GDwcV.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Welcome',
  data: () => {
    return {
      playerName: '',
      isNowReady: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    moveInside () {
      swal('What should we call you?', {
        content: 'input'
      })
        .then((value) => {
          this.$store.commit('addPlayer', value)
          this.$socket.emit('addPlayer', value)
          swal(`Alright ${value}, let's get it!`)
            .then(value => {
              this.$router.push('/lobby')
            })
        })
    }
  },
  sockets: {
    connectedPlayer (value) {
      console.log(value)
    },
    readyToPlay (value) {
      this.$store.dispatch('setReady')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
