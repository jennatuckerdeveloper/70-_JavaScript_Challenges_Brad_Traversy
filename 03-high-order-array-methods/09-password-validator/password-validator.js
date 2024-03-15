// I wonder if using .split and .some is implied to be more efficient here somehow.

const validatePassword = (str) => {
	const length8OrMore = str.length > 7
	const includesLower = str !== str.toUpperCase()
	const includesUpper = str !== str.toLowerCase()
	const includesDigit = /[0-9]/.test(str)
	return length8OrMore && includesLower && includesUpper && includesDigit
}

module.exports = validatePassword
