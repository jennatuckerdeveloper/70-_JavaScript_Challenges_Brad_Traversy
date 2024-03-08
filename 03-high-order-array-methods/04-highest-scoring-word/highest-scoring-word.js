const highestScoringWord = (wordStr) => {
	const words = wordStr.split(' ')
	const scores = []
	for (let i in words) {
		scores[i] = words[i]
			.split('')
			.reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
	}
	let highest = 0
	let highestIndex = 0
	for (let i in scores) {
		if (scores[i] > highest) {
			highest = scores[i]
			highestIndex = Number(i)
		}
	}
	return words[highestIndex]
}

module.exports = highestScoringWord
