const player1 = {
  name: 'Mario',
  speed: 4,
  grid: 3,
  power: 3,
  points: 0,
}

const player2 = {
  name: 'Luigi',
  speed: 3,
  grid: 4,
  power: 4,
  points: 0,
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
