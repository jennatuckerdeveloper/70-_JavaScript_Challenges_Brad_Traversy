// This is my original solution.
/*  
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
*/

// There is a math version of a solution important to computer science.
// https://www.reddit.com/r/mathematics/comments/v3tgpx/dont_understand_why_n_n_1_2/

const findMissingNumber = (nums) => {
	if (!nums) return
	if (!nums.length) return 1
	const foundSum = nums.reduce((sum, num) => sum + num, 0)
	const sequential = nums.sort((a, b) => a - b)
	const n = sequential[sequential.length - 1]
	const sequentialSum = (n * (n + 1)) / 2
	return sequentialSum - foundSum
}

module.exports = findMissingNumber
