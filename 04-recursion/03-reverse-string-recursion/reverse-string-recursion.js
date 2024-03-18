const reverseString = (str) => {
	if (str.length === 1) return str
	const lastIndex = str.length - 1
	return str[lastIndex] + reverseString(str.slice(0, lastIndex))
}

module.exports = reverseString
