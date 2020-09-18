<template>
    <div>
        <!-- <div class="content" v-if="!start">
            <h2>Player 1 Score : {{firstUser}}</h2>
            <h2>Player 2 Score : {{secondUser}} </h2>
        </div> -->
        <div class="content">
          <button @click="getRandom" v-if="!start" class="btn">Roll Dice</button>
          <button @click="resetGame"  v-if="!start" >Restart</button>
        </div>

  </div>
</template>

<script>
import DiceOne from '../assets/dice_1.png'
import DiceTwo from '../assets/dice_2.png'
import DiceThree from '../assets/dice_3.png'
import DaduFour from '../assets/dice_4.png'
import DaduFive from '../assets/dice_5.png'
import DaduSix from '../assets/dice_6.png'
export default {
  name: 'app',
  data () {
    return {
      start: true,
      image: '',
      // firstUser: 0,
      // secondUser: 0,
      st: '',
      dice1: DiceOne,
      dice2: DiceTwo,
      dice3: DiceThree,
      dice4: DaduFour,
      dice5: DaduFive,
      dice6: DaduSix
    }
  },
  methods: {
    getRandom () {
      if (this.secondUser >= 50) {
        alert('Another player won game' + ' ' + this.secondUser)
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
          this.image = DiceOne
          this.st = {
            border: '4px doubled #1abc9c'
          }
          this.firstUser += num
          break
        case 2:
          this.image = DiceTwo
          this.firstUser += num
          this.st = {
            border: '4px #2ecc71'
          }
          break
        case 3:
          this.image = DiceThree
          this.firstUser += num
          this.st = {
            border: '4px #3498db'
          }
          break
        case 4:
          this.image = DaduFour
          this.firstUser += num
          this.st = {
            border: '4px rgba(239, 87, 119,1.0)'
          }
          break
        case 5:
          this.image = DaduFive
          this.firstUser += num
          this.st = {
            border: '4px #e74c3c'
          }
          break
        case 6:
          this.image = DaduSix
          this.firstUser += num
          this.st = {
            border: '4px #ecf0f1'
          }
          break
      }
      this.diceSecondUser()
    },
    diceSecondUser () {
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
      this.firstUser = 0
      this.image = null
      this.st = null
      this.start = true
    },
    startGame () {
      this.start = false
      this.secondUser = 0
      this.firstUser = 0
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
.imgss {
  box-shadow: 5px 3px 2px 0px rgb(219, 221, 223);
  border: 2.9px double rgba(243, 241, 241, 0.712);
  border-radius: 20px;
  padding: 1rem 1rem 1rem 1rem;
  backface-visibility: hidden;
  background-color: rgba(5, 12, 10, 0.57);
  width: 10rem;
  height: 170px;
  margin: 0 auto;
  transition: all 0.3s;
  cursor: pointer;
}
img {
  border-radius: 20px;
  box-shadow: 2px 10px 10px black;
  transition: all 0.3s;
  width: 10rem;
  height: 170px;
  margin: 0 auto;
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
  margin-top: 13rem;
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
