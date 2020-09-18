<template>
   <div class="about">
    <h1> All About Dice </h1>
    <Banner></Banner>
    <Board></Board>
    <CurrentScore></CurrentScore>
    <div class="container">
    <DiceContainer></DiceContainer>
    </div>
  </div>
</template>

<script>
import Banner from '../components/diceBanner'
import Board from '../components/diceBoard'
import DiceContainer from '../components/diceContainer'
import CurrentScore from '../components/CurrentScore'
export default {
  name: 'DiceGamble',
  components: {
    Banner,
    Board,
    DiceContainer,
    CurrentScore
  }
}
</script>

<style>

</style>
