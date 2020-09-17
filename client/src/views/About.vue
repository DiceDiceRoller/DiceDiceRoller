<template>
   <div class="about">
    <h1> All About Dice </h1>
    <Banner></Banner>
    <Board></Board>
  </div>
</template>

<script>
import Banner from '../components/diceBanner'
import Board from '../components/diceBoard'
export default {
  name: 'DiceGamble',
  components: {
    Banner,
    Board
  }
}
</script>

<style>

</style>
