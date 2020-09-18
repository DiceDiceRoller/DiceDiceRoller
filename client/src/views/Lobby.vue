<template>
  <div class="container">
    <!-- <Dices></Dices> -->
    <div>
    <WaitingRoom v-if="!this.$store.state.isReady"></WaitingRoom>
    </div>
    <div>
      <!-- <diceContainer></diceContainer> -->
    </div>
  </div>
</template>

<script>
// import Swal from 'sweetalert2'
import swal from 'sweetalert'
// import Dices from '../components/Dice'
import WaitingRoom from '../components/waitingRoom'
// import diceContainer from '../components/diceContainer'

export default {
  name: 'Home',
  components: {
    Dices,
    WaitingRoom
    // diceContainer
    // Dices
  },
  created () {
    swal('RULES:\n\n- Each player has right to play as many turns as he/she likes \n\n- Points will be firstly recorded as "current points"\n\n- When player decides to end his/her turn, he/she will now hold that current points into "accumulated points"\n\n- Whenever number 1 is drawn, current point will be cleared and the other player will have his/her turn\n\n- IF number 6 are drawn in both dices, current and accumulated ponits will be set back to 0.\n\n\n HAPPY PLAYING!')
  }
}
</script>

<style>

</style>
