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

async function getRandomBlock() {
  let random = Math.random();
  let result

  switch (true) {
    case (random < 0.33): result = "RETA"; break;
    case (random < 0.66): result = "CURVA"; break;
    default: result = "CONFRONTO"; break;
  }
  return result;
}

async function playRaceEngine(character1, character2) {

  for (let i = 1; i <= 5; i++) {
    console.log(` 🏁🚨 Rodada ${i} iniciada!`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ${block}`);
  }
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.name} e ${player2.name} iniciando... \n`);

  await playRaceEngine(player1, player2);

})();
