<template>
  <div class="dice-container my-5 row p-3">
    <div class="container justify-content-center">
      <img :src="`./assets/dice_${firstDice}.png`" width="25%" alt="...">
      <img :src="`./assets/dice_${secondDice}.png`" width="25%" alt="...">
    </div>
  </div>
</template>

<script>
// import Dices from './Dice'
export default {
  name: 'diceContainer',
  props: ['firstDice', 'secondDice'],
  data () {
    return {
      source_one: `../assets/dice_${this.numOne}.png`,
      source_two: `../assets/dice_${this.numTwo}.png`,
      numOne: null,
      numTwo: null
    }
  },
  components: {
    // Dices
  },
  methods: {
  }
}
</script>

<style>

</style>
