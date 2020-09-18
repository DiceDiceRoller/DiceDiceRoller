<template>
  <div class="container-player d-flex ">
    <div class="mx-auto row">
      <div class="player-one mx-2">
        <div>
        <h2 class="player-info">{{ players[0] }}</h2>
        <h3 class="player-info mt-5">Player Score</h3>
        </div>
        <div class="score my-auto">
          {{ playerPoints[players[0]] }}
        </div>

      </div>
      <div class="player-two mx-2">
        <div>
        <h2 class="player-info">{{ players[1] }}</h2>
        <h3 class="player-info mt-5">Player Score</h3>
        </div>
        <div class="score my-auto">
          {{ playerPoints[players[1]] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['players', 'playerPoints']
}
</script>

<style>

</style>
