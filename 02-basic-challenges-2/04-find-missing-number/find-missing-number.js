const findMissingNumber = (nums) => {
	if (!nums) return
	if (!nums.length) return 1

	const sortedNums = nums.sort((a, b) => a - b)
	let missingNum

	sortedNums.slice(1).forEach((num, i) => {
		if (sortedNums[i] !== num - 1) {
			missingNum = num - 1
		}
	})

	return missingNum
}

// Math version!  I did not think of using a formula.
// This might be a good optimization.
// Oh, this is to teach a CS concept.
// So I will start here tomorrow!
// https://www.reddit.com/r/mathematics/comments/v3tgpx/dont_understand_why_n_n_1_2/
// const findMissingNumber = (nums) => {
//   const sum = nums.reduce((sum, num) => sum + num, 0)

// }

module.exports = findMissingNumber
