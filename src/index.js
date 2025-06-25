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

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} rolou um dado ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {

  for (let i = 1; i <= 5; i++) {
    console.log(` 🏁🚨 Rodada ${i} iniciada!`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco sorteado: ${block}`);


    // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block == "RETA") {
      totalTestSkill1 = character1.speed + diceResult1;
      totalTestSkill2 = character2.speed + diceResult2;
      await logRollResult(character1.name, "VELOCIDADE", diceResult1, character1.speed);
      await logRollResult(character2.name, "VELOCIDADE", diceResult2, character2.speed);

    } else if (block == "CURVA") {
      totalTestSkill1 = character1.grid + diceResult1;
      totalTestSkill2 = character2.grid + diceResult2;
      await logRollResult(character1.name, "grid", diceResult1, character1.grid);
      await logRollResult(character2.name, "grid", diceResult2, character2.grid);

    } else if (block == "CONFRONTO") {
      totalTestSkill1 = character1.power + diceResult1;
      totalTestSkill2 = character2.power + diceResult2;
      await logRollResult(character1.name, "power", diceResult1, character1.speed);
      await logRollResult(character2.name, "power", diceResult2, character2.speed);
    }
  }
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.name} e ${player2.name} iniciando... \n`);

  await playRaceEngine(player1, player2);

})();
