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

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2) {

}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.name} e ${player2.name} iniciando... \n`);

  await playRaceEngine(player1, player2);

})(); //Função auto invocável
