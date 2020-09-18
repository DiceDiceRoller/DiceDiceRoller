<template>
  <div class="dice-container my-5 row p-3">
    <div class="box ml-1 wobble-hor-top" @click="$event.target.classList.toggle('wobble-hor-top')">
    </div>
    <Dices></Dices>
  </div>
</template>

<script>
import Dices from './Dice'
export default {
  name: 'diceContainer',
  data () {
    return {
      source_one: `../assets/dice_${this.numOne}.png`,
      source_two: `../assets/dice_${this.numTwo}.png`,
      numOne: null,
      numTwo: null
    }
  },
  components: {
    Dices
  },
  methods: {
  }
}
</script>

<style>

</style>
