const changeTurn = (players, turnCounter) => {
  if (turnCounter != players.length - 1) {
    turnCounter += 1
  } else {
    turnCounter = 0
  }
  return turnCounter
}

module.exports = {
  changeTurn
}