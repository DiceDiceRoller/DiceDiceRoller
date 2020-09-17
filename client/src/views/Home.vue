<template>
<div class="container"></div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Home',
  created () {
    swal('RULES:\n\n- Each player has right to play as many turns as he/she likes \n\n- Points will be firstly recorded as "current points"\n\n- When player decides to end his/her turn, he/she will now hold that current points into "accumulated points"\n\n- Whenever number 1 is drawn, current point will be cleared and the other player will have his/her turn\n\n- IF number 6 are drawn in both dices, current and accumulated ponits will be set back to 0.\n\n\n HAPPY PLAYING!')
  }
}
</script>

<style>

</style>
