<template>
    <div>
        <div class="imgss">
            <h3 v-if="start" @click="startGame">Start game</h3>
            <img :src="imgs" :style="st" @click="getRandom">
        </div>

        <div class="content" v-if="!start">
            <h2>Player 1 Score : {{firstUser}}</h2>
            <h2>Player 2 Score : {{secondUser}} </h2>
        </div>

        <button @click="getRandom" v-if="!start" class="btn">Roll Dice</button>
        <button @click="resetGame"  v-if="!start" >Restart</button>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      start: true,
      imgs: '',
      firstUser: 0,
      secondUser: 0,
      st: ''
    }
  },
  methods: {
    getRandom () {
      if (this.secondUser >= 50) {
        alert('Sytem won game' + ' ' + this.secondUser)
        this.secondUser = 0
        this.firstUser = 0
        this.resetGame()
        return
      }
      if (this.firstUser >= 50) {
        alert('You won game' + ' ' + this.firstUser)
        this.firstUser = 0
        this.secondUser = 0
        this.resetGame()
        return
      }
      const num = Math.floor(Math.random() * 6) + 1
      switch (num) {
        case 1:
          this.imgs = '../assets/dice-1.png'
          this.st = {
            border: '4px doubled #1abc9c'
          }
          this.firstUser += num
          break
        case 2:
          this.imgs = '../assets/dice-2.png'
          this.firstUser += num
          this.st = {
            border: '4px dotted #2ecc71'
          }
          break
        case 3:
          this.imgs = '../assets/dice-3.png'
          this.firstUser += num
          this.st = {
            border: '4px dotted #3498db'
          }
          break
        case 4:
          this.imgs = '../assets/dice-4.png'
          this.firstUser += num
          this.st = {
            border: '4px dotted rgba(239, 87, 119,1.0)'
          }
          break
        case 5:
          this.imgs = '../assets/dice-5.png'
          this.firstUser += num
          this.st = {
            border: '4px dotted #e74c3c'
          }
          break
        case 6:
          this.imgs = '../assets/dice-6.png'
          this.firstUser += num
          this.st = {
            border: '4px dotted #ecf0f1'
          }
          break
      }
      this.SytemRandom()
    },
    SytemRandom () {
      const num = Math.floor(Math.random() * 6) + 1
      switch (num) {
        case 1:

          this.secondUser += num
          break
        case 2:

          this.secondUser += num

          break
        case 3:

          this.secondUser += num

          break
        case 4:

          this.secondUser += num

          break
        case 5:

          this.secondUser += num

          break
        case 6:

          this.secondUser += num

          break
      }
    },
    resetGame () {
      this.secondUser = 0
      this.user = 0
      this.imgs = null
      this.st = null
      this.start = true
    },
    startGame () {
      this.start = false
      this.secondUser = 0
      this.user = 0
      this.getRandom()
    }
  },
  created () {
    this.resetGame()
  }
}
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
button {
  padding: 0.7rem;
  background-color: rgb(9, 10, 5);
  border-radius: 11px;
  font-size: 1rem;
  color: rgb(219, 221, 223);
  outline: none;
  box-shadow: inset 20px 2px 20px 0px #a51717;
  transition: all 0.3s;
  margin-right: 1rem;
}
button:hover {
  box-shadow: inset 20px 2px 20px 0px transparent;
  background-color: #a51717;
}
.default h1{

   color: rgb(221, 202, 32);
   text-align: left;
}
.second {
  color: white;
 background-image: linear-gradient(black,#907f4f);
  padding: 2rem;
  position: relative;
  font-family: cursive;
  height: 100vh;
  text-transform: capitalize;
}
.second h1{
  text-align: right;
   color:yellow;
}
.imgss {
  box-shadow: -20px 10px 2px 0px rgb(219, 221, 223);
  border: 2.9px double rgba(243, 241, 241, 0.712);
  border-radius: 20px;
  padding: 1rem 1rem 1rem 1rem;
  backface-visibility: hidden;
  background-color: rgba(5, 12, 10, 0.57);
  width: 10rem;
  height: 170px;
  margin: 0 auto;
  transition: all 0.3s;
  z-index: 100;
  cursor: pointer;
}
img {
  border-radius: 20px;
  box-shadow: 2px 10px 10px black;
  transition: all 0.3s;
}
.imgss:hover {
  box-shadow: none;
}
.imgss:hover > img {
  box-shadow: 0px 7px 10px #fff;
  padding: 2px;
}
.score {
  background-color: #dfff;
  color: rgb(54, 48, 48);
  width: fit-content;
  padding: 1rem;
  text-align: center;
  margin:2rem auto;
}
.content {
  margin-top: 5rem;
}
h3 {
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.3s;
}
h3:hover {
  color: rgb(143, 151, 153);
}
</style>
