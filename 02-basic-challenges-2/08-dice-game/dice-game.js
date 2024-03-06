const diceGameSimulation = (numSimulations) => {
  
	const gameRules = (rollSum) => {
		if ([7, 11].includes(rollSum)) return 'win'
		else if ([2, 3, 12].includes(rollSum)) return 'lose'
		else return 'roll again'
	}

	const randomNum1To6 = () => Math.floor(Math.random() * (6 - 1 + 1) + 1)

	const singleDiceGame = () => {
		const dice1 = randomNum1To6()
		const dice2 = randomNum1To6()
		const sum = dice1 + dice2
		const result = gameRules(sum)

		return {
			dice1,
			dice2,
			sum,
			result
		}
	}

	const diceRolls = []

	for (let i = 0; i < numSimulations; i++) {
		diceRolls.push(singleDiceGame())
	}

	return diceRolls
}

module.exports = diceGameSimulation
