const rollDice = function(numDice) {
  const results = [];

  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; 
    results.push(roll);
  }

  return results;
};

const numDice = Number(process.argv[2]); 

if (isNaN(numDice) || numDice <= 0) {
  console.log('Please provide a valid positive number of dice to roll.');
} else {
  const diceRolls = rollDice(numDice);
  console.log(`Rolled ${numDice} dice: ${diceRolls.join(', ')}`);
}