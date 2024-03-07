const sumOfEvenSquares = (nums) => {
	const evenNums = nums.filter((num) => num % 2 === 0)
	return evenNums.reduce((sum, num) => sum + num ** 2, 0)
}

module.exports = sumOfEvenSquares
