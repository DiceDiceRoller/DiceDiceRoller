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
export default {
  name: 'Welcome',
  props: {
    msg: String
  },
  methods: {
    moveInside(){
      this.$router.push('/home')
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
