<template>
  <div class="dice-container my-5 row p-3">
    <div class="box ml-1 wobble-hor-top" @click="$event.target.classList.toggle('wobble-hor-top')">
    </div>
  </div>
</template>

<script>
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
  methods: {
  }
}
</script>

<style>

</style>
